# Backend Setup Guide

## Quick Start

Follow these steps to get your contact forms and quote requests working:

### 1. Get a Resend API Key

1. Go to [resend.com](https://resend.com) and sign up (free tier: 3,000 emails/month)
2. Verify your email
3. Go to API Keys section in the dashboard
4. Click "Create API Key"
5. Copy the API key (starts with `re_`)

### 2. Add Environment Variable Locally

Create a `.env.local` file in your project root:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

**Important:** Never commit `.env.local` to git! It should already be in `.gitignore`.

### 3. Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. In Vercel project settings:
   - Go to **Settings** → **Environment Variables**
   - Add variable: `RESEND_API_KEY` = `re_your_actual_api_key_here`
   - Save and redeploy

### 4. Test the Forms

**Contact Form:**
- Navigate to `/contact`
- Fill out the form
- Check `speirsspeirs25@gmail.com` for the email

**Quote Request:**
- Click "Get a Quote" button in navbar
- Fill out the modal form
- Check `speirsspeirs25@gmail.com` for the email

## Email Configuration

### Current Setup (Testing)
- **From:** `onboarding@resend.dev` (Resend's test domain)
- **To:** `speirsspeirs25@gmail.com`

### Production Setup

Once you're ready to go live:

1. **Add your domain to Resend:**
   - Go to Resend dashboard → Domains
   - Add `ihmmarineservices.com`
   - Add the DNS records they provide

2. **Update the API functions:**
   - Edit `/api/contact.js` and `/api/quote.js`
   - Change `from:` to `noreply@ihmmarineservices.com`
   - Change `to:` to `['info@ihmmarineservices.com']`

## API Endpoints

### POST /api/contact
Handles contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I need help with..."
}
```

### POST /api/quote
Handles quote request submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Shipping Co.",
  "phone": "+356 1234 5678",
  "vesselName": "MV Example",
  "vesselType": "Container Ship",
  "imo": "IMO 1234567",
  "service": "IHM Maintenance",
  "portLocation": "Singapore",
  "urgency": "standard",
  "message": "Additional details..."
}
```

## Troubleshooting

**Forms not submitting?**
- Check browser console for errors
- Verify `RESEND_API_KEY` is set in Vercel
- Check Resend dashboard for API usage/errors

**Not receiving emails?**
- Check spam folder
- Verify email address in API functions
- Check Resend logs in dashboard

**Local development not working?**
- Make sure `.env.local` exists with correct API key
- Restart dev server after adding environment variables
- Vercel CLI: `vercel dev` (better local serverless function support)

## Files Modified

- `/api/contact.js` - Contact form endpoint
- `/api/quote.js` - Quote request endpoint
- `/src/components/QuoteModal.jsx` - Quote request modal
- `/src/components/Navbar.jsx` - Added QuoteModal trigger
- `/src/pages/Contact.jsx` - Added form submission logic
- `/.env.example` - Environment variable template
