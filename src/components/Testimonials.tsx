import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote: "LMS & AI Technology transformed our corporate training program. The AI-powered learning paths have increased employee engagement by 78% and reduced onboarding time by nearly half.",
    author: "Sarah Johnson",
    title: "Director of Learning & Development",
    company: "Global Innovations Inc.",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    quote: "The analytics dashboard provided by LMS & AI Technology gave us unprecedented insights into student performance. We've been able to identify learning gaps and address them proactively.",
    author: "Michael Chen",
    title: "Chief Academic Officer",
    company: "Westfield University",
    image: "https://randomuser.me/api/portraits/men/54.jpg"
  },
  {
    id: 3,
    quote: "Implementing the adaptive learning platform from LMS & AI Technology has been a game-changer for our school district. Students are more engaged and test scores have improved significantly.",
    author: "Dr. Amelia Rodriguez",
    title: "Superintendent",
    company: "Oakridge School District",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 4,
    quote: "The customization options and integration capabilities of their platform exceeded our expectations. Their team was responsive and helped us every step of the way.",
    author: "James Wilson",
    title: "CTO",
    company: "TechLearn Solutions",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section id="testimonials" className="section bg-gradient-to-b from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="h2 mb-4 text-slate-900">What Our Clients Say</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto text-balance">
            Discover how our solutions have transformed learning experiences and driven success for organizations worldwide.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto reveal">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-10 overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-6 right-6 text-indigo-100">
              <Quote size={120} className="opacity-20" />
            </div>
            
            {/* Testimonial content */}
            <div className="relative z-10">
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  isAnimating ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'
                }`}
              >
                <blockquote className="text-xl md:text-2xl font-medium text-slate-700 mb-6 leading-relaxed">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="mr-4">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].author}
                      className="w-14 h-14 rounded-full object-cover border-2 border-indigo-100"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonials[activeIndex].author}</div>
                    <div className="text-indigo-600">{testimonials[activeIndex].title}</div>
                    <div className="text-sm text-slate-500">{testimonials[activeIndex].company}</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-indigo-600 w-6' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Navigation arrows */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center -translate-y-1/2 px-4">
              <button 
                onClick={prevTestimonial}
                className="bg-white/80 hover:bg-white text-slate-700 p-2 rounded-full shadow-md backdrop-blur-sm transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-white/80 hover:bg-white text-slate-700 p-2 rounded-full shadow-md backdrop-blur-sm transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Logos of clients */}
        <div className="mt-20 reveal">
          <p className="text-center text-sm uppercase tracking-wider text-slate-500 mb-8">Trusted by leading organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="Google" className="h-6 md:h-8 opacity-60 hover:opacity-100 transition-opacity" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png" alt="IBM" className="h-6 md:h-8 opacity-60 hover:opacity-100 transition-opacity" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" alt="Microsoft" className="h-6 md:h-8 opacity-60 hover:opacity-100 transition-opacity" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="Amazon" className="h-6 md:h-8 opacity-60 hover:opacity-100 transition-opacity" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Netflix" className="h-6 md:h-8 opacity-60 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Testimonials;