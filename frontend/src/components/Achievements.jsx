import { motion } from 'framer-motion';
import { achievements } from '../utils/data';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Achievements = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section
      id="achievements"
      style={{ padding: '100px 0', background: 'rgba(255,255,255,0.01)', position: 'relative' }}
    >
      <div className="orb orb-primary" style={{ width: 350, height: 350, bottom: '10%', right: '-5%', opacity: 0.1 }} />

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
          <div className="section-tag">🏆 Achievements</div>
          <h2 className="section-title">
            Milestones &{' '}
            <span className="gradient-text">Highlights</span>
          </h2>
          <p className="section-subtitle">Key moments and accomplishments in my development journey.</p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {achievements.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card"
              style={{ padding: '24px', display: 'flex', gap: 20, alignItems: 'flex-start', cursor: 'none' }}
            >
              <div className="achievement-icon">
                {item.icon}
              </div>
              <div>
                <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#F8FAFC', marginBottom: 6 }}>
                  {item.title}
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.86rem', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="glass-card"
          style={{
            marginTop: 40,
            padding: '40px 48px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(6,182,212,0.08))',
            borderColor: 'rgba(124,58,237,0.2)',
          }}
        >
          <div style={{ fontSize: '2.5rem', marginBottom: 16, lineHeight: 1 }}>"</div>
          <p style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            fontWeight: 600,
            color: '#F8FAFC',
            lineHeight: 1.6,
            maxWidth: 640,
            margin: '0 auto 12px',
          }}>
            Focused on building clean, modern, and impactful digital experiences.
          </p>
          <div style={{ color: '#94A3B8', fontSize: '0.88rem' }}>
            — Anandu A (Myles)
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Achievements;
