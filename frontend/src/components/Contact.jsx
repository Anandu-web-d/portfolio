import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { personalInfo } from '../utils/data';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const Contact = () => {
  const [ref, visible] = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setSending(true);
    try {
      await axios.post(`${BACKEND_URL}/api/contact`, form);
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section bg-secondary">
      <Toaster position="top-right" toastOptions={{
        style: { background: '#1A2235', color: '#F9FAFB', border: '1px solid rgba(255,255,255,0.08)' }
      }} />

      <div className="container-main">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mb-12">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Left Info Column */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="font-heading font-semibold text-text-primary text-lg mb-4">
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <a href={`mailto:${personalInfo.email}`}
                    className="flex items-start gap-3 group">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                      <Mail size={15} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-text-subtle text-xs mb-0.5">Email</p>
                      <p className="text-text-muted text-sm group-hover:text-accent transition-colors break-all">
                        {personalInfo.email}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                      <MapPin size={15} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-text-subtle text-xs mb-0.5">Location</p>
                      <p className="text-text-muted text-sm">{personalInfo.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                      <Phone size={15} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-text-subtle text-xs mb-0.5">Phone</p>
                      <p className="text-text-muted text-sm">{personalInfo.phone}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-text-subtle text-xs uppercase tracking-widest mb-3">Socials</p>
                <div className="flex gap-3">
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" id="contact-github"
                    className="w-10 h-10 rounded-lg border border-white/8 flex items-center justify-center text-text-muted hover:text-text-primary hover:border-white/20 transition-all">
                    <FaGithub size={17} />
                  </a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" id="contact-linkedin"
                    className="w-10 h-10 rounded-lg border border-white/8 flex items-center justify-center text-text-muted hover:text-text-primary hover:border-white/20 transition-all">
                    <FaLinkedinIn size={17} />
                  </a>
                </div>
              </div>

              {/* Availability note */}
              <div className="card">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-sm font-medium">Available for opportunities</span>
                </div>
                <p className="text-text-subtle text-xs leading-relaxed">
                  Open to full stack, frontend, or freelance opportunities.
                </p>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="card space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-text-subtle text-xs mb-1.5">Name *</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="input"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-text-subtle text-xs mb-1.5">Email *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="input"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-text-subtle text-xs mb-1.5">Subject</label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="input"
                  />
                </div>

                <div>
                  <label className="block text-text-subtle text-xs mb-1.5">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    className="input resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  disabled={sending}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
