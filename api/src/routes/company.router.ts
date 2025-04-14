import { Router } from 'express'
import { authMiddleware } from '../middleware/auth'
import {
  getCompanyVerificationStatus,
  getCompanyDetailsForLoggedInUser,
} from '../controllers/company.controller'

const router = Router()

router.get('/verification/:companyId', authMiddleware, getCompanyVerificationStatus)
router.get('/details', authMiddleware, getCompanyDetailsForLoggedInUser)

export default router
