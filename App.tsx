import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import Services from './components/Services.tsx';
import About from './components/About.tsx';
import Pricing from './components/Pricing.tsx';
import Portfolio from './components/Portfolio.tsx';
import Testimonials from './components/Testimonials.tsx';
import FAQ from './components/FAQ.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import Chatbot from './components/Chatbot.tsx';
import QuotePopup from './components/QuotePopup.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-orange-50 dark:bg-gray-900 transition-colors duration-300 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <About />
        <Pricing />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
      <QuotePopup />
    </div>
  );
};

export default App;