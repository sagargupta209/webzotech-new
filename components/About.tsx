import React, { useEffect, useRef, useState } from 'react';
import { Target, Eye, Users, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const [cardsVisible, setCardsVisible] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCardsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className="py-16 md:py-20 bg-orange-50/30 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:text-center animate-slide-down">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Who We Are</h3>
          <h2 className="text-2xl md:text-4xl font-bold text-orange-500 mb-6">About WebzoTech</h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-16 md:mb-20">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative animate-fade-in-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Webzo Team at work" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay"></div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-xl border border-orange-100 dark:border-gray-700 flex flex-col items-center animate-float hidden sm:flex">
              <span className="text-3xl md:text-4xl font-bold text-orange-500">5+</span>
              <span className="text-gray-600 dark:text-gray-300 font-semibold text-xs md:text-sm">Years Experience</span>
            </div>
            
            {/* Decorative dots - Hidden on very small screens */}
            <div className="absolute -top-8 -left-8 w-24 h-24 md:w-32 md:h-32 opacity-20 hidden sm:block" style={{ backgroundImage: 'radial-gradient(circle, #f97316 2px, transparent 2.5px)', backgroundSize: '12px 12px' }}></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 animate-fade-in-up delay-200">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-4">Empowering Business Growth Through Digital Excellence</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
              At WebzoTech, we are more than just a web design agency; we are your strategic partners in the digital landscape. Founded with a passion for innovation and a commitment to quality, we specialize in creating stunning websites, robust e-commerce platforms, and effective digital marketing strategies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-sm md:text-base">
              Our team of expert developers, designers, and marketers works tirelessly to transform your vision into reality. We believe that every business deserves a powerful online presence to compete in today's market.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {[
                "Custom Web Development",
                "SEO Optimization",
                "24/7 Technical Support",
                "Mobile-First Approach"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className={`bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg border-b-4 border-orange-500 hover:-translate-y-2 transition-transform duration-300 group ${cardsVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-50 dark:bg-orange-900/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
              <Target className="w-7 h-7 md:w-8 md:h-8 text-orange-500 group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-3">Our Mission</h4>
            <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm leading-relaxed">
              To provide affordable, high-quality digital solutions that enable small and medium-sized businesses to scale their operations and reach a global audience effectively.
            </p>
          </div>

          <div className={`bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg border-b-4 border-blue-500 hover:-translate-y-2 transition-transform duration-300 group ${cardsVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
              <Eye className="w-7 h-7 md:w-8 md:h-8 text-blue-500 group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-3">Our Vision</h4>
            <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm leading-relaxed">
              To be recognized globally as a catalyst for digital transformation, setting standards for creativity, innovation, and client satisfaction in the IT industry.
            </p>
          </div>

          <div className={`bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg border-b-4 border-green-500 sm:col-span-2 lg:col-span-1 hover:-translate-y-2 transition-transform duration-300 group ${cardsVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <div className="w-14 h-14 md:w-16 md:h-16 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
              <Users className="w-7 h-7 md:w-8 md:h-8 text-green-500 group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-3">Our Team</h4>
            <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm leading-relaxed">
              We are a collective of certified developers, creative designers, and strategic thinkers dedicated to delivering excellence in every project we undertake.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;