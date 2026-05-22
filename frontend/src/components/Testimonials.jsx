import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../utils/data';

const TestimonialCard = ({ t, index }) => {
  const [ref, visible] = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="relative card card-hover flex flex-col gap-5 group"
    >
      {/* Quote icon */}
      <div className="absolute top-5 right-5 text-accent/15 group-hover:text-accent/25 transition-colors duration-300">
        <Quote size={36} />
      </div>

      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
        ))}
      </div>

      {/* Quote text */}
      <p className="text-text-muted text-sm leading-relaxed flex-grow pr-6">
        "{t.quote}"
      </p>

      {/* Divider */}
      <div className="border-t border-white/5" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-violet-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {t.initials}
        </div>
        <div>
          <p className="text-text-primary text-sm font-semibold">{t.name}</p>
          <p className="text-text-subtle text-xs">{t.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container-main">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What People Say</h2>
          <p className="section-subtitle mb-12">
            Feedback from teammates, mentors, and collaborators I've worked with.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} t={t} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
