import React from 'react';
import { useThemeColors } from '../../hooks/useThemeColors';

const Section = ({ 
  children, 
  variant = 'default', 
  className = '', 
  container = true,
  ...props 
}) => {
  const themeColors = useThemeColors();

  const baseClasses = 'py-16 lg:py-24';
  
  const variants = {
    default: 'bg-white',
    light: 'bg-gray-50',
    gradient: `bg-gradient-to-br ${themeColors.gradientBgLight}`,
    theme: `bg-gradient-to-br ${themeColors.gradientBg} text-white`,
    glass: 'bg-white/20 backdrop-blur-sm'
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <section className={classes} {...props}>
      {container ? (
        <div className="container-custom">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
};

export default Section; 