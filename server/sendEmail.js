const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL || 'kamenzouy@outlook.com';

app.post('/api/send-email', async (req, res) => {
    try {
        if (!RESEND_API_KEY) {
            return res.status(500).json({ error: 'RESEND_API_KEY not configured on server' });
        }

        const { name, email, phone, lessonType, package: pkg, dates, message, to } = req.body;
        const toAddr = to || RECEIVER_EMAIL;

        const html = `
      <h3>New booking request</h3>
      <ul>
        <li><strong>Name:</strong> ${name || ''}</li>
        <li><strong>Email:</strong> ${email || ''}</li>
        <li><strong>Phone:</strong> ${phone || ''}</li>
        <li><strong>Lesson:</strong> ${lessonType || ''}</li>
        <li><strong>Package:</strong> ${pkg || ''}</li>
        <li><strong>Dates:</strong> ${dates || ''}</li>
        <li><strong>Message:</strong> ${message || ''}</li>
      </ul>
    `;

        const resp = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: `Booking <booking@${process.env.EMAIL_DOMAIN || 'yourdomain.com'}>`,
                to: [toAddr],
                subject: `Booking request: ${lessonType || 'lesson'}`,
                html,
            }),
        });

        if (!resp.ok) {
            const errText = await resp.text();
            return res.status(resp.status).json({ error: errText });
        }

        const data = await resp.json();
        return res.json({ ok: true, data });
    } catch (err) {
        console.error('send-email error', err);
        return res.status(500).json({ error: 'server error' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`sendEmail server listening on ${PORT}`));
