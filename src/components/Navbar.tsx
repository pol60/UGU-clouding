import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="fixed w-full bg-white bg-opacity-95 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              UGU
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => changeLanguage('ru')}
                className={`px-2 py-1 rounded ${i18n.language === 'ru' ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                RU
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('ua')}
                className={`px-2 py-1 rounded ${i18n.language === 'ua' ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                UA
              </button>
            </div>
            <a href="#catalog" className="text-gray-700 hover:text-emerald-500 transition duration-300 cursor-pointer">
              {t('nav.catalog')}
            </a>
            <a href="#about" className="text-gray-700 hover:text-emerald-500 transition duration-300 cursor-pointer">
              {t('nav.about')}
            </a>
            <a href="#reviews" className="text-gray-700 hover:text-emerald-500 transition duration-300 cursor-pointer">
              {t('nav.reviews')}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-500 transition duration-300 cursor-pointer">
              {t('nav.contacts')}
            </a>
            <button className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
              {t('nav.contactUs')}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-500 focus:outline-none cursor-pointer"
            >
              <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="flex space-x-2 px-3 py-2">
              <button
                onClick={() => changeLanguage('ru')}
                className={`px-2 py-1 rounded ${i18n.language === 'ru' ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                RU
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('ua')}
                className={`px-2 py-1 rounded ${i18n.language === 'ua' ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                UA
              </button>
            </div>
            <a
              href="#catalog"
              className="block px-3 py-2 text-gray-700 hover:text-emerald-500 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.catalog')}
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-emerald-500 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.about')}
            </a>
            <a
              href="#reviews"
              className="block px-3 py-2 text-gray-700 hover:text-emerald-500 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.reviews')}
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-emerald-500 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contacts')}
            </a>
            <button className="w-full mt-2 bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
              {t('nav.contactUs')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 