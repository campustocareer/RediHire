import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
  icon: React.ReactNode;
}

const StatCounter: React.FC<StatCounterProps> = ({
  value,
  label,
  suffix = '',
  duration = 2,
  icon,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = value / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start > value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <motion.div
        className="w-16 h-16 mx-auto mb-4 text-primary"
        animate={isInView ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {icon}
      </motion.div>
      
      <div className="text-4xl font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
};

export default StatCounter;