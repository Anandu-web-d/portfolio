import { motion } from 'framer-motion';
import { aboutData, personalInfo } from '../utils/data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MapPin, Mail, Phone, GraduationCap } from 'lucide-react';

const About = () => {
  const [ref, visible] = useScrollReveal();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="about" style={{ padding: '100px 0', position: 'relative' }}>
      {/* BG orb */}
      <div className="orb orb-secondary" style={{ width: 400, height: 400, top: '10%', left: '-5%', opacity: 0.1 }} />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={visible ? 'visible' : 'hidden'}
        style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} style={{ marginBottom: 60 }}>
          <div className="section-tag">🧑‍💻 About Me</div>
          <h2 className="section-title">
            Who I Am &{' '}
            <span className="gradient-text">What I Do</span>
          </h2>
          <p className="section-subtitle">
            A passionate developer blending code, creativity, and AI curiosity.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}
          className="block md:grid">
          {/* Left — Description */}
          <motion.div variants={itemVariants}>
            {aboutData.description.map((para, i) => (
              <p key={i} style={{ color: '#94A3B8', lineHeight: 1.8, marginBottom: 20, fontSize: '1rem' }}>
                {para}
              </p>
            ))}

            {/* Contact Info */}
            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: MapPin, value: personalInfo.location, color: '#7C3AED' },
                { icon: Mail, value: personalInfo.email, color: '#06B6D4' },
                { icon: Phone, value: personalInfo.phone, color: '#8B5CF6' },
                { icon: GraduationCap, value: personalInfo.education, color: '#F59E0B' },
              ].map(({ icon: Icon, value, color }) => (
                <div key={value} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: `rgba(${color === '#7C3AED' ? '124,58,237' : color === '#06B6D4' ? '6,182,212' : color === '#8B5CF6' ? '139,92,246' : '245,158,11'},0.15)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={16} color={color} />
                  </div>
                  <span style={{ color: '#94A3B8', fontSize: '0.9rem' }}>{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Traits, Stats, Interests */}
          <motion.div variants={itemVariants}>
            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
              {aboutData.stats.map(({ value, label }) => (
                <div key={label} className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
                  <div style={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    {value}
                  </div>
                  <div style={{ color: '#94A3B8', fontSize: '0.85rem', marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Traits */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ color: '#F8FAFC', fontWeight: 600, marginBottom: 14, fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Personal Traits
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {aboutData.traits.map(({ icon, label }) => (
                  <motion.div
                    key={label}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="glass-card"
                    style={{
                      padding: '8px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: '0.85rem',
                      color: '#F8FAFC',
                      cursor: 'none',
                    }}
                  >
                    <span>{icon}</span> {label}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <div style={{ color: '#F8FAFC', fontWeight: 600, marginBottom: 14, fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Interests
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {aboutData.interests.map(interest => (
                  <span
                    key={interest}
                    className="neon-badge"
                    style={{ background: 'rgba(6,182,212,0.1)', borderColor: 'rgba(6,182,212,0.3)', color: '#06B6D4' }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
