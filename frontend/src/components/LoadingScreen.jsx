import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShow(false);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return p + Math.random() * 12;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Orbs */}
          <div className="orb orb-primary" style={{ width: 300, height: 300, top: '10%', left: '10%' }} />
          <div className="orb orb-secondary" style={{ width: 250, height: 250, bottom: '10%', right: '10%' }} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
          >
            <div className="loading-logo">M.</div>
            <div style={{ color: '#94A3B8', fontSize: '0.85rem', marginBottom: 24, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Anandu A — Portfolio
            </div>
            <div className="loading-bar-track">
              <div
                className="loading-bar-fill"
                style={{ width: `${Math.min(progress, 100)}%`, transition: 'width 0.1s ease' }}
              />
            </div>
            <div style={{ marginTop: 12, color: '#94A3B8', fontSize: '0.8rem' }}>
              {Math.min(Math.round(progress), 100)}%
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
