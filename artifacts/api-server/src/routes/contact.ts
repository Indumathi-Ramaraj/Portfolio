import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";

const router: IRouter = Router();

const OWNER_PHONE = process.env.NOTIFY_PHONE || "9952356475";

function extractDigits(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return digits.startsWith("91") && digits.length === 12 ? digits.slice(2) : digits;
}

async function sendSMS(name: string, email: string, phone: string, message: string, log: any) {
  const smsBody = `New Portfolio Message!\nFrom: ${name}\nEmail: ${email}${phone ? `\nPhone: ${phone}` : ""}\n\n${message.substring(0, 80)}${message.length > 80 ? "..." : ""}`;

  const fast2smsKey = process.env.FAST2SMS_API_KEY;
  if (fast2smsKey) {
    const ownerDigits = extractDigits(OWNER_PHONE);
    try {
      const resp = await fetch("https://www.fast2sms.com/dev/bulkV2", {
        method: "POST",
        headers: {
          authorization: fast2smsKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          route: "q",
          message: smsBody,
          language: "english",
          flash: 0,
          numbers: ownerDigits,
        }),
      });
      const data = await resp.json() as { return: boolean; message?: string[]; status_code?: number };
      if (data.return) {
        return { provider: "fast2sms", success: true };
      }
      return { provider: "fast2sms", success: false, error: data.message?.join(", ") };
    } catch (err: any) {
      log.warn({ err }, "Fast2SMS error");
    }
  }

  const twilioSid = process.env.TWILIO_ACCOUNT_SID;
  const twilioToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioFrom = process.env.TWILIO_PHONE_NUMBER;
  if (twilioSid && twilioToken && twilioFrom) {
    const params = new URLSearchParams({
      From: twilioFrom,
      To: `+91${extractDigits(OWNER_PHONE)}`,
      Body: smsBody,
    });
    try {
      const resp = await fetch(
        `https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`,
        {
          method: "POST",
          headers: {
            Authorization: "Basic " + Buffer.from(`${twilioSid}:${twilioToken}`).toString("base64"),
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString(),
        }
      );
      if (resp.ok) return { provider: "twilio", success: true };
    } catch (err: any) {
      log.warn({ err }, "Twilio error");
    }
  }

  return { provider: "none", success: false, error: "No SMS provider configured for +91 numbers. Set FAST2SMS_API_KEY to enable SMS notifications." };
}

router.post("/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ error: "Name, email and message are required." });
    return;
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const toEmail = process.env.CONTACT_TO_EMAIL || gmailUser;

  if (!gmailUser || !gmailPass) {
    req.log.warn("Email credentials not configured");
    res.status(500).json({ error: "Email service not configured." });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: toEmail,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #fff; padding: 32px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
          <h2 style="color: #f43f5e; margin-top: 0;">📩 New Portfolio Message</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #999; width: 100px;">Name</td><td style="padding: 8px 0; font-weight: bold;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #999;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #f97316;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #999;">Phone</td><td style="padding: 8px 0;">${phone}</td></tr>` : ""}
          </table>
          <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 24px 0;" />
          <h3 style="color: #f97316; margin-top: 0;">Message</h3>
          <p style="line-height: 1.7; color: #ccc; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    req.log.info({ email }, "Contact email sent");

    try {
      const smsResult = await sendSMS(name, email, phone || "", message, req.log);
      req.log.info({ smsResult }, "SMS notification attempted");
    } catch (smsErr) {
      req.log.warn({ err: smsErr }, "SMS error (non-fatal)");
    }

    res.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    req.log.error({ err }, "Failed to send contact email");
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
});

export default router;
