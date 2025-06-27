import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const currentYear = new Date().getFullYear();

  const themeOptions = [
    { name: 'Hồng pastel', value: 'pink', color: 'bg-pink-500' },
    { name: 'Xanh dương', value: 'blue', color: 'bg-blue-500' },
    { name: 'Tím lavender', value: 'purple', color: 'bg-purple-500' },
    { name: 'Xanh lá', value: 'green', color: 'bg-emerald-500' },
    { name: 'Cam đào', value: 'orange', color: 'bg-orange-500' }
  ];

  // Function to get theme colors
  const getThemeColors = () => {
    const colors = {
      'pink': {
        primary: 'text-pink-400',
        hover: 'hover:text-pink-400',
        accent: 'bg-pink-600',
        accentHover: 'hover:bg-pink-700'
      },
      'blue': {
        primary: 'text-blue-400',
        hover: 'hover:text-blue-400',
        accent: 'bg-blue-600',
        accentHover: 'hover:bg-blue-700'
      },
      'purple': {
        primary: 'text-purple-400',
        hover: 'hover:text-purple-400',
        accent: 'bg-purple-600',
        accentHover: 'hover:bg-purple-700'
      },
      'green': {
        primary: 'text-emerald-400',
        hover: 'hover:text-emerald-400',
        accent: 'bg-emerald-600',
        accentHover: 'hover:bg-emerald-700'
      },
      'orange': {
        primary: 'text-orange-400',
        hover: 'hover:text-orange-400',
        accent: 'bg-orange-600',
        accentHover: 'hover:bg-orange-700'
      }
    };
    return colors[theme] || colors['pink'];
  };

  const themeColors = getThemeColors();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className={`text-2xl font-serif font-bold ${themeColors.primary} mb-6`}>
              Zuna Spa
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Nơi thư giãn và làm đẹp hàng đầu với các dịch vụ spa chất lượng cao, mang đến trải nghiệm thư giãn tuyệt vời cho khách hàng.
            </p>
            <div className="flex space-x-4">
              <button className={`text-gray-400 ${themeColors.hover} transition-colors`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
              <button className={`text-gray-400 ${themeColors.hover} transition-colors`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </button>
              <button className={`text-gray-400 ${themeColors.hover} transition-colors`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold ${themeColors.primary} mb-6`}>Liên kết nhanh</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className={`text-gray-300 ${themeColors.hover} transition-colors`}>
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/services" className={`text-gray-300 ${themeColors.hover} transition-colors`}>
                  Dịch vụ
                </Link>
              </li>
              <li>
                <Link to="/about" className={`text-gray-300 ${themeColors.hover} transition-colors`}>
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link to="/blog" className={`text-gray-300 ${themeColors.hover} transition-colors`}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/booking" className={`text-gray-300 ${themeColors.hover} transition-colors`}>
                  Đặt lịch
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Info */}
          <div>
            <h4 className={`text-lg font-semibold ${themeColors.primary} mb-6`}>Hỗ trợ & Thông tin</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/careers" className={`text-gray-300 ${themeColors.hover} transition-colors`}>
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link to="/faq" className={`text-gray-300 ${themeColors.hover} transition-colors`}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/reviews" className={`text-gray-300 ${themeColors.hover} transition-colors`}>
                  Đánh giá
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`text-gray-300 ${themeColors.hover} transition-colors`}>
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className={`text-gray-300 ${themeColors.hover} transition-colors`}>
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link to="/terms" className={`text-gray-300 ${themeColors.hover} transition-colors`}>
                  Điều khoản sử dụng
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-lg font-semibold ${themeColors.primary} mb-6`}>Liên hệ</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className={`w-5 h-5 ${themeColors.primary} mr-3 mt-1 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">123 Đường ABC, Quận 1, TP.HCM</span>
              </div>
              <div className="flex items-center">
                <svg className={`w-5 h-5 ${themeColors.primary} mr-3 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">+84 28 1234 5678</span>
              </div>
              <div className="flex items-center">
                <svg className={`w-5 h-5 ${themeColors.primary} mr-3 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">info@zunaspa.com</span>
              </div>
              <div className="flex items-center">
                <svg className={`w-5 h-5 ${themeColors.primary} mr-3 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300">Thứ 2 - Chủ nhật: 8:00 - 22:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zuna Spa. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              {/* Theme Switcher */}
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">Màu sắc:</span>
                <div className="flex space-x-1">
                  {themeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => changeTheme(option.value)}
                      className={`w-6 h-6 rounded-full ${option.color} border-2 ${
                        theme === option.value ? 'border-white' : 'border-gray-600'
                      } shadow-md transition-all duration-200 hover:scale-110`}
                      title={option.name}
                    />
                  ))}
                </div>
              </div>
              <Link
                to="/booking"
                className={`${themeColors.accent} ${themeColors.accentHover} text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300 text-sm`}
              >
                Đặt lịch ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 