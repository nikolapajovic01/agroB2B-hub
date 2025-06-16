import { Router } from 'express';
import { addProductInterest } from '../controllers/productInterest.controller';
import { authMiddleware } from '../middleware/auth';

const router = Router();

router.post('/', authMiddleware, addProductInterest);

export default router; 