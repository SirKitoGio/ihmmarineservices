import { Resend } from 'resend';

// SAFELY ACCESS KEY FROM ENVIRONMENT VARIABLES
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, service, message } = req.body;

    // Basic validation
    if (!name || !email || !service) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const data = await resend.emails.send({
      from: 'IHM Marine Services <onboarding@resend.dev>',
      to: ['speirsspeirs25@gmail.com'], // Sends to your verified Gmail
      replyTo: email,
      subject: `New Quote Request: ${service}`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd;">
              <h2 style="background-color: #02042B; color: white; padding: 15px; text-align: center;">🚢 New Quote Request</h2>
              <div style="padding: 20px; background-color: #f9f9f9;">
                <p><strong>Service:</strong> <span style="color: #00D4AA; font-weight: bold;">${service}</span></p>
                <p><strong>Client Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;">
                <p><strong>Additional Details:</strong></p>
                <p style="background: white; padding: 10px;">${message || 'No details provided.'}</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return res.status(200).json({ success: true, id: data.id });
  } catch (error) {
    console.error('Resend Error:', error);
    return res.status(500).json({ error: 'Failed to send quote' });
  }
}