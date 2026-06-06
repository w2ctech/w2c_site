import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_TO = process.env.EMAIL_TO || "w2ctechsolution@gmail.com";
const EMAIL_FROM = process.env.EMAIL_FROM || "w2ctechsolution@gmail.com";
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

    await transporter.sendMail({
      from: `"${name}" <${EMAIL_FROM}>`,
      to: EMAIL_TO,
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` - ${company}` : ""}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        ${service ? `<p><strong>Service:</strong> ${service}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
