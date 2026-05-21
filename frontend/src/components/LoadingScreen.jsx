import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => (
  <motion.div
    key="loader"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
        <span className="font-heading font-bold text-white text-xl">A</span>
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
        className="h-0.5 bg-accent mx-auto rounded-full"
      />
    </motion.div>
  </motion.div>
);

export default LoadingScreen;
