
import React from 'react';

const VideoBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-800/40 to-amber-600/30 z-10"></div>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source 
          src="https://assets.mixkit.co/videos/preview/mixkit-hands-kneading-dough-to-make-bread-13448-large.mp4" 
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
