
import React, { useEffect, useState } from 'react';

const VideoBackground: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/95 via-blue-950/85 to-slate-900/75 z-10"></div>
      
      {/* Animated particle overlay */}
      <div className="absolute inset-0 z-[5] opacity-20">
        <div className="particles"></div>
      </div>
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 z-[2] grid-animation opacity-10"></div>
      
      <video
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <source 
          src="https://assets.mixkit.co/videos/preview/mixkit-digital-data-flow-of-a-city-at-night-12310-large.mp4" 
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
