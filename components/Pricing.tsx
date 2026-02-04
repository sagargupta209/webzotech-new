import React, { useState } from 'react';
import { Phone, CheckCircle, FileText, BadgeCheck, HelpCircle, Briefcase, ShoppingCart } from 'lucide-react';
import { PricingPlan } from '../types';

const businessPlans: PricingPlan[] = [
  {
    name: 'Startup Plan',
    price: '₹3,999/-',
    subtitle: "Best For Startup's",
    features: [
      '4 Page Modern Website',
      'Dynamic Website',
      'Domain Configuration',
      'Hosting Configuration',
      '2 Business Emails',
      '100% Mobile Friendly',
      'Website Admin Panel',
      'Google Search Console Setup',
      'Unlimited Images & Videos',
      'Live Chat',
      'Contact Form',
      'Click to Call Button',
      'Whatsapp Integration',
      'Lead Generation Form',
      'SEO Ready Website',
      'Free SSL Certificate',
      'Technical Support 1 Year',
      'Annual Renewal 2999/-'
    ]
  },
  {
    name: 'Classic Plan',
    price: '₹7,999/-',
    subtitle: "Best For Small / Medium Business",
    isPopular: true,
    features: [
      '8 Page Modern Website',
      'Dynamic Website',
      'Domain Configuration',
      'Hosting Configuration',
      '3 Business Emails',
      '100% Mobile Friendly',
      'Website Admin Panel',
      'Google Search Console Setup',
      'Unlimited Images & Videos',
      'Live Chat',
      'Contact Form',
      'Click to Call Button',
      'Whatsapp Integration',
      'Lead Generation Form',
      'SEO Ready Website',
      'Payment Integration',
      'Free SSL Certificate',
      'Technical Support 1 Year',
      'Annual Renewal 3499/-'
    ]
  },
  {
    name: 'Premium Plan',
    price: '₹9,999/-',
    subtitle: "Best For Enterprises",
    features: [
      '12 Page Modern Website',
      'Dynamic Website',
      'Domain Configuration',
      'Hosting Configuration',
      '5 Business Emails',
      '100% Mobile Friendly',
      'Website Admin Panel',
      'Google Search Console Setup',
      'Unlimited Images & Videos',
      'Live Chat',
      'Contact Form',
      'Click to Call Button',
      'Whatsapp Integration',
      'Lead Generation Form',
      'SEO Ready Website',
      'Woocommerce Functions',
      'Payment Integration',
      'Free SSL Certificate',
      'Technical Support 1 Year',
      'Annual Renewal 3999/-'
    ]
  },
  {
    name: 'Custom Plan',
    price: '₹ ???',
    subtitle: "Best For Custom Website",
    features: [
      'Pages: As Per Requirement',
      'Dynamic Website',
      'Domain Configuration',
      'Hosting Configuration',
      '5 Business Emails',
      '100% Mobile Friendly',
      'Website Admin Panel',
      'Google Search Console Setup',
      'Unlimited Images & Videos',
      'Live Chat',
      'Contact Form',
      'Click to Call Button',
      'Whatsapp Integration',
      'Lead Generation Form',
      'SEO Ready Website',
      'Woocommerce Functions',
      'Payment Integration',
      'Free SSL Certificate',
      'Technical Support 1 Year',
      'Annual Renewal 4499/-'
    ]
  }
];

