import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

const QuotePopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // For animation state

  useEffect(() => {
    // Check if user has already seen the popup in previous sessions
    const hasSeenPopup = localStorage.getItem('hasSeenQuotePopup');
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        // Small delay to allow render before animation starts for smooth transition
        requestAnimationFrame(() => setIsVisible(true));
      }, 5000); // 5 seconds delay
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 300); // Wait for fade-out animation
    localStorage.setItem('hasSeenQuotePopup', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real application, you would send the form data to your backend here
    setTimeout(() => {
        handleClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div 
        className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${isVisible ? 'bg-black/60 opacity-100 backdrop-blur-sm' : 'bg-black/0 opacity-0 pointer-events-none'}`}
        aria-modal="true"
        role="dialog"
    >
      <div 
        className={`bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden transform transition-all duration-300 border border-orange-100 dark:border-gray-700 ${isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'}`}
      >
        
        {/* Header decoration */}
        <div className="h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 w-full absolute top-0 left-0 z-10"></div>

        <button 
            onClick={handleClose}
            className="absolute top-4 right-4 z-20 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition focus:outline-none bg-gray-100 dark:bg-gray-700 rounded-full p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600"
            aria-label="Close popup"
        >
            <X size={18} />
        </button>

        <div className="p-6 sm:p-8">
            {isSubmitted ? (
                <div className="flex flex-col items-center text-center py-6">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 animate-bounce">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Request Received!</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Thank you for your interest.</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Our team will contact you shortly.</p>
                </div>
            ) : (
                <>
                    <div className="text-center mb-6">
                        <span className="inline-block py-1 px-3 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-bold tracking-wider mb-3">
                            LIMITED TIME OFFER
                        </span>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Get a Free Quote</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Drop your details below to get an exclusive <span className="text-orange-500 font-bold">20% discount</span> on your first project!
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-3">
                            <input 
                                type="text" 
                                required 
                                placeholder="Full Name" 
                                className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-3 text-sm dark:text-white outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition" 
                            />
                            <input 
                                type="tel" 
                                required 
                                placeholder="Phone Number" 
                                className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-3 text-sm dark:text-white outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition" 
                            />
                             <div className="relative">
                                <select 
                                    className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-3 text-sm dark:text-white outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition appearance-none cursor-pointer text-gray-600 dark:text-gray-300"
                                    defaultValue=""
                                    required
                                >
                                    <option value="" disabled>Select Service Required</option>
                                    <option value="business">Business Website</option>
                                    <option value="ecommerce">E-Commerce Store</option>
                                    <option value="marketing">Digital Marketing</option>
                                    <option value="other">Other / Custom</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                </div>
                             </div>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3.5 rounded-lg font-bold shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all flex justify-center items-center gap-2 mt-2"
                        >
                            <Send size={18} /> Get My Free Quote
                        </button>

                         <p className="text-xs text-center text-gray-400 mt-3">
                            We respect your privacy. No spam guaranteed.
                        </p>
                    </form>
                </>
            )}
        </div>
      </div>
    </div>
  );
};

export default QuotePopup;
