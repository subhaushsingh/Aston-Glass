import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const allowedOrigins = [
  'http://localhost:5173',       
  'https://astonglass-v1.vercel.app',  
  'https://astonglass.com',       
  'https://www.astonglass.com',   
]

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  }
});

app.post('/send', async (req, res) => {
  const { company_name, from_email, message } = req.body;

  if (!company_name || !from_email || !message) {
    return res.status(400).json({ success: false, error: 'Missing fields' });
  }

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'subhaushsingh@gmail.com',
      subject: `New Inquiry from ${company_name} (${from_email})`,
      html: `
        <h2>New Inquiry</h2>
        <p><b>Company:</b> ${company_name}</p>
        <p><b>Their Email:</b> ${from_email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});


app.get("/health", (req, res) => res.send("OK"))

app.listen(5000, () => console.log('Server running on port 5000'));