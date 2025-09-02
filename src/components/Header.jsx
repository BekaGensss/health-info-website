// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

const Header = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-teal-600 dark:text-teal-400">Info Sehat</Link>
        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition-colors duration-300">Beranda</Link>
          <Link to="/artikel-archive" className="text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition-colors duration-300">Artikel</Link>
          <Link to="/infografis" className="text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition-colors duration-300">Infografis</Link>
          <Link to="/bmi-kalkulator" className="text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition-colors duration-300">BMI Kalkulator</Link>
          <Link to="/tentang" className="text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition-colors duration-300">Tentang Kami</Link>
          <Link to="/kontak" className="text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition-colors duration-300">Kontak</Link>
          <ThemeSwitcher isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </nav>
      </div>
    </header>
  );
};

export default Header;