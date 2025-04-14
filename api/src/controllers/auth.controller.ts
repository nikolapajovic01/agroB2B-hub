import { Request, Response } from 'express'
import { registerUser, loginUser, verifyEmailToken } from '../services/auth.service'
import { EmailService } from '../services/email.service'

const emailService = new EmailService()

export const signupHandler = async (req: Request, res: Response) => {
  try {
    const { user, verificationToken } = await registerUser(req.body)

    await emailService.sendVerificationEmail(user.email, verificationToken.token)

    await emailService.sendAdminNotification(
      'Nova Registracija Korisnika',
      `<p>Ime: ${user.name}</p><p>Email: ${user.email}</p>`
    )

    res.json({ message: 'Korisnik uspešno registrovan. Proverite email.' })
  } catch (error) {
    console.error('Signup error:', error)
    res.status(500).json({ error: 'Greška pri registraciji' })
  }
}

export const loginHandler = async (req: Request, res: Response) => {
    try {
      const { token, user } = await loginUser(req.body)
      res.json({ token, user })
    } catch (error: any) {
      console.error('Login error:', error)
      res.status(401).json({ error: error.message || 'Login failed' })
    }
  }
  
  export const verifyEmailHandler = async (req: Request, res: Response) => {
    try {
      const { token } = req.params
      await verifyEmailToken(token)
      res.json({ message: 'Email verified successfully' })
    } catch (error: any) {
      console.error('Verify error:', error)
      res.status(400).json({ error: error.message || 'Verification failed' })
    }
  }
