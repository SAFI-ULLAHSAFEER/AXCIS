import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'inquiries.json');

// Ensure directory and file exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
}

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'AXCIS Corporate API is running smoothly.' });
});

// GET all inquiries (admin verification)
app.get('/api/admin/inquiries', (req, res) => {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    const inquiries = JSON.parse(data);
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve inquiries data.' });
  }
});

// POST a new inquiry
app.post('/api/inquire', (req, res) => {
  const { name, email, company, phone, service, message } = req.body;

  // Simple validation
  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: 'Required fields: name, email, service, message' });
  }

  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    const inquiries = JSON.parse(data);

    const newInquiry = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
      name,
      email,
      company: company || 'N/A',
      phone: phone || 'N/A',
      service,
      message,
      createdAt: new Date().toISOString()
    };

    inquiries.push(newInquiry);
    fs.writeFileSync(DATA_FILE, JSON.stringify(inquiries, null, 2));

    console.log(`[AXCIS API] New inquiry logged from ${name} (${company || 'Individual'})`);

    res.status(201).json({
      success: true,
      message: 'Thank you! Your strategic consultation inquiry has been submitted successfully. A technology partner will contact you shortly.',
      inquiryId: newInquiry.id
    });
  } catch (error) {
    console.error('Error logging inquiry:', error);
    res.status(500).json({ error: 'Internal server error while processing inquiry.' });
  }
});

app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`   AXCIS SECURE BACKEND RUNNING ON PORT ${PORT}`);
  console.log(`   API Endpoint: http://localhost:${PORT}/api/health`);
  console.log(`===============================================`);
});
