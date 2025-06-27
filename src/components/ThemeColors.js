import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const useThemeColors = () => {
  const { theme } = useContext(ThemeContext);

  const getThemeColors = () => {
    const colors = {
      'pink': {
        accent: 'text-pink-600',
        bgAccent: 'bg-pink-600',
        bgHover: 'hover:bg-pink-700',
        bgLight: 'bg-pink-50',
        bgLightHover: 'hover:bg-pink-100',
        border: 'border-pink-500',
        borderHover: 'hover:border-pink-600',
        gradient: 'from-pink-400 to-pink-600',
        gradientHover: 'from-pink-500 to-pink-700',
        gradientBg: 'bg-gradient-to-br from-pink-400 to-pink-600',
        gradientBgLight: 'bg-gradient-to-br from-pink-50 to-rose-50',
        gradientText: 'bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent'
      },
      'blue': {
        accent: 'text-blue-600',
        bgAccent: 'bg-blue-600',
        bgHover: 'hover:bg-blue-700',
        bgLight: 'bg-blue-50',
        bgLightHover: 'hover:bg-blue-100',
        border: 'border-blue-500',
        borderHover: 'hover:border-blue-600',
        gradient: 'from-blue-400 to-blue-600',
        gradientHover: 'from-blue-500 to-blue-700',
        gradientBg: 'bg-gradient-to-br from-blue-400 to-blue-600',
        gradientBgLight: 'bg-gradient-to-br from-blue-50 to-cyan-50',
        gradientText: 'bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent'
      },
      'purple': {
        accent: 'text-purple-600',
        bgAccent: 'bg-purple-600',
        bgHover: 'hover:bg-purple-700',
        bgLight: 'bg-purple-50',
        bgLightHover: 'hover:bg-purple-100',
        border: 'border-purple-500',
        borderHover: 'hover:border-purple-600',
        gradient: 'from-purple-400 to-purple-600',
        gradientHover: 'from-purple-500 to-purple-700',
        gradientBg: 'bg-gradient-to-br from-purple-400 to-purple-600',
        gradientBgLight: 'bg-gradient-to-br from-purple-50 to-indigo-50',
        gradientText: 'bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent'
      },
      'green': {
        accent: 'text-emerald-600',
        bgAccent: 'bg-emerald-600',
        bgHover: 'hover:bg-emerald-700',
        bgLight: 'bg-emerald-50',
        bgLightHover: 'hover:bg-emerald-100',
        border: 'border-emerald-500',
        borderHover: 'hover:border-emerald-600',
        gradient: 'from-emerald-400 to-emerald-600',
        gradientHover: 'from-emerald-500 to-emerald-700',
        gradientBg: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
        gradientBgLight: 'bg-gradient-to-br from-emerald-50 to-teal-50',
        gradientText: 'bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent'
      },
      'orange': {
        accent: 'text-orange-600',
        bgAccent: 'bg-orange-600',
        bgHover: 'hover:bg-orange-700',
        bgLight: 'bg-orange-50',
        bgLightHover: 'hover:bg-orange-100',
        border: 'border-orange-500',
        borderHover: 'hover:border-orange-600',
        gradient: 'from-orange-400 to-orange-600',
        gradientHover: 'from-orange-500 to-orange-700',
        gradientBg: 'bg-gradient-to-br from-orange-400 to-orange-600',
        gradientBgLight: 'bg-gradient-to-br from-orange-50 to-red-50',
        gradientText: 'bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent'
      }
    };
    return colors[theme] || colors['pink'];
  };

  return getThemeColors();
}; 