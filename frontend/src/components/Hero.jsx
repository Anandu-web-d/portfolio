import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { heroData, personalInfo } from '../utils/data';
import { useTypingEffect } from '../hooks/useTypingEffect';
import profileImg from '../assets/anandu_profile.jpg';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => {
  const typedText = useTypingEffect(heroData.typingWords, 80, 50, 2000);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Ambient glow orbs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-violet-500/5 blur-[100px] pointer-events-none" />

      <div className="container-main w-full py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-20">

          {/* ── Left: Text Content ── */}
          <div className="flex-1 max-w-2xl">

            {/* Greeting badge */}
            <motion.div
              {...fadeUp(0.05)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/25 bg-accent/8 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">
                {heroData.greeting}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              {...fadeUp(0.15)}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold text-text-primary leading-[1.1] mb-5"
            >
              {heroData.heading}
            </motion.h1>

            {/* Typing Effect */}
            <motion.div
              {...fadeUp(0.25)}
              className="flex items-center gap-2 mb-5 h-9"
            >
              <span className="text-lg sm:text-xl font-semibold gradient-text">
                {typedText}
              </span>
              <span className="w-0.5 h-6 bg-accent animate-blink" />
            </motion.div>

            {/* Subheading */}
            <motion.p
              {...fadeUp(0.32)}
              className="text-text-muted text-base sm:text-lg leading-relaxed max-w-xl mb-8"
            >
              {heroData.subheading}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button
                id="hero-view-projects"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary group"
              >
                View Projects
                <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform duration-200" />
              </button>

              <a
                href="#projects"
                id="hero-live-demo"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-emerald-500/30 text-emerald-400 text-sm font-semibold bg-emerald-500/8 hover:bg-emerald-500/15 hover:border-emerald-500/50 transition-all duration-300 active:scale-95"
              >
                <ExternalLink size={15} />
                Live Demos
              </a>

              <a
                href={personalInfo.resumeUrl}
                download
                id="hero-download-resume"
                className="btn-outline group"
              >
                Download CV
                <Download size={15} className="group-hover:translate-y-0.5 transition-transform duration-200" />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              {...fadeUp(0.48)}
              className="flex items-center gap-4"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                id="hero-github"
                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-text-muted hover:text-text-primary hover:border-white/25 hover:bg-white/5 transition-all duration-200"
              >
                <FaGithub size={17} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                id="hero-linkedin"
                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-text-muted hover:text-[#0A66C2] hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/8 transition-all duration-200"
              >
                <FaLinkedinIn size={17} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                id="hero-email"
                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 hover:bg-accent/8 transition-all duration-200"
              >
                <Mail size={17} />
              </a>
              <div className="h-px w-8 bg-white/10" />
              <span className="text-text-subtle text-xs">{personalInfo.location}</span>
            </motion.div>
          </div>

          {/* ── Right: Profile Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 lg:block"
          >
            <div className="relative">
              {/* Outer glow ring — nature green + indigo to match photo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/25 via-emerald-500/15 to-transparent blur-2xl scale-110 pointer-events-none" />

              {/* Photo frame */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-[340px] lg:h-[420px] rounded-3xl overflow-hidden border border-white/12 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
                <img
                  src={profileImg}
                  alt="Anandu A — Full Stack Developer"
                  className="w-full h-full object-cover object-center"
                />
                {/* Subtle overlay gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080E1D]/70 via-transparent to-transparent" />

                {/* Name tag at bottom */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#080E1D]/75 backdrop-blur-md rounded-xl px-4 py-3 border border-white/10">
                  <p className="font-heading font-bold text-text-primary text-sm">Anandu A (Myles)</p>
                  <p className="text-accent text-xs font-semibold">Full Stack Developer</p>
                </div>
              </div>

              {/* Floating badge — tech */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-5 bg-card border border-white/12 rounded-2xl px-3 py-2 shadow-card"
              >
                <p className="text-2xs text-text-subtle uppercase tracking-widest mb-0.5">Stack</p>
                <p className="text-text-primary text-xs font-semibold">MERN · AI</p>
              </motion.div>

              {/* Floating badge — open to work */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-5 bg-card border border-emerald-500/25 rounded-2xl px-3 py-2 shadow-card"
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-emerald-400 text-xs font-semibold">Open to Work</p>
                </div>
                <p className="text-text-subtle text-2xs mt-0.5">Freelance & Full-time</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
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
