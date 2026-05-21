import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { heroData, personalInfo } from '../utils/data';
import { useTypingEffect } from '../hooks/useTypingEffect';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => {
  const typedText = useTypingEffect(heroData.typingWords, 80, 50, 2000);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16"
    >
      <div className="container-main w-full py-20 lg:py-0">
        <div className="max-w-3xl">

          {/* Greeting */}
          <motion.p
            {...fadeUp(0.1)}
            className="text-accent text-sm font-semibold tracking-widest uppercase mb-6"
          >
            {heroData.greeting}
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary leading-tight mb-6"
          >
            {heroData.heading}
          </motion.h1>

          {/* Typing Effect */}
          <motion.div
            {...fadeUp(0.3)}
            className="flex items-center gap-2 mb-6 h-8"
          >
            <span className="text-lg sm:text-xl text-text-muted font-medium">
              {typedText}
            </span>
            <span className="w-0.5 h-6 bg-accent animate-blink" />
          </motion.div>

          {/* Subheading */}
          <motion.p
            {...fadeUp(0.4)}
            className="text-text-muted text-base sm:text-lg leading-relaxed max-w-xl mb-10"
          >
            {heroData.subheading}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.5)}
            className="flex flex-wrap gap-4 mb-12"
          >
            <button
              id="hero-view-projects"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View Projects
              <ArrowDown size={16} />
            </button>
            <a
              href={personalInfo.resumeUrl}
              download
              id="hero-download-resume"
              className="btn-outline"
            >
              Download Resume
              <Download size={16} />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            {...fadeUp(0.6)}
            className="flex items-center gap-4"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              id="hero-github"
              className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-text-muted hover:text-text-primary hover:border-white/20 transition-all duration-200"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              id="hero-linkedin"
              className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-text-muted hover:text-text-primary hover:border-white/20 transition-all duration-200"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              id="hero-email"
              className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-text-muted hover:text-text-primary hover:border-white/20 transition-all duration-200"
            >
              <Mail size={18} />
            </a>
            <div className="h-px w-8 bg-white/10" />
            <span className="text-text-subtle text-xs">{personalInfo.location}</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-text-subtle"
      >
        <span className="text-2xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
