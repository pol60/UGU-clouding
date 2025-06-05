import React from 'react';
import './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import ContactForm from './components/ContactForm';
import About from './components/About';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Catalog />
      <ContactForm />
      <About />
      <Reviews />
      <Footer />
    </div>
  );
};

export default App; 