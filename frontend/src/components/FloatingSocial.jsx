import { motion } from 'framer-motion';
import { personalInfo } from '../utils/data';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const socials = [
  { icon: FaGithub, href: personalInfo.github, label: 'GitHub', id: 'social-github' },
  { icon: FaLinkedinIn, href: personalInfo.linkedin, label: 'LinkedIn', id: 'social-linkedin' },
  { icon: FaInstagram, href: personalInfo.instagram, label: 'Instagram', id: 'social-instagram' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', id: 'social-email' },
];

const FloatingSocial = () => (
  <motion.div
    className="social-sidebar"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1.5, duration: 0.6 }}
  >
    {socials.map(({ icon: Icon, href, label, id }) => (
      <motion.a
        key={label}
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        id={id}
        className="social-sidebar-link"
        whileHover={{ scale: 1.2 }}
      >
        <Icon size={18} />
      </motion.a>
    ))}
  </motion.div>
);

export default FloatingSocial;
