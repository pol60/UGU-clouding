import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);

  useEffect(() => {
    const chartDom = document.getElementById("sales-chart");
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["2020", "2021", "2022", "2023", "2024", "2025"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: t('about.growth.sales'),
            type: "line",
            data: [150, 230, 450, 680, 950, 1200],
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: "rgba(16, 185, 129, 0.7)" },
                  { offset: 1, color: "rgba(209, 250, 229, 0.3)" },
                ],
              },
            },
            lineStyle: {
              color: "#10b981",
            },
            itemStyle: {
              color: "#10b981",
            },
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }

    const animateNumbers = () => {
      if (isAnimationStarted) return;
      
      const numberElements = document.querySelectorAll(".animate-number");
      numberElements.forEach((element) => {
        const target = parseInt(element.getAttribute("data-target") || "0", 10);
        let count = 0;
        const duration = 2000;
        const interval = Math.floor(duration / target);
        const timer = setInterval(() => {
          count += 1;
          (element as HTMLElement).innerText = count.toString();
          if (count >= target) {
            clearInterval(timer);
          }
        }, interval);
      });
      
      setIsAnimationStarted(true);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            if (entry.target.classList.contains("stats-section")) {
              animateNumbers();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in-section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", () => {});
    };
  }, [isAnimationStarted, t]);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('about.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="fade-in-section">
            <h3 className="text-2xl font-semibold mb-4">{t('about.ourStory.title')}</h3>
            <p className="text-gray-600 mb-6">
              {t('about.ourStory.paragraph1')}
            </p>
            <p className="text-gray-600 mb-6">
              {t('about.ourStory.paragraph2')}
            </p>
            <p className="text-gray-600">
              {t('about.ourStory.paragraph3')}
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg fade-in-section">
            <img
              src="https://public.readdy.ai/ai/img_res/fe1ae783e78d3a228e609459a9cbf7ba.jpg"
              alt="UGU Studio"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg text-center fade-in-section">
            <div className="text-emerald-500 text-4xl mb-4">
              <i className="fas fa-tshirt"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">{t('about.features.quality.title')}</h3>
            <p className="text-gray-600">
              {t('about.features.quality.description')}
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg text-center fade-in-section">
            <div className="text-emerald-500 text-4xl mb-4">
              <i className="fas fa-leaf"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">{t('about.features.eco.title')}</h3>
            <p className="text-gray-600">
              {t('about.features.eco.description')}
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg text-center fade-in-section">
            <div className="text-emerald-500 text-4xl mb-4">
              <i className="fas fa-heart"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">{t('about.features.comfort.title')}</h3>
            <p className="text-gray-600">
              {t('about.features.comfort.description')}
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-10 rounded-xl stats-section fade-in-section">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div
                className="text-4xl font-bold text-emerald-500 mb-2 animate-number"
                data-target="5"
              >
                0
              </div>
              <p className="text-gray-700">{t('about.stats.years')}</p>
            </div>
            <div>
              <div
                className="text-4xl font-bold text-emerald-500 mb-2 animate-number"
                data-target="50000"
              >
                0
              </div>
              <p className="text-gray-700">{t('about.stats.customers')}</p>
            </div>
            <div>
              <div
                className="text-4xl font-bold text-emerald-500 mb-2 animate-number"
                data-target="200"
              >
                0
              </div>
              <p className="text-gray-700">{t('about.stats.models')}</p>
            </div>
            <div>
              <div
                className="text-4xl font-bold text-emerald-500 mb-2 animate-number"
                data-target="15"
              >
                0
              </div>
              <p className="text-gray-700">{t('about.stats.countries')}</p>
            </div>
          </div>
        </div>
        <div className="mt-16 fade-in-section">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            {t('about.growth.title')}
          </h3>
          <div id="sales-chart" className="w-full h-80"></div>
        </div>
      </div>
    </section>
  );
};

export default About; 