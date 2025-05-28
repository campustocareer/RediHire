import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface LocationCardProps {
  name: string;
  imageUrl: string;
  delay?: number;
}

const LocationCard: React.FC<LocationCardProps> = ({ name, imageUrl, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-lg group h-48 md:h-64"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-60" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="flex items-center"
        >
          <MapPin className="w-5 h-5 mr-2 text-primary" />
          <span>We are here & we serve here</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LocationCard;