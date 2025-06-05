import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [phone, setPhone] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, "");
    if (phoneNumber.length === 0) return "";
    if (phoneNumber.length <= 1) return `+${phoneNumber}`;
    if (phoneNumber.length <= 4)
      return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1)}`;
    if (phoneNumber.length <= 7)
      return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4)}`;
    if (phoneNumber.length <= 10)
      return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7)}`;
    return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setPhone(formattedPhone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setTimeout(() => {
      setIsFormSubmitted(false);
      setPhone("");
    }, 3000);
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-emerald-100 to-teal-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden fade-in-section">
          <div className="p-4 sm:p-6 md:p-8">
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                {t('contactForm.title')}
              </h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                {t('contactForm.subtitle')}
              </p>
            </div>
            {isFormSubmitted ? (
              <div className="text-center py-6 sm:py-8">
                <div className="text-green-500 text-4xl sm:text-5xl mb-3 sm:mb-4">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{t('contactForm.success.title')}</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {t('contactForm.success.message')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4 sm:mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t('contactForm.phoneLabel')}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-phone text-gray-400"></i>
                    </div>
                    <input
                      type="text"
                      id="phone"
                      value={phone}
                      onChange={handlePhoneChange}
                      className="block w-full pl-10 pr-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 text-sm"
                      placeholder={t('contactForm.phonePlaceholder')}
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-400 to-teal-500 text-white py-2.5 sm:py-3 text-sm sm:text-base rounded-lg hover:shadow-lg transition duration-300 !rounded-button whitespace-nowrap cursor-pointer"
                >
                  {t('contactForm.submitButton')}
                </button>
                <p className="text-xs text-gray-500 mt-3 sm:mt-4 text-center">
                  {t('contactForm.privacyPolicy')}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 