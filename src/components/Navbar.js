import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import PromoBar from './PromoBar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const { theme, themes, changeTheme } = useContext(ThemeContext);

  const navItems = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Dịch vụ', path: '/services' },
    { name: 'Về chúng tôi', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Đặt lịch', path: '/booking' }
  ];

  const themeOptions = [
    { name: 'Hồng pastel', value: 'pink', color: 'bg-pink-500' },
    { name: 'Xanh dương', value: 'blue', color: 'bg-blue-500' },
    { name: 'Tím lavender', value: 'purple', color: 'bg-purple-500' },
    { name: 'Xanh lá', value: 'green', color: 'bg-emerald-500' },
    { name: 'Cam đào', value: 'orange', color: 'bg-orange-500' }
  ];

  // Fallback to pink theme if current theme is not found
  const currentTheme = themes[theme] || themes['pink'];

  // Function to get button classes based on theme
  const getButtonClasses = () => {
    const accentColors = {
      'pink': 'bg-pink-600 hover:bg-pink-700',
      'blue': 'bg-blue-600 hover:bg-blue-700',
      'purple': 'bg-purple-600 hover:bg-purple-700',
      'green': 'bg-emerald-600 hover:bg-emerald-700',
      'orange': 'bg-orange-600 hover:bg-orange-700'
    };
    return accentColors[theme] || accentColors['pink'];
  };

  const getTextClasses = () => {
    const textColors = {
      'pink': 'text-pink-600 hover:text-pink-700',
      'blue': 'text-blue-600 hover:text-blue-700',
      'purple': 'text-purple-600 hover:text-purple-700',
      'green': 'text-emerald-600 hover:text-emerald-700',
      'orange': 'text-orange-600 hover:text-orange-700'
    };
    return textColors[theme] || textColors['pink'];
  };

  const getLogoClasses = () => {
    const logoColors = {
      'pink': 'text-pink-600',
      'blue': 'text-blue-600',
      'purple': 'text-purple-600',
      'green': 'text-emerald-600',
      'orange': 'text-orange-600'
    };
    return logoColors[theme] || logoColors['pink'];
  };

  return (
    <>
      <PromoBar />
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className={`text-2xl font-serif font-bold ${getLogoClasses()}`}>
              Zuna Spa
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-gray-700 ${getTextClasses().replace('text-', 'hover:text-')} font-medium transition-colors duration-300`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme Switcher */}
              <div className="relative group">
                <button
                  onClick={() => setIsThemeOpen(!isThemeOpen)}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors flex items-center space-x-2"
                >
                  <div className={`w-4 h-4 rounded-full ${themeOptions.find(t => t.value === theme)?.color || 'bg-pink-500'}`}></div>
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </button>
                
                {/* Theme Dropdown */}
                {isThemeOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Chọn màu sắc
                    </div>
                    {themeOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          changeTheme(option.value);
                          setIsThemeOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center space-x-3 ${
                          theme === option.value ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        }`}
                      >
                        <div className={`w-3 h-3 rounded-full ${option.color}`}></div>
                        <span>{option.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <Link
                to="/booking"
                className={`${getButtonClasses()} text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300`}
              >
                Bắt đầu ngay
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`text-gray-700 ${getTextClasses().replace('text-', 'hover:text-')} focus:outline-none`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-gray-700 ${getTextClasses().replace('text-', 'hover:text-')} font-medium transition-colors duration-300`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Theme Switcher */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-sm font-medium text-gray-700 mb-3">Chọn màu sắc:</div>
                  <div className="flex space-x-2">
                    {themeOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          changeTheme(option.value);
                          setIsOpen(false);
                        }}
                        className={`w-8 h-8 rounded-full ${option.color} border-2 ${
                          theme === option.value ? 'border-gray-800' : 'border-white'
                        } shadow-md`}
                        title={option.name}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <Link
                    to="/booking"
                    className={`${getButtonClasses()} text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300`}
                    onClick={() => setIsOpen(false)}
                  >
                    Bắt đầu ngay
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar; 