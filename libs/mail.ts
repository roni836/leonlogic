// libs/mail.ts
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmailWithPdf({
  to,
  company,
  url,
  pdfBuffer,
  pdfFileName,
}: {
  to: string;
  company: string;
  url: string;
  pdfBuffer: ArrayBuffer;
  pdfFileName: string;
}) {
  await transporter.sendMail({
    from: process.env.SMTP_FROM || `LeoMedia <${process.env.SMTP_USER}>`,
    to,
    subject: `Your Website Audit Report – ${company}`,
    text: `Hi,

Please find attached the website audit report for ${company} (${url}).

If you'd like, our team can help implement these improvements. Just reply to this email and we'll set up a quick call.

Best regards,
LeoMedia Team`,
    html: `<p>Hi,</p>
<p>Please find attached the website audit report for <strong>${company}</strong> (<a href="${url}">${url}</a>).</p>
<p>If you'd like, our team can help implement these improvements. Just reply to this email and we'll set up a quick call.</p>
<p>Best regards,<br/>LeoMedia Team</p>`,
    attachments: [
      {
        filename: pdfFileName,
        content: Buffer.from(new Uint8Array(pdfBuffer)),
        contentType: "application/pdf",
      },
    ],
  });
}
