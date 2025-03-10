import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';
import { Menu, X, ChevronRight } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Resources', href: '#resources' },
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
      isScrolled ? 'py-3 bg-white shadow-md' : 'py-5 bg-transparent'
    )}>
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className={cn(
            "font-display text-2xl font-bold transition-all duration-300 text-indigo-600",
          )}>
            LMS & AI
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex mr-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-slate-700 hover:text-indigo-600 font-medium transition-all duration-200",
                    activeSection === item.href ? "text-indigo-600" : ""
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="text-indigo-700 border-indigo-200 hover:bg-indigo-50">
              LOGIN
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              JOIN FREE
            </Button>
          </div>
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
          'md:hidden absolute left-0 right-0 top-full px-4 py-5 bg-white shadow-lg transition-all duration-300 border-t border-slate-100',
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        )}
      >
        <ul className="flex flex-col space-y-4 mb-6">
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
        </ul>
        <div className="flex flex-col space-y-3">
          <Button variant="outline" className="w-full text-indigo-700 border-indigo-200 hover:bg-indigo-50">
            LOGIN
          </Button>
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
            JOIN FREE
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;