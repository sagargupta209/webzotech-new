import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, X, CheckCircle, Send, MapPin, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("_replyto", "sagargupta1153@gmail.com");

    try {
      const response = await fetch("https://formspree.io/f/mqakevlv", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsModalOpen(true);
        (e.target as HTMLFormElement).reset();
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-orange-50/50 dark:bg-gray-900/50 relative transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-orange-500 mb-4">Contact Us</h2>
            <div className="w-full h-px bg-gray-200 dark:bg-gray-700 max-w-2xl mx-auto"></div>
            <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-sm md:text-base">
                If you have any new project or want to some changes to the existing website please feel free to get in touch with us we will be more then happy to assist you with you small & medium business
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
            {/* Form Side */}
            <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 h-fit border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-6 pb-2 border-b border-gray-100 dark:border-gray-700">Contact us for Best Price</h3>
                
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Name <span className="text-red-500" aria-hidden="true">*</span></label>
                            <input 
                                id="name"
                                name="name"
                                type="text" 
                                required 
                                placeholder="Your Name" 
                                className="w-full bg-orange-50/50 dark:bg-gray-700/50 border border-orange-100 dark:border-gray-600 rounded-lg p-3 text-sm dark:text-white outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition" 
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Email <span className="text-red-500" aria-hidden="true">*</span></label>
                            <input 
                                id="email"
                                name="email"
                                type="email" 
                                required 
                                placeholder="Enter Your Email" 
                                className="w-full bg-orange-50/50 dark:bg-gray-700/50 border border-orange-100 dark:border-gray-600 rounded-lg p-3 text-sm dark:text-white outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition" 
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Phone Number <span className="text-red-500" aria-hidden="true">*</span></label>
                        <div className="flex bg-orange-50/50 dark:bg-gray-700/50 border border-orange-100 dark:border-gray-600 rounded-lg overflow-hidden focus-within:border-orange-400 focus-within:ring-1 focus-within:ring-orange-400 transition-all">
                            <div className="flex items-center px-3 bg-gray-50 dark:bg-gray-700 border-r border-orange-100 dark:border-gray-600">
                                <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India Flag" className="w-6 h-4" />
                            </div>
                            <input 
                                id="phone"
                                name="phone"
                                type="tel" 
                                required 
                                placeholder="98*******76" 
                                className="w-full bg-transparent p-3 text-sm dark:text-white outline-none" 
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Message <span className="text-red-500" aria-hidden="true">*</span></label>
                        <textarea 
                            id="message"
                            name="message"
                            required 
                            placeholder="Tell us about your project requirements..." 
                            rows={4}
                            className="w-full bg-orange-50/50 dark:bg-gray-700/50 border border-orange-100 dark:border-gray-600 rounded-lg p-3 text-sm dark:text-white outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 resize-none transition" 
                        />
                    </div>

                    <fieldset>
                        <legend className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">Service Required <span className="text-red-500" aria-hidden="true">*</span></legend>
                        <div className="grid grid-cols-2 gap-2">
                            <label className="flex items-center gap-2 cursor-pointer bg-orange-50/30 dark:bg-gray-700/30 p-2 rounded-lg border border-transparent hover:border-orange-100 dark:hover:border-gray-600 transition-colors">
                                <input type="radio" name="service" value="Business Website" className="accent-orange-500" defaultChecked />
                                <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Business Website</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer bg-orange-50/30 dark:bg-gray-700/30 p-2 rounded-lg border border-transparent hover:border-orange-100 dark:hover:border-gray-600 transition-colors">
                                <input type="radio" name="service" value="E-Commerce Store" className="accent-orange-500" />
                                <span className="text-xs font-bold text-gray-700 dark:text-gray-300">E-Commerce Store</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer bg-orange-50/30 dark:bg-gray-700/30 p-2 rounded-lg border border-transparent hover:border-orange-100 dark:hover:border-gray-600 transition-colors">
                                <input type="radio" name="service" value="Digital Marketing" className="accent-orange-500" />
                                <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Digital Marketing</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer bg-orange-50/30 dark:bg-gray-700/30 p-2 rounded-lg border border-transparent hover:border-orange-100 dark:hover:border-gray-600 transition-colors">
                                <input type="radio" name="service" value="Other Support" className="accent-orange-500" />
                                <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Other Support</span>
                            </label>
                        </div>
                    </fieldset>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white py-3.5 rounded-xl font-bold shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 transition-all flex justify-center items-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-70"
                    >
                        {isSubmitting ? (
                          <Loader2 className="animate-spin" size={18} />
                        ) : (
                          <Send size={18} className="fill-current" aria-hidden="true" />
                        )}
                        Send Message
                    </button>
                </form>
            </div>

            {/* Info Side */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 flex items-center gap-4 md:gap-6 hover:shadow-lg transition-shadow border border-orange-50 dark:border-gray-700">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-orange-400 flex items-center justify-center p-3 bg-orange-50 dark:bg-gray-700/50 flex-shrink-0">
                         <Phone className="w-7 h-7 md:w-8 md:h-8 text-orange-500" aria-hidden="true" />
                    </div>
                    <div>
                        <h4 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">Phone / WhatsApp</h4>
                        <p className="text-gray-600 dark:text-gray-300 font-medium mt-1 text-sm md:text-base break-all">
                            <a href="tel:+918962921153" className="hover:text-orange-500 transition-colors">Sales +91 8962921153</a>
                        </p>
                    </div>
                </div>

                 <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 flex items-center gap-4 md:gap-6 hover:shadow-lg transition-shadow border border-orange-50 dark:border-gray-700">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-orange-400 flex items-center justify-center p-3 bg-orange-50 dark:bg-gray-700/50 flex-shrink-0">
                         <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-orange-500" aria-hidden="true" />
                    </div>
                    <div>
                        <h4 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">WhatsApp Chat</h4>
                        <p className="text-gray-600 dark:text-gray-300 font-medium mt-1 text-sm md:text-base">
                            <a href="https://wa.me/918962921153" className="hover:text-orange-500 transition-colors">+91 8962921153</a>
                        </p>
                    </div>
                </div>

                 <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 flex items-center gap-4 md:gap-6 hover:shadow-lg transition-shadow border border-orange-50 dark:border-gray-700">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-orange-400 flex items-center justify-center p-3 bg-orange-50 dark:bg-gray-700/50 flex-shrink-0">
                         <Mail className="w-7 h-7 md:w-8 md:h-8 text-orange-500" aria-hidden="true" />
                    </div>
                    <div>
                        <h4 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">Email Support</h4>
                        <p className="text-gray-600 dark:text-gray-300 font-medium mt-1 text-sm md:text-base">
                            <a href="mailto:info@webzotech.in" className="hover:text-orange-500 transition-colors">info@webzotech.in</a>
                        </p>
                    </div>
                </div>

                 <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 flex items-center gap-4 md:gap-6 hover:shadow-lg transition-shadow border border-orange-50 dark:border-gray-700">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-orange-400 flex items-center justify-center p-3 bg-orange-50 dark:bg-gray-700/50 flex-shrink-0">
                         <MapPin className="w-7 h-7 md:w-8 md:h-8 text-orange-500" aria-hidden="true" />
                    </div>
                    <div>
                        <h4 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">Our Office</h4>
                        <p className="text-gray-600 dark:text-gray-300 font-medium mt-1 text-sm md:text-base">
                            VIP Road, Rajnandgaon<br/>Chhattisgarh, 491441
                        </p>
                    </div>
                </div>

                <div className="mt-4 md:mt-8 text-center relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-3 bg-orange-50/50 dark:bg-gray-900/50 text-lg md:text-xl font-bold text-orange-500">Follow Us</span>
                    </div>
                </div>

                <div className="flex justify-center gap-4 mt-4">
                    <a href="#" aria-label="Follow us on Facebook" className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition shadow-md">f</a>
                    <a href="#" aria-label="Follow us on LinkedIn" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition shadow-md">in</a>
                    <a href="#" aria-label="Follow us on Instagram" className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition shadow-md">ig</a>
                </div>

            </div>
        </div>
      </div>

      {isModalOpen && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 max-w-sm w-full relative transform transition-all scale-100">
                <button 
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-full"
                    aria-label="Close modal"
                >
                    <X size={24} />
                </button>
                
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="w-8 h-8 text-green-500" aria-hidden="true" />
                    </div>
                    <h3 id="modal-title" className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                        Thank you for reaching out. Our experts will get back to you within 24 hours.
                    </p>
                    <button 
                        onClick={() => setIsModalOpen(false)}
                        className="w-full bg-orange-500 text-white py-3 rounded-full font-bold shadow-lg hover:bg-orange-600 transition"
                    >
                        Great, thanks!
                    </button>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default Contact;