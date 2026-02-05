import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle, Loader2 } from 'lucide-react';

const QuotePopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenQuotePopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        requestAnimationFrame(() => setIsVisible(true));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 300);
    localStorage.setItem('hasSeenQuotePopup', 'true');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("_replyto", "sagargupta1153@gmail.com");
    formData.append("_subject", "New Quote Request from WebzoTech Popup");

    try {
      // Using Formspree for easy email delivery to the user's specific email
      const response = await fetch("https://formspree.io/f/mqakevlv", { // Note: In production, user should create their own ID
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => handleClose(), 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
        className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${isVisible ? 'bg-black/80 opacity-100 backdrop-blur-md' : 'bg-black/0 opacity-0 pointer-events-none'}`}
        aria-modal="true"
        role="dialog"
    >
      <div 
        className={`bg-[#1e293b] rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden transform transition-all duration-300 border border-white/10 ${isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'}`}
      >
        
        {/* Top Border Accent */}
        <div className="h-1.5 bg-[#f97316] w-full absolute top-0 left-0 z-10"></div>

        <button 
            onClick={handleClose}
            className="absolute top-4 right-4 z-20 text-gray-400 hover:text-white transition focus:outline-none bg-white/5 rounded-full p-1.5 hover:bg-white/10"
            aria-label="Close popup"
        >
            <X size={18} />
        </button>

        <div className="p-6 sm:p-8 pt-10">
            {isSubmitted ? (
                <div className="flex flex-col items-center text-center py-6 animate-fade-in-up">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                    <p className="text-gray-300 mb-2">Our team will contact you shortly.</p>
                </div>
            ) : (
                <>
                    <div className="text-center mb-8">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-[#334155] text-[#f97316] text-[10px] font-extrabold tracking-widest mb-4">
                            LIMITED TIME OFFER
                        </span>
                        <h3 className="text-3xl font-bold text-white mb-3">Get a Free Quote</h3>
                        <p className="text-gray-300 text-sm leading-relaxed px-2">
                            Drop your details below to get an exclusive <br/>
                            <span className="text-[#f97316] font-bold">20% discount</span> on your first project!
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-3">
                            <input 
                                name="name"
                                type="text" 
                                required 
                                placeholder="Full Name" 
                                className="w-full bg-[#334155]/50 border border-white/10 rounded-xl p-4 text-sm text-white outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition placeholder:text-gray-500" 
                            />
                            <input 
                                name="phone"
                                type="tel" 
                                required 
                                placeholder="Phone Number" 
                                className="w-full bg-[#334155]/50 border border-white/10 rounded-xl p-4 text-sm text-white outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition placeholder:text-gray-500" 
                            />
                             <div className="relative">
                                <select 
                                    name="service"
                                    className="w-full bg-[#334155]/50 border border-[#f97316] rounded-xl p-4 text-sm text-white outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition appearance-none cursor-pointer"
                                    defaultValue=""
                                    required
                                >
                                    <option value="" disabled>Select Service Required</option>
                                    <option value="Business Website">Business Website</option>
                                    <option value="E-Commerce Store">E-Commerce Store</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Custom Software">Custom Software</option>
                                </select>
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                </div>
                             </div>
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-[#f97316] text-white py-4 rounded-xl font-black text-lg shadow-xl hover:bg-[#ea580c] hover:-translate-y-0.5 transition-all flex justify-center items-center gap-3 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                              <Loader2 className="animate-spin" size={20} />
                            ) : (
                              <Send size={20} className="fill-current" />
                            )}
                            Get My Free Quote
                        </button>

                         <p className="text-[11px] text-center text-gray-500 mt-6 font-medium">
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