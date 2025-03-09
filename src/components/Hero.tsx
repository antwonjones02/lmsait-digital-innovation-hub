
import React, { useEffect, useState } from 'react';
import Button from './Button';
import AnimatedText from './AnimatedText';
import { ArrowRight } from 'lucide-react';
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
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100/80 text-amber-800 backdrop-blur-sm">
              Traditional Canarian Desserts
            </span>
          </div>
          
          <h1 className="h1 mb-6 text-white">
            <AnimatedText 
              text="Discover the Magic of Frangollo" 
              delay={200}
              className="text-balance"
            />
          </h1>
          
          <p className="text-xl text-white/90 mb-8 mx-auto max-w-2xl text-balance">
            <AnimatedText 
              text="Explore the rich tradition of Canarian desserts through our authentic Frangollo recipes, techniques, and regional variations." 
              delay={400}
            />
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group bg-amber-600 hover:bg-amber-700 text-white">
              Explore Recipes
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-amber-300/40 hover:bg-white/20">
              Watch Preparation
            </Button>
          </div>
        </div>
      </div>
      
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
