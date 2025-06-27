import React from 'react';
import { useThemeColors } from '../../hooks/useThemeColors';

const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const themeColors = useThemeColors();

  const baseClasses = 'inline-flex items-center font-medium rounded-full';
  
  const variants = {
    default: `bg-gradient-to-r ${themeColors.gradient} text-white shadow-lg`,
    outline: `${themeColors.accent} border-2 ${themeColors.border}`,
    light: `${themeColors.bgLight} ${themeColors.accent}`,
    glass: 'bg-white/90 backdrop-blur-sm text-gray-800'
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

export default Badge; 