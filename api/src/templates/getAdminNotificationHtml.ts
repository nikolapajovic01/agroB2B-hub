export const getAdminNotificationHtml = (content: string) => `
  <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <h1 style="color: #1C2434; font-size: 24px; margin-bottom: 20px; text-align: center;">AgroB2B Hub Obaveštenje</h1>

    <div style="color: #64748B; font-size: 16px; line-height: 24px; margin-bottom: 24px;">
      ${content}
    </div>

    <p style="color: #64748B; font-size: 14px; text-align: center; margin-top: 24px;">
      Ovo je automatska notifikacija sa AgroB2B Hub platforme.
    </p>
  </div>
`
