import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      name, 
      email, 
      company, 
      phone, 
      service, 
      message,
      // Marine Specific Fields
      vesselName, 
      imo, 
      grossTonnage, 
      yearBuilt, 
      projectScope 
    } = req.body;

    const data = await resend.emails.send({
      from: 'IHM Marine Services <onboarding@resend.dev>',
      to: ['speirsspeirs25@gmail.com'], // Your email
      replyTo: email,
      subject: `New Quote Request: ${service || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px;">
          <h2 style="color: #004e64; border-bottom: 2px solid #004e64; padding-bottom: 10px;">
            New Quote Request
          </h2>
          
          <div style="background-color: #f0f7ff; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #004e64;">🚢 Service: ${service}</h3>
            
            ${vesselName ? `<p><strong>Vessel Name:</strong> ${vesselName}</p>` : ''}
            ${imo ? `<p><strong>IMO Number:</strong> ${imo}</p>` : ''}
            ${grossTonnage ? `<p><strong>Gross Tonnage:</strong> ${grossTonnage}</p>` : ''}
            ${yearBuilt ? `<p><strong>Year Built:</strong> ${yearBuilt}</p>` : ''}
          </div>

          ${projectScope ? `
          <div style="background-color: #fff4e5; padding: 15px; border-radius: 5px; margin-bottom: 20px; border: 1px solid #ffe0b2;">
            <h3 style="margin-top: 0; color: #d84315;">⚠️ Project Scope / Issue</h3>
            <p>${projectScope}</p>
          </div>` : ''}

          <div style="margin-bottom: 20px;">
            <h3 style="color: #333;">👤 Client Details</h3>
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