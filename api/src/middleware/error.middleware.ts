import { Request, Response, NextFunction } from 'express'

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error('❌ Error caught by middleware:', err)

  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500

  res.status(statusCode).json({
    success: false,
    message: statusCode === 500 ? 'Internal Server Error' : err.message,
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }), // samo u dev okruženju
  })
}

export function handle404(req: Request, res: Response) {
  res.status(404).json({
    success: false,
    message: 'Not Found',
    path: req.originalUrl,
  })
}
