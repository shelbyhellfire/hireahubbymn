# Resend + SMS Setup Guide

## ✅ Step 1: Get Resend API Key

1. Go to **[resend.com](https://resend.com)**
2. Click "Start Building" or "Sign Up"
3. Verify your email
4. Go to **API Keys** in dashboard
5. Click "Create API Key"
6. Give it a name like "Hire a Hubby Website"
7. Copy the API key (starts with `re_...`)

## ✅ Step 2: Find Your SMS Gateway Email

Your phone carrier provides a free email-to-SMS gateway. Find yours:

### Verizon
**Format:** `1234567890@vtext.com`
**Example:** If your number is (612) 555-1234, use: `6125551234@vtext.com`

### AT&T
**Format:** `1234567890@txt.att.net`
**Example:** `6125551234@txt.att.net`

### T-Mobile
**Format:** `1234567890@tmomail.net`
**Example:** `6125551234@tmomail.net`

### Sprint
**Format:** `1234567890@messaging.sprintpcs.com`
**Example:** `6125551234@messaging.sprintpcs.com`

### Other Carriers
- **Google Fi:** `number@msg.fi.google.com`
- **US Cellular:** `number@email.uscc.net`
- **Boost Mobile:** `number@sms.myboostmobile.com`
- **Cricket:** `number@mms.cricketwireless.net`

## ✅ Step 3: Create Environment File

Open Terminal and run:

```bash
cd hire-a-hubby
touch .env.local
open .env.local
```

This will open the file in TextEdit. Copy and paste this, then **replace with your actual values**:

```bash
# Resend API Key (get from resend.com)
RESEND_API_KEY=re_your_actual_api_key_here

# Your email address for notifications
NOTIFICATION_EMAIL=youremail@gmail.com

# Your SMS gateway (phone number + carrier gateway)
SMS_GATEWAY_EMAIL=6125551234@vtext.com
```

**Example with real values:**
```bash
RESEND_API_KEY=re_abc123xyz789
NOTIFICATION_EMAIL=john@hireahubbymn.com
SMS_GATEWAY_EMAIL=6125551234@vtext.com
```

Save the file.

## ✅ Step 4: Restart Dev Server

The dev server is already running. Stop it and restart:

1. Go to the terminal where `npm run dev` is running
2. Press `Ctrl + C` to stop it
3. Run: `npm run dev` again

## ✅ Step 5: Test It!

1. Go to **http://localhost:3001**
2. Scroll to "Get in Touch" section
3. Fill out the form with test data
4. Submit!

You should receive:
- ✉️ An email to your NOTIFICATION_EMAIL
- 📱 A text message to your phone!

## 🔧 Troubleshooting

### "Not receiving texts"
1. **Check your SMS gateway email** - Make sure you used the right carrier
2. **Try sending a test email** - Send an email to your SMS gateway from Gmail
3. **Check carrier settings** - Some carriers require enabling email-to-SMS

### "Not receiving emails"
1. **Check spam folder**
2. **Verify Resend API key** - Make sure it's correct
3. **Check Resend dashboard** - Look at logs to see if email was sent

### "Form not submitting"
1. **Check browser console** - Press F12 and look for errors
2. **Check terminal** - Look for error messages
3. **Restart dev server** - Sometimes needed after .env changes

## 📝 Test Email Format

To test your SMS gateway manually:
1. Open Gmail
2. Send email to: `yournumber@carrier_gateway.com`
3. Subject: Test
4. Body: Testing SMS gateway
5. You should receive it as a text!

## 🎯 What You'll Receive

### Email Format:
```
Subject: 🔧 New Booking: kitchen - John Smith

New Service Request from Website

Name: John Smith
Phone: (612) 555-1234
Email: john@example.com
Service: kitchen
Preferred Date: 2024-01-15

Project Details:
Need help remodeling my kitchen...
```

### Text Message Format:
```
New booking from John Smith. Phone: (612) 555-1234. Service: kitchen. Check email for details.
```

## 🚀 Going Live (Later)

When you deploy to production:

1. **Verify your domain** with Resend
2. Change the "from" email in `app/api/contact/route.ts`:
   ```typescript
   from: "Bookings <bookings@hireahubbymn.com>",
   ```
3. Add your domain in Resend dashboard
4. Add environment variables to your hosting (Vercel, Netlify, etc.)

## ✅ You're Done!

Once you complete the steps above, every form submission will send you:
- 📧 An email with full details
- 📱 A text message alert

**Cost:** $0/month (up to 3,000 emails free with Resend)

---

## Quick Reference

**Created files:**
- ✅ `app/components/ContactForm.tsx` - The contact form
- ✅ `app/api/contact/route.ts` - API that sends emails/SMS
- ✅ Resend package installed

**Need to create:**
- ⏳ `.env.local` file with your API keys

**Next steps:**
1. Get Resend API key
2. Find your SMS gateway email
3. Create `.env.local` file
4. Restart server
5. Test the form!
