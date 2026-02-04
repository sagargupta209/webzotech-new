import React, { useState, useEffect } from 'react';
import { Briefcase, ShoppingCart, Phone, Layers, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  { id: 1, category: 'Business', image: 'https://picsum.photos/600/600?random=1', title: 'Corporate Finance' },
  { id: 2, category: 'E-Commerce', image: 'https://picsum.photos/600/600?random=2', title: 'Fashion Store' },
  { id: 3, category: 'Business', image: 'https://picsum.photos/600/600?random=3', title: 'Tech Agency' },
  { id: 4, category: 'E-Commerce', image: 'https://picsum.photos/600/600?random=4', title: 'Organic Foods' },
  { id: 5, category: 'Business', image: 'https://picsum.photos/600/600?random=5', title: 'Consulting Firm' },
  { id: 6, category: 'E-Commerce', image: 'https://picsum.photos/600/600?random=6', title: 'Gadget Shop' },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 768) setItemsPerPage(1);
        else if (window.innerWidth < 1024) setItemsPerPage(2);
        else setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [filter, itemsPerPage]);

  const maxIndex = Math.max(0, filteredProjects.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section id="portfolio" className="py-16 md:py-20 bg-orange-50/50">
        <div className="container mx-auto px-4 text-center">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Find Out</h3>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-8">Some Of Our Work</h2>

            <div 
              className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12"
              role="group"
              aria-label="Project filters"
            >
                <button 
                  type="button"
                  onClick={() => setFilter('All')}
                  aria-pressed={filter === 'All'}
                  className={`flex items-center gap-2 px-4 py-2 text-sm md:text-base font-bold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 ${filter === 'All' ? 'bg-orange-500 text-white shadow-lg transform scale-105' : 'bg-white text-gray-600 hover:text-orange-500 hover:shadow-md'}`}
                >
                    <Layers size={18} aria-hidden="true" /> All Projects
                </button>
                <button 
                  type="button"
                  onClick={() => setFilter('Business')}
                  aria-pressed={filter === 'Business'}
                   className={`flex items-center gap-2 px-4 py-2 text-sm md:text-base font-bold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 ${filter === 'Business' ? 'bg-orange-500 text-white shadow-lg transform scale-105' : 'bg-white text-gray-600 hover:text-orange-500 hover:shadow-md'}`}
                >
                    <Briefcase size={18} aria-hidden="true" /> Business
                </button>
                <button 
                  type="button"
                  onClick={() => setFilter('E-Commerce')}
                  aria-pressed={filter === 'E-Commerce'}
                   className={`flex items-center gap-2 px-4 py-2 text-sm md:text-base font-bold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 ${filter === 'E-Commerce' ? 'bg-orange-500 text-white shadow-lg transform scale-105' : 'bg-white text-gray-600 hover:text-orange-500 hover:shadow-md'}`}
                >
                    <ShoppingCart size={18} aria-hidden="true" /> E-Commerce
                </button>
            </div>

            <div className="relative max-w-7xl mx-auto px-0 md:px-8 group">
                {maxIndex > 0 && (
                  <>
                    <button 
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className={`hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-30 bg-white p-4 rounded-full shadow-2xl text-gray-700 border-2 border-orange-100 transition-all duration-300 items-center justify-center opacity-0 group-hover:opacity-100 ${currentIndex === 0 ? 'opacity-0 cursor-not-allowed' : 'hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:scale-110 cursor-pointer'}`}
                        aria-label="Previous project"
                    >
                        <ChevronLeft size={28} />
                    </button>
                    <button 
                        onClick={nextSlide}
                        disabled={currentIndex === maxIndex}
                        className={`hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-30 bg-white p-4 rounded-full shadow-2xl text-gray-700 border-2 border-orange-100 transition-all duration-300 items-center justify-center opacity-0 group-hover:opacity-100 ${currentIndex === maxIndex ? 'opacity-0 cursor-not-allowed' : 'hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:scale-110 cursor-pointer'}`}
                        aria-label="Next project"
                    >
                        <ChevronRight size={28} />
                    </button>
                  </>
                )}

                <div className="overflow-hidden py-8 -my-8 px-2">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
                    >
                        {filteredProjects.map((project) => (
                          <div 
                            key={project.id} 
                            className="flex-shrink-0 px-3 md:px-4"
                            style={{ width: `${100 / itemsPerPage}%` }}
                          >
                              <div 
                                className="group rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white relative animate-fade-in-up aspect-square cursor-pointer"
                                role="article"
                                aria-label={`${project.title} project details`}
                              >
                                  <img 
                                    src={project.image} 
                                    alt={`${project.title} - ${project.category} Website Design`} 
                                    className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105" 
                                    loading="lazy"
                                  />
                                  <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col justify-center items-center p-6 text-center">
                                    <span className="text-orange-400 font-bold text-xs md:text-sm tracking-widest uppercase mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 ease-out">
                                        {project.category}
                                    </span>
                                    <h4 className="text-white text-xl md:text-2xl font-bold transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 ease-out">
                                        {project.title}
                                    </h4>
                                    <div className="w-16 h-1 bg-orange-500 mt-4 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-300 ease-out"></div>
                                    <div className="mt-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-[400ms] ease-out">
                                       <button className="flex items-center gap-2 text-white border border-white/30 hover:bg-white hover:text-black px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-colors duration-300">
                                         View Details <ArrowRight size={14} />
                                       </button>
                                    </div>
                                  </div>
                              </div>
                          </div>
                        ))}
                    </div>
                </div>

                {maxIndex > 0 && (
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`transition-all duration-300 rounded-full h-2.5 ${
                                    currentIndex === idx 
                                        ? 'w-8 bg-orange-500' 
                                        : 'w-2.5 bg-gray-300 hover:bg-orange-300'
                                }`}
                                aria-label={`Go to project slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="mt-16 md:mt-20">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-center text-white shadow-2xl mx-auto max-w-4xl relative overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
                    
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 relative z-10">Ready to Launch Your Dream Project?</h3>
                    <p className="text-orange-50 mb-8 max-w-2xl mx-auto text-sm md:text-lg relative z-10">
                        Join hundreds of satisfied clients who trusted WebzoTech. Let's build something amazing together.
                    </p>
                    
                    <a 
                        href="#contact" 
                        className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <Phone size={20} className="fill-current" />
                        Start Your Project Now
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio;