import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // 1. Security Check
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 2. Get Data from Frontend
    const { 
      name, 
      email, 
      service, 
      message,
      // Add other fields here if your form sends them (e.g. vesselType, phone)
      company,
      phone,
      vesselType
    } = req.body;

    // 3. Send Email
    const data = await resend.emails.send({
      from: 'IHM Marine Services <onboarding@resend.dev>',
      to: ['speirsspeirs25@gmail.com'], // Verified Receiver
      replyTo: email,
      subject: `New Quote Request: ${service || 'General'}`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2 style="color: #02042B;">New Quote Request</h2>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Vessel Type:</strong> ${vesselType || 'N/A'}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message ? message.replace(/\n/g, '<br>') : 'No message details.'}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, id: data.id });
  } catch (error) {
    console.error('Quote Error:', error);
    return res.status(500).json({ error: 'Failed to send quote' });
  }
}