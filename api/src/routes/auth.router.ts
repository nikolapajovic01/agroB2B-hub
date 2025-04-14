import { Router } from 'express'
import {
  signupHandler,
  loginHandler,
  verifyEmailHandler
} from '../controllers/auth.controller'

const router = Router()

router.post('/signup', signupHandler)
router.post('/login', loginHandler)
router.get('/verify-email/:token', verifyEmailHandler)

export default router
