import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../utils/data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const contactDetails = [
  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: '#7C3AED' },
  { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: '#06B6D4' },
  { icon: MapPin, label: 'Location', value: personalInfo.location, href: '#', color: '#8B5CF6' },
];

const socialLinks = [
  { icon: FaGithub, href: personalInfo.github, label: 'GitHub', color: '#F8FAFC' },
  { icon: FaLinkedinIn, href: personalInfo.linkedin, label: 'LinkedIn', color: '#0A66C2' },
  { icon: FaInstagram, href: personalInfo.instagram, label: 'Instagram', color: '#E1306C' },
];

const Contact = () => {
  const [ref, visible] = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setSending(true);
    try {
      await axios.post(`${BACKEND_URL}/api/contact`, form);
      toast.success('Message sent successfully! I\'ll get back to you soon. 🚀');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast.error('Something went wrong. Please try again or email me directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" style={{ padding: '100px 0', position: 'relative' }}>
      <Toaster
        position="top-right"
        toastOptions={{
          style: { background: '#1e293b', color: '#F8FAFC', border: '1px solid rgba(124,58,237,0.3)' },
        }}
      />

      <div className="orb orb-primary" style={{ width: 400, height: 400, bottom: '5%', left: '-5%', opacity: 0.12 }} />
      <div className="orb orb-secondary" style={{ width: 300, height: 300, top: '10%', right: '-3%', opacity: 0.1 }} />

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 60 }}
        >
          <div className="section-tag">📬 Contact</div>
          <h2 className="section-title">
            Let's Build Something{' '}
            <span className="gradient-text">Great Together</span>
          </h2>
          <p className="section-subtitle">
            Open to internships, collaborations, freelance work, and exciting tech projects.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48, alignItems: 'start' }}
          className="block md:grid">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contactDetails.map(({ icon: Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                style={{ textDecoration: 'none', cursor: 'none' }}
              >
                <motion.div
                  whileHover={{ x: 6 }}
                  className="glass-card"
                  style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14, cursor: 'none' }}
                >
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={18} color={color} />
                  </div>
                  <div>
                    <div style={{ color: '#94A3B8', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>
                      {label}
                    </div>
                    <div style={{ color: '#F8FAFC', fontWeight: 500, fontSize: '0.9rem' }}>{value}</div>
                  </div>
                </motion.div>
              </a>
            ))}

            {/* Social */}
            <div className="glass-card" style={{ padding: '20px', marginTop: 8 }}>
              <div style={{ color: '#94A3B8', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 16 }}>
                Find Me Online
              </div>
              <div style={{ display: 'flex', gap: 14 }}>
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.2, y: -3 }}
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#94A3B8',
                      transition: 'color 0.3s',
                      cursor: 'none',
                    }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card"
            style={{ padding: 36 }}
          >
            <form onSubmit={handleSubmit} id="contact-form">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ color: '#94A3B8', fontSize: '0.8rem', display: 'block', marginBottom: 6 }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="form-input"
                    id="contact-name"
                    required
                  />
                </div>
                <div>
                  <label style={{ color: '#94A3B8', fontSize: '0.8rem', display: 'block', marginBottom: 6 }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="form-input"
                    id="contact-email"
                    required
                  />
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={{ color: '#94A3B8', fontSize: '0.8rem', display: 'block', marginBottom: 6 }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project collaboration, internship opportunity..."
                  className="form-input"
                  id="contact-subject"
                />
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ color: '#94A3B8', fontSize: '0.8rem', display: 'block', marginBottom: 6 }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className="form-input"
                  id="contact-message"
                  rows={5}
                  style={{ resize: 'vertical', minHeight: 120 }}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={sending}
                id="contact-submit"
                style={{ width: '100%', justifyContent: 'center', opacity: sending ? 0.7 : 1 }}
              >
                <Send size={16} />
                <span>{sending ? 'Sending...' : 'Send Message'}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
