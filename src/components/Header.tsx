import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';
import { Menu, X, ChevronRight } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#');
  
  useEffect(() => {
    const handleScroll = () => {
      // Update header style based on scroll position
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href);
      
      for (const section of sections) {
        if (section === '#') continue;
        
        const element = document.querySelector(section);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        const offset = 100;
        
        if (rect.top <= offset && rect.bottom >= offset) {
          setActiveSection(section);
          break;
        } else if (window.scrollY < 100) {
          setActiveSection('#');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4',
      isScrolled ? 'py-3 glass' : 'py-5 bg-transparent'
    )}>
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className={cn(
            "font-display text-2xl font-bold transition-all duration-300",
            isScrolled ? "text-slate-900" : "text-slate-900"
          )}>
            LMS & AI Technology
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href}
                  className={cn(
                    "text-slate-700 hover:text-slate-900 font-medium transition-all duration-200 relative py-1",
                    activeSection === item.href ? "text-indigo-700 after:w-full" : "after:w-0",
                    "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-indigo-500 after:transition-all hover:after:w-full"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button className="btn-gradient text-white shadow-md hover:shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/20 transition-all duration-300">
            Get Started <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          'md:hidden absolute left-0 right-0 top-full px-4 py-5 glass transition-all duration-300 border-t border-slate-200',
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        )}
      >
        <ul className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href}
                className={cn(
                  "block py-2 font-medium transition-colors",
                  activeSection === item.href ? "text-indigo-700" : "text-slate-700"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <Button className="w-full btn-gradient text-white">
              Get Started <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;