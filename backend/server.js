import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const app  = express();
const PORT = process.env.PORT || 5000;

/* ── Middleware ── */
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

/* ── Data file ── */
const DATA_DIR  = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'inquiries.json');
if (!fs.existsSync(DATA_DIR))  fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));

/* ── Nodemailer transporter (Microsoft 365) ── */
const transporter = nodemailer.createTransport({
  host:   process.env.SMTP_HOST || 'smtp.office365.com',
  port:   parseInt(process.env.SMTP_PORT) || 587,
  secure: false, // STARTTLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: { ciphers: 'SSLv3' },
});

/* ── Email templates ── */
function getAutoReply(name, service) {
  const serviceMessages = {
    'Global IT Support':         'Our global support team will review your request and assign a dedicated engineer within 2 business hours.',
    'Cybersecurity & Cloud':     'Our cybersecurity specialists will assess your requirements and prepare a tailored security proposal.',
    'AI & Business Automation':  'Our AI team will analyse your automation needs and schedule a discovery call at your convenience.',
    'Web Development & Web Apps':'Our web engineering team will review your project scope and get back to you with a detailed proposal.',
    'Mobile App Development':    'Our mobile development team will review your requirements and reach out to discuss your project.',
    'Software Engineering':      'Our engineering team will review your requirements and prepare a technical proposal.',
    'DevOps Support':            'Our DevOps engineers will assess your infrastructure needs and respond with recommendations.',
    'Infrastructure Cabling':    'Our field operations team will review your cabling requirements and arrange a site survey.',
    'Datacenter Services':       'Our datacenter specialists will review your requirements and schedule a consultation.',
    'UK Field Operations':       'Our UK field team will review your dispatch request and confirm engineer availability within 1 business hour.',
    'IT Rental & Asset Lifecycle':'Our asset team will review your rental requirements and send a quote within 4 business hours.',
    'IT Consulting & Advisory':  'Our consulting team will review your brief and schedule a strategy call within 1 business day.',
  };

  const msg = serviceMessages[service] || 'Our team will review your enquiry and respond within 1 business day.';

  return {
    subject: `Thank you for contacting AXCIS — ${service}`,
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:'Segoe UI',Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:40px 0">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08)">
        <!-- Header -->
        <tr>
          <td style="background:#030508;padding:32px 40px;text-align:center">
            <div style="display:inline-flex;align-items:center;gap:12px">
              <div style="background:#0a0a0c;border:1.5px solid rgba(0,200,255,0.3);border-radius:10px;width:44px;height:44px;display:inline-block;text-align:center;line-height:44px;font-size:20px">✳</div>
              <span style="color:#ffffff;font-size:26px;font-weight:900;letter-spacing:4px">AXCIS</span>
            </div>
            <p style="color:rgba(255,255,255,0.5);font-size:12px;margin:8px 0 0;letter-spacing:2px;text-transform:uppercase">axcisltd.co.uk</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:40px">
            <h2 style="color:#030508;font-size:22px;margin:0 0 16px">Thank you, ${name}!</h2>
            <p style="color:#4a5568;font-size:15px;line-height:1.7;margin:0 0 20px">
              We have received your enquiry regarding <strong style="color:#0066ff">${service}</strong>. ${msg}
            </p>
            <div style="background:#f8faff;border-left:4px solid #0066ff;border-radius:4px;padding:16px 20px;margin:24px 0">
              <p style="color:#0066ff;font-size:13px;font-weight:600;margin:0 0 4px;text-transform:uppercase;letter-spacing:1px">What happens next?</p>
              <p style="color:#4a5568;font-size:14px;margin:0;line-height:1.6">A member of the AXCIS team will contact you directly at this email address. For urgent matters, call us on <strong>+44 7498 512294</strong>.</p>
            </div>
            <p style="color:#4a5568;font-size:14px;line-height:1.7;margin:0">
              Best regards,<br/>
              <strong style="color:#030508">The AXCIS Team</strong><br/>
              <span style="color:#0066ff">contact@axcisltd.co.uk</span>
            </p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f8faff;padding:20px 40px;border-top:1px solid #e8ecf4;text-align:center">
            <p style="color:#8892aa;font-size:12px;margin:0">AXCIS LTD · 10 Stockwood Crescent, Luton LU1 3SS, United Kingdom</p>
            <p style="color:#8892aa;font-size:12px;margin:4px 0 0">Registered in England &amp; Wales · axcisltd.co.uk</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
  };
}

