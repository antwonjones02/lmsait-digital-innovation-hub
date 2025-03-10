import React, { useEffect, useState } from 'react';
import Button from './Button';
import AnimatedText from './AnimatedText';
import { ArrowRight, Award, Code, Rocket, ExternalLink, ChevronRight } from 'lucide-react';
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
            <span className="gradient-text">Transforming Learning</span>{" "}
            <AnimatedText 
              text="Through Digital Innovation" 
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
            <Button size="lg" className="group btn-gradient text-white shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 transition-all duration-300">
              Explore Solutions
              <Rocket className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="text-blue-100 border-blue-400/40 hover:bg-blue-900/20 backdrop-blur-sm">
              <Code className="mr-2 h-4 w-4" />
              View Documentation
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="frosted-card p-4 rounded-xl backdrop-blur-lg hover-lift">
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-blue-200/80 text-sm">Client Satisfaction</div>
            </div>
            <div className="frosted-card p-4 rounded-xl backdrop-blur-lg hover-lift">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-blue-200/80 text-sm">Global Implementations</div>
            </div>
            <div className="frosted-card p-4 rounded-xl backdrop-blur-lg hover-lift">
              <div className="text-3xl font-bold text-white mb-1">35%</div>
              <div className="text-blue-200/80 text-sm">Avg. Efficiency Increase</div>
            </div>
          </div>
          
          {/* Trusted by logos */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 opacity-80">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="Award Badge" className="h-8 grayscale hover:grayscale-0 transition-all hover-lift" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968771.png" alt="Award Badge" className="h-8 grayscale hover:grayscale-0 transition-all hover-lift" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968886.png" alt="Award Badge" className="h-8 grayscale hover:grayscale-0 transition-all hover-lift" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="Award Badge" className="h-8 grayscale hover:grayscale-0 transition-all hover-lift" />
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <span className="text-blue-200/70 text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-blue-400/30 rounded-full flex justify-center p-1">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce-subtle"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tech grid overlay */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/10 rounded-full filter blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
      
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;