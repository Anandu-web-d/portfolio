import { motion } from 'framer-motion';
import { experiences } from '../utils/data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle } from 'lucide-react';

const Experience = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="experience" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="orb orb-secondary" style={{ width: 400, height: 400, bottom: '10%', left: '-5%', opacity: 0.1 }} />

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 60 }}
        >
          <div className="section-tag">💼 Experience</div>
          <h2 className="section-title">
            My Professional{' '}
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">Real-world experience that shaped my development skills.</p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
          {/* Center line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: 2,
            background: 'linear-gradient(180deg, #7C3AED, #06B6D4, transparent)',
            transform: 'translateX(-50%)',
            borderRadius: 2,
          }} className="hidden md:block" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2, ease: 'easeOut' }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                gap: 24,
                marginBottom: 48,
                alignItems: 'start',
              }}
              className="block md:grid"
            >
              {/* Left card */}
              {i % 2 === 0 ? (
                <div className="glass-card glass-card-hover" style={{ padding: 28 }}>
                  <ExperienceCard exp={exp} />
                </div>
              ) : <div />}

              {/* Center dot */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, paddingTop: 24 }}
                className="hidden md:flex">
                <motion.div
                  animate={{ boxShadow: [`0 0 15px ${exp.color}60`, `0 0 30px ${exp.color}80`, `0 0 15px ${exp.color}60`] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${exp.color}, #06B6D4)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.3rem',
                    border: '3px solid #0F172A',
                    zIndex: 1,
                  }}
                >
                  {exp.icon}
                </motion.div>
              </div>

              {/* Right card */}
              {i % 2 !== 0 ? (
                <div className="glass-card glass-card-hover" style={{ padding: 28 }}>
                  <ExperienceCard exp={exp} />
                </div>
              ) : <div />}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const ExperienceCard = ({ exp }) => (
  <div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
      <span style={{ fontSize: '1.5rem' }}>{exp.icon}</span>
      <span style={{
        padding: '3px 10px',
        borderRadius: 6,
        fontSize: '0.72rem',
        fontWeight: 600,
        background: exp.type === 'Internship' ? 'rgba(124,58,237,0.15)' : 'rgba(6,182,212,0.15)',
        border: `1px solid ${exp.type === 'Internship' ? 'rgba(124,58,237,0.3)' : 'rgba(6,182,212,0.3)'}`,
        color: exp.type === 'Internship' ? '#8B5CF6' : '#06B6D4',
      }}>
        {exp.type}
      </span>
    </div>
    <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: '1.15rem', fontWeight: 700, color: '#F8FAFC', marginBottom: 4 }}>
      {exp.role}
    </h3>
    <div style={{ color: exp.color, fontWeight: 600, fontSize: '0.9rem', marginBottom: 4 }}>
      {exp.company}
    </div>
    <div style={{ color: '#94A3B8', fontSize: '0.8rem', marginBottom: 14 }}>
      📅 {exp.period}
    </div>
    <p style={{ color: '#94A3B8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: 16 }}>
      {exp.description}
    </p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {exp.responsibilities.map((r, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
          <CheckCircle size={14} color={exp.color} style={{ flexShrink: 0, marginTop: 2 }} />
          <span style={{ color: '#94A3B8', fontSize: '0.84rem', lineHeight: 1.5 }}>{r}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Experience;
