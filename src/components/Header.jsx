// src/components/Header.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'; // Tambah ikon untuk hamburger dan close

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk mengelola menu mobile

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-950 shadow-md dark:shadow-sm dark:shadow-teal-500/20 sticky top-0 z-50 transition-colors duration-500">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-500">
          Info Sehat
        </NavLink>

        {/* Tombol Hamburger & Dark Mode (untuk mobile) */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Tombol Dark Mode (untuk mobile) */}
          <button onClick={toggleTheme} className="p-2 rounded-full text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
            {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          {/* Tombol Hamburger */}
          <button onClick={toggleMenu} className="p-2 rounded-full text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Navigasi untuk Desktop */}
        <nav className="hidden md:flex items-center gap-x-6">
          <NavLink to="/" className="text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">Beranda</NavLink>
          <NavLink to="/artikel-archive" className="text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">Artikel</NavLink>
          <NavLink to="/infografis" className="text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">Infografis</NavLink>
          <NavLink to="/bmi-kalkulator" className="text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">BMI Kalkulator</NavLink>
          <NavLink to="/tentang" className="text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">Tentang Kami</NavLink>
          <NavLink to="/kontak" className="text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">Kontak</NavLink>
          
          {/* Tombol Dark Mode (untuk desktop) */}
          <button onClick={toggleTheme} className="p-2 rounded-full text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
            {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </nav>
      </div>

      {/* Menu Mobile yang muncul saat hamburger diklik */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-4 bg-gray-50 dark:bg-gray-900 transition-all duration-300 ease-in-out`}>
        <nav className="flex flex-col items-center gap-4">
          <NavLink onClick={() => setIsMenuOpen(false)} to="/" className="w-full text-center py-2 text-base text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">Beranda</NavLink>
          <NavLink onClick={() => setIsMenuOpen(false)} to="/artikel-archive" className="w-full text-center py-2 text-base text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">Artikel</NavLink>
          <NavLink onClick={() => setIsMenuOpen(false)} to="/infografis" className="w-full text-center py-2 text-base text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">Infografis</NavLink>
          <NavLink onClick={() => setIsMenuOpen(false)} to="/bmi-kalkulator" className="w-full text-center py-2 text-base text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">BMI Kalkulator</NavLink>
          <NavLink onClick={() => setIsMenuOpen(false)} to="/tentang" className="w-full text-center py-2 text-base text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">Tentang Kami</NavLink>
          <NavLink onClick={() => setIsMenuOpen(false)} to="/kontak" className="w-full text-center py-2 text-base text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">Kontak</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;