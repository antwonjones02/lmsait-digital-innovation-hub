import React from 'react';
import { Check, X } from 'lucide-react';
import Button from './Button';

const pricingPlans = [
  {
    name: 'Basic',
    price: '$49',
    period: 'per month',
    description: 'Perfect for small teams and individual educators',
    features: [
      'Up to 100 active students',
      'Unlimited courses',
      'Basic analytics',
      'Email support',
      'Mobile-friendly interface',
      'Course certificates',
      'Basic integrations',
    ],
    notIncluded: [
      'AI-powered recommendations',
      'Advanced analytics',
      'White-labeling',
      'Priority support',
    ],
    buttonText: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$149',
    period: 'per month',
    description: 'Ideal for growing organizations and schools',
    features: [
      'Up to 1,000 active students',
      'Unlimited courses',
      'Advanced analytics',
      'Priority email support',
      'Mobile-friendly interface',
      'Course certificates',
      'Advanced integrations',
      'AI-powered recommendations',
      'White-labeling',
    ],
    notIncluded: [
      'Dedicated account manager',
    ],
    buttonText: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored pricing',
    description: 'For large organizations with specific needs',
    features: [
      'Unlimited active students',
      'Unlimited courses',
      'Enterprise analytics',
      '24/7 premium support',
      'Mobile-friendly interface',
      'Course certificates',
      'Custom integrations',
      'AI-powered recommendations',
      'White-labeling',
      'Dedicated account manager',
      'Custom feature development',
      'On-premise deployment option',
    ],
    notIncluded: [],
    buttonText: 'Contact Sales',
    popular: false,
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
            PRICING PLANS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial with no credit card required.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`
                rounded-xl overflow-hidden border transition-all duration-300
                ${plan.popular 
                  ? 'border-indigo-500 shadow-lg shadow-indigo-100 relative' 
                  : 'border-slate-200 hover:border-indigo-200 hover:shadow-md'
                }
              `}
            >
              {plan.popular && (
                <div className="bg-indigo-500 text-white text-center py-1 text-sm font-medium">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 ml-2">{plan.period}</span>
                </div>
                
                <Button 
                  className={`w-full mb-8 ${
                    plan.popular 
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                      : 'bg-white border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 text-slate-800'
                  }`}
                >
                  {plan.buttonText}
                </Button>
                
                <div className="space-y-4">
                  <p className="font-medium text-slate-900">Includes:</p>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <p className="font-medium text-slate-900 mt-6">Not included:</p>
                      {plan.notIncluded.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <X className="h-5 w-5 text-slate-300 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-400">{feature}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-slate-50 rounded-xl p-8 border border-slate-200">
          <h3 className="text-2xl font-bold mb-4 text-slate-900">Need a custom solution?</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            We offer tailored solutions for organizations with specific requirements. Contact our sales team to discuss your needs.
          </p>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
            Contact Sales Team
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">No Hidden Fees</h3>
            <p className="text-slate-600">Transparent pricing with no surprise charges or hidden costs.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">Secure Platform</h3>
            <p className="text-slate-600">Enterprise-grade security to protect your data and privacy.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">24/7 Support</h3>
            <p className="text-slate-600">Our dedicated support team is always ready to help you succeed.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;