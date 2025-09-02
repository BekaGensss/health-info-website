// src/pages/InfographicPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Infographic from '../components/Infographic';
import { infographics } from '../data/articlesData';
import ParticleBackground from '../components/ParticleBackground';

const InfographicPage = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300 relative">
      <ParticleBackground isDarkMode={isDarkMode} />
      <div className="relative z-10">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <main className="container mx-auto px-4 py-8">
          <section className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Galeri Infografis</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
              Informasi kesehatan yang dikemas secara visual dan mudah dicerna.
            </p>
          </section>
          <div className="grid grid-cols-1 gap-10">
            {infographics.map((info) => (
              <Infographic key={info.id} {...info} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default InfographicPage;