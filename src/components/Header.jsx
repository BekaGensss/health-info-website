import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="bg-white dark:bg-gray-950 shadow-md dark:shadow-sm dark:shadow-teal-500/20 sticky top-0 z-50 transition-colors duration-500">
      <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-500">
          Info Sehat
        </NavLink>

        {/* Navigasi yang responsif untuk semua ukuran */}
        <nav className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2 mt-4 md:mt-0">
          <NavLink to="/" className="text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">Beranda</NavLink>
          <NavLink to="/artikel-archive" className="text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">Artikel</NavLink>
          <NavLink to="/infografis" className="text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">Infografis</NavLink>
          <NavLink to="/bmi-kalkulator" className="text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">BMI Kalkulator</NavLink>
          <NavLink to="/tentang" className="text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">Tentang Kami</NavLink>
          <NavLink to="/kontak" className="text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">Kontak</NavLink>
          
          {/* Tombol Dark Mode */}
          <button onClick={toggleTheme} className="p-2 rounded-full text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
            {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </nav>

      </div>
    </header>
  );
};

export default Header;