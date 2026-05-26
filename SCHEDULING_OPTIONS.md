# Scheduling & SMS Notification Options

I've added a contact form to your website. Here are your options for getting notifications:

---

## ⭐ RECOMMENDED: Option 1 - Resend + SMS Gateway (Best Balance)

**Cost:** $0/month (up to 3,000 emails free)
**Setup Time:** 10 minutes
**SMS:** YES - Free via carrier gateway

### How It Works:
1. Customer fills out form on website
2. Sends email to your Gmail/email
3. Also sends to your phone number as SMS (free via carrier)

### Setup Instructions:

#### Step 1: Install Resend
```bash
cd hire-a-hubby
npm install resend
```

#### Step 2: Get Resend API Key
1. Go to [resend.com](https://resend.com)
2. Sign up (free)
3. Get your API key
4. Verify your domain (or use their test domain initially)

#### Step 3: Add Environment Variables
Create `.env.local` file:
```bash
RESEND_API_KEY=re_your_key_here
NOTIFICATION_EMAIL=youremail@gmail.com
SMS_GATEWAY_EMAIL=YOUR_NUMBER@CARRIER_GATEWAY
```

#### Step 4: Find Your SMS Gateway Email

**Verizon:** `6125551234@vtext.com`
**AT&T:** `6125551234@txt.att.net`
**T-Mobile:** `6125551234@tmomail.net`
**Sprint:** `6125551234@messaging.sprintpcs.com`

Replace `6125551234` with your actual phone number (no dashes/spaces).

#### Step 5: Update API Route
Uncomment the Resend code in `app/api/contact/route.ts`

✅ **Done!** You'll get emails AND text messages for each form submission.

---

## Option 2 - Twilio SMS (Professional SMS)

**Cost:** $1/month + $0.0079 per SMS
**Setup Time:** 20 minutes
**SMS:** YES - Proper SMS (not email-to-SMS)

### Setup:

```bash
npm install twilio
```

Create `.env.local`:
```bash
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=+16125551234
YOUR_PHONE_NUMBER=+16125559876
```

Update `app/api/contact/route.ts`:
```typescript
import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

await client.messages.create({
  body: `New booking from ${name}. Phone: ${phone}. Service: ${service}`,
  from: process.env.TWILIO_PHONE_NUMBER,
  to: process.env.YOUR_PHONE_NUMBER,
});
```

---

## Option 3 - Third-Party Booking Tools (Easiest)

### Calendly (Most Popular)
**Cost:** $0-$12/month
**Setup:** Embed their widget
**SMS:** Email notifications only (free), SMS with paid plan

1. Create account at [calendly.com](https://calendly.com)
2. Set up your availability
3. Get embed code
4. Add to your website

### Acuity Scheduling
**Cost:** $16-$61/month
**Features:** Full booking system, SMS reminders, payments

---

## Option 4 - Google Forms (Simplest - No Coding)

**Cost:** FREE
**Setup Time:** 5 minutes
**SMS:** Via Zapier ($20/month) or email notifications

### Setup:
1. Create Google Form
2. Add to your website as iframe
3. Set up email notifications
4. Use Zapier to forward to SMS (optional)

---

## Option 5 - Keep Facebook Booking + Add Contact Form

**Cost:** FREE
**What I Built:** Contact form that logs to console

### Current Status:
- ✅ Contact form is ready
- ✅ Facebook booking still works
- ⚠️ Need to add email/SMS (choose option above)

This is great because:
- Customers can choose Facebook OR form
- You already have Facebook working
- Form gives you backup option

---

## 🎯 MY RECOMMENDATION

For Hire a Hubby MN, I recommend:

### Phase 1 (Right Now - Free):
1. Use the contact form I built
2. Add **Resend + SMS Gateway** (Option 1)
3. Keep Facebook booking as alternative
4. **Total Cost: $0/month**

### Phase 2 (When Busy):
1. Keep everything from Phase 1
2. Add Calendly for scheduling ($12/month)
3. Shows available time slots
4. Reduces back-and-forth

---

## What I've Already Built For You:

✅ Professional contact form
✅ Collects: name, phone, email, service type, date, details
✅ Mobile-friendly
✅ Success/error messages
✅ API endpoint ready

## Next Steps:

**Choose your option:**

### Quick Start (10 min):
1. Sign up for Resend.com
2. Add API key to `.env.local`
3. Find your SMS gateway email
4. Uncomment code in `app/api/contact/route.ts`

### Or Use What You Have:
- Keep Facebook booking for now
- Add email service later when you have time
- Form still collects data (logs to console for testing)

---

## Testing Right Now:

The form is ready to add to your site! Want me to add it to the contact section?

## Questions?

1. **"Which option should I use?"** → Start with Option 1 (Resend + SMS Gateway)
2. **"Can I test it first?"** → Yes! Logs to console now, add email later
3. **"Too complicated?"** → Keep using Facebook, add form for backup
4. **"Want full scheduling?"** → Add Calendly widget later

Would you like me to:
1. Add the contact form to your website now?
2. Set up the Resend integration?
3. Show you how to add Calendly instead?
