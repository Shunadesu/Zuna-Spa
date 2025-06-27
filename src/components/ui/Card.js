import React from 'react';
import { useThemeColors } from '../../hooks/useThemeColors';

const Card = ({ 
  children, 
  variant = 'default', 
  className = '', 
  hover = true,
  animate = false,
  ...props 
}) => {
  const themeColors = useThemeColors();

  const baseClasses = 'bg-white rounded-3xl shadow-lg transition-all duration-500';
  
  const variants = {
    default: 'border border-gray-100',
    gradient: `bg-gradient-to-br ${themeColors.gradientBgLight}`,
    glass: 'bg-white/20 backdrop-blur-sm border border-white/30',
    elevated: 'shadow-xl hover:shadow-2xl'
  };

  const hoverClasses = hover ? 'hover:shadow-2xl hover:-translate-y-2' : '';
  const animateClasses = animate ? 'animate-fade-in' : '';

  const classes = `${baseClasses} ${variants[variant]} ${hoverClasses} ${animateClasses} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card; 