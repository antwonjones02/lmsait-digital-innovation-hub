import React, { useEffect, useState } from 'react';
import Button from './Button';
import AnimatedText from './AnimatedText';
import { ArrowRight, Award, Code, Rocket, ExternalLink, ChevronRight, BookOpen, Brain, BarChart3 } from 'lucide-react';

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
      className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden light-gradient-bg"
      id="hero"
    >
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <div className={`
          transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          {/* Two-column layout for better space utilization */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left column - Main content */}
            <div className="lg:col-span-7 text-left">
              <div className="mb-4 inline-block">
                <span className="award-badge">
                  <Award className="h-4 w-4 mr-1" /> Award-Winning Technology
                </span>
              </div>
              
              <h1 className="h1 mb-6 text-slate-900 font-display">
                <span className="gradient-text">LMS & AI</span>{" "}
                <span className="block mt-1">Learning Management <span className="gradient-text">System</span></span>
              </h1>
              
              <p className="text-xl text-slate-700 mb-8 max-w-2xl">
                Leverage our cutting-edge AI and machine learning solutions to optimize learning experiences, increase educational effectiveness, and drive sustainable development for your organization.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
                <Button size="lg" className="group btn-gradient text-white shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 transition-all duration-300">
                  Explore System
                  <Rocket className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="text-indigo-700 border-indigo-200 hover:bg-indigo-50">
                  <Code className="mr-2 h-4 w-4" />
                  View Documentation
                </Button>
              </div>
              
              {/* Key features with icons - better use of space */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="flex items-start">
                  <div className="feature-icon mr-3 mt-1">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Adaptive Learning</h3>
                    <p className="text-sm text-slate-600">Personalized paths for each learner</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="feature-icon mr-3 mt-1">
                    <Brain size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">AI-Powered</h3>
                    <p className="text-sm text-slate-600">Smart insights and recommendations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="feature-icon mr-3 mt-1">
                    <BarChart3 size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Advanced Analytics</h3>
                    <p className="text-sm text-slate-600">Comprehensive performance tracking</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column - Stats and social proof */}
            <div className="lg:col-span-5">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-100">
                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-indigo-50 rounded-xl">
                    <div className="text-3xl font-bold text-indigo-700 mb-1">98%</div>
                    <div className="text-slate-600 text-sm">Client Satisfaction</div>
                  </div>
                  <div className="text-center p-4 bg-indigo-50 rounded-xl">
                    <div className="text-3xl font-bold text-indigo-700 mb-1">500+</div>
                    <div className="text-slate-600 text-sm">Implementations</div>
                  </div>
                  <div className="text-center p-4 bg-indigo-50 rounded-xl">
                    <div className="text-3xl font-bold text-indigo-700 mb-1">35%</div>
                    <div className="text-slate-600 text-sm">Efficiency Boost</div>
                  </div>
                </div>
                
                {/* Featured testimonial */}
                <div className="mb-6">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500 fill-yellow-500 mr-1" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">
                    "LMS & AI Technology transformed our training program with AI-powered learning paths, increasing engagement by 78%."
                  </p>
                  <div className="flex items-center">
                    <img 
                      src="https://randomuser.me/api/portraits/women/32.jpg" 
                      alt="Sarah Johnson"
                      className="w-10 h-10 rounded-full object-cover border-2 border-indigo-100 mr-3"
                    />
                    <div>
                      <div className="font-medium text-slate-900">Sarah Johnson</div>
                      <div className="text-sm text-slate-500">Global Innovations Inc.</div>
                    </div>
                  </div>
                </div>
                
                {/* Trusted by logos */}
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs uppercase tracking-wider text-slate-500 mb-3 text-center">Trusted by leading organizations</p>
                  <div className="flex flex-wrap justify-center items-center gap-4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="Google" className="h-5 opacity-70 hover:opacity-100 transition-opacity" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png" alt="IBM" className="h-5 opacity-70 hover:opacity-100 transition-opacity" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" alt="Microsoft" className="h-5 opacity-70 hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/5 rounded-full filter blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 border border-indigo-200 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 border border-indigo-200 rounded-full opacity-20"></div>
      
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
};

// Star component for the testimonial
const Star = ({ size, className }: { size: number, className: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default Hero;