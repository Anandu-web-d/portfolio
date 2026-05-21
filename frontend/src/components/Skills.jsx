import { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../utils/data';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SkillBar = ({ name, level, color, visible, delay }) => (
  <div style={{ marginBottom: 14 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
      <span style={{ color: '#F8FAFC', fontSize: '0.88rem', fontWeight: 500 }}>{name}</span>
      <span style={{ color: '#94A3B8', fontSize: '0.8rem' }}>{level}%</span>
    </div>
    <div className="skill-bar-track">
      <motion.div
        className="skill-bar-fill"
        initial={{ width: 0 }}
        animate={{ width: visible ? `${level}%` : 0 }}
        transition={{ duration: 1.4, delay: delay, ease: [0.4, 0, 0.2, 1] }}
        style={{ background: `linear-gradient(90deg, ${color}, #06B6D4)` }}
      />
    </div>
  </div>
);

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const [ref, visible] = useScrollReveal();

  const active = skillCategories.find(c => c.category === activeCategory) || skillCategories[0];

  return (
    <section
      id="skills"
      style={{ padding: '100px 0', background: 'rgba(255,255,255,0.01)', position: 'relative' }}
    >
      <div className="orb orb-primary" style={{ width: 350, height: 350, top: '20%', right: '-5%', opacity: 0.1 }} />

      <div
        ref={ref}
        style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 52 }}
        >
          <div className="section-tag">⚡ Skills</div>
          <h2 className="section-title">
            My Technical{' '}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle">Technologies and tools I use to build modern applications.</p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 48 }}
        >
          {skillCategories.map(({ category, icon }) => (
            <button
              key={category}
              className={`filter-pill ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              id={`skill-tab-${category.toLowerCase()}`}
            >
              {icon} {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}
          className="block md:grid">
          {/* Category Card */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: -20 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="glass-card"
            style={{ padding: 32 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: `${active.color}20`,
                border: `1px solid ${active.color}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
              }}>
                {active.icon}
              </div>
              <div>
                <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '1.2rem', color: '#F8FAFC' }}>
                  {active.category}
                </h3>
                <span style={{ color: '#94A3B8', fontSize: '0.8rem' }}>
                  {active.skills.length} skills
                </span>
              </div>
            </div>
            {active.skills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color={active.color}
                visible={visible}
                delay={i * 0.08}
              />
            ))}
          </motion.div>

          {/* All Category Overview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {skillCategories.map((cat, i) => (
                <motion.div
                  key={cat.category}
                  className={`glass-card-hover ${activeCategory === cat.category ? 'glow-primary' : ''}`}
                  style={{
                    padding: '18px',
                    cursor: 'none',
                    borderColor: activeCategory === cat.category ? `${cat.color}50` : undefined,
                  }}
                  onClick={() => setActiveCategory(cat.category)}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={visible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.07 + 0.3 }}
                >
                  <div style={{ fontSize: '1.4rem', marginBottom: 8 }}>{cat.icon}</div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#F8FAFC', marginBottom: 2 }}>
                    {cat.category}
                  </div>
                  <div style={{ color: '#94A3B8', fontSize: '0.75rem' }}>
                    {cat.skills.length} technologies
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech logos grid */}
            <motion.div
              className="glass-card"
              style={{ padding: 24, marginTop: 14 }}
              initial={{ opacity: 0 }}
              animate={visible ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div style={{ color: '#94A3B8', fontSize: '0.8rem', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Top Technologies
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['React', 'Node.js', 'Flutter', 'MongoDB', 'PHP', 'Python', 'JavaScript', 'Tailwind', 'Firebase', 'MySQL'].map(tech => (
                  <span key={tech} className="neon-badge" style={{ cursor: 'none' }}>{tech}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
