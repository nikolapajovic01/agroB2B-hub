// routes/user.router.ts
import { Router } from 'express';
import { getUserDetails } from '../controllers/user.controller';
import { authMiddleware } from '../middleware/auth'; // ako koristiš JWT

const router = Router();

router.get('/details', authMiddleware, getUserDetails);

export default router;
