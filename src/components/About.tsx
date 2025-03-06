
import React from 'react';
import AnimatedText from './AnimatedText';
import { CheckCircle } from 'lucide-react';

const features = [
  'Innovative learning approaches',
  'Expert-designed content',
  'Data-driven methodology',
  'Personalized learning paths',
  'Continuous improvement framework',
  'Enterprise-grade security'
];

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-sm font-medium text-primary mb-3 block">About LMSAIT</span>
            <h2 className="h2 mb-6">
              <AnimatedText 
                text="We're Changing How Organizations Approach Learning" 
                className="text-balance"
              />
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              <AnimatedText 
                text="At LMSAIT, we combine educational expertise with cutting-edge technology to create learning solutions that truly engage and transform. Our approach centers on understanding your unique needs and delivering measurable results."
                delay={200}
                className="text-balance"
              />
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={feature}
                  className="flex items-start opacity-0 animate-fade-in-left" 
                  style={{ animationDelay: `${(index + 1) * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <p className="text-muted-foreground">
              <AnimatedText 
                text="With years of industry experience, our team of experts is committed to delivering solutions that exceed expectations and drive real educational impact."
                delay={400}
              />
            </p>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/20 p-1">
              <div className="absolute inset-0 bg-background/50 backdrop-blur-sm rounded-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="font-display font-bold text-7xl md:text-8xl mb-4 text-primary animate-float">
                      LMS
                    </div>
                    <div className="text-xl md:text-2xl text-muted-foreground">
                      Learning Management Solutions
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-5 -right-5 h-20 w-20 rounded-full bg-secondary/30 blur-xl animate-pulse-subtle" />
            <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-primary/20 blur-xl animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
