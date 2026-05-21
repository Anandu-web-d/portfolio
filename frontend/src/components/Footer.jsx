import { motion } from 'framer-motion';
import { personalInfo } from '../utils/data';
import { Mail, Heart } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
  { icon: FaLinkedinIn, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: FaInstagram, href: personalInfo.instagram, label: 'Instagram' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{
      background: 'rgba(0,0,0,0.4)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '48px 0 28px',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 32, marginBottom: 40 }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'Sora, sans-serif',
              fontWeight: 800,
              fontSize: '1.8rem',
              background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: 8,
            }}>
              M.
            </div>
            <div style={{ color: '#94A3B8', fontSize: '0.9rem', maxWidth: 260, lineHeight: 1.6 }}>
              Anandu A (Myles) — Full Stack Developer from Kerala building modern digital experiences.
            </div>
          </div>

          {/* Nav */}
          <div>
            <div style={{ color: '#F8FAFC', fontWeight: 600, fontSize: '0.85rem', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {footerLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.88rem', cursor: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={e => e.target.style.color = '#7C3AED'}
                  onMouseLeave={e => e.target.style.color = '#94A3B8'}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ color: '#F8FAFC', fontWeight: 600, fontSize: '0.85rem', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href={`mailto:${personalInfo.email}`} style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.88rem', cursor: 'none' }}>
                {personalInfo.email}
              </a>
              <span style={{ color: '#94A3B8', fontSize: '0.88rem' }}>{personalInfo.phone}</span>
              <span style={{ color: '#94A3B8', fontSize: '0.88rem' }}>{personalInfo.location}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 24 }} />

        {/* Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#94A3B8', fontSize: '0.82rem' }}>
            Made with{' '}
            <Heart size={13} color="#EF4444" fill="#EF4444" />
            {' '}by{' '}
            <span style={{ color: '#7C3AED', fontWeight: 600 }}>Anandu A (Myles)</span>
            {' '}· © {new Date().getFullYear()}
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -2 }}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#94A3B8',
                  cursor: 'none',
                  transition: 'color 0.3s',
                }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              cursor: 'none',
              fontSize: '1rem',
            }}
            aria-label="Back to top"
            id="footer-back-to-top"
          >
            ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
