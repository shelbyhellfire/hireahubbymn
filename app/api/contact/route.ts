import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const { name, phone, email, service, message, preferredDate } = formData;

    // Format the email message
    const emailBody = `
New Service Request from Website

Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}
Preferred Date: ${preferredDate || "Not specified"}

Project Details:
${message}

---
Submitted from hireahubbymn.com
    `.trim();

    // Format SMS message (shorter for text)
    const smsBody = `New booking from ${name}. Phone: ${phone}. Service: ${service}. Check email for details.`;

    // Send to both email and SMS gateway
    const recipients = [
      process.env.NOTIFICATION_EMAIL || "",
      process.env.SMS_GATEWAY_EMAIL || "",
    ].filter(Boolean); // Remove empty values

    if (recipients.length === 0) {
      console.error("No notification recipients configured!");
      console.log("Form data:", formData);
      return NextResponse.json(
        { message: "Form submitted (notifications not configured)" },
        { status: 200 },
      );
    }

    // Send email notification
    const result = await resend.emails.send({
      from: "Hire a Hubby Website <onboarding@resend.dev>", // Use resend's domain initially
      to: recipients,
      subject: `🔧 New Booking: ${service} - ${name}`,
      text: emailBody,
    });

    console.log("Email sent successfully:", result);

    return NextResponse.json(
      { message: "Request submitted successfully! We'll contact you soon." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing form:", error);
    return NextResponse.json(
      {
        error:
          "Failed to submit form. Please try Facebook booking or call us directly.",
      },
      { status: 500 },
    );
  }
}
