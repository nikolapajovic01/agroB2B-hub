import { Request, Response } from 'express'
import { AuthRequest } from '../middleware/auth'
import { createSellOfferService } from '../services/sellOffer.service'
import { getAllSellOffersService } from '../services/sellOffer.service'
import { getSellOfferByIdService } from '../services/sellOffer.service'
import { createSellBidService } from '../services/sellOffer.service'
import { getSellOffersByVariantIdService } from '../services/sellOffer.service'



export const createSellOffer = async (req: AuthRequest, res: Response) => {
  try {
    const result = await createSellOfferService(req)
    res.json(result)
  } catch (error: any) {
    console.error('Error creating sell offer:', error)
    res.status(500).json({ error: error.message || 'Internal server error' })
  }
}

export const getAllSellOffers = async (req: Request, res: Response) => {
    try {
      const offers = await getAllSellOffersService()
      res.json(offers)
    } catch (error) {
      console.error('Error fetching sell offers:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  export const getSellOfferById = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id)
      if (isNaN(id)) return res.status(400).json({ error: 'Invalid offer ID' })
  
      const offer = await getSellOfferByIdService(id)
  
      if (!offer) {
        return res.status(404).json({ error: 'Sell offer not found' })
      }
  
      res.json(offer)
    } catch (error) {
      console.error('Error fetching single sell offer:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }


export const createSellBid = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ error: 'Unauthorized' })

    const offerId = parseInt(req.params.id)
    const price = req.body.price ? parseFloat(req.body.price) : null

    if (isNaN(offerId) || price === null) {
      return res.status(400).json({ error: 'Invalid offer ID or price' })
    }

    const bid = await createSellBidService(offerId, price, req.user.companyId)
    res.json(bid)
  } catch (error) {
    console.error('Error creating sell bid:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const getSellOffersByVariantId = async (req: Request, res: Response) => {
  try {
    const variantId = parseInt(req.params.variantId)
    if (isNaN(variantId)) {
      return res.status(400).json({ error: 'Invalid variant ID' })
    }

    const offers = await getSellOffersByVariantIdService(variantId)
    res.json(offers)
  } catch (error) {
    console.error('Error fetching offers by variant:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
