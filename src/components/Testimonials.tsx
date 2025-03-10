import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote: "LMS & AI Technology transformed our corporate training program. The AI-powered learning paths have increased employee engagement by 78% and reduced onboarding time by nearly half.",
    author: "Sarah Johnson",
    title: "Director of Learning & Development",
    company: "Global Innovations Inc.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5
  },
  {
    id: 2,
    quote: "The analytics dashboard provided by LMS & AI Technology gave us unprecedented insights into student performance. We've been able to identify learning gaps and address them proactively.",
    author: "Michael Chen",
    title: "Chief Academic Officer",
    company: "Westfield University",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    rating: 5
  },
  {
    id: 3,
    quote: "Implementing the adaptive learning platform from LMS & AI Technology has been a game-changer for our school district. Students are more engaged and test scores have improved significantly.",
    author: "Dr. Amelia Rodriguez",
    title: "Superintendent",
    company: "Oakridge School District",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5
  },
  {
    id: 4,
    quote: "The customization options and integration capabilities of their platform exceeded our expectations. Their team was responsive and helped us every step of the way.",
    author: "James Wilson",
    title: "CTO",
    company: "TechLearn Solutions",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.querySelector('#testimonials');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

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
    <section id="testimonials" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              SUCCESS STORIES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              What Our Clients Are Saying
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover how our learning management system has transformed education and training for organizations worldwide.
            </p>
          </div>
          
          {/* Testimonial cards in grid - similar to trainingsites.io */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-500 fill-yellow-500 mr-1" />
                  ))}
                </div>
                
                <blockquote className="text-slate-700 mb-6 italic">
                  "{testimonial.quote.length > 150 ? `${testimonial.quote.substring(0, 150)}...` : testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-indigo-100 mr-4"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.author}</div>
                    <div className="text-sm text-slate-500">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Featured testimonial - similar to trainingsites.io */}
          <div className="bg-indigo-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10">
              <Quote size={200} />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  "The most intuitive and powerful learning platform we've ever used."
                </div>
                
                <blockquote className="text-indigo-100 mb-8 text-lg">
                  After implementing LMS & AI Technology's platform, we saw a 45% increase in course completion rates and received overwhelmingly positive feedback from both instructors and students. The AI-powered recommendations have been a game-changer for personalized learning.
                </blockquote>
                
                <div className="flex items-center">
                  <img 
                    src="https://randomuser.me/api/portraits/women/45.jpg" 
                    alt="Jennifer Martinez"
                    className="w-16 h-16 rounded-full object-cover border-2 border-indigo-400 mr-4"
                  />
                  <div>
                    <div className="font-semibold text-white text-lg">Jennifer Martinez</div>
                    <div className="text-indigo-200">Chief Learning Officer, TechEdu Global</div>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Team collaborating"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Logos section */}
          <div className="mt-20 text-center">
            <p className="text-sm uppercase tracking-wider text-slate-500 mb-8">Trusted by leading organizations worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="Google" className="h-6 md:h-8 opacity-60 hover:opacity-100 transition-opacity" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png" alt="IBM" className="h-6 md:h-8 opacity-60 hover:opacity-100 transition-opacity" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" alt="Microsoft" className="h-6 md:h-8 opacity-60 hover:opacity-100 transition-opacity" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="Amazon" className="h-6 md:h-8 opacity-60 hover:opacity-100 transition-opacity" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Netflix" className="h-6 md:h-8 opacity-60 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;