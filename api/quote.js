import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 1. Destructure ALL the fields from your new Frontend form
    const { 
      name, 
      email, 
      company, 
      phone, 
      vesselName, 
      vesselType, 
      imo, 
      service, 
      portLocation, 
      urgency, 
      message 
    } = req.body;

    // 2. Format the Email Subject based on Urgency
    const urgencyFlag = urgency === 'urgent' ? '⚡ URGENT: ' : '';
    const subjectLine = `${urgencyFlag}New Quote Request: ${service || 'General Service'}`;

    // 3. Send the Email
    const data = await resend.emails.send({
      from: 'IHM Marine Services <onboarding@resend.dev>',
      to: ['speirsspeirs25@gmail.com'], // Verified Receiver
      replyTo: email,
      subject: subjectLine,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px;">
          <h2 style="color: #004e64; border-bottom: 2px solid #004e64; padding-bottom: 10px;">
            ${urgency === 'urgent' ? '⚡ ' : ''}New Quote Request
          </h2>
          
          <div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #333;">🚢 Service Required</h3>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Port/Location:</strong> ${portLocation || 'Not specified'}</p>
            <p><strong>Urgency:</strong> ${urgency === 'urgent' ? '<span style="color: red; font-weight: bold;">URGENT</span>' : 'Standard'}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <h3 style="color: #333;">📋 Vessel Details</h3>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Name:</strong> ${vesselName || 'N/A'}</li>
              <li><strong>Type:</strong> ${vesselType || 'N/A'}</li>
              <li><strong>IMO Number:</strong> ${imo || 'N/A'}</li>
            </ul>
          </div>

          <div style="margin-bottom: 20px;">
            <h3 style="color: #333;">👤 Contact Information</h3>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
              <li><strong>Phone:</strong> ${phone || 'N/A'}</li>
              <li><strong>Company:</strong> ${company || 'N/A'}</li>
            </ul>
          </div>

          <hr style="border: 0; border-top: 1px solid #eee;" />
          
          <h3>📝 Additional Message</h3>
          <p style="white-space: pre-wrap; background: #fff; border: 1px solid #ddd; padding: 10px; border-radius: 4px;">${message || 'No additional details provided.'}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, id: data.id });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Failed to send quote' });
  }
}