import React from 'react';
import { useTranslation } from 'react-i18next';

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  image: string;
}

const Reviews: React.FC = () => {
  const { t } = useTranslation();

  const reviews: Review[] = [
    {
      id: 1,
      name: t('reviews.items.0.name'),
      rating: 5,
      text: t('reviews.items.0.text'),
      image: "https://public.readdy.ai/ai/img_res/14115a9e42423d2cda1c8c0069b5c44e.jpg",
    },
    {
      id: 2,
      name: t('reviews.items.1.name'),
      rating: 5,
      text: t('reviews.items.1.text'),
      image: "https://public.readdy.ai/ai/img_res/5b344cb8d5b1e66a92ff8d92162a8de0.jpg",
    },
    {
      id: 3,
      name: t('reviews.items.2.name'),
      rating: 4,
      text: t('reviews.items.2.text'),
      image: "https://public.readdy.ai/ai/img_res/ab18a1cd1cc94d3403db4dac1015554e.jpg",
    },
  ];

  return (
    <section id="reviews" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 fade-in-section">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            {t('reviews.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            {t('reviews.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md fade-in-section"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">{review.name}</h4>
                  <div className="flex text-yellow-400 text-sm sm:text-base">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fas fa-star ${
                          i < review.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                      ></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic text-sm sm:text-base">"{review.text}"</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-12 fade-in-section">
          <a
            href="#"
            className="text-emerald-500 hover:text-emerald-600 transition duration-300 cursor-pointer text-sm sm:text-base"
          >
            {t('reviews.viewAll')} <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews; 