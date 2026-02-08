import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    const data = await resend.emails.send({
      from: 'IHM Marine Services <onboarding@resend.dev>',
      to: ['speirsspeirs25@gmail.com'], 
      replyTo: email,
      subject: `Contact Form: ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ success: true, id: data.id });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email' });
  }
}