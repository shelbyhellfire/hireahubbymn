#!/bin/bash
echo "Creating .env.local file..."
cat > .env.local << 'ENVEOF'
# Resend API Key (paste your key after the = sign)
RESEND_API_KEY=paste_your_resend_api_key_here

# Your email for notifications
NOTIFICATION_EMAIL=your-email@gmail.com

# SMS Gateway - Your phone number + carrier
# Verizon:  1234567890@vtext.com
# AT&T:     1234567890@txt.att.net
# T-Mobile: 1234567890@tmomail.net
# Sprint:   1234567890@messaging.sprintpcs.com
SMS_GATEWAY_EMAIL=1234567890@vtext.com
ENVEOF
echo ".env.local created! Now edit it with your actual values."
