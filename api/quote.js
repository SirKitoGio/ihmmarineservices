import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      name, email, company, phone, service, message,
      // Marine Specifics
      vesselName, imo, grossTonnage, yearBuilt, projectScope 
    } = req.body;

    const data = await resend.emails.send({
      from: 'IHM Marine Services <onboarding@resend.dev>',
      to: ['speirsspeirs25@gmail.com'], 
      replyTo: email,
      subject: `Quote Request: ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px;">
          <h2 style="color: #004e64; border-bottom: 2px solid #004e64; padding-bottom: 10px;">
            New Quote Request
          </h2>
          
          <div style="background-color: #f0f7ff; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #004e64;">🚢 Service: ${service}</h3>
            
            ${/* Only show these if they exist */ ''}
            ${vesselName ? `<p><strong>Vessel:</strong> ${vesselName} (IMO: ${imo || 'N/A'})</p>` : ''}
            ${grossTonnage ? `<p><strong>Gross Tonnage:</strong> ${grossTonnage}</p>` : ''}
            ${yearBuilt ? `<p><strong>Year Built:</strong> ${yearBuilt}</p>` : ''}
            ${projectScope ? `<p><strong>Problem Scope:</strong><br/>${projectScope}</p>` : ''}
          </div>

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
          <p><strong>Additional Message:</strong></p>
          <p>${message || 'No additional message.'}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, id: data.id });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send quote' });
  }
}