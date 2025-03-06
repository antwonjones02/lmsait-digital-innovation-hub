
import React, { useState } from 'react';
import Button from './Button';
import AnimatedText from './AnimatedText';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // Here you would typically handle the form submission
    alert('Thank you for your message. We will get back to you soon!');
    setFormState({ name: '', email: '', message: '' });
  };
  
  return (
    <section id="contact" className="section bg-muted/50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary mb-3 block">Contact Us</span>
          <h2 className="h2 mb-4">
            <AnimatedText text="Get in Touch" />
          </h2>
          <p className="text-muted-foreground text-lg">
            <AnimatedText 
              text="Have questions about our services or want to discuss your learning needs? We're here to help."
              delay={200}
              className="text-balance"
            />
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              <div className="flex items-start">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <a href="mailto:info@lmsait.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@lmsait.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <div className="flex items-start">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <a href="tel:+18005551234" className="text-muted-foreground hover:text-primary transition-colors">
                    +1 (800) 555-1234
                  </a>
                </div>
              </div>
            </div>
            
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              <div className="flex items-start">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Location</h4>
                  <address className="text-muted-foreground not-italic">
                    123 Innovation Way<br />
                    San Francisco, CA 94107
                  </address>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 opacity-0 animate-fade-in-right" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            <form onSubmit={handleSubmit} className="glass p-6 rounded-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-md border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-2 rounded-md border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 rounded-md border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  value={formState.message}
                  onChange={handleChange}
                />
              </div>
              
              <Button type="submit" className="w-full sm:w-auto group">
                Send Message
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
