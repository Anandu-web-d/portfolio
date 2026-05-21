import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../utils/data';
import { ExternalLink } from 'lucide-react';
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
    <div className="h-2 rounded-t-lg gradient-bg mb-5 -mx-6 -mt-6" />

    {/* Type badge */}
    <div className="flex items-center justify-between mb-4">
      <span className="tech-tag">{project.type}</span>
      {project.featured && (
        <span className="px-2 py-0.5 text-2xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full uppercase tracking-wider">
          Featured
        </span>
      )}
    </div>

    {/* Title */}
    <h3 className="font-heading font-semibold text-text-primary text-lg mb-1">
      {project.title}
    </h3>
    <p className="text-accent text-sm font-medium mb-3">{project.subtitle}</p>

    {/* Description */}
    <p className="text-text-muted text-sm leading-relaxed mb-4 flex-grow">
      {project.description}
    </p>

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
    <div className="flex gap-3 mt-auto pt-2 border-t border-white/5">
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        id={`project-${project.id}-github`}
        className="flex items-center gap-1.5 text-text-muted hover:text-text-primary transition-colors text-sm font-medium"
      >
        <FaGithub size={15} />
        Code
      </a>
      <a
        href={project.demo}
        target="_blank"
        rel="noreferrer"
        id={`project-${project.id}-demo`}
        className="flex items-center gap-1.5 text-accent hover:text-accent-light transition-colors text-sm font-medium"
      >
        <ExternalLink size={15} />
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
          <p className="section-subtitle mb-8">
            A selection of projects that showcase my skills and interests.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`project-filter-${cat.id}`}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  filter === cat.id
                    ? 'bg-accent text-white shadow-accent'
                    : 'bg-white/5 text-text-muted hover:bg-white/8 hover:text-text-primary border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5"
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
