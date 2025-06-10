import { Router } from 'express'
import { authMiddleware } from '../middleware/auth'
import {
  createSellOffer,
  getAllSellOffers,
  getSellOfferById,
  createSellBid,
} from '../controllers/sellOffer.controller'
import {
  createBuyOffer,
  getAllBuyOffers,
  getBuyOfferById,
  createBuyBid,
} from '../controllers/buyOffer.controller'
import { getSellOffersByVariantId } from '../controllers/sellOffer.controller'


const router = Router()

// Sell Offers
router.post('/sell-offers', authMiddleware, createSellOffer)
router.get('/sell-offers', authMiddleware, getAllSellOffers)
router.get('/sell-offers/:id', authMiddleware, getSellOfferById)
router.post('/sell-offers/:id/bids', authMiddleware, createSellBid)

// Buy Offers
router.post('/buy-offers', authMiddleware, createBuyOffer)
router.get('/buy-offers', authMiddleware, getAllBuyOffers)
router.get('/buy-offers/:id', authMiddleware, getBuyOfferById)
router.post('/buy-offers/:id/bids', authMiddleware, createBuyBid)

router.get('/sell-offers/variant/:variantId', getSellOffersByVariantId)


export default router
