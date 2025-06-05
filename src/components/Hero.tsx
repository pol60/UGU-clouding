import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-transparent"></div>
        <img
          src="https://public.readdy.ai/ai/img_res/0d8726fc0c56698cb91987832677afbe.jpg"
          alt="UGU Fashion"
          className="absolute right-0 h-full w-full md:w-3/4 object-cover object-top opacity-85"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full md:w-1/2 fade-in-section">
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 opacity-0 transition-opacity duration-1000">
            <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-700">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#catalog"
              className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-6 sm:px-8 py-3 text-sm sm:text-base rounded-full hover:shadow-lg transform hover:scale-105 transition duration-300 text-center !rounded-button whitespace-nowrap cursor-pointer"
            >
              {t('hero.viewCollection')}
            </a>
            <a
              href="#about"
              className="bg-white text-gray-800 border border-gray-300 px-6 sm:px-8 py-3 text-sm sm:text-base rounded-full hover:shadow-lg transition duration-300 text-center !rounded-button whitespace-nowrap cursor-pointer"
            >
              {t('hero.aboutBrand')}
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#catalog"
          className="text-gray-600 hover:text-emerald-500 transition duration-300 cursor-pointer"
        >
          <i className="fas fa-chevron-down text-xl sm:text-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default Hero; 