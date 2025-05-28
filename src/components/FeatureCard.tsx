import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  isVisible: boolean;
  animationType?: 'rotate' | 'pulse' | 'bounce' | 'rise';
  animationDuration?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  index,
  isVisible,
  animationType = 'pulse',
  animationDuration = 3,
}) => {
  // Get animation style based on animation type
  const getAnimationStyle = () => {
    switch (animationType) {
      case 'rotate':
        return { 
          animate: { rotate: 360 },
          transition: { repeat: Infinity, duration: animationDuration, ease: "linear" }
        };
      case 'pulse':
        return { 
          animate: { scale: [1, 1.2, 1] },
          transition: { repeat: Infinity, duration: animationDuration, ease: "easeInOut" }
        };
      case 'bounce':
        return { 
          animate: { y: [0, -10, 0] },
          transition: { repeat: Infinity, duration: animationDuration, ease: "easeInOut" }
        };
      case 'rise':
        return { 
          animate: { y: [0, -5, 0], opacity: [0.8, 1, 0.8] },
          transition: { repeat: Infinity, duration: animationDuration, ease: "easeInOut" }
        };
      default:
        return {};
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6 h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      layout
    >
      <motion.div
        className="w-16 h-16 mb-4 text-primary mx-auto"
        {...getAnimationStyle()}
      >
        {icon}
      </motion.div>
      
      <h3 className="text-xl font-bold text-center mb-3">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;