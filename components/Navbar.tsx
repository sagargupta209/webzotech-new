import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      // Small logic for scrolled state remains for CSS changes
      setScrolled(window.scrollY > 50);
    };

    // Replace reflow-heavy logic with IntersectionObserver
    const sections = ['home', 'about', 'pricing', 'portfolio', 'admin', 'reviews', 'contact'];
    const observers = sections.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.5, rootMargin: '-80px 0px -20% 0px' }
      );
      
      observer.observe(el);
      return observer;
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observers.forEach(obs => obs?.disconnect());
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Admin', href: '#admin', id: 'admin' },
    { name: 'Review', href: '#reviews', id: 'reviews' },
    { name: 'Contact Us', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-slide-down ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-xl' : 'bg-white dark:bg-gray-900'}`}>
      {/* Top Bar */}
      <div 
        className={`bg-gradient-to-r from-orange-400 to-orange-600 text-white text-center text-xs md:text-sm font-bold tracking-wide transition-all duration-500 origin-top overflow-hidden ${
          scrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-12 py-2 opacity-100'
        }`}
      >
        <span className="animate-pulse">🔥 SPECIAL OFFER: Website Plan Starts @ 3999/- Only 🔥</span>
      </div>

      <div className={`container mx-auto px-4 md:px-8 flex justify-between items-center transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
        
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 cursor-pointer group" 
        >
          <div className="relative">
            <div className="absolute inset-0 bg-orange-200 dark:bg-orange-900/40 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-40"></div>
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-12 transition-all duration-500 shadow-lg">
              <span className="text-white font-black text-2xl">W</span>
            </div>
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Webzo<span className="text-orange-500">Tech</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 nav-link inline-block ${
                activeSection === link.id ? 'text-orange-500 bg-orange-50 dark:bg-orange-900/20' : 'text-gray-600 dark:text-gray-300 hover:text-orange-600 hover:bg-orange-50/50 dark:hover:bg-orange-900/10'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400 hover:scale-110 transition-all duration-300 shadow-inner"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a 
            href="tel:+918962921153"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-200 font-bold text-sm hover:text-orange-500 transition-colors"
          >
            <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full">
              <Phone size={16} className="text-orange-500" />
            </div>
            <span className="hidden xl:inline">+91 8962921153</span>
          </a>
          <button 
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-full font-bold text-sm shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1 transition-all duration-300"
          >
            GET STARTED
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
           <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-400"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className={`p-2 rounded-xl transition-all duration-300 ${isOpen ? 'bg-orange-500 text-white rotate-90' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-100'}`} 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Navigation */}
      <div 
        className={`fixed inset-0 z-[-1] bg-black/50 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsOpen(false)}
      ></div>
      
      <nav 
        id="mobile-menu" 
        className={`lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 p-6 flex flex-col space-y-2 shadow-2xl transition-all duration-500 origin-top transform ${
          isOpen ? 'scale-y-100 opacity-100 translate-y-0 visible' : 'scale-y-0 opacity-0 -translate-y-10 invisible'
        }`}
      >
        {navLinks.map((link, idx) => (
          <a 
            key={link.name}
            href={link.href} 
            onClick={(e) => handleNavClick(e, link.href)}
            style={{ transitionDelay: `${idx * 50}ms` }}
            className={`flex items-center justify-between p-4 rounded-2xl text-lg font-bold transition-all transform hover:scale-[1.02] active:scale-95 ${
              activeSection === link.id ? 'bg-orange-500 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-600'
            }`}
          >
            {link.name}
            {activeSection === link.id && <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>}
          </a>
        ))}
        
        <div className="pt-4 border-t border-gray-100 dark:border-gray-800 mt-4 space-y-4">
          <a 
            href="tel:+918962921153"
            className="flex items-center justify-center gap-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl font-bold text-gray-700 dark:text-gray-200 transition-transform hover:scale-[1.02]"
          >
            <Phone size={20} className="text-orange-500" /> +91 8962921153
          </a>
          <button 
             onClick={() => {
              const el = document.getElementById('contact');
              if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
              setIsOpen(false);
            }}
            className="w-full bg-orange-500 text-white p-4 rounded-2xl font-bold shadow-lg shadow-orange-500/30 transition-transform hover:scale-[1.02] active:scale-95"
          >
            GET A FREE QUOTE
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;