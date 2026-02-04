import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "How much time will it take to design my website?",
    answer: "For a standard business website, it usually takes 3-5 working days. For E-commerce websites, it takes about 7-10 working days depending on the customization required."
  },
  {
    question: "Do I need to pay monthly or yearly?",
    answer: "Our website development charges are one-time. However, there is a nominal annual renewal fee for domain, hosting, and support, starting at ₹2999/year."
  },
  {
    question: "Will my website work on mobile devices?",
    answer: "Yes, absolutely! All websites we design are 100% responsive and mobile-friendly, ensuring a seamless experience on smartphones, tablets, and desktops."
  },
  {
    question: "Do you provide technical support?",
    answer: "Yes, we provide 1 year of free technical support with all our plans. We are just a call or message away if you face any issues."
  },
  {
    question: "Can I manage the website myself?",
    answer: "Yes, we provide a dynamic Admin Panel that allows you to easily change text, images, and products without any coding knowledge."
  },
  {
    question: "What if I don't like the design?",
    answer: "We work closely with you during the design process. If you're not satisfied with the initial draft, we provide revisions to ensure the final result meets your expectations."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Common Questions</h3>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">Frequently Asked Questions</h2>
            <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-lg border-orange-200 dark:border-orange-900/50 bg-orange-50/30 dark:bg-gray-800/50' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-orange-200 dark:hover:border-gray-600'}`}
            >
              <button 
                className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-inset"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className={`text-base md:text-lg font-semibold transition-colors ${openIndex === index ? 'text-orange-600 dark:text-orange-400' : 'text-gray-700 dark:text-gray-200'}`}>
                  {faq.question}
                </span>
                <span className={`p-2 rounded-full transition-all duration-300 ${openIndex === index ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rotate-180' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`} aria-hidden="true">
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                  <div 
                    className={`px-4 md:px-5 pb-4 text-gray-600 dark:text-gray-300 leading-relaxed transition-all duration-500 text-sm md:text-base ${
                      openIndex === index 
                        ? 'opacity-100 translate-y-0 delay-200' 
                        : 'opacity-0 -translate-y-4'
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
