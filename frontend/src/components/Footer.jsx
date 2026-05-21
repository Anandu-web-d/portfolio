import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { navLinks, personalInfo } from '../utils/data';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-primary pt-16 pb-8">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#hero" className="inline-flex items-center gap-2 mb-3 cursor-pointer">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <span className="font-heading font-bold text-white text-sm">A</span>
              </div>
              <span className="font-heading font-semibold text-text-primary">
                Anandu A
              </span>
            </a>
            <p className="text-text-muted text-sm max-w-xs">
              Full Stack Developer focused on building clean, responsive, and scalable web applications.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-muted hover:text-text-primary text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" 
               className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:bg-white/10 hover:text-text-primary transition-all">
              <FaGithub size={16} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
               className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:bg-white/10 hover:text-text-primary transition-all">
              <FaLinkedinIn size={16} />
            </a>
            <a href={personalInfo.instagram} target="_blank" rel="noreferrer"
               className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:bg-white/10 hover:text-text-primary transition-all">
              <FaInstagram size={16} />
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-subtle">
          <p>© {year} Anandu A. All rights reserved.</p>
          <p>Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
