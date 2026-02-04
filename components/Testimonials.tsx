import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: "Salim Khan",
    role: "Director",
    image: "https://picsum.photos/100/100?random=10",
    text: "Really appreciate there work and afford at a such a low price always recommended, they charged me 4999 rs only for such a good website.",
    rating: 5
  },
  {
    id: 2,
    name: "Nikita Chavan",
    role: "Founder",
    image: "https://picsum.photos/100/100?random=11",
    text: "They really help me a lot in setting up my website as it was a huge website and lot of work on server side must recommended company.",
    rating: 5
  },
  {
    id: 3,
    name: "Rishi Malhotra",
    role: "CEO",
    image: "https://picsum.photos/100/100?random=12",
    text: "One of the best website development company in India they develop my website so fast which i didn't expected at such a low price thank you webzo",
    rating: 5
  },
  {
    id: 4,
    name: "Anjali Gupta",
    role: "Marketing Head",
    image: "https://picsum.photos/100/100?random=13",
    text: "The digital marketing services helped our sales grow by 200% in just 3 months. The team is very responsive and knowledgeable.",
    rating: 5
  },
  {
    id: 5,
    name: "Rahul Mehta",
    role: "CTO",
    image: "https://picsum.photos/100/100?random=14",
    text: "Exceptional technical support. We moved our hosting to them and the site speed improved significantly. Great experience!",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1024) setItemsPerPage(3);
        else if (window.innerWidth >= 768) setItemsPerPage(2);
        else setItemsPerPage(1);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonialsData.length - itemsPerPage);

  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [itemsPerPage, maxIndex, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
       if (maxIndex > 0) nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, maxIndex]);

  return (
    <section id="reviews" className="py-16 md:py-20 bg-orange-50 relative select-none">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
                 <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">What Our Clients Say</h3>
                 <h2 className="text-2xl md:text-4xl font-bold text-orange-500 mb-6">Real Client Testimonials</h2>
                 <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-0 md:px-12 group">
                 <button 
                    onClick={prevSlide}
                    className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 z-20 bg-white p-4 rounded-full shadow-2xl text-gray-700 border-2 border-orange-100 transition-all duration-300 items-center justify-center opacity-0 group-hover:opacity-100 hidden md:flex hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:scale-110 cursor-pointer"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft size={28} />
                </button>
                
                <button 
                    onClick={nextSlide}
                    className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 z-20 bg-white p-4 rounded-full shadow-2xl text-gray-700 border-2 border-orange-100 transition-all duration-300 items-center justify-center opacity-0 group-hover:opacity-100 hidden md:flex hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:scale-110 cursor-pointer"
                    aria-label="Next testimonial"
                >
                    <ChevronRight size={28} />
                </button>

                <div className="overflow-hidden py-10 -my-10 px-2">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
                    >
                        {testimonialsData.map((testimonial) => (
                            <div 
                                key={testimonial.id}
                                className="flex-shrink-0 px-3 md:px-4 box-border"
                                style={{ width: `${100 / itemsPerPage}%` }}
                            >
                                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-2xl hover:border-orange-200 transition-all duration-300 h-full flex flex-col items-center text-center relative group/card transform hover:-translate-y-1">
                                    <div className="absolute top-6 left-6 opacity-10">
                                        <Quote className="text-orange-500 rotate-180 w-10 h-10 md:w-12 md:h-12" />
                                    </div>

                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full p-1 bg-white border-2 border-orange-100 shadow-md mb-4 md:mb-6 relative z-10 group-hover/card:border-orange-400 transition-colors">
                                        <img 
                                            src={testimonial.image} 
                                            alt={testimonial.name} 
                                            className="w-full h-full object-cover rounded-full"
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="flex text-yellow-400 mb-4 md:mb-6 gap-1 relative z-10">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star 
                                                key={star} 
                                                size={18} 
                                                fill={star <= testimonial.rating ? "currentColor" : "none"} 
                                                className={star <= testimonial.rating ? "text-yellow-400" : "text-gray-200"}
                                            />
                                        ))}
                                    </div>

                                    <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed flex-grow italic relative z-10">
                                        "{testimonial.text}"
                                    </p>

                                    <div className="mt-auto relative z-10">
                                        <h4 className="font-bold text-gray-800 text-base md:text-lg">{testimonial.name}</h4>
                                        <span className="text-orange-500 font-medium text-xs md:text-sm uppercase tracking-wider">{testimonial.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center gap-2 mt-10">
                    {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`transition-all duration-300 rounded-full h-2.5 ${
                                currentIndex === idx 
                                    ? 'w-8 bg-orange-500' 
                                    : 'w-2.5 bg-gray-300 hover:bg-orange-300'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials;