import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { prisma } from '../config/prisma'
import { CONFIG } from '../config'

interface JwtPayload {
  id: number
  companyId: number
  userType: string
}

export interface AuthRequest extends Request {
  user?: {
    id: number;
    companyId: number
    userType: string
  }
}

export const authMiddleware = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Token nije prosleđen ili je u pogrešnom formatu' })
    }

    const token = authHeader.split(' ')[1]
    const decoded = jwt.verify(token, CONFIG.JWT_SECRET) as JwtPayload

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      include: { company: true },
    })

    if (!user) {
      return res.status(401).json({ error: 'Korisnik nije pronađen' })
    }

    req.user = {
      id: decoded.id,
      companyId: decoded.companyId,
      userType: decoded.userType,
    }

    next()
  } catch (error) {
    console.error('Auth middleware error:', error)
    return res.status(401).json({ error: 'Nevažeći ili istekao token' })
  }
}

