import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);
const TO = process.env.CONTACT_TO!;
const FROM = process.env.CONTACT_FROM!; // must be a verified/sender domain in Resend

function escapeHtml(s: string) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6">
        <h2>New Consultation Request — TheSearchersPodcasterNetwork</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Phone:</b> ${escapeHtml(phone || "—")}</p>
        <p><b>Message:</b><br>${escapeHtml(message || "—").replace(/\n/g,"<br/>")}</p>
      </div>
    `;

    await resend.emails.send({
      from: FROM,
      to: TO,
      subject: "New Consultation Request — TheSearchersPodcasterNetwork",
      replyTo: email,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Email failed to send." }, { status: 500 });
  }
}
