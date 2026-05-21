import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../utils/data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ExternalLink, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web' },
  { id: 'ai', label: 'AI' },
  { id: 'mobile', label: 'Mobile' },
];

const ProjectCard = ({ project, index, visible }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 40 }}
    animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -8 }}
    className="glass-card"
    style={{
      overflow: 'hidden',
      cursor: 'none',
      borderTop: `2px solid ${project.color}`,
    }}
  >
    {/* Card Top Banner */}
    <div style={{
      height: 140,
      background: `linear-gradient(135deg, ${project.color}25, rgba(6,182,212,0.15))`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* BG grid pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `radial-gradient(${project.color}20 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {project.featured && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 8 }}>
            <Star size={12} color="#F59E0B" fill="#F59E0B" />
            <span style={{ color: '#F59E0B', fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Featured
            </span>
          </div>
        )}
        <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 500 }}>{project.type}</div>
      </div>

      <div style={{
        width: 56,
        height: 56,
        borderRadius: 16,
        background: `${project.color}25`,
        border: `1px solid ${project.color}40`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.6rem',
        position: 'relative',
        zIndex: 1,
      }}>
        {project.category === 'web' ? '🌐' : project.category === 'ai' ? '🤖' : '📱'}
      </div>
    </div>

    {/* Card Body */}
    <div style={{ padding: '24px' }}>
      <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#F8FAFC', marginBottom: 4 }}>
        {project.title}
      </h3>
      <div style={{ color: project.color, fontSize: '0.82rem', fontWeight: 600, marginBottom: 12 }}>
        {project.subtitle}
      </div>
      <p style={{ color: '#94A3B8', fontSize: '0.87rem', lineHeight: 1.6, marginBottom: 16 }}>
        {project.description}
      </p>

      {/* Key features */}
      <ul style={{ marginBottom: 16, display: 'flex', flexDirection: 'column', gap: 4 }}>
        {project.features.slice(0, 3).map(f => (
          <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, color: '#94A3B8', fontSize: '0.82rem' }}>
            <span style={{ color: project.color, marginTop: 2 }}>▸</span> {f}
          </li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
        {project.techStack.map(tech => (
          <span key={tech} className="neon-badge" style={{
            background: `${project.color}15`,
            borderColor: `${project.color}30`,
            color: project.color,
          }}>
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: 12 }}>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          id={`project-${project.id}-github`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            color: '#94A3B8',
            textDecoration: 'none',
            fontSize: '0.82rem',
            fontWeight: 500,
            padding: '8px 14px',
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.08)',
            transition: 'all 0.3s',
            cursor: 'none',
          }}
        >
          <FaGithub size={14} /> Code
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          id={`project-${project.id}-demo`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            color: project.color,
            textDecoration: 'none',
            fontSize: '0.82rem',
            fontWeight: 500,
            padding: '8px 14px',
            borderRadius: 8,
            border: `1px solid ${project.color}30`,
            background: `${project.color}10`,
            transition: 'all 0.3s',
            cursor: 'none',
          }}
        >
          <ExternalLink size={14} /> Live Demo
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [ref, visible] = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section
      id="projects"
      style={{ padding: '100px 0', background: 'rgba(255,255,255,0.01)', position: 'relative' }}
    >
      <div className="orb orb-primary" style={{ width: 450, height: 450, top: '5%', left: '-8%', opacity: 0.08 }} />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}
      >
        {/* Header */}
        <motion.div style={{ marginBottom: 48 }}>
          <div className="section-tag">🚀 Projects</div>
          <h2 className="section-title">
            Things I've{' '}
            <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subtitle">A selection of real-world projects that showcase my skills.</p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{ display: 'flex', gap: 10, marginBottom: 40, flexWrap: 'wrap' }}
        >
          {categories.map(({ id, label }) => (
            <button
              key={id}
              className={`filter-pill ${activeFilter === id ? 'active' : ''}`}
              onClick={() => setActiveFilter(id)}
              id={`project-filter-${id}`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} visible={visible} />
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
