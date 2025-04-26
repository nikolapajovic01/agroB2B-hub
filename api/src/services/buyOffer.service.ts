import formidable from 'formidable'
import { AuthRequest } from '../middleware/auth'
import { prisma } from '../config/prisma'
import { EmailService } from './email.service'
import fs from 'fs/promises'
import { StorageService } from './storage.service'

const storage = new StorageService()

const emailService = new EmailService()

export const createBuyOfferService = async (req: AuthRequest) => {
  if (!req.user) {
    throw new Error('Unauthorized')
  }

  const form = formidable({ maxFiles: 10, maxFileSize: 10 * 1024 * 1024 })
  const [fields] = await form.parse(req)

  if (!fields) throw new Error('No form data received')

  const buyOffer = await prisma.buyOffer.create({
    data: {
      variantId: parseInt(fields.variantId?.[0] || '0'),
      status: fields.status?.[0] || 'Aktivan',
      dateFrom: new Date(fields.dateFrom?.[0] || Date.now()),
      dateTo: fields.dateTo?.[0] ? new Date(fields.dateTo[0]) : null,
      description: fields.description?.[0] || null,
      city: fields.city?.[0] || '',
      quantity: fields.quantity?.[0] ? parseFloat(fields.quantity[0]) : null,
      companyId: req.user.companyId,
      administrativeStatus: 'PENDING',
      paymentDetails: fields.paymentDetails?.[0] || '',
    },
  })

  const variant = await prisma.productVariant.findUnique({
    where: { id: parseInt(fields.variantId?.[0] || '0') },
    include: { product: true },
  })

  const notification = await prisma.notification.create({
    data: {
      title: `Nova ponuda za kupovinu - ${variant?.product.name} ${variant?.name}`,
      description: fields.quantity?.[0]
        ? `Potrebno ${fields.quantity[0]} kg`
        : 'Količina nije navedena',
      type: 'buy_offer',
      link: `/buy-offers/${buyOffer.id}`,
      companyId: req.user.companyId,
    },
  })

  await emailService.sendAdminNotification(
    'Nova Kupovna Ponuda',
    `
    <p>Kreirana je nova kupovna ponuda:</p>
    <ul>
      <li>Proizvod: ${variant?.product.name} ${variant?.name}</li>
      <li>Količina: ${fields.quantity?.[0]} kg</li>
      <li>Lokacija: ${fields.city?.[0]}</li>
      <li>Način plaćanja: ${fields.paymentDetails?.[0]}</li>
      <li>Kompanija ID: ${req.user.companyId}</li>
    </ul>
    `
  )

  return buyOffer
}

export const getAllBuyOffersService = async () => {
    return await prisma.buyOffer.findMany({
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
  

  export const getBuyOfferByIdService = async (id: number) => {
    return await prisma.buyOffer.findUnique({
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


export const createBuyBidService = async (req: AuthRequest, offerId: number) => {
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

  const bid = await prisma.buyOfferBid.create({
    data: {
      buyOfferId: offerId,
      companyId: req.user!.companyId,
      price: parseFloat(fields.price?.[0] || '0'),
      photos: photoUrls,
    },
  })

  await new EmailService().sendAdminNotification(
    'Nova Ponuda za Kupovni Oglas',
    `
    <p>Kreirana je nova ponuda za kupovni oglas #${offerId}:</p>
    <ul>
      <li>Ponuđena cena: ${fields.price?.[0]} €/kg</li>
      <li>Broj uploadovanih slika: ${photoUrls.length}</li>
      <li>Kompanija ID: ${req.user!.companyId}</li>
    </ul>
    `
  )

  return bid
}
