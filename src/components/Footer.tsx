import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              UGU
            </h3>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer"
              >
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.catalog')}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer"
                >
                  {t('footer.new')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer"
                >
                  {t('footer.tshirts')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer"
                >
                  {t('footer.hoodies')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer"
                >
                  {t('footer.jeans')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer"
                >
                  {t('footer.dresses')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer"
                >
                  {t('footer.accessories')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.information')}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer"
                >
                  {t('footer.about')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer"
                >
                  {t('footer.delivery')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer"
                >
                  {t('footer.returns')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer"
                >
                  {t('footer.loyalty')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer"
                >
                  {t('footer.blog')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer"
                >
                  {t('footer.contacts')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contacts')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-emerald-400"></i>
                <span className="text-gray-400">
                  {t('footer.address')}
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-emerald-400"></i>
                <span className="text-gray-400">{t('footer.phone')}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-emerald-400"></i>
                <span className="text-gray-400">{t('footer.email')}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock mr-3 text-emerald-400"></i>
                <span className="text-gray-400">{t('footer.workingHours')}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 