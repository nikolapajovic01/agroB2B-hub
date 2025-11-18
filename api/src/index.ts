import dotenv from 'dotenv'
dotenv.config()

import express, { Express } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'

import healthRoute from './routes/health.router'
import authRoute from './routes/auth.router'
import companyRoute from './routes/company.router'
import offerRoute from './routes/offers.router'
import notificationsRouter from './routes/notifications.router'
import productRoute from './routes/product.router'
import userRouter from './routes/user.router'
import exportRoutes from './routes/export.routes'
import productInterestRouter from './routes/productInterest.router'
import subscriptionRouter from './routes/subscription.router'
import aiRouter from './routes/ai.router'

import { errorHandler, handle404 } from './middleware/error.middleware'

const app: Express = express()
const port = process.env.PORT || 3000

// Security headers
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
)

// Body parsing
app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ extended: true }))

// CORS
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
)

// Logger
app.use(morgan('dev'))

// Routes
app.use('/', healthRoute)
app.use('/api/auth', authRoute)
app.use('/api/company', companyRoute)
app.use('/api/offers', offerRoute)
app.use('/api/notifications', notificationsRouter)
app.use('/api/products', productRoute)
app.use('/api/user', userRouter);
app.use('/api/exports', exportRoutes);
app.use('/api/product-interests', productInterestRouter);
app.use('/api/subscription', subscriptionRouter);
app.use('/api/ai', aiRouter);

// 404 and global error handling
app.use(handle404)
app.use(errorHandler)

// Start server
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
