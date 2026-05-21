import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { experiences } from '../utils/data';

const Experience = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="experience" className="section bg-secondary">
      <div className="container-main">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <span className="section-label">Experience</span>
          <h2 className="section-title">Where I've Worked</h2>
          <p className="section-subtitle mb-12">
            A summary of my professional background and work experience.
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/5" />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={visible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative pl-12"
                >
                  {/* Dot */}
                  <div className="absolute left-2.5 top-1.5 timeline-dot" />

                  <div className="card card-hover">
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-heading font-semibold text-text-primary text-lg">
                          {exp.role}
                        </h3>
                        <p className="text-accent text-sm font-medium mt-0.5">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="px-2.5 py-1 bg-accent/10 border border-accent/20 rounded-md text-accent text-xs font-medium">
                          {exp.type}
                        </span>
                        <span className="text-text-subtle text-xs">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-text-muted text-sm mb-4">{exp.description}</p>

                    {/* Responsibilities */}
                    <ul className="space-y-1.5">
                      {exp.responsibilities.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-text-muted">
                          <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
