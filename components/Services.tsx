import React, { useState, useEffect } from 'react';
import { Palette, ShoppingBag, Megaphone, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    title: 'Web Design',
    description: 'We create stunning, responsive, and user-friendly websites that represent your brand effectively. Our designs focus on aesthetics and functionality to ensure a seamless user experience.',
    icon: Palette,
  },
  {
    title: 'E-Commerce Development',
    description: 'Build your online store with secure payment gateways, inventory management, and a seamless shopping experience. We help you sell your products to a global audience 24/7.',
    icon: ShoppingBag,
  },
  {
    title: 'Digital Marketing',
    description: 'Grow your business with our strategic digital marketing services including SEO, social media, and PPC campaigns. We help you reach your target audience and increase conversions.',
    icon: Megaphone,
  },
];

const Services: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, services.length - itemsPerPage);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerPage, maxIndex, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="services" className="py-16 md:py-20 bg-white dark:bg-gray-900 select-none transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-slide-down">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Our Expertise</h3>
          <h2 className="text-2xl md:text-4xl font-bold text-orange-500 mb-6">Services We Offer</h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-12 group">
          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border border-orange-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-orange-500 hover:border-orange-500 transition-all duration-300 focus:outline-none hidden sm:flex hover:scale-110"
            aria-label="Previous Service"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border border-orange-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-orange-500 hover:border-orange-500 transition-all duration-300 focus:outline-none hidden sm:flex hover:scale-110"
            aria-label="Next Service"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden py-6 -my-6">
            <div
              className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3 md:px-4"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div className="bg-orange-50/40 dark:bg-gray-800/50 p-6 md:p-10 rounded-3xl border border-orange-100/50 dark:border-gray-700 hover:shadow-2xl dark:hover:shadow-orange-900/20 transition-all duration-500 group text-center hover:-translate-y-3 relative overflow-hidden h-full flex flex-col items-center">
                    {/* Hover side accent */}
                    <div className="absolute top-0 left-0 w-2 h-full bg-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>

                    {/* Icon Container */}
                    <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-center shadow-md mb-6 md:mb-8 group-hover:bg-orange-500 transition-colors duration-500 border border-orange-100 dark:border-gray-600 shrink-0 transform group-hover:rotate-6 transition-transform">
                      <service.icon 
                        className="w-10 h-10 md:w-12 md:h-12 text-orange-500 group-hover:text-white transition-colors duration-500 group-hover-pulse-scale" 
                        aria-hidden="true" 
                      />
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-8 flex-grow group-hover:text-gray-700 dark:group-hover:text-gray-100 transition-colors duration-500">
                      {service.description}
                    </p>

                    <a
                      href="#contact"
                      className="inline-flex items-center text-orange-500 font-bold hover:text-orange-700 dark:hover:text-orange-300 transition-colors focus:outline-none focus:underline mt-auto group/btn text-sm md:text-base"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Explore Service 
                      <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" aria-hidden="true" />
                    </a>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-500 rounded-full h-3 ${
                  currentIndex === idx
                    ? 'w-10 bg-orange-500 shadow-md shadow-orange-200 dark:shadow-orange-900'
                    : 'w-3 bg-gray-200 dark:bg-gray-700 hover:bg-orange-300'
                }`}
                aria-label={`Go to service slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
