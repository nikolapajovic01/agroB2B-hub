import { Router } from 'express';
import { 
  addProductInterest, 
  getProductInterestsByCompany, 
  getProductInterestByCompanyAndProduct, 
  toggleProductInterestByCompanyAndProduct,
  deleteProductInterestByCompanyAndProduct
} from '../controllers/productInterest.controller';
import { authMiddleware } from '../middleware/auth';

const router = Router();

// POST /api/product-interests - dodavanje novog interesovanja
router.post('/', authMiddleware, addProductInterest);

// GET /api/product-interests/company/:companyId - sva interesovanja za kompaniju
router.get('/company/:companyId', authMiddleware, getProductInterestsByCompany);

// GET /api/product-interests/company/:companyId/product/:productId - jedno interesovanje
router.get('/company/:companyId/product/:productId', authMiddleware, getProductInterestByCompanyAndProduct);

// PUT /api/product-interests/company/:companyId/product/:productId/toggle - uključivanje/isključivanje
router.put('/company/:companyId/product/:productId/toggle', authMiddleware, toggleProductInterestByCompanyAndProduct);

// DELETE /api/product-interests/company/:companyId/product/:productId - brisanje interesovanja
router.delete('/company/:companyId/product/:productId', authMiddleware, deleteProductInterestByCompanyAndProduct);

export default router; 