# Testing Your Contact Forms

## The Issue

The regular Vite dev server (`npm run dev`) **doesn't support Vercel serverless functions**. That's why you're seeing the error "Failed to send message."

The `/api/contact` and `/api/quote` endpoints only work when:
1. Running with Vercel CLI locally, OR
2. Deployed to Vercel

## How to Test Locally

### Step 1: Run Vercel Dev Server

Instead of `npm run dev`, use:

```bash
vercel dev
```

This will:
- Start a local Vercel environment
- Enable your `/api` functions
- Automatically load your `.env.local` file
- Usually run on `http://localhost:3000`

### Step 2: Test the Forms

1. **Contact Form:**
   - Go to `http://localhost:3000/contact`
   - Fill out the form
   - Click "Send Message"
   - Check `speirsspeirs25@gmail.com` for the email

2. **Quote Request:**
   - Click "Get a Quote" in the navbar
   - Fill out the modal
   - Click "Submit Quote Request"
   - Check `speirsspeirs25@gmail.com` for the email

## Alternative: Deploy to Vercel

If you want to test on the live site:

```bash
vercel --prod
```

This will deploy your site to Vercel and the forms will work immediately.

**Don't forget:** Add your `RESEND_API_KEY` to Vercel's environment variables:
- Go to your Vercel project dashboard
- Settings → Environment Variables
- Add: `RESEND_API_KEY` = `re_NcRRJ1ac_PW9sVseX82RVAo88putr4qxC`

## Quick Commands

```bash
# Install Vercel CLI (already done ✓)
npm install -g vercel

# Start local dev server with API support
vercel dev

# Deploy to production
vercel --prod
```

## What You'll See When It Works

**Success:**
- Green success message appears
- Form resets
- Email arrives at speirsspeirs25@gmail.com within seconds

**The emails will have:**
- Professional HTML formatting
- IHM Marine Services branding
- All form details organized in sections
- Reply-to set to the sender's email
