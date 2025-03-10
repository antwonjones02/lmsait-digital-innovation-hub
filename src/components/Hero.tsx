import React, { useEffect, useState } from 'react';
import Button from './Button';
import { Award, Code, Rocket, BookOpen, Brain, BarChart3, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section 
      className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white"
      id="hero"
    >
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <div className={`
          transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          {/* Main headline and CTA - centered like trainingsites.io */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              From <span className="text-indigo-600">Traditional Learning</span> to 
              <span className="block mt-2">Growing an <span className="text-indigo-600">AI-Powered</span> Education System!</span>
            </h1>
            
            <p className="text-xl text-slate-700 mb-8 max-w-3xl mx-auto">
              We believe in transforming education through innovative technology. Our AI-powered learning management system helps organizations optimize learning experiences, increase effectiveness, and drive sustainable development.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button size="lg" className="group btn-gradient text-white shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 transition-all duration-300 px-8 py-3 text-lg">
                JOIN NOW - IT'S FREE
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="text-indigo-700 border-indigo-200 hover:bg-indigo-50">
                MEMBER LOGIN
              </Button>
            </div>
          </div>
          
          {/* "Why Choose Us" section - similar to trainingsites.io */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Why Choose Our LMS Platform?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Adaptive Learning Paths</h3>
                <p className="text-slate-600">Create personalized learning experiences that adapt to each student's needs, improving engagement and knowledge retention.</p>
                <a href="#" className="inline-block mt-4 text-indigo-600 font-medium hover:text-indigo-700">Learn More →</a>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">AI-Powered Insights</h3>
                <p className="text-slate-600">Leverage advanced AI to gain actionable insights into student performance, identify learning gaps, and optimize your curriculum.</p>
                <a href="#" className="inline-block mt-4 text-indigo-600 font-medium hover:text-indigo-700">Learn More →</a>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Comprehensive Analytics</h3>
                <p className="text-slate-600">Track progress, measure outcomes, and demonstrate ROI with our powerful analytics dashboard designed for educators.</p>
                <a href="#" className="inline-block mt-4 text-indigo-600 font-medium hover:text-indigo-700">Learn More →</a>
              </div>
            </div>
          </div>
          
          {/* Featured benefits section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
                  YOUR OWN LEARNING PLATFORM
                </div>
                <h2 className="text-3xl font-bold mb-6 text-slate-900">Create Your Customized Learning Environment</h2>
                <p className="text-lg text-slate-600 mb-6">
                  Imagine your own online space where students don't just learn – they thrive. With our platform, you can launch a comprehensive learning management system in days, not months.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Fully customizable to match your brand",
                    "Intuitive course creation tools",
                    "Interactive assessments and quizzes",
                    "Built-in community features",
                    "Mobile-friendly learning experience"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-1 text-indigo-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="group text-white bg-indigo-600 hover:bg-indigo-700">
                  Start Building Today
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="bg-white p-1 rounded-xl shadow-lg border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                  alt="Learning Platform" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Stats section */}
          <div className="bg-indigo-50 rounded-2xl p-8 mb-20">
            <h2 className="text-2xl font-bold text-center mb-10 text-slate-900">Trusted by Educators Worldwide</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
                <div className="text-slate-700">Global Implementations</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">98%</div>
                <div className="text-slate-700">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">35%</div>
                <div className="text-slate-700">Efficiency Increase</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">1M+</div>
                <div className="text-slate-700">Active Learners</div>
              </div>
            </div>
          </div>
          
          {/* CTA section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Ready to Transform Your Learning Experience?</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join thousands of organizations that have revolutionized their training and education programs with our AI-powered learning management system.
            </p>
            <Button size="lg" className="group btn-gradient text-white shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 transition-all duration-300 px-8 py-3 text-lg">
              Get Started Today
              <Rocket className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;