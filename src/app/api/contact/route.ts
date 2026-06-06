import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_TO = process.env.EMAIL_TO || "admin@w2ctech.com";
const EMAIL_CC = process.env.EMAIL_CC || "w2ctechsolution@gmail.com";
const EMAIL_FROM = process.env.EMAIL_FROM || "admin@w2ctech.com";
const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
const SMTP_PORT = Number(process.env.SMTP_PORT) || 587;
const SMTP_USER = process.env.SMTP_USER || "w2ctechsolution@gmail.com";
const SMTP_PASS = process.env.SMTP_PASS || "";

export async function POST(request: Request) {
  try {
    const { name, email, company, service, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const serviceLine = service && service !== "Select a service…" ? service : "General Inquiry";
    const time = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    await transporter.sendMail({
      from: `"${name}" <${EMAIL_FROM}>`,
      to: EMAIL_TO,
      cc: EMAIL_CC,
      replyTo: email,
      subject: `New Website Inquiry — ${serviceLine} from ${name}${company ? ` (${company})` : ""}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="margin:0;padding:0;background:#1a1a2e;font-family:-apple-system,BlinkMacSystemFont,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#1a1a2e;padding:40px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background:#12121f;border-radius:14px;overflow:hidden;border:1px solid #2a2a3e;">
                  <!-- Header -->
                  <tr>
                    <td style="background:linear-gradient(135deg,#d4a83a,#b8860b);padding:28px 32px;">
                      <h1 style="margin:0;font-size:22px;color:#1a1a2e;font-weight:700;">New Website Inquiry</h1>
                      <p style="margin:6px 0 0;font-size:13px;color:#1a1a2e;opacity:0.8;">W2C Tech — Web to Cloud · ${time} IST</p>
                    </td>
                  </tr>
                  <!-- Body -->
                  <tr>
                    <td style="padding:28px 32px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        ${[
                          { label: "Name", value: name },
                          { label: "Email", value: `<a href="mailto:${email}" style="color:#d4a83a;text-decoration:none;">${email}</a>` },
                          { label: "Company", value: company || "—" },
                          { label: "Service", value: serviceLine },
                        ].map((row) => `
                          <tr>
                            <td style="padding:10px 0;border-bottom:1px solid #2a2a3e;width:120px;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#8888aa;font-weight:500;">${row.label}</td>
                            <td style="padding:10px 0;border-bottom:1px solid #2a2a3e;font-size:15px;color:#e8e8f0;">${row.value}</td>
                          </tr>
                        `).join("")}
                      </table>
                      <!-- Message -->
                      <div style="margin-top:24px;background:#1a1a2e;border-radius:10px;padding:20px;border:1px solid #2a2a3e;">
                        <p style="margin:0 0 10px;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#8888aa;font-weight:500;">Message</p>
                        <p style="margin:0;font-size:15px;color:#c8c8d8;line-height:1.7;white-space:pre-wrap;">${message}</p>
                      </div>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td style="padding:20px 32px;background:#0e0e1a;border-top:1px solid #2a2a3e;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="font-size:12px;color:#666;">
                            <a href="https://w2ctech.com" style="color:#d4a83a;text-decoration:none;">w2ctech.com</a>
                            &nbsp;·&nbsp; WhatsApp +91-9626222140
                            &nbsp;·&nbsp; <a href="mailto:admin@w2ctech.com" style="color:#d4a83a;text-decoration:none;">admin@w2ctech.com</a>
                            &nbsp;·&nbsp; <a href="mailto:w2ctechsolution@gmail.com" style="color:#d4a83a;text-decoration:none;">w2ctechsolution@gmail.com</a>
                          </td>
                          <td align="right" style="font-size:11px;color:#555;">CIN: U72900UP2022PTC168187</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
