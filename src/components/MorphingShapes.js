import React from 'react';

const MorphingShapes = ({ count = 3, theme = 'pink' }) => {
  const getThemeColors = () => {
    const colors = {
      'pink': ['from-pink-200', 'to-pink-300'],
      'blue': ['from-blue-200', 'to-blue-300'],
      'purple': ['from-purple-200', 'to-purple-300'],
      'green': ['from-emerald-200', 'to-emerald-300'],
      'orange': ['from-orange-200', 'to-orange-300']
    };
    return colors[theme] || colors['pink'];
  };

  const [fromColor, toColor] = getThemeColors();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`absolute w-64 h-64 bg-gradient-to-br ${fromColor} ${toColor} animate-morph opacity-20`}
          style={{
            top: `${20 + index * 30}%`,
            left: `${10 + index * 25}%`,
            animationDelay: `${index * 2}s`,
            animationDuration: '8s'
          }}
        />
      ))}
    </div>
  );
};

export default MorphingShapes; 