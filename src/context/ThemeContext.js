import React, { createContext, useContext, useState, useEffect } from 'react';

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

  const themes = {
    'pink': {
      primary: 'pink',
      secondary: 'pink-pastel',
      background: 'bg-gradient-to-br from-pink-50 to-rose-50',
      text: 'text-gray-800',
      accent: 'pink-600',
      hover: 'pink-700',
      light: 'pink-50',
      border: 'pink-200'
    },
    'blue': {
      primary: 'blue',
      secondary: 'blue-pastel',
      background: 'bg-spa-gradient',
      text: 'text-gray-800',
      accent: 'blue-600',
      hover: 'blue-700',
      light: 'blue-50',
      border: 'blue-200'
    },
    'purple': {
      primary: 'purple',
      secondary: 'purple-pastel',
      background: 'bg-gradient-to-br from-purple-50 to-indigo-50',
      text: 'text-gray-800',
      accent: 'purple-600',
      hover: 'purple-700',
      light: 'purple-50',
      border: 'purple-200'
    },
    'green': {
      primary: 'emerald',
      secondary: 'emerald-pastel',
      background: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      text: 'text-gray-800',
      accent: 'emerald-600',
      hover: 'emerald-700',
      light: 'emerald-50',
      border: 'emerald-200'
    },
    'orange': {
      primary: 'orange',
      secondary: 'orange-pastel',
      background: 'bg-gradient-to-br from-orange-50 to-red-50',
      text: 'text-gray-800',
      accent: 'orange-600',
      hover: 'orange-700',
      light: 'orange-50',
      border: 'orange-200'
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'pink';
    if (themes[savedTheme]) {
      setTheme(savedTheme);
    } else {
      setTheme('pink');
      localStorage.setItem('theme', 'pink');
    }
  }, []);

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