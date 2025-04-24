import express from 'express'
import {
  getAllProducts,
  getProductById,
  getProductsOverview,
} from '../controllers/product.controller'

const router = express.Router()

// GET /api/products/overview – svi proizvodi sa minimalnim cenama
router.get('/overview', getProductsOverview)

// GET /api/products/:id – jedan proizvod sa svim varijantama i ponudama
router.get('/:id', getProductById)

// GET /api/products – lista svih proizvoda sa varijantama
router.get('/', getAllProducts)



export default router
