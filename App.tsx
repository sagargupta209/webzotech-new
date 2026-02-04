import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import QuotePopup from './components/QuotePopup';

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
