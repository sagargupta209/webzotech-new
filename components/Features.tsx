import React from 'react';
import { MessageCircle, Monitor, CreditCard, Zap, Share2, Wrench } from 'lucide-react';

const features = [
  { icon: MessageCircle, title: 'Live Chat' },
  { icon: Monitor, title: 'Responsive Design' },
  { icon: CreditCard, title: 'Payment Gateway' },
  { icon: Zap, title: 'Light Speed Server' },
  { icon: Share2, title: 'Social Media Integrations' },
  { icon: Wrench, title: 'Technical Support' },
];

const Features: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-orange-50/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-sm border border-orange-100 dark:border-gray-700 hover:shadow-md transition flex flex-col items-center text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-orange-300 dark:border-orange-500/50 flex items-center justify-center mb-3 md:mb-4 bg-orange-50 dark:bg-gray-700 transition-colors group-hover:bg-orange-100 dark:group-hover:bg-gray-600">
                <feature.icon className="w-7 h-7 md:w-9 md:h-9 text-orange-500 group-hover:scale-110 transition" />
              </div>
              <h3 className="text-sm md:text-lg font-bold text-gray-800 dark:text-white">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
