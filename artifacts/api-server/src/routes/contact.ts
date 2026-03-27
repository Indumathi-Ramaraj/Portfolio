import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";

const router: IRouter = Router();

const OWNER_PHONE = process.env.NOTIFY_PHONE || "+919952356475";

async function sendSMS(name: string, email: string, phone: string, message: string, log: typeof router.post extends (...args: any[]) => any ? never : any) {
  const smsBody = `📩 New Portfolio Message!\nFrom: ${name}\nEmail: ${email}${phone ? `\nPhone: ${phone}` : ""}\n\n${message.substring(0, 100)}${message.length > 100 ? "..." : ""}`;

  const twilioSid = process.env.TWILIO_ACCOUNT_SID;
  const twilioToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioFrom = process.env.TWILIO_PHONE_NUMBER;

  if (twilioSid && twilioToken && twilioFrom) {
    const params = new URLSearchParams({
      From: twilioFrom,
      To: OWNER_PHONE,
      Body: smsBody,
    });
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
    if (resp.ok) {
      return { provider: "twilio", success: true };
    }
  }

  const tbParams = new URLSearchParams({
    phone: OWNER_PHONE,
    message: smsBody,
    key: process.env.TEXTBELT_KEY || "textbelt",
  });
  const tbResp = await fetch("https://textbelt.com/text", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: tbParams.toString(),
  });
  const tbData = await tbResp.json() as { success: boolean; quotaRemaining?: number; error?: string };
  return { provider: "textbelt", success: tbData.success, quota: tbData.quotaRemaining, error: tbData.error };
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

    req.log.info({ name, email }, "Contact email sent");

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
