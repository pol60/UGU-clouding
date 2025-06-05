import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Catalog: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: t('catalog.categories.all') },
    { id: 'tshirts', name: t('catalog.categories.tshirts') },
    { id: 'hoodies', name: t('catalog.categories.hoodies') },
    { id: 'jeans', name: t('catalog.categories.jeans') },
    { id: 'dresses', name: t('catalog.categories.dresses') },
    { id: 'outerwear', name: t('catalog.categories.outerwear') },
    { id: 'accessories', name: t('catalog.categories.accessories') }
  ];

  const products = [
    {
      id: 1,
      name: t('catalog.products.tshirt.name'),
      category: t('catalog.categories.tshirts'),
      price: t('catalog.products.tshirt.price'),
      image: "https://public.readdy.ai/ai/img_res/7e231b73faf8d7329f7df021844d8396.jpg"
    },
    {
      id: 2,
      name: t('catalog.products.hoodie.name'),
      category: t('catalog.categories.hoodies'),
      price: t('catalog.products.hoodie.price'),
      image: "https://public.readdy.ai/ai/img_res/df9dcda72dad38427fc021fbcdc152f5.jpg"
    },
    {
      id: 3,
      name: t('catalog.products.jeans.name'),
      category: t('catalog.categories.jeans'),
      price: t('catalog.products.jeans.price'),
      image: "https://public.readdy.ai/ai/img_res/8efa152e7e2634236b431d37ab7cd394.jpg"
    },
    {
      id: 4,
      name: t('catalog.products.dress.name'),
      category: t('catalog.categories.dresses'),
      price: t('catalog.products.dress.price'),
      image: "https://public.readdy.ai/ai/img_res/ba056bf23a2795774129adf03f6a6695.jpg"
    },
    {
      id: 5,
      name: t('catalog.products.jacket.name'),
      category: t('catalog.categories.outerwear'),
      price: t('catalog.products.jacket.price'),
      image: "https://public.readdy.ai/ai/img_res/e5aa62df85174b80d4d5622ce2839515.jpg"
    },
    {
      id: 6,
      name: t('catalog.products.cap.name'),
      category: t('catalog.categories.accessories'),
      price: t('catalog.products.cap.price'),
      image: "https://public.readdy.ai/ai/img_res/9afc27a5b59627fbe6140e6b1fab7b65.jpg"
    }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === t(`catalog.categories.${selectedCategory}`));

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{t('catalog.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">{t('catalog.subtitle')}</p>
        </div>

        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">{product.category}</p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                  <span className="text-xl sm:text-2xl font-bold">{product.price}</span>
                  <button className="w-full sm:w-auto bg-blue-600 text-white px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full hover:bg-blue-700 transition-colors">
                    {t('catalog.addToCart')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <button className="bg-white text-blue-600 border-2 border-blue-600 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full hover:bg-blue-50 transition-colors">
            {t('catalog.showMore')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Catalog; 