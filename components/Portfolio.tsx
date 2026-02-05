import React, { useState, useEffect } from 'react';
import { Briefcase, ShoppingCart, Phone, Layers, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  { id: 1, category: 'Business', image: 'https://picsum.photos/400/400?random=1', title: 'Corporate Finance' },
  { id: 2, category: 'E-Commerce', image: 'https://picsum.photos/400/400?random=2', title: 'Fashion Store' },
  { id: 3, category: 'Business', image: 'https://picsum.photos/400/400?random=3', title: 'Tech Agency' },
  { id: 4, category: 'E-Commerce', image: 'https://picsum.photos/400/400?random=4', title: 'Organic Foods' },
  { id: 5, category: 'Business', image: 'https://picsum.photos/400/400?random=5', title: 'Consulting Firm' },
  { id: 6, category: 'E-Commerce', image: 'https://picsum.photos/400/400?random=6', title: 'Gadget Shop' },
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
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [filter, itemsPerPage]);

  const maxIndex = Math.max(0, filteredProjects.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (maxIndex > 0) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, maxIndex, filter]);

  return (
    <section id="portfolio" className="py-16 md:py-20 bg-orange-50/50">
        <div className="container mx-auto px-4 text-center">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Find Out</h3>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-8">Some Of Our Work</h2>

            <div className="relative max-w-7xl mx-auto px-0 md:px-8 group">
                <div className="overflow-hidden py-8 -my-8 px-2">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translate3d(-${currentIndex * (100 / itemsPerPage)}%, 0, 0)` }}
                    >
                        {filteredProjects.map((project) => (
                          <div 
                            key={project.id} 
                            className="flex-shrink-0 px-3 md:px-4"
                            style={{ width: `${100 / itemsPerPage}%` }}
                          >
                              <div className="group rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-100 dark:bg-gray-800 relative aspect-square">
                                  <img 
                                    src={project.image} 
                                    alt={`${project.title} project`} 
                                    className="w-full h-full object-cover" 
                                    loading="lazy"
                                    decoding="async"
                                    width="400"
                                    height="400"
                                  />
                                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-6 text-center">
                                    <h4 className="text-white text-xl font-bold">{project.title}</h4>
                                  </div>
                              </div>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio;