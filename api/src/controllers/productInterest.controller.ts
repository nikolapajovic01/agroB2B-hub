import { Request, Response } from 'express';
import { prisma } from '../config/prisma';

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