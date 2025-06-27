import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import CountdownTimer from './CountdownTimer';
import { Link } from 'react-router-dom';

const PromoBar = () => {
  const { theme } = useContext(ThemeContext);
  // Ví dụ: khuyến mãi kết thúc sau 7 ngày kể từ bây giờ
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 7);

  // Màu nền theo theme
  const bgColors = {
    pink: 'bg-pink-500',
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    green: 'bg-emerald-500',
    orange: 'bg-orange-500',
  };
  const bg = bgColors[theme] || bgColors.pink;

  // Nút nổi bật hơn
  const buttonColors = {
    pink: 'bg-white text-pink-600 hover:bg-pink-100',
    blue: 'bg-white text-blue-600 hover:bg-blue-100',
    purple: 'bg-white text-purple-600 hover:bg-purple-100',
    green: 'bg-white text-emerald-600 hover:bg-emerald-100',
    orange: 'bg-white text-orange-600 hover:bg-orange-100',
  };
  const buttonClass = buttonColors[theme] || buttonColors.pink;

  return (
    <div className={`w-full ${bg} text-white text-sm sm:text-base flex flex-col sm:flex-row items-center justify-center py-2 px-2 gap-2`} style={{minHeight: '44px'}}>
      <span className="font-semibold mr-2 whitespace-nowrap">🎉 Khuyến mãi đặc biệt: Giảm 20% cho tất cả dịch vụ!</span>
      <span className="hidden sm:inline">|</span>
      <span className="flex items-center gap-1">
        <span className="mr-1 whitespace-nowrap">Kết thúc sau:</span>
        <CountdownTimer endDate={endDate} compact theme={theme} hideLabels />
      </span>
      <Link
        to="/booking"
        className={`ml-2 ${buttonClass} font-semibold px-4 py-2 rounded shadow-sm transition-colors text-xs sm:text-sm border border-white`}
        style={{whiteSpace: 'nowrap', minHeight: '36px', display: 'flex', alignItems: 'center'}}
      >
        Đặt lịch ngay
      </Link>
    </div>
  );
};

export default PromoBar; 