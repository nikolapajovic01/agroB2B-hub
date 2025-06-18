import { Request, Response } from 'express';
import { prisma } from '../config/prisma';
import { AuthRequest } from '../middleware/auth';

export const addProductInterest = async (req: Request, res: Response) => {
  const { companyId, productId } = req.body;

  if (!companyId || !productId) {
    return res.status(400).json({ error: 'companyId i productId su obavezni.' });
  }

  try {
    // Proveri da li već postoji interesovanje
    const existing = await prisma.productInterest.findFirst({
      where: { companyId, productId, status: 'active' },
    });
    if (existing) {
      return res.status(409).json({ error: 'Već postoji interesovanje za ovaj proizvod.' });
    }

    const interest = await prisma.productInterest.create({
      data: {
        companyId,
        productId,
        type: 'subscription',
        status: 'active',
      },
    });
    res.status(201).json(interest);
  } catch (error) {
    console.error('Greška pri dodavanju interesovanja:', error);
    res.status(500).json({ error: 'Greška na serveru.' });
  }
};

// GET /api/product-interests/company/:companyId - sva interesovanja za kompaniju
export const getProductInterestsByCompany = async (req: AuthRequest, res: Response) => {
  try {
    const { companyId } = req.params;
    const userCompanyId = req.user?.companyId;

    if (!userCompanyId) {
      return res.status(400).json({ error: 'Korisnik mora biti povezan sa kompanijom.' });
    }

    // Provera da li korisnik pristupa svojoj kompaniji
    if (parseInt(companyId) !== userCompanyId) {
      return res.status(403).json({ error: 'Možete pristupiti samo svojoj kompaniji.' });
    }

    const interests = await prisma.productInterest.findMany({
      where: { companyId: parseInt(companyId) },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            image: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json(interests);
  } catch (error) {
    console.error('Greška pri dobijanju interesovanja:', error);
    res.status(500).json({ error: 'Greška na serveru.' });
  }
};

// GET /api/product-interests/company/:companyId/product/:productId - jedno interesovanje
export const getProductInterestByCompanyAndProduct = async (req: AuthRequest, res: Response) => {
  try {
    const { companyId, productId } = req.params;
    const userCompanyId = req.user?.companyId;

    if (!userCompanyId) {
      return res.status(400).json({ error: 'Korisnik mora biti povezan sa kompanijom.' });
    }

    // Provera da li korisnik pristupa svojoj kompaniji
    if (parseInt(companyId) !== userCompanyId) {
      return res.status(403).json({ error: 'Možete pristupiti samo svojoj kompaniji.' });
    }

    const interest = await prisma.productInterest.findFirst({
      where: { 
        companyId: parseInt(companyId),
        productId: parseInt(productId)
      },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            image: true
          }
        }
      }
    });

    if (!interest) {
      return res.status(404).json({ error: 'Interesovanje nije pronađeno.' });
    }

    res.json(interest);
  } catch (error) {
    console.error('Greška pri dobijanju interesovanja:', error);
    res.status(500).json({ error: 'Greška na serveru.' });
  }
};

// PUT /api/product-interests/company/:companyId/product/:productId/toggle - uključivanje/isključivanje
export const toggleProductInterestByCompanyAndProduct = async (req: AuthRequest, res: Response) => {
  try {
    const { companyId, productId } = req.params;
    const userCompanyId = req.user?.companyId;

    if (!userCompanyId) {
      return res.status(400).json({ error: 'Korisnik mora biti povezan sa kompanijom.' });
    }

    // Provera da li korisnik pristupa svojoj kompaniji
    if (parseInt(companyId) !== userCompanyId) {
      return res.status(403).json({ error: 'Možete pristupiti samo svojoj kompaniji.' });
    }

    // Prvo pronađi interesovanje
    const existingInterest = await prisma.productInterest.findFirst({
      where: { 
        companyId: parseInt(companyId),
        productId: parseInt(productId)
      }
    });

    if (!existingInterest) {
      return res.status(404).json({ error: 'Interesovanje nije pronađeno.' });
    }

    // Promeni status (active <-> inactive)
    const newStatus = existingInterest.status === 'active' ? 'inactive' : 'active';
    
    const updatedInterest = await prisma.productInterest.update({
      where: { id: existingInterest.id },
      data: { status: newStatus },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            image: true
          }
        }
      }
    });

    res.json({
      ...updatedInterest,
      message: `Interesovanje je ${newStatus === 'active' ? 'uključeno' : 'isključeno'}.`
    });
  } catch (error) {
    console.error('Greška pri ažuriranju interesovanja:', error);
    res.status(500).json({ error: 'Greška na serveru.' });
  }
};

// DELETE /api/product-interests/company/:companyId/product/:productId - brisanje interesovanja
export const deleteProductInterestByCompanyAndProduct = async (req: AuthRequest, res: Response) => {
  try {
    const { companyId, productId } = req.params;
    const userCompanyId = req.user?.companyId;

    if (!userCompanyId) {
      return res.status(400).json({ error: 'Korisnik mora biti povezan sa kompanijom.' });
    }

    // Provera da li korisnik pristupa svojoj kompaniji
    if (parseInt(companyId) !== userCompanyId) {
      return res.status(403).json({ error: 'Možete pristupiti samo svojoj kompaniji.' });
    }

    // Prvo pronađi interesovanje
    const existingInterest = await prisma.productInterest.findFirst({
      where: { 
        companyId: parseInt(companyId),
        productId: parseInt(productId)
      }
    });

    if (!existingInterest) {
      return res.status(404).json({ error: 'Interesovanje nije pronađeno.' });
    }

    // Obriši interesovanje
    await prisma.productInterest.delete({
      where: { id: existingInterest.id }
    });

    res.json({ 
      message: 'Interesovanje je uspešno obrisano.',
      deletedInterest: {
        companyId: parseInt(companyId),
        productId: parseInt(productId)
      }
    });
  } catch (error) {
    console.error('Greška pri brisanju interesovanja:', error);
    res.status(500).json({ error: 'Greška na serveru.' });
  }
}; 