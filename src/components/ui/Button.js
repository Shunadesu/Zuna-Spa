import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeColors } from '../../hooks/useThemeColors';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  to, 
  onClick, 
  className = '', 
  disabled = false,
  ...props 
}) => {
  const themeColors = useThemeColors();

  const baseClasses = 'inline-flex items-center justify-center font-bold transition-all duration-300 transform hover:scale-105 shadow-lg';
  
  const variants = {
    primary: `bg-gradient-to-r ${themeColors.gradient} text-white hover:shadow-2xl`,
    secondary: 'bg-white text-gray-800 border-2 border-gray-200 hover:bg-gray-50',
    outline: `bg-transparent ${themeColors.accent} border-2 ${themeColors.border} hover:bg-white hover:${themeColors.accent}`,
    ghost: `${themeColors.accent} hover:bg-gray-100`
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl',
    xl: 'px-12 py-5 text-xl rounded-2xl'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={classes} 
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 