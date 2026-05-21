import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { skillCategories } from '../utils/data';

const Skills = () => {
  const [ref, visible] = useScrollReveal();
  const [active, setActive] = useState(skillCategories[0].category);

  const current = skillCategories.find(c => c.category === active);

  return (
    <section id="skills" className="section">
      <div className="container-main">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <span className="section-label">Skills</span>
          <h2 className="section-title">What I Work With</h2>
          <p className="section-subtitle mb-10">
            Technologies and tools I use to build scalable applications.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {skillCategories.map((cat) => (
              <button
                key={cat.category}
                id={`skills-tab-${cat.category.toLowerCase()}`}
                onClick={() => setActive(cat.category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === cat.category
                    ? 'bg-accent text-white shadow-accent'
                    : 'bg-white/5 text-text-muted hover:bg-white/8 hover:text-text-primary border border-white/5'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="card"
          >
            <div className="flex flex-wrap gap-2.5">
              {current?.skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* All skills overview */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((cat, i) => (
              <motion.button
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                id={`skills-card-${cat.category.toLowerCase()}`}
                onClick={() => setActive(cat.category)}
                className={`card card-hover text-left transition-all duration-200 ${
                  active === cat.category ? 'border-accent/30 bg-accent/5' : ''
                }`}
              >
                <p className="text-xs text-text-subtle uppercase tracking-widest mb-2 font-medium">
                  {cat.category}
                </p>
                <p className="text-text-muted text-sm leading-relaxed">
                  {cat.skills.slice(0, 3).join(', ')}
                  {cat.skills.length > 3 && (
                    <span className="text-accent"> +{cat.skills.length - 3} more</span>
                  )}
                </p>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
