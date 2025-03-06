
import React from 'react';
import Card from './Card';
import AnimatedText from './AnimatedText';
import { BookOpen, Lightbulb, BarChart, Monitor } from 'lucide-react';

const services = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: 'Learning Management',
    description: 'Comprehensive LMS solutions tailored to your organizational needs, with intuitive interfaces and robust analytics.'
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: 'Custom Learning Solutions',
    description: 'Bespoke e-learning content development with interactive multimedia elements designed for maximum engagement.'
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: 'Learning Analytics',
    description: 'Advanced data analysis tools to track, measure, and optimize learning outcomes across your organization.'
  },
  {
    icon: <Monitor className="h-6 w-6" />,
    title: 'Digital Transformation',
    description: 'Strategic guidance to modernize your learning infrastructure and embrace digital-first educational approaches.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="section bg-muted/50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary mb-3 block">Our Services</span>
          <h2 className="h2 mb-4">
            <AnimatedText 
              text="Transforming Learning Through Innovation" 
              className="text-balance"
            />
          </h2>
          <p className="text-muted-foreground text-lg">
            <AnimatedText 
              text="We provide comprehensive digital learning solutions that help organizations evolve and thrive in an ever-changing landscape."
              delay={200}
              className="text-balance"
            />
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="opacity-0 animate-fade-up" 
              style={{ animationDelay: `${(index + 1) * 150}ms`, animationFillMode: 'forwards' }}
            >
              <Card
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
