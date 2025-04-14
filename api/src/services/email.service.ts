import { Resend } from 'resend'
import { CONFIG } from '../config'
import { getVerificationEmailHtml } from '../templates/getVerificationEmailHtml'
import { getAdminNotificationHtml } from '../templates/getAdminNotificationHtml'

export class EmailService {
  private resend: Resend
  private adminEmail: string

  constructor() {
    if (!CONFIG.RESEND_API_KEY || !CONFIG.RESEND_FROM_EMAIL) {
      throw new Error('Missing Resend configuration')
    }

    this.resend = new Resend(CONFIG.RESEND_API_KEY)
    this.adminEmail = CONFIG.ADMIN_EMAIL || 'admin@agrob2b.com'
  }

  async sendVerificationEmail(email: string, token: string) {
    const verificationUrl = `${CONFIG.FRONTEND_URL}/verify-email?token=${token}`

    try {
      await this.resend.emails.send({
        from: CONFIG.RESEND_FROM_EMAIL,
        to: email,
        subject: 'Verifikacija email adrese - AgroB2B Hub',
        html: getVerificationEmailHtml(verificationUrl),
      })
    } catch (error) {
      console.error('Error sending verification email:', error)
      throw new Error('Neuspešno slanje verifikacionog email-a')
    }
  }

  async sendAdminNotification(subject: string, content: string) {
    try {
      await this.resend.emails.send({
        from: CONFIG.RESEND_FROM_EMAIL,
        to: this.adminEmail,
        subject,
        html: getAdminNotificationHtml(content),
      })
    } catch (error) {
      console.error('Error sending admin notification:', error)
      throw new Error('Failed to send admin notification')
    }
  }
}
