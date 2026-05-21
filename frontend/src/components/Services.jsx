import { motion } from 'framer-motion';
import { services } from '../utils/data';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Services = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="services" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="orb orb-secondary" style={{ width: 400, height: 400, top: '10%', right: '-5%', opacity: 0.1 }} />

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
          <div className="section-tag">🛠️ Services</div>
          <h2 className="section-title">
            What I Can{' '}
            <span className="gradient-text">Do For You</span>
          </h2>
          <p className="section-subtitle">End-to-end services from concept to deployment.</p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 24 }}>
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 40 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card"
              style={{ padding: 32, cursor: 'none', position: 'relative', overflow: 'hidden' }}
            >
              {/* Gradient corner */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 80,
                height: 80,
                background: `radial-gradient(circle at top right, ${svc.color}25, transparent)`,
              }} />

              <div style={{
                width: 60,
                height: 60,
                borderRadius: 16,
                background: `${svc.color}15`,
                border: `1px solid ${svc.color}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.8rem',
                marginBottom: 20,
                transition: 'all 0.3s',
              }}>
                {svc.icon}
              </div>

              <h3 style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: '#F8FAFC',
                marginBottom: 10,
              }}>
                {svc.title}
              </h3>

              <p style={{ color: '#94A3B8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: 20 }}>
                {svc.description}
              </p>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {svc.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#94A3B8', fontSize: '0.82rem' }}>
                    <span style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: svc.color,
                      flexShrink: 0,
                    }} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
