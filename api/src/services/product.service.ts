// src/services/productService.ts
import { Product, ProductVariant, SellOffer } from '@prisma/client'
import { prisma } from '../config/prisma'

interface ProductWithVariants extends Product {
  variants: (ProductVariant & {
    sellOffers: SellOffer[]
  })[]
}

export const getProductsOverviewWithMinPrice = async () => {
  const products = await prisma.product.findMany({
    include: {
      variants: {
        include: {
          sellOffers: true,
        },
      },
    },
  })

  return products.map((product) => {
    let minPrice: number | null = null

    for (const variant of product.variants) {
      for (const offer of variant.sellOffers) {
        const price = Number(offer.price)
        if (minPrice === null || price < minPrice) {
          minPrice = price
        }
      }
    }

    return {
      id: product.id,
      name: product.name,
      image: product.image,
      minPrice,
    }
  })
}

export const getProductWithVariants = async (
  productName: string
): Promise<ProductWithVariants | null> => {
  return await prisma.product.findFirst({
    where: { name: productName },
    include: {
      variants: {
        include: {
          sellOffers: true,
        },
      },
    },
  })
}
