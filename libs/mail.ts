import nodemailer from "nodemailer";

if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
  throw new Error("❌ Missing SMTP_USER or SMTP_PASS in environment variables");
}

export const transporter = nodemailer.createTransport({
  host: "smtp.m1.websupport.sk",
  port: 465,
  secure: true, // SSL/TLS
  auth: {
    user: process.env.SMTP_USER, // noreply@leomedia.sk
    pass: process.env.SMTP_PASS, // your password
  },
});

export async function sendMail(to: string, subject: string, html: string) {
  const mailOptions = {
    from: `"LeoMedia" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log("📧 Email sent:", info.messageId);
  return info;
}
