// app/api/invoice/route.js
import PDFDocument from "pdfkit";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    // expected body: { orderId, email, name, items: [{title, qty, price}], total, currency, date }
    const {
      orderId = `ORD-${Math.random().toString(36).slice(2, 9).toUpperCase()}`,
      email,
      name = "",
      items = [],
      total = 0,
      currency = "USD",
      date = new Date().toISOString(),
    } = body;

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
      });
    }

    // 1) Create PDF invoice in memory using pdfkit
    const doc = new PDFDocument({ size: "A4", margin: 40 });
    const buffers = [];
    doc.on("data", (chunk) => buffers.push(chunk));
    const pdfPromise = new Promise((resolve, reject) => {
      doc.on("end", () => resolve(Buffer.concat(buffers)));
      doc.on("error", reject);
    });

    // Header
    doc
      .fontSize(20)
      .fillColor("#102b3c")
      .text("an-nahdah Online Academy", { align: "left" });
    doc.moveDown(0.2);
    doc.fontSize(10).fillColor("#6b7280").text("Invoice", { align: "right" });
    doc.text(`Invoice ID: ${orderId}`, { align: "right" });
    doc.text(`Date: ${new Date(date).toLocaleString()}`, { align: "right" });
    doc.moveDown(1);

    // Billing
    doc
      .fillColor("#111827")
      .fontSize(12)
      .text(`Billed to: ${name || email}`);
    doc.moveDown(0.6);

    // Items table header
    doc
      .fontSize(11)
      .fillColor("#374151")
      .text("Description", 40, doc.y, { continued: true });
    doc.text("Qty", 320, doc.y, { continued: true });
    doc.text("Price", 360, doc.y, { continued: true });
    doc.text("Total", 430, doc.y);
    doc
      .moveTo(40, doc.y + 3)
      .lineTo(550, doc.y + 3)
      .strokeOpacity(0.08)
      .stroke();
    doc.moveDown(0.5);

    // Items
    items.forEach((it) => {
      const lineTotal = (it.price || 0) * (it.qty || 1);
      doc
        .fontSize(11)
        .fillColor("#111827")
        .text(it.title, 40, doc.y, { continued: true });
      doc.text(String(it.qty || 1), 320, doc.y, { continued: true });
      doc.text(`${currency} ${Number(it.price || 0).toFixed(2)}`, 360, doc.y, {
        continued: true,
      });
      doc.text(`${currency} ${Number(lineTotal).toFixed(2)}`, 430, doc.y);
      doc.moveDown(0.5);
    });

    doc.moveDown(1);
    doc
      .fontSize(11)
      .fillColor("#374151")
      .text(`Subtotal: ${currency} ${Number(total).toFixed(2)}`, {
        align: "right",
      });
    // you can add tax/shipping lines here

    doc.moveDown(1.2);
    doc
      .fontSize(14)
      .fillColor("#206380")
      .text(`Total: ${currency} ${Number(total).toFixed(2)}`, {
        align: "right",
      });

    doc.moveDown(2);
    doc
      .fontSize(10)
      .fillColor("#6b7280")
      .text(
        "Thank you for your purchase! If you have any questions, contact support@yourdomain.com"
      );

    doc.end();
    const pdfBuffer = await pdfPromise;

    // 2) Send email with nodemailer
    // Configure transporter via environment variables.
    // For example using Gmail SMTP (not recommended for production) or your SMTP provider.
    // Required environment variables in .env:
    // SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_FROM
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.EMAIL_FROM || `an-nahdah <${user}>`;

    if (!host || !user || !pass) {
      // Incomplete SMTP config -> return pdf as base64 for debugging (ONLY in dev)
      return new Response(
        JSON.stringify({
          message: "SMTP not configured on server",
          debugPdfBase64: pdfBuffer.toString("base64"),
        }),
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for other ports
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from,
      to: email,
      subject: `Your Invoice — ${orderId}`,
      text: `Hello ${
        name || ""
      },\n\nThank you for your purchase. Your invoice ${orderId} is attached.\n\n— an-nahdah`,
      html: `<p>Hello ${
        name || ""
      },</p><p>Thank you for your purchase. Your invoice <strong>${orderId}</strong> is attached.</p><p>— an-nahdah Online Academy</p>`,
      attachments: [
        {
          filename: `invoice-${orderId}.pdf`,
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ ok: true, orderId }), { status: 200 });
  } catch (err) {
    console.error("Invoice send error:", err);
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
    });
  }
}
