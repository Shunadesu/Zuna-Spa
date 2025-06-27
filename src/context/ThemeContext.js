import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('pink');

  const themes = useMemo(() => ({
    'pink': {
      primary: 'pink',
      secondary: 'pink-pastel',
      background: 'bg-gradient-to-br from-pink-50 to-rose-50',
      text: 'text-gray-800',
      accent: 'pink-600',
      hover: 'pink-700',
      light: 'pink-50',
      border: 'pink-200',
      // Gradient options
      gradient: 'from-pink-400 to-pink-600',
      gradientHover: 'from-pink-500 to-pink-700',
      gradientLight: 'from-pink-50 to-rose-50',
      gradientDark: 'from-pink-600 to-rose-700',
      gradientHero: 'from-pink-400 via-rose-500 to-pink-600',
      gradientCard: 'from-pink-50 to-white',
      gradientButton: 'from-pink-500 to-rose-600',
      gradientText: 'from-pink-600 to-rose-700'
    },
    'blue': {
      primary: 'blue',
      secondary: 'blue-pastel',
      background: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      text: 'text-gray-800',
      accent: 'blue-600',
      hover: 'blue-700',
      light: 'blue-50',
      border: 'blue-200',
      // Gradient options
      gradient: 'from-blue-400 to-blue-600',
      gradientHover: 'from-blue-500 to-blue-700',
      gradientLight: 'from-blue-50 to-cyan-50',
      gradientDark: 'from-blue-600 to-cyan-700',
      gradientHero: 'from-blue-400 via-cyan-500 to-blue-600',
      gradientCard: 'from-blue-50 to-white',
      gradientButton: 'from-blue-500 to-cyan-600',
      gradientText: 'from-blue-600 to-cyan-700'
    },
    'purple': {
      primary: 'purple',
      secondary: 'purple-pastel',
      background: 'bg-gradient-to-br from-purple-50 to-indigo-50',
      text: 'text-gray-800',
      accent: 'purple-600',
      hover: 'purple-700',
      light: 'purple-50',
      border: 'purple-200',
      // Gradient options
      gradient: 'from-purple-400 to-purple-600',
      gradientHover: 'from-purple-500 to-purple-700',
      gradientLight: 'from-purple-50 to-indigo-50',
      gradientDark: 'from-purple-600 to-indigo-700',
      gradientHero: 'from-purple-400 via-indigo-500 to-purple-600',
      gradientCard: 'from-purple-50 to-white',
      gradientButton: 'from-purple-500 to-indigo-600',
      gradientText: 'from-purple-600 to-indigo-700'
    },
    'green': {
      primary: 'emerald',
      secondary: 'emerald-pastel',
      background: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      text: 'text-gray-800',
      accent: 'emerald-600',
      hover: 'emerald-700',
      light: 'emerald-50',
      border: 'emerald-200',
      // Gradient options
      gradient: 'from-emerald-400 to-emerald-600',
      gradientHover: 'from-emerald-500 to-emerald-700',
      gradientLight: 'from-emerald-50 to-teal-50',
      gradientDark: 'from-emerald-600 to-teal-700',
      gradientHero: 'from-emerald-400 via-teal-500 to-emerald-600',
      gradientCard: 'from-emerald-50 to-white',
      gradientButton: 'from-emerald-500 to-teal-600',
      gradientText: 'from-emerald-600 to-teal-700'
    },
    'orange': {
      primary: 'orange',
      secondary: 'orange-pastel',
      background: 'bg-gradient-to-br from-orange-50 to-red-50',
      text: 'text-gray-800',
      accent: 'orange-600',
      hover: 'orange-700',
      light: 'orange-50',
      border: 'orange-200',
      // Gradient options
      gradient: 'from-orange-400 to-orange-600',
      gradientHover: 'from-orange-500 to-orange-700',
      gradientLight: 'from-orange-50 to-red-50',
      gradientDark: 'from-orange-600 to-red-700',
      gradientHero: 'from-orange-400 via-red-500 to-orange-600',
      gradientCard: 'from-orange-50 to-white',
      gradientButton: 'from-orange-500 to-red-600',
      gradientText: 'from-orange-600 to-red-700'
    }
  }), []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'pink';
    if (themes[savedTheme]) {
      setTheme(savedTheme);
    } else {
      setTheme('pink');
      localStorage.setItem('theme', 'pink');
    }
  }, [themes]);

  const changeTheme = (newTheme) => {
    if (themes[newTheme]) {
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    } else {
      console.warn(`Theme "${newTheme}" not found, using default pink theme`);
      setTheme('pink');
      localStorage.setItem('theme', 'pink');
    }
  };

  const value = {
    theme,
    themes,
    changeTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext }; 