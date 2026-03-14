import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
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

app.listen(5000, () => console.log('Server running on port 5000'));