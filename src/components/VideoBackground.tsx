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
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-indigo-950/90 to-slate-950/95 z-10"></div>
      
      {/* Animated particle overlay */}
      <div className="absolute inset-0 z-[5] opacity-30">
        <div className="particles"></div>
      </div>
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 z-[2] grid-animation opacity-10"></div>
      
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 z-[1] opacity-30 bg-gradient-mesh"></div>
      
      {/* Animated floating orbs */}
      <div className="absolute top-1/3 left-1/5 w-64 h-64 rounded-full bg-indigo-600/5 filter blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/3 right-1/5 w-96 h-96 rounded-full bg-blue-600/5 filter blur-3xl animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-2/3 right-1/3 w-48 h-48 rounded-full bg-violet-600/5 filter blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
      
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-40' : 'opacity-0'}`}
      >
        <source 
          src="https://assets.mixkit.co/videos/preview/mixkit-digital-data-flow-of-a-city-at-night-12310-large.mp4" 
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      
      {/* Noise texture overlay for a more professional look */}
      <div className="absolute inset-0 z-[6] opacity-5 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
    </div>
  );
};

export default VideoBackground;