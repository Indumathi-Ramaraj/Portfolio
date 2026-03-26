import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";

const router: IRouter = Router();

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
          <h2 style="color: #f43f5e; margin-top: 0;">New Portfolio Message</h2>
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

    if (phone) {
      const twilioSid = process.env.TWILIO_ACCOUNT_SID;
      const twilioToken = process.env.TWILIO_AUTH_TOKEN;
      const twilioFrom = process.env.TWILIO_PHONE_NUMBER;
      const twilioTo = process.env.TWILIO_TO_PHONE;

      if (twilioSid && twilioToken && twilioFrom && twilioTo) {
        try {
          const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`;
          const params = new URLSearchParams({
            From: twilioFrom,
            To: twilioTo,
            Body: `Portfolio message from ${name} (${email}${phone ? ", " + phone : ""}): ${message.substring(0, 120)}${message.length > 120 ? "..." : ""}`,
          });

          const twilioRes = await fetch(twilioUrl, {
            method: "POST",
            headers: {
              Authorization: "Basic " + Buffer.from(`${twilioSid}:${twilioToken}`).toString("base64"),
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: params.toString(),
          });

          if (twilioRes.ok) {
            req.log.info({ name }, "SMS notification sent");
          } else {
            req.log.warn({ status: twilioRes.status }, "SMS failed");
          }
        } catch (smsErr) {
          req.log.warn({ err: smsErr }, "SMS error (non-fatal)");
        }
      }
    }

    res.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    req.log.error({ err }, "Failed to send contact email");
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
});

export default router;
