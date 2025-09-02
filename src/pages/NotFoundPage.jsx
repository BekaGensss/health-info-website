// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { FiFrown } from 'react-icons/fi';

const NotFoundPage = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen font-sans transition-colors duration-500 ease-in-out">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main className="container mx-auto px-4 py-12 text-center flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <FiFrown className="text-teal-500 text-8xl mb-6" data-aos="fade-down" />
        <h1 className="text-6xl md:text-8xl font-extrabold text-gray-800 dark:text-gray-100 mb-4" data-aos="fade-up">404</h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin sudah dipindahkan atau dihapus.
        </p>
        <div data-aos="fade-up" data-aos-delay="400">
          <Link to="/">
            <Button variant="primary" size="lg">Kembali ke Beranda</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;