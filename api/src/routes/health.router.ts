import { Router } from 'express'

const router: Router = Router()

router.get('/', (req, res) => {
  res.status(200).json({
    ok: true,
    status: 'API is live!',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
  })
})

export default router
