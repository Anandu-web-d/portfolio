import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../utils/data';
import { ExternalLink, TrendingUp } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'ai', label: 'AI' },
  { id: 'mobile', label: 'Mobile' },
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="card card-hover group flex flex-col h-full"
  >
    {/* Card Top Banner */}
    <div className="h-1.5 rounded-t-xl gradient-bg mb-5 -mx-6 -mt-6" />

    {/* Type badge + Featured + Metric */}
    <div className="flex items-start justify-between mb-4 gap-2 flex-wrap">
      <div className="flex items-center gap-2">
        <span className="tech-tag">{project.type}</span>
        {project.featured && (
          <span className="px-2 py-0.5 text-2xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full uppercase tracking-wider">
            Featured
          </span>
        )}
      </div>
      {project.metric && (
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
          <TrendingUp size={11} className="text-emerald-400" />
          <span className="text-emerald-400 text-2xs font-bold">{project.metric.value}</span>
        </div>
      )}
    </div>

    {/* Title */}
    <h3 className="font-heading font-bold text-text-primary text-lg mb-0.5">
      {project.title}
    </h3>
    <p className="text-accent text-sm font-semibold mb-3">{project.subtitle}</p>

    {/* Description */}
    <p className="text-text-muted text-sm leading-relaxed mb-4 flex-grow">
      {project.description}
    </p>

    {/* Metric label (shown inline with description) */}
    {project.metric && (
      <p className="text-text-subtle text-xs mb-4 italic">
        ⚡ {project.metric.value} — {project.metric.label}
      </p>
    )}

    {/* Features */}
    <ul className="space-y-1.5 mb-5">
      {project.features.slice(0, 3).map((f) => (
        <li key={f} className="flex items-start gap-2 text-sm text-text-muted">
          <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
          {f}
        </li>
      ))}
    </ul>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-1.5 mb-5">
      {project.techStack.map((tech) => (
        <span key={tech} className="tech-tag">{tech}</span>
      ))}
    </div>

    {/* Links */}
    <div className="flex gap-3 mt-auto pt-4 border-t border-white/5">
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        id={`project-${project.id}-github`}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/15 text-text-muted hover:text-text-primary transition-all duration-200 text-sm font-medium flex-1 justify-center"
      >
        <FaGithub size={14} />
        Code
      </a>
      <a
        href={project.demo}
        target="_blank"
        rel="noreferrer"
        id={`project-${project.id}-demo`}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 border border-accent/25 hover:border-accent/40 text-accent hover:text-accent-light transition-all duration-200 text-sm font-semibold flex-1 justify-center"
      >
        <ExternalLink size={14} />
        Live Demo
      </a>
    </div>
  </motion.div>
);

const Projects = () => {
  const [ref, visible] = useScrollReveal();
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container-main">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <span className="section-label">Projects</span>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-subtitle mb-10">
            A selection of projects that showcase my skills — from real-time systems to AI-integrated platforms.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`project-filter-${cat.id}`}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  filter === cat.id
                    ? 'bg-accent text-white shadow-accent'
                    : 'bg-white/5 text-text-muted hover:bg-white/8 hover:text-text-primary border border-white/8'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
