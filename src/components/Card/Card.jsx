import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Card = ({ 
  title, 
  content, 
  icon: Icon, 
  ctaText = "Learn More", 
  ctaAction,
  gradient = "from-blue-500 to-purple-600",
  className = ""
}) => {
  return (
    <motion.div
      whileHover={{ 
        y: -8,
        rotateX: 5,
        rotateY: 5,
        scale: 1.02
      }}
      whileTap={{ scale: 0.98 }}
      className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Gradient Border Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
      <div className="absolute inset-0.5 bg-white rounded-2xl" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${gradient} text-white mb-4 shadow-lg`}
        >
          {Icon && <Icon className="w-6 h-6" />}
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
          {title}
        </h3>

        {/* Content */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {content}
        </p>

        {/* CTA Button */}
        <motion.button
          onClick={ctaAction}
          whileHover={{ x: 5 }}
          className="inline-flex items-center text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-300 group/btn"
        >
          {ctaText}
          <motion.div
            whileHover={{ x: 3 }}
            className="ml-2"
          >
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />

      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    </motion.div>
  );
};

export default Card;