import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import SmartBookingWidget from './SmartBookingWidget';

const SmartBookingButton = () => {
  const { theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  // Function to get theme colors
  const getThemeColors = () => {
    const colors = {
      'pink': {
        accent: 'text-pink-600',
        bgAccent: 'bg-pink-600',
        bgHover: 'hover:bg-pink-700',
        bgLight: 'bg-pink-50',
        border: 'border-pink-300'
      },
      'blue': {
        accent: 'text-blue-600',
        bgAccent: 'bg-blue-600',
        bgHover: 'hover:bg-blue-700',
        bgLight: 'bg-blue-50',
        border: 'border-blue-300'
      },
      'purple': {
        accent: 'text-purple-600',
        bgAccent: 'bg-purple-600',
        bgHover: 'hover:bg-purple-700',
        bgLight: 'bg-purple-50',
        border: 'border-purple-300'
      },
      'green': {
        accent: 'text-emerald-600',
        bgAccent: 'bg-emerald-600',
        bgHover: 'hover:bg-emerald-700',
        bgLight: 'bg-emerald-50',
        border: 'border-emerald-300'
      },
      'orange': {
        accent: 'text-orange-600',
        bgAccent: 'bg-orange-600',
        bgHover: 'hover:bg-orange-700',
        bgLight: 'bg-orange-50',
        border: 'border-orange-300'
      }
    };
    return colors[theme] || colors['pink'];
  };

  const themeColors = getThemeColors();

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-40 ${themeColors.bgAccent} ${themeColors.bgHover} text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse-glow`}
        aria-label="Smart Booking"
      >
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🤖</span>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold">Smart Booking</div>
            <div className="text-xs opacity-80">AI sẽ giúp bạn</div>
          </div>
        </div>
        
        {/* Pulse Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
      </button>

      {/* Smart Booking Widget */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Widget */}
          <div className="absolute bottom-6 right-6 animate-bounce-in">
            <SmartBookingWidget />
          </div>
        </div>
      )}
    </>
  );
};

export default SmartBookingButton; 