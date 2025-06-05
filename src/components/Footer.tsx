import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              UGU
            </h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer"
              >
                <i className="fab fa-instagram text-lg sm:text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer"
              >
                <i className="fab fa-facebook text-lg sm:text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer"
              >
                <i className="fab fa-twitter text-lg sm:text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer"
              >
                <i className="fab fa-youtube text-lg sm:text-xl"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t('footer.catalog')}</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer text-sm sm:text-base"
                >
                  {t('footer.new')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer text-sm sm:text-base"
                >
                  {t('footer.tshirts')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer text-sm sm:text-base"
                >
                  {t('footer.hoodies')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer text-sm sm:text-base"
                >
                  {t('footer.jeans')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer text-sm sm:text-base"
                >
                  {t('footer.dresses')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer text-sm sm:text-base"
                >
                  {t('footer.accessories')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t('footer.information')}</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer text-sm sm:text-base"
                >
                  {t('footer.about')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer text-sm sm:text-base"
                >
                  {t('footer.delivery')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer text-sm sm:text-base"
                >
                  {t('footer.returns')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer text-sm sm:text-base"
                >
                  {t('footer.loyalty')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer text-sm sm:text-base"
                >
                  {t('footer.blog')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer text-sm sm:text-base"
                >
                  {t('footer.contacts')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t('footer.contacts')}</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-2 sm:mr-3 text-emerald-400"></i>
                <span className="text-gray-400 text-sm sm:text-base">
                  {t('footer.address')}
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-2 sm:mr-3 text-emerald-400"></i>
                <span className="text-gray-400 text-sm sm:text-base">{t('footer.phone')}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2 sm:mr-3 text-emerald-400"></i>
                <span className="text-gray-400 text-sm sm:text-base">{t('footer.email')}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock mr-2 sm:mr-3 text-emerald-400"></i>
                <span className="text-gray-400 text-sm sm:text-base">{t('footer.workingHours')}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 sm:pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 