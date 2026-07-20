import { Resend } from "resend";
import { ratelimit } from "../lib/rateLimit";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  const forwarded = req.headers["x-forwarded-for"];

  const ip = Array.isArray(forwarded)
    ? forwarded[0]
    : forwarded?.split(",")[0].trim() ||
      req.socket?.remoteAddress ||
      "127.0.0.1";

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }

  const { success, reset } = await ratelimit.limit(ip);

  if (!success) {
    return res.status(429).json({
      success: false,
      message:
        "Too many requests. Please wait a few minutes before trying again.",
      retryAfter: reset,
    });
  }

  try {
    const { name, email, subject, message, turnstileToken } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (!turnstileToken) {
      return res.status(400).json({
        success: false,
        message: "CAPTCHA verification failed.",
      });
    }

    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({
        success: false,
        message: "Resend API key is missing.",
      });
    }

    if (!process.env.CONTACT_EMAIL) {
      return res.status(500).json({
        success: false,
        message: "Contact email is missing.",
      });
    }
  
    if (!process.env.TURNSTILE_SECRET_KEY) {
      return res.status(500).json({
        success: false,
        message: "Turnstile secret key is missing.",
      });
    }

    const verifyResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      },
    );

    const verifyData = await verifyResponse.json();

    const allowedHosts = ["localhost", "metcare-alpha.vercel.app"];

    if (!verifyData.success) {
      console.error("Turnstile verification failed:", verifyData);

      return res.status(403).json({
        success: false,
        message: "CAPTCHA verification failed.",
      });
    }

    if (!allowedHosts.includes(verifyData.hostname)) {
      console.error("Unexpected Turnstile hostname:", verifyData.hostname);

      return res.status(403).json({
        success: false,
        message: "Invalid request origin.",
      });
    }

    await resend.emails.send({
      from: "MetCare <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL, // Replace with your Gmail
      replyTo: email,
      subject: `New Inquiry: ${subject}`,

      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Subject:</strong> ${subject}</p>

        <p><strong>Message:</strong></p>

        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to send email.",
    });
  }
}