function getInternalNotification(inquiry) {
  return {
    subject: `[AXCIS] New Enquiry — ${inquiry.service} from ${inquiry.company || inquiry.name}`,
    html: `
<!DOCTYPE html>
<html>
<body style="font-family:'Segoe UI',Arial,sans-serif;background:#f4f6f9;padding:40px 0">
  <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;margin:0 auto;box-shadow:0 4px 20px rgba(0,0,0,0.08)">
    <tr><td style="background:#030508;padding:24px 32px">
      <span style="color:#fff;font-size:20px;font-weight:900;letter-spacing:4px">AXCIS</span>
      <span style="color:rgba(255,255,255,0.4);font-size:12px;margin-left:12px">New Enquiry Alert</span>
    </td></tr>
    <tr><td style="padding:32px">
      <h2 style="color:#030508;margin:0 0 24px;font-size:18px">New enquiry received</h2>
      <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse">
        ${[
          ['Name',    inquiry.name],
          ['Email',   inquiry.email],
          ['Company', inquiry.company || '—'],
          ['Phone',   inquiry.phone   || '—'],
          ['Service', inquiry.service],
          ['ID',      inquiry.id],
        ].map(([k,v]) => `
        <tr style="border-bottom:1px solid #f0f0f0">
          <td style="color:#8892aa;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;width:100px;padding:10px 8px">${k}</td>
          <td style="color:#030508;font-size:14px;padding:10px 8px"><strong>${v}</strong></td>
        </tr>`).join('')}
        <tr>
          <td style="color:#8892aa;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;padding:10px 8px;vertical-align:top">Message</td>
          <td style="color:#4a5568;font-size:14px;line-height:1.6;padding:10px 8px">${inquiry.message}</td>
        </tr>
      </table>
    </td></tr>
    <tr><td style="background:#f8faff;padding:16px 32px;border-top:1px solid #e8ecf4;text-align:center">
      <p style="color:#8892aa;font-size:12px;margin:0">Received: ${new Date(inquiry.createdAt).toLocaleString('en-GB', { timeZone:'Europe/London' })} (UK Time)</p>
    </td></tr>
  </table>
</body>
</html>`,
  };
}

/* ── Routes ── */
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'AXCIS API running.' });
});

app.get('/api/admin/inquiries', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    res.json(data);
  } catch {
    res.status(500).json({ error: 'Failed to retrieve inquiries.' });
  }
});

app.post('/api/inquire', async (req, res) => {
  const { name, email, company, phone, service, message } = req.body;

  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: 'Required fields: name, email, service, message' });
  }

  const inquiry = {
    id:        Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    name, email,
    company:   company || 'N/A',
    phone:     phone   || 'N/A',
    service, message,
    createdAt: new Date().toISOString(),
  };

  /* Save to JSON */
  try {
    const existing = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    existing.push(inquiry);
    fs.writeFileSync(DATA_FILE, JSON.stringify(existing, null, 2));
  } catch (err) {
    console.error('Failed to save inquiry:', err);
  }

  /* Send emails */
  try {
    const autoReply  = getAutoReply(name, service);
    const internalNote = getInternalNotification(inquiry);

    await Promise.all([
      /* Auto-reply to the person who submitted */
      transporter.sendMail({
        from:    `"AXCIS" <contact@axcisltd.co.uk>`,
        to:      email,
        subject: autoReply.subject,
        html:    autoReply.html,
      }),
      /* Internal notification to AXCIS team */
      transporter.sendMail({
        from:    `"AXCIS Website" <contact@axcisltd.co.uk>`,
        to:      process.env.NOTIFY_EMAIL,
        subject: internalNote.subject,
        html:    internalNote.html,
      }),
    ]);

    console.log(`[AXCIS] Emails sent for inquiry from ${name} (${service})`);
  } catch (err) {
    console.error('[AXCIS] Email send failed:', err.message);
    /* Don't fail the request — inquiry is already saved */
  }

  res.status(201).json({
    success: true,
    message: `Thank you ${name}! Your enquiry has been received. We will contact you at ${email} shortly.`,
    inquiryId: inquiry.id,
  });
});

app.listen(PORT, () => {
  console.log(`\n===============================================`);
  console.log(`   AXCIS BACKEND RUNNING ON PORT ${PORT}`);
  console.log(`   SMTP: ${process.env.SMTP_HOST || 'not configured'}`);
  console.log(`   From: ${process.env.SMTP_USER || 'not configured'}`);
  console.log(`===============================================\n`);
});
