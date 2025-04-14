import { AuthRequest } from '../middleware/auth'
import { Request, Response } from 'express'
import { createBuyOfferService } from '../services/buyOffer.service'
import { getAllBuyOffersService } from '../services/buyOffer.service'
import { getBuyOfferByIdService } from '../services/buyOffer.service'
import { createBuyBidService } from '../services/buyOffer.service'


export const createBuyOffer = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ error: 'Unauthorized' })

    const offer = await createBuyOfferService(req)
    res.json(offer)
  } catch (error: any) {
    console.error('Buy offer error:', error)
    res.status(500).json({ error: error.message || 'Internal server error' })
  }
}

export const getAllBuyOffers = async (req: Request, res: Response) => {
  try {
    const offers = await getAllBuyOffersService()
    res.json(offers)
  } catch (error) {
    console.error('Error fetching buy offers:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}


export const getBuyOfferById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id)
    if (isNaN(id)) return res.status(400).json({ error: 'Invalid offer ID' })

    const offer = await getBuyOfferByIdService(id)

    if (!offer) {
      return res.status(404).json({ error: 'Buy offer not found' })
    }

    res.json(offer)
  } catch (error) {
    console.error('Error fetching buy offer by ID:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const createBuyBid = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ error: 'Unauthorized' })

    const id = parseInt(req.params.id)
    if (isNaN(id)) return res.status(400).json({ error: 'Invalid offer ID' })

    const result = await createBuyBidService(req, id)
    res.json(result)
  } catch (error) {
    console.error('Error creating buy bid:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}



