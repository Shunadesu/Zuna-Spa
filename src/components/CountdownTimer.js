import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ endDate, className = '', onFinish, compact = false, theme = 'pink', hideLabels = false }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Fallback endDate if not provided
  const targetDate = endDate || (() => {
    const date = new Date();
    date.setDate(date.getDate() + 30);
    return date;
  })();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        if (onFinish) onFinish();
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate, onFinish]);

  // Theme color classes
  const themeColors = {
    pink: 'text-pink-600',
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    green: 'text-emerald-600',
    orange: 'text-orange-600',
  };
  const accent = themeColors[theme] || themeColors.pink;

  const TimeUnit = ({ value, label }) => (
    <div className="text-center">
      <div className={`bg-white rounded-lg shadow p-1 sm:p-2 mx-0.5 sm:mx-1 ${compact ? 'w-8 sm:w-10' : 'w-12 sm:w-16'}` }>
        <div className={`font-bold ${compact ? 'text-base sm:text-lg' : 'text-2xl'} ${accent}`}>{value.toString().padStart(2, '0')}</div>
        {!hideLabels && <div className={`text-[10px] sm:text-xs text-gray-600 uppercase ${compact ? '' : ''}`}>{label}</div>}
      </div>
    </div>
  );

  return (
    <div className={className}>
      <div className={`flex items-center justify-center ${compact ? 'gap-1' : 'mb-6'}`}>
        <TimeUnit value={timeLeft.days} label="Ngày" />
        <span className={`font-bold ${compact ? 'text-base' : 'text-2xl'} mx-1`}>:</span>
        <TimeUnit value={timeLeft.hours} label="Giờ" />
        <span className={`font-bold ${compact ? 'text-base' : 'text-2xl'} mx-1`}>:</span>
        <TimeUnit value={timeLeft.minutes} label="Phút" />
        <span className={`font-bold ${compact ? 'text-base' : 'text-2xl'} mx-1`}>:</span>
        <TimeUnit value={timeLeft.seconds} label="Giây" />
      </div>
    </div>
  );
};

export default CountdownTimer; 