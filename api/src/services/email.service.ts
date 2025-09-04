import { Resend } from 'resend'
import { CONFIG } from '../config'
import { getVerificationEmailHtml } from '../templates/getVerificationEmailHtml'
import { getAdminNotificationHtml } from '../templates/getAdminNotificationHtml'

export class EmailService {
  private resend?: Resend
  private adminEmail: string
  private isEnabled: boolean

  constructor() {
    this.isEnabled = Boolean(CONFIG.RESEND_API_KEY && CONFIG.RESEND_FROM_EMAIL)
    if (this.isEnabled) {
      this.resend = new Resend(CONFIG.RESEND_API_KEY as string)
    } else {
      // eslint-disable-next-line no-console
      console.warn('EmailService disabled: RESEND credentials missing')
    }
    this.adminEmail = CONFIG.ADMIN_EMAIL || 'admin@agrob2b.com'
  }

  async sendVerificationEmail(email: string, token: string) {
    const verificationUrl = `${CONFIG.FRONTEND_URL}/verify-email?token=${token}`

    try {
      if (!this.isEnabled || !this.resend) {
        // eslint-disable-next-line no-console
        console.log(`[EmailService] Skipping verification email to ${email} (disabled in this env)`) 
        return
      }
      await this.resend.emails.send({
        from: CONFIG.RESEND_FROM_EMAIL as string,
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
      if (!this.isEnabled || !this.resend) {
        // eslint-disable-next-line no-console
        console.log('[EmailService] Skipping admin notification (disabled in this env)')
        return
      }
      await this.resend.emails.send({
        from: CONFIG.RESEND_FROM_EMAIL as string,
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