const ecommercePlans: PricingPlan[] = [
    {
      name: 'Startup E-Commerce',
      price: '₹9,999/-',
      subtitle: "Best For Startup's",
      features: [
        '5 Page Modern Website',
        '20 Product Categories',
        '300 Product Listing',
        'Product Variation Features',
        'Domain Configuration',
        'Hosting Configuration',
        '2 Business Emails',
        '100% Mobile Friendly',
        'Website Admin Panel',
        'Unlimited Images & Videos',
        'Google Search Console Setup',
        'Live Chat',
        'Inquiry Form',
        'Click to Call Button',
        'Whatsapp Integration',
        'SEO Ready Website',
        'Auto Invoice Bill Generate Features',
        'Payment Gateway Integration',
        'Free SSL Certificate',
        'Technical Support 1 Year',
        'Annual Renewal 3999/-'
      ]
    },
    {
      name: 'Classic E-Commerce',
      price: '₹13,999/-',
      subtitle: "Best For Limited Catogory",
      isPopular: true,
      features: [
        '5 Page Modern Website',
        '100 Product Categories',
        'Unlimited Product Listing',
        'Product Variation Features',
        'Domain Configuration',
        'Hosting Configuration',
        '5 Business Emails',
        '100% Mobile Friendly',
        'Website Admin Panel',
        'Unlimited Images & Videos',
        'Google Search Console Setup',
        'Live Chat',
        'Inquiry Form',
        'Click to Call Button',
        'Whatsapp Integration',
        'SEO Ready Website',
        'Auto Invoice Bill Generate Features',
        'Payment Gateway Integration',
        'Free SSL Certificate',
        'Technical Support 1 Year',
        'Annual Renewal 4499/-'
      ]
    },
    {
        name: 'Premium E-Commerce',
        price: '₹17,999/-',
        subtitle: "Best For Unlimited Catogory",
        features: [
          '5 Page Modern Website',
          'Unlimited Product Categories',
          'Unlimited Product Listing',
          'Product Variation Features',
          'Domain Configuration',
          'Hosting Configuration',
          '5 Business Emails',
          '100% Mobile Friendly',
          'Website Admin Panel',
          'Unlimited Images & Videos',
          'Google Search Console Setup',
          'Live Chat',
          'Inquiry Form',
          'Click to Call Button',
          'Whatsapp Integration',
          'SEO Ready Website',
          'Auto Invoice Bill Generate Features',
          'Payment Gateway Integration',
          'Free SSL Certificate',
          'Technical Support 1 Year',
          'Annual Renewal 4999/-'
        ]
      },
      {
        name: 'Custom E-Commerce',
        price: '₹ ???',
        subtitle: "Customised Store",
        features: [
          'Pages - As per Requirements',
          'Unlimited Product Categories',
          'Unlimited Product Listing',
          'Product Variation Features',
          'Domain Configuration',
          'Hosting Configuration',
          '5 Business Emails',
          '100% Mobile Friendly',
          'Website Admin Panel',
          'Unlimited Images & Videos',
          'Google Search Console Setup',
          'Live Chat',
          'Inquiry Form',
          'Click to Call Button',
          'Whatsapp Integration',
          'SEO Ready Website',
          'Auto Invoice Bill Generate Features',
          'Payment Gateway Integration',
          'Free SSL Certificate',
          'Technical Support 1 Year',
          'Annual Renewal 4999/-'
        ]
      },
  ];

const PlanCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => (
  <div className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border ${plan.isPopular ? 'border-orange-500 md:scale-105 z-10' : 'border-gray-100 dark:border-gray-700'} overflow-hidden flex flex-col h-full transform transition-all hover:shadow-xl dark:hover:shadow-orange-900/20`}>
    {plan.isPopular && (
      <div className="bg-orange-500 text-white text-center py-2 font-bold tracking-wider text-sm">
        POPULAR
      </div>
    )}
    <div className="p-6 text-center border-b border-gray-100 dark:border-gray-700">
      <h3 className={`text-xl md:text-2xl font-bold mb-2 ${plan.isPopular ? 'text-orange-500' : 'text-orange-400'}`}>{plan.name}</h3>
      <div className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-white my-2">{plan.price}</div>
      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{plan.subtitle}</p>
      
      <button 
        className="w-full mt-6 bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 rounded-full font-bold shadow-md hover:shadow-lg transition flex justify-center items-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        aria-label={`Request callback for ${plan.name}`}
      >
        <Phone size={18} aria-hidden="true" /> Request Callback
      </button>
    </div>
    
    <div className="p-6 flex-grow">
      <ul className="space-y-2 sm:space-y-3">
        {plan.features.map((feature, idx) => (
            <React.Fragment key={idx}>
             <li className="flex items-start gap-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{feature}</span>
            </li>
            {(feature.includes('Videos') || feature.includes('SEO Ready') || feature.includes('Payment Integration') && !feature.includes('Gateway')) && (
                 <li className="pt-2 border-b border-gray-200 dark:border-gray-700" role="separator"></li>
            )}
             {(feature.includes('Videos') && plan.name.includes('Website')) && <li className="pt-2 font-bold text-orange-500 text-base md:text-lg">Functionality</li>}
             {(feature.includes('SEO Ready')) && <li className="pt-2 font-bold text-orange-500 text-base md:text-lg">Website Security</li>}
             {(feature.includes('Videos') && plan.name.includes('E-Commerce')) && <li className="pt-2 font-bold text-orange-500 text-base md:text-lg">Functionality</li>}
             {(feature.includes('Payment Gateway') && plan.name.includes('E-Commerce')) && <li className="pt-2 font-bold text-orange-500 text-base md:text-lg">Website Security</li>}
            
            </React.Fragment>
        ))}
      </ul>
    </div>
  </div>
);

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'business' | 'ecommerce'>('business');

  return (
    <section id="pricing" className="py-16 md:py-20 bg-orange-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200">Website Features Prices</h3>
          <h2 className="text-2xl md:text-4xl font-bold text-orange-500 mb-6">Choose Your Plan</h2>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8" role="tablist" aria-label="Pricing plan categories">
            <button
              onClick={() => setActiveTab('business')}
              role="tab"
              aria-selected={activeTab === 'business'}
              aria-controls="business-panel"
              id="business-tab"
              className={`flex items-center gap-2 px-6 py-2.5 md:px-8 md:py-3 rounded-full font-bold text-sm md:text-lg transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                activeTab === 'business'
                  ? 'bg-orange-500 text-white transform scale-105 ring-2 ring-orange-200'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-gray-700 hover:text-orange-500'
              }`}
            >
              <Briefcase size={18} className={activeTab === 'business' ? 'text-white' : 'text-orange-500'} aria-hidden="true" />
              Business Website
            </button>
            <button
              onClick={() => setActiveTab('ecommerce')}
              role="tab"
              aria-selected={activeTab === 'ecommerce'}
              aria-controls="ecommerce-panel"
              id="ecommerce-tab"
              className={`flex items-center gap-2 px-6 py-2.5 md:px-8 md:py-3 rounded-full font-bold text-sm md:text-lg transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                activeTab === 'ecommerce'
                  ? 'bg-orange-500 text-white transform scale-105 ring-2 ring-orange-200'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-gray-700 hover:text-orange-500'
              }`}
            >
              <ShoppingCart size={18} className={activeTab === 'ecommerce' ? 'text-white' : 'text-orange-500'} aria-hidden="true" />
              E-Commerce Website
            </button>
          </div>

           <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-700 dark:text-gray-400 font-medium">
             <span className="flex items-center gap-1"><FileText className="text-orange-500" size={14} aria-hidden="true"/> No contracts</span>
             <span className="text-orange-300 hidden sm:inline" aria-hidden="true">|</span>
             <span className="flex items-center gap-1"><BadgeCheck className="text-orange-500" size={14} aria-hidden="true"/> 100% money-back guarantee</span>
             <span className="text-orange-300 hidden sm:inline" aria-hidden="true">|</span>
             <span className="flex items-center gap-1"><HelpCircle className="text-orange-500" size={14} aria-hidden="true"/> Free Technical Support</span>
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[600px] animate-fade-in-up">
            <div 
                role="tabpanel" 
                id="business-panel" 
                aria-labelledby="business-tab"
                hidden={activeTab !== 'business'}
            >
                <div>
                     <div className="text-center mb-10 animate-slide-down">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">Start-Up & Business Website</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
                    {businessPlans.map((plan, idx) => (
                        <div key={`biz-${idx}`} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                            <PlanCard plan={plan} />
                        </div>
                    ))}
                    </div>
                </div>
            </div>

            <div 
                role="tabpanel" 
                id="ecommerce-panel" 
                aria-labelledby="ecommerce-tab"
                hidden={activeTab !== 'ecommerce'}
            >
                <div>
                    <div className="text-center mb-10 animate-slide-down">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">E-Commerce Website Plans</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
                    {ecommercePlans.map((plan, idx) => (
                        <div key={`ecom-${idx}`} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                            <PlanCard plan={plan} />
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
