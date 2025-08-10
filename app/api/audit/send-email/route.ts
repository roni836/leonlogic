import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendEmailWithPdf } from "@/libs/mail";

export async function POST(request: NextRequest) {
  try {
    const { url, company, pdfUrl } = await request.json();
    console.log('[send-email] Request body:', { url, company, hasPdfUrl: !!pdfUrl });

    // Get lead email from DB
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const { data, error } = await supabase
      .from("audit_leads")
      .select("email, pdf_url")
      .eq("company_name", company)
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    if (error || !data?.email) {
      console.error('[send-email] Lead email lookup failed:', { error, data });
      return NextResponse.json({ error: "Lead email not found" }, { status: 404 });
    }
    console.log('[send-email] Lead email found:', data.email);

    // Determine the PDF URL (body > DB)
    const resolvedPdfUrl = pdfUrl || data.pdf_url;
    if (!resolvedPdfUrl) {
      console.error('[send-email] No PDF URL available');
      return NextResponse.json({ error: 'PDF URL not found' }, { status: 404 });
    }
    console.log('[send-email] Resolved PDF URL:', resolvedPdfUrl);

    // Fetch PDF as ArrayBuffer for mail helper
    const pdfResponse = await fetch(resolvedPdfUrl);
    if (!pdfResponse.ok) {
      console.error('[send-email] Fetch PDF failed:', pdfResponse.status, pdfResponse.statusText);
      return NextResponse.json({ error: 'Failed to fetch PDF' }, { status: 502 });
    }
    const pdfArrayBuffer = await pdfResponse.arrayBuffer();

    // Send email
    await sendEmailWithPdf({
      to: data.email,
      company,
      url,
      pdfBuffer: pdfArrayBuffer,
      pdfFileName: `${company}-website-audit.pdf`,
    });
    console.log('[send-email] Email dispatched successfully to', data.email);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[send-email] Email send error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
