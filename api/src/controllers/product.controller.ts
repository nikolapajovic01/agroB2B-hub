import { Request, Response } from 'express'
import {
  getProductsOverviewWithMinPrice,
  getProductWithVariants,
} from '../services/product.service'
import { prisma } from '../config/prisma'

export const getProductsOverview = async (req: Request, res: Response) => {
  try {
    const products = await getProductsOverviewWithMinPrice()
    res.json(products)
  } catch (err) {
    console.error('Greška u getProductsOverview:', err)
    res.status(500).json({ error: 'Server error' })
  }
}

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        variants: true,
      },
    })
    res.json(products)
  } catch (err) {
    console.error('Greška u getAllProducts:', err)
    res.status(500).json({ error: 'Server error' })
  }
}

export const getProductById = async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  if (isNaN(id)) {
    return res.status(400).json({ error: 'Neispravan ID proizvoda' })
  }

  try {
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        variants: {
          include: {
            sellOffers: true,
          },
        },
      },
    })

    if (!product) {
      return res.status(404).json({ error: 'Proizvod nije pronađen' })
    }

    res.json(product)
  } catch (err) {
    console.error('Greška u getProductById:', err)
    res.status(500).json({ error: 'Server error' })
  }
}
