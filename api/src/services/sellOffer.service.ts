import { AuthRequest } from '../middleware/auth'
import { prisma } from '../config/prisma'
import { StorageService } from './storage.service'
import { EmailService } from './email.service'
import { notifyInterestedCompanies } from '../utils/sms'
import fs from 'fs/promises'
import formidable from 'formidable'

const storage = new StorageService()
const emailService = new EmailService()

export const createSellOfferService = async (req: AuthRequest) => {
  if (!req.user) throw new Error('Unauthorized')

  const form = formidable({ maxFiles: 10, maxFileSize: 10 * 1024 * 1024 })
  const [fields, files] = await form.parse(req)

  const photoUrls = await Promise.all(
    Object.values(files).flat().map(async (file) => {
      if (!file) throw new Error('File is undefined')
      const buffer = await fs.readFile(file.filepath)
      return storage.uploadFile({
        buffer,
        originalname: file.originalFilename || 'unnamed',
        mimetype: file.mimetype || 'application/octet-stream',
      })
    })
  )

  const variantId = parseInt(fields.variantId?.[0] || '0')

  const variant = await prisma.productVariant.findUnique({
    where: { id: variantId },
    include: { product: true },
  })

  if (!variant) {
    throw new Error('Invalid variant selected')
  }

  // -----------------------
  // Ovde proveravamo tip korisnika
  // -----------------------

  const isCompanyUser = !!req.user.companyId

  if (!isCompanyUser && req.user.userType !== 'individual') {
    throw new Error('Invalid user type')
  }

  const sellOffer = await prisma.sellOffer.create({
    data: {
      variantId,
      status: fields.status?.[0] || 'Aktivan',
      dateFrom: new Date(fields.dateFrom?.[0] || Date.now()),
      dateTo: fields.dateTo?.[0] ? new Date(fields.dateTo[0]) : null,
      description: fields.description?.[0] || '',
      city: fields.city?.[0] || '',
      price: parseFloat(fields.price?.[0] || '0'),
      quantity: parseFloat(fields.quantity?.[0] || '0'),
      photos: photoUrls,
      companyId: isCompanyUser ? req.user.companyId : null,
      userId: isCompanyUser ? null : req.user.userId,  // Ako nije kompanija, vezujemo userId
      administrativeStatus: 'PENDING',
    },
  })

  // -----------------------
  // Notifikacije zavisno od tipa korisnika
  // -----------------------

  if (isCompanyUser) {
    const company = await prisma.company.findUnique({
      where: { id: req.user.companyId },
    })

    if (company) {
      await notifyInterestedCompanies(variant.product.name, {
        quantity: parseFloat(fields.quantity?.[0] || '0'),
        price: fields.price?.[0] || '0',
        city: fields.city?.[0] || '',
        companyName: company.name,
        companyId: company.id,
      })

      await prisma.notification.create({
        data: {
          title: `Nova ponuda za prodaju - ${variant.product.name} ${variant.name}`,
          description: `Ponuđeno ${fields.quantity?.[0]} kg po ceni od ${fields.price?.[0]} €/kg`,
          type: 'product_offer',
          link: `/sell-offers/${sellOffer.id}`,
          companyId: company.id,
        },
      })

      await emailService.sendAdminNotification(
        'Nova Prodajna Ponuda',
        `
          <p>Kreirana je nova prodajna ponuda:</p>
          <ul>
            <li>Proizvod: ${variant.product.name} ${variant.name}</li>
            <li>Količina: ${fields.quantity?.[0]} kg</li>
            <li>Cena: ${fields.price?.[0]} €/kg</li>
            <li>Lokacija: ${fields.city?.[0]}</li>
            <li>Kompanija: ${company.name}</li>
          </ul>
        `
      )
    }
  } else {
    // fizičko lice: možemo samo da kreiramo osnovnu notifikaciju ako želiš
    await emailService.sendAdminNotification(
      'Nova Prodajna Ponuda (Fizičko lice)',
      `
        <p>Kreirana je nova prodajna ponuda od fizičkog lica:</p>
        <ul>
          <li>Proizvod: ${variant.product.name} ${variant.name}</li>
          <li>Količina: ${fields.quantity?.[0]} kg</li>
          <li>Cena: ${fields.price?.[0]} €/kg</li>
          <li>Lokacija: ${fields.city?.[0]}</li>
          <li>User ID: ${req.user.userId}</li>
        </ul>
      `
    )
  }

  return sellOffer
}


export const getAllSellOffersService = async () => {
    return await prisma.sellOffer.findMany({
      include: {
        company: true,
        variant: {
          include: {
            product: true,
          },
        },
      },
      orderBy: {
        id: 'desc',
      },
    })
  }
  
export const getSellOfferByIdService = async (id: number) => {
return await prisma.sellOffer.findUnique({
    where: { id },
    include: {
    company: true,
    bids: {
        include: {
        company: true,
        },
    },
    },
})
}

export const createSellBidService = async (
    offerId: number,
    price: number,
    companyId: number
  ) => {
    const bid = await prisma.sellOfferBid.create({
      data: {
        sellOfferId: offerId,
        companyId,
        price,
        status: 'PENDING',
      },
    })
  
    await new EmailService().sendAdminNotification(
      'Nova Ponuda za Prodajni Oglas',
      `
        <p>Kreirana je nova ponuda za prodajni oglas #${offerId}:</p>
        <ul>
          <li>Ponuđena cena: ${price} €/kg</li>
          <li>Kompanija ID: ${companyId}</li>
        </ul>
      `
    )
  
    return bid
  }
  
  