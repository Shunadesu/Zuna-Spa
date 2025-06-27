import React, { useState, useRef, useEffect } from 'react';

const VideoBackground = ({ 
  videoSrc, 
  fallbackImage, 
  children, 
  overlay = true, 
  overlayOpacity = 0.4,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => setIsVideoLoaded(true));
      video.addEventListener('error', () => setIsVideoError(true));
      
      return () => {
        video.removeEventListener('loadeddata', () => setIsVideoLoaded(true));
        video.removeEventListener('error', () => setIsVideoError(true));
      };
    }
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video Background */}
      {!isVideoError && (
        <video
          ref={videoRef}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline
          className={`absolute inset-0 w-full h-full object-cover ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000`}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Fallback Image */}
      {(isVideoError || !isVideoLoaded) && fallbackImage && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${fallbackImage})` }}
        />
      )}

      {/* Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground; 