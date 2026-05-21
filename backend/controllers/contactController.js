// controllers/contactController.js
import Contact from '../models/Contact.js';
import nodemailer from 'nodemailer';

// Helper: send notification email to Anandu
const sendNotificationEmail = async ({ name, email, subject, message }) => {
  // Only send if email credentials are provided
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('📧 Email credentials not set — skipping email notification');
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,  // Use Gmail App Password (not regular password)
    },
  });

  // Email to Anandu (notification)
  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER || 'anandusachu1180@gmail.com',
    subject: `📬 New Contact: ${subject || 'Portfolio Message'}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0F172A; color: #F8FAFC; padding: 32px; border-radius: 12px;">
        <h2 style="color: #7C3AED; margin-bottom: 24px;">New Portfolio Message 🚀</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #94A3B8; width: 100px;">Name:</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
          <tr><td style="padding: 8px 0; color: #94A3B8;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #06B6D4;">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #94A3B8;">Subject:</td><td style="padding: 8px 0;">${subject || '—'}</td></tr>
        </table>
        <div style="margin-top: 20px; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 8px; border-left: 3px solid #7C3AED;">
          <div style="color: #94A3B8; font-size: 0.85rem; margin-bottom: 8px;">Message:</div>
          <div style="line-height: 1.6;">${message}</div>
        </div>
        <div style="margin-top: 20px; color: #94A3B8; font-size: 0.8rem;">
          Sent from your portfolio at ${new Date().toLocaleString()}
        </div>
      </div>
    `,
  });

  // Auto-reply to sender
  await transporter.sendMail({
    from: `"Anandu A (Myles)" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Thanks for reaching out, ${name}! 👋`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0F172A; color: #F8FAFC; padding: 32px; border-radius: 12px;">
        <h2 style="background: linear-gradient(135deg, #7C3AED, #06B6D4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 16px;">Hey ${name}! 👋</h2>
        <p style="color: #94A3B8; line-height: 1.7; margin-bottom: 16px;">
          Thanks for reaching out through my portfolio! I've received your message and will get back to you as soon as possible — usually within 24–48 hours.
        </p>
        <p style="color: #94A3B8; line-height: 1.7; margin-bottom: 24px;">
          In the meantime, feel free to check out my projects on GitHub or connect with me on LinkedIn.
        </p>
        <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; color: #94A3B8; font-size: 0.85rem;">
          <strong style="color: #F8FAFC;">Anandu A (Myles)</strong><br/>
          Full Stack Developer | Flutter Developer | AI Enthusiast<br/>
          Kerala, India
        </div>
      </div>
    `,
  });
};

// POST /api/contact
export const submitContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
    }

    // Save to MongoDB
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
      ipAddress: req.ip,
    });

    // Send emails (non-blocking — don't fail if email fails)
    sendNotificationEmail({ name, email, subject, message }).catch(err => {
      console.error('⚠️ Email send failed (non-critical):', err.message);
    });

    res.status(201).json({
      success: true,
      message: 'Message received! I\'ll get back to you soon.',
      data: { id: contact._id },
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/contact (admin — basic listing)
export const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(50);
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (err) {
    next(err);
  }
};
