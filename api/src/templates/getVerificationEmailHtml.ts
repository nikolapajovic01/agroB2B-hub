export const getVerificationEmailHtml = (verificationUrl: string) => `
  <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <h1 style="color: #1C2434; font-size: 24px; margin-bottom: 20px; text-align: center;">Verifikacija Email Adrese</h1>

    <p style="color: #64748B; font-size: 16px; line-height: 24px; margin-bottom: 24px; text-align: center;">
      Molimo vas da kliknete na dugme ispod kako biste verifikovali vašu email adresu:
    </p>

    <div style="text-align: center; margin-bottom: 24px;">
      <a href="${verificationUrl}" 
         style="background-color: #3C50E0; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; display: inline-block; font-weight: bold;">
        Verifikuj Email
      </a>
    </div>

    <p style="color: #64748B; font-size: 14px; text-align: center; margin-top: 24px;">
      Ovaj link će isteći za 24 sata.
    </p>

    <p style="color: #DC3545; font-size: 14px; text-align: center; margin-top: 24px;">
      Ako niste vi kreirali ovaj nalog, molimo vas da ignorišete ovaj email.
    </p>
  </div>
`
