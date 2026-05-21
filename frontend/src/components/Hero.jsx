import { motion } from 'framer-motion';
import { Download, Eye, Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { heroData, personalInfo } from '../utils/data';
import { useTypingEffect } from '../hooks/useTypingEffect';

const socialLinks = [
  { icon: FaGithub, href: personalInfo.github, label: 'GitHub', id: 'hero-github' },
  { icon: FaLinkedinIn, href: personalInfo.linkedin, label: 'LinkedIn', id: 'hero-linkedin' },
  { icon: FaInstagram, href: personalInfo.instagram, label: 'Instagram', id: 'hero-instagram' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const Hero = () => {
  const typedText = useTypingEffect(heroData.typingWords);

  return (
    <section
      id="hero"
      className="animated-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 80,
      }}
    >
      {/* Orbs */}
      <div className="orb orb-primary" style={{ width: 500, height: 500, top: '-10%', right: '-5%', opacity: 0.25 }} />
      <div className="orb orb-secondary" style={{ width: 400, height: 400, bottom: '-5%', left: '-5%', opacity: 0.2 }} />
      <div className="orb orb-primary" style={{ width: 200, height: 200, bottom: '20%', right: '20%', opacity: 0.15 }} />

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 60,
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
        className="flex-col md:grid"
      >
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} style={{ marginBottom: 16 }}>
            <span className="section-tag">
              <span>👋</span> {heroData.greeting}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: 'clamp(2.4rem, 5.5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#F8FAFC',
              marginBottom: 8,
            }}
          >
            {heroData.heading}
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            className="gradient-text-alt"
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: 'clamp(2.4rem, 5.5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: 24,
              display: 'block',
            }}
          >
            {heroData.headingHighlight}
          </motion.h1>

          {/* Typing Effect */}
          <motion.div variants={itemVariants} style={{ marginBottom: 20 }}>
            <span style={{ color: '#94A3B8', fontSize: '1.1rem', fontWeight: 400 }}>
              I'm a{' '}
            </span>
            <span
              style={{
                color: '#06B6D4',
                fontWeight: 600,
                fontSize: '1.1rem',
                fontFamily: 'Sora, sans-serif',
              }}
            >
              {typedText}
              <span
                style={{
                  display: 'inline-block',
                  width: 2,
                  height: '1.1em',
                  background: '#7C3AED',
                  marginLeft: 2,
                  verticalAlign: 'text-bottom',
                  animation: 'pulse 1s ease-in-out infinite',
                }}
              />
            </span>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 540, marginBottom: 36 }}
          >
            {heroData.subheading}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 40 }}>
            <button
              className="btn-primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              id="hero-view-projects"
            >
              <Eye size={16} />
              <span>View Projects</span>
            </button>
            <a href={personalInfo.resumeUrl} download className="btn-outline" id="hero-download-resume">
              <Download size={16} />
              <span>Download Resume</span>
            </a>
            <button
              className="btn-outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              id="hero-contact"
              style={{ border: '1px solid rgba(6,182,212,0.4)', color: '#06B6D4' }}
            >
              <Mail size={16} />
              <span>Contact Me</span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <span style={{ color: '#94A3B8', fontSize: '0.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Find me on
            </span>
            <div style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.2)' }} />
            {socialLinks.map(({ icon: Icon, href, label, id }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                id={id}
                whileHover={{ scale: 1.2, color: '#7C3AED' }}
                style={{ color: '#94A3B8', transition: 'color 0.3s', cursor: 'none' }}
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Avatar Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="hidden lg:flex"
          style={{ position: 'relative', alignItems: 'center', justifyContent: 'center' }}
        >
          {/* Orbit ring */}
          <div
            style={{
              width: 320,
              height: 320,
              borderRadius: '50%',
              border: '1px solid rgba(124, 58, 237, 0.2)',
              position: 'absolute',
              animation: 'spin 20s linear infinite',
            }}
          />
          <div
            style={{
              width: 270,
              height: 270,
              borderRadius: '50%',
              border: '1px dashed rgba(6,182,212,0.2)',
              position: 'absolute',
              animation: 'spin 12s linear infinite reverse',
            }}
          />

          {/* Avatar container */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
            style={{
              width: 220,
              height: 220,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(6,182,212,0.2))',
              border: '2px solid rgba(124,58,237,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 60px rgba(124,58,237,0.3)',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <img
              src="/profile.jpg"
              alt="Anandu A (Myles)"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
              onError={e => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback */}
            <div style={{
              display: 'none',
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Sora, sans-serif',
              fontSize: '4rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              M
            </div>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, delay: 0 }}
            className="glass-card"
            style={{
              position: 'absolute',
              top: 20,
              right: -10,
              padding: '8px 16px',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: '#8B5CF6',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span>⚡</span> Full Stack Dev
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, delay: 1 }}
            className="glass-card"
            style={{
              position: 'absolute',
              bottom: 30,
              left: -20,
              padding: '8px 16px',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: '#06B6D4',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span>📱</span> Flutter Dev
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, delay: 2 }}
            className="glass-card"
            style={{
              position: 'absolute',
              bottom: 80,
              right: -30,
              padding: '8px 16px',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: '#F59E0B',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span>🤖</span> AI Curious
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          cursor: 'none',
        }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span style={{ color: '#94A3B8', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 24,
            height: 36,
            border: '2px solid rgba(124,58,237,0.4)',
            borderRadius: 12,
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 6,
          }}
        >
          <div style={{ width: 3, height: 8, borderRadius: 2, background: '#7C3AED' }} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
