import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { aboutData, personalInfo } from '../utils/data';
import { Mail, MapPin, BookOpen } from 'lucide-react';

const About = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="about" className="section bg-secondary">
      <div className="container-main">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Who I Am
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-10">

            {/* Left: Bio */}
            <div className="space-y-5">
              {aboutData.description.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={visible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-text-muted leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="pt-4 space-y-3"
              >
                <div className="flex items-center gap-3 text-sm">
                  <Mail size={15} className="text-accent flex-shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="text-text-muted hover:text-accent transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={15} className="text-accent flex-shrink-0" />
                  <span className="text-text-muted">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <BookOpen size={15} className="text-accent flex-shrink-0" />
                  <span className="text-text-muted">{personalInfo.education}</span>
                </div>
              </motion.div>
            </div>

            {/* Right: Stats + Traits */}
            <div className="space-y-8">

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4"
              >
                {aboutData.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="card text-center p-4"
                  >
                    <div className="font-heading text-2xl font-bold gradient-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-text-subtle text-xs">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* Traits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="text-text-subtle text-xs uppercase tracking-widest mb-3">Traits</p>
                <div className="flex flex-wrap gap-2">
                  {aboutData.traits.map((trait) => (
                    <span key={trait.label} className="skill-badge">
                      {trait.label}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Interests */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-text-subtle text-xs uppercase tracking-widest mb-3">Interests</p>
                <div className="flex flex-wrap gap-2">
                  {aboutData.interests.map((interest) => (
                    <span key={interest} className="px-3 py-1.5 text-xs text-text-subtle border border-white/5 rounded-md">
                      {interest}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
