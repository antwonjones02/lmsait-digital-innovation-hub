
import React, { useEffect, useState } from 'react';
import Button from './Button';
import AnimatedText from './AnimatedText';
import { ArrowRight, Award, Code, Rocket } from 'lucide-react';
import VideoBackground from './VideoBackground';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Show the hero section with a slight delay for smoother loading
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      id="hero"
    >
      {/* Video Background */}
      <VideoBackground />
      
      <div className="container-custom relative z-10">
        <div className={`
          max-w-3xl mx-auto text-center
          transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <div className="mb-6 inline-block">
            <span className="award-badge">
              <Award className="h-4 w-4 mr-1" /> Award-Winning Technology
            </span>
          </div>
          
          <h1 className="h1 mb-6 text-white glow-text font-display">
            <AnimatedText 
              text="Transforming Learning Through Innovation" 
              delay={200}
              className="text-balance"
            />
          </h1>
          
          <p className="text-xl text-blue-100/90 mb-8 mx-auto max-w-2xl text-balance">
            <AnimatedText 
              text="Leverage our cutting-edge AI and machine learning solutions to optimize learning experiences, increase educational effectiveness, and drive sustainable development for your organization." 
              delay={400}
            />
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group">
              Explore Solutions
              <Rocket className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="text-blue-100 border-blue-400/40 hover:bg-blue-900/20">
              <Code className="mr-2 h-4 w-4" />
              View Documentation
            </Button>
          </div>
          
          {/* Award badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-3 opacity-80">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="Award Badge" className="h-10 grayscale hover:grayscale-0 transition-all" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968771.png" alt="Award Badge" className="h-10 grayscale hover:grayscale-0 transition-all" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968886.png" alt="Award Badge" className="h-10 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
      
      {/* Tech grid overlay */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none"></div>
      
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
