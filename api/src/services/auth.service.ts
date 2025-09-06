import { prisma } from '../config/prisma'
import bcrypt from 'bcrypt'
import crypto from 'crypto'
import { CONFIG } from '../config'
import jwt from 'jsonwebtoken'

export const registerUser = async (data: any) => {
  const { email, password, name, phoneNumber, userType, companyName, pibNumber } = data

  const existingUser = await prisma.user.findUnique({ where: { email } })
  if (existingUser) {
    throw new Error('Korisnik sa ovim emailom već postoji')
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  let companyId: number | undefined

  if (userType === 'company') {
    if (!companyName || !pibNumber) {
      throw new Error('Naziv kompanije i PIB su obavezni')
    }

    const company = await prisma.company.create({
      data: { 
        name: companyName, 
        pibNumber, 
        isVerified: false,
        subscriptionStatus: 'inactive',
        isPaid: false
      },
    })

    companyId = company.id
  }

  const user = await prisma.user.create({
    data: { email, password: hashedPassword, name, phoneNumber, userType, companyId },
  })

  const token = crypto.randomBytes(32).toString('hex')

  const verificationToken = await prisma.emailVerificationToken.create({
    data: {
      token,
      userId: user.id,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
  })

  return { user, verificationToken }
}

export const loginUser = async ({ email, password }: { email: string; password: string }) => {
  const user = await prisma.user.findUnique({ where: { email } })

  if (!user) throw new Error('Invalid credentials')
  if (!user.isVerified) throw new Error('Please verify your email before logging in')

  const validPassword = await bcrypt.compare(password, user.password)
  if (!validPassword) throw new Error('Invalid credentials')

  const token = jwt.sign(
    {
      id: user.id,
      companyId: user.companyId,
      userType: user.userType,
    },
    CONFIG.JWT_SECRET,
    { expiresIn: '30d' }
  )

  const { id, name, userType: type, companyId } = user
  return {
    token,
    user: { id, name, email, userType: type, companyId },
  }
}

export const verifyEmailToken = async (token: string) => {
  const verificationToken = await prisma.emailVerificationToken.findUnique({
    where: { token },
    include: { user: true },
  })

  if (!verificationToken) throw new Error('Invalid verification token')
  if (verificationToken.expiresAt < new Date()) throw new Error('Verification token has expired')

  await prisma.$transaction([
    prisma.user.update({
      where: { id: verificationToken.userId },
      data: { isVerified: true },
    }),
    prisma.emailVerificationToken.delete({
      where: { id: verificationToken.id },
    }),
  ])
}
