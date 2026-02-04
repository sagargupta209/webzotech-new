import React, { useEffect, useState } from 'react';
import { Phone, CheckCircle, Globe, Hash, ShoppingCart, Mail, ThumbsUp, Star, ArrowRight, Calculator } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Best Website Design Company";
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const getParallaxStyle = (factorX: number, factorY: number) => ({
    transform: `translate(${mousePos.x * factorX}px, ${mousePos.y * factorY}px)`,
    transition: 'transform 0.1s ease-out'
  });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden animate-gradient-bg min-h-[90vh] md:min-h-[95vh] flex flex-col justify-center">
      
      {/* Mesh Gradient Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-[60vw] md:w-[40vw] h-[60vw] md:h-[40vw] bg-orange-200/30 dark:bg-orange-500/10 rounded-full blur-[80px] md:blur-[100px] animate-blob-1"></div>
        <div className="absolute bottom-[10%] right-[15%] w-[50vw] md:w-[35vw] h-[50vw] md:h-[35vw] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[80px] md:blur-[100px] animate-blob-2"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        
        {/* Floating Icons Layer - Restricted on Mobile to avoid clutter */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Left - Hidden on small mobile */}
          <div 
              className="absolute top-0 left-4 md:left-20 lg:left-1/4 hidden sm:block"
              style={getParallaxStyle(-30, -30)}
          >
            <div className="bg-white dark:bg-gray-800 p-2 md:p-3 rounded-full shadow-lg animate-float pointer-events-auto border dark:border-gray-700">
              <div className="grid grid-cols-2 gap-1 text-pink-500">
                 <ThumbsUp className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" />
                 <div className="bg-blue-400 rounded-full w-3 h-3 md:w-4 md:h-4 flex items-center justify-center text-[6px] md:text-[8px] text-white font-bold">L</div>
                 <div className="bg-red-400 rounded-full w-3 h-3 md:w-4 md:h-4 flex items-center justify-center text-[6px] md:text-[8px] text-white font-bold">❤</div>
              </div>
            </div>
          </div>

          {/* Top Right */}
          <div 
              className="absolute top-10 right-4 md:right-20 lg:right-1/4"
              style={getParallaxStyle(25, 25)}
          >
               <div className="bg-blue-500 p-3 md:p-4 rounded-xl shadow-lg rotate-12 animate-float-delayed pointer-events-auto border border-white/20">
                  <CheckCircle className="text-white w-6 h-6 md:w-8 md:h-8" />
               </div>
          </div>

          {/* Bottom Left */}
          <div 
              className="absolute bottom-20 left-4 md:left-32"
              style={getParallaxStyle(-20, 40)}
          >
               <div className="bg-gray-100 dark:bg-gray-800 p-2 md:p-3 rounded-full shadow-lg animate-float-slow pointer-events-auto border border-white dark:border-gray-700">
                  <Globe className="text-blue-600 dark:text-blue-400 w-8 h-8 md:w-10 md:h-10 animate-spin-slow" />
               </div>
          </div>

          {/* Bottom Right - Hidden on small mobile */}
          <div 
              className="absolute bottom-40 right-4 md:right-32 rotate-[-12deg] hidden sm:block"
              style={getParallaxStyle(40, -20)}
          >
               <div className="bg-red-500 p-2 md:p-3 rounded-2xl shadow-lg border-2 border-white dark:border-gray-700 animate-float pointer-events-auto">
                  <Hash className="text-white w-6 h-6 md:w-8 md:h-8" />
               </div>
          </div>
        </div>


        {/* Main Content */}
        <div className="animate-fade-in-up">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-500 mb-2 md:mb-4 mt-4 md:mt-8">
            Website Starts @ 3999/-
            </h2>
        </div>

        <div className="min-h-[90px] md:min-h-[140px] flex items-center justify-center px-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4 max-w-4xl mx-auto drop-shadow-sm">
            {text}
            <span 
              className={`inline-block w-1 h-6 sm:h-8 md:h-10 bg-orange-500 ml-1 align-middle transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
            ></span>
             <span className={`inline-block transition-all duration-700 ease-out transform ${isTypingComplete ? 'opacity-100 scale-100 w-auto ml-1 md:ml-2' : 'opacity-0 scale-0 w-0 overflow-hidden'}`}>
                 <CheckCircle className="inline text-green-500 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 align-middle" />
             </span>
            </h1>
        </div>

        {/* CTA Buttons */}
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 animate-fade-in-up delay-200">
          <button 
            onClick={() => scrollToSection('pricing')}
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 md:px-10 py-3.5 rounded-full font-black text-base md:text-lg shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 flex items-center gap-3 border-b-4 border-blue-900 active:border-b-0 active:translate-y-0.5 justify-center group"
          >
            <Calculator size={20} className="group-hover:rotate-12 transition-transform" /> Get an Estimate
          </button>

          <button 
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 md:px-10 py-3.5 rounded-full font-bold text-base md:text-lg shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 border-b-4 border-orange-700 active:border-b-0 active:translate-y-1 justify-center group"
          >
            Get a Free Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-8 md:mt-10 animate-fade-in-up delay-300">
            <p className="text-gray-700 dark:text-gray-300 font-semibold text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4">
            2896+ Businesses Trusted <span className="text-orange-500 underline decoration-2 underline-offset-4">WebzoTech</span> To Build Their Online Success
            </p>
        </div>

        {/* Reviews Badge */}
        <div className="mt-8 md:mt-10 flex justify-center animate-fade-in-up delay-500">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-2xl px-6 md:px-10 py-3 md:py-4 rounded-2xl sm:rounded-full border border-white dark:border-gray-700 hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-2">
                <span className="font-black text-gray-800 dark:text-gray-200 text-xs md:text-sm tracking-tight">EXCELLENT</span>
                <div className="flex text-yellow-400 gap-0.5 md:gap-1">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" />)}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 dark:text-gray-400 text-xs md:text-sm font-bold">204 verified reviews</span>
                <span className="font-bold flex text-xl md:text-2xl leading-none" style={{ fontFamily: 'Arial, sans-serif' }}>
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                </span>
              </div>
            </div>
        </div>

        <div className="mt-16 md:mt-24 animate-fade-in-up delay-500">
            <h3 className="text-sm md:text-lg font-bold text-gray-700 dark:text-gray-400 mb-2 uppercase tracking-widest opacity-80">Modern Website Features For</h3>
            <h4 className="text-xl md:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white tracking-tight px-2">Business <span className="text-orange-500">&</span> E-Commerce</h4>
            <div className="w-16 md:w-24 h-1 md:h-1.5 bg-orange-500 mt-6 md:mt-8 mx-auto rounded-full shadow-lg shadow-orange-200 dark:shadow-orange-900"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;