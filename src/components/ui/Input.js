import React from 'react';
import { useThemeColors } from '../../hooks/useThemeColors';

const Input = ({ 
  type = 'text',
  placeholder,
  value,
  onChange,
  variant = 'default',
  size = 'md',
  className = '',
  icon,
  ...props 
}) => {
  const themeColors = useThemeColors();

  const baseClasses = 'w-full border-0 focus:outline-none transition-all duration-300';
  
  const variants = {
    default: 'bg-white border-2 border-gray-200 focus:ring-2 focus:ring-gray-300',
    glass: 'bg-white/20 backdrop-blur-sm border-0 focus:ring-2 focus:ring-white/50 text-white placeholder-white/70',
    gradient: `bg-white/90 focus:ring-2 focus:ring-${themeColors.accent.split('-')[1]}-300`
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${classes} ${icon ? 'pl-12' : ''}`}
        {...props}
      />
    </div>
  );
};

export default Input; 