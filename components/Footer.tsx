import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111] text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
            
            {/* Social Media Icons */}
            <div className="flex justify-center gap-6 mb-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-all duration-300 hover:scale-125 transform">
                    <Facebook size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-all duration-300 hover:scale-125 transform">
                    <Instagram size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 transform">
                    <Twitter size={24} />
                </a>
            </div>

            <div className="mb-4 text-gray-400 text-sm flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
                <a href="#" className="hover:text-white cursor-pointer transition-colors duration-300">Privacy Policy</a>
                <span className="hidden md:inline text-gray-600">|</span>
                <a href="#" className="hover:text-white cursor-pointer transition-colors duration-300">Terms & Conditions</a>
                <span className="hidden md:inline text-gray-600">|</span>
                <a href="#" className="hover:text-white cursor-pointer transition-colors duration-300">Disclaimer</a>
                <span className="hidden md:inline text-gray-600">|</span>
                <a href="#" className="hover:text-white cursor-pointer transition-colors duration-300">Refund Policy</a>
            </div>
            <p className="text-sm font-medium text-gray-500">WebzoTech @ All Rights Reserved 2021-2026</p>
        </div>
    </footer>
  );
};

export default Footer;