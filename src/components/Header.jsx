import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'; // Impor ikon

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="bg-white dark:bg-gray-950 shadow-md dark:shadow-sm dark:shadow-teal-500/20 sticky top-0 z-50 transition-colors duration-500">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-500">
          Info Sehat
        </NavLink>

        {/* Tombol Hamburger untuk Mobile */}
        <div className="md:hidden">
          <button onClick={toggleNav} className="text-gray-800 dark:text-white focus:outline-none">
            {isNavOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Navigasi Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">Beranda</NavLink>
          <NavLink to="/artikel-archive" className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">Artikel</NavLink>
          <NavLink to="/infografis" className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">Infografis</NavLink>
          <NavLink to="/bmi-kalkulator" className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">BMI Kalkulator</NavLink>
          <NavLink to="/tentang" className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">Tentang Kami</NavLink>
          <NavLink to="/kontak" className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">Kontak</NavLink>
          
          {/* Tombol Dark Mode */}
          <button onClick={toggleTheme} className="p-2 rounded-full text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
            {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </nav>

      </div>

      {/* Navigasi Mobile (Hamburger Menu) */}
      <div className={`md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-950 shadow-md transform transition-transform duration-300 ease-in-out ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <nav className="flex flex-col p-4 space-y-4 text-center">
          <NavLink to="/" onClick={toggleNav} className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">Beranda</NavLink>
          <NavLink to="/artikel-archive" onClick={toggleNav} className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">Artikel</NavLink>
          <NavLink to="/infografis" onClick={toggleNav} className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">Infografis</NavLink>
          <NavLink to="/bmi-kalkulator" onClick={toggleNav} className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">BMI Kalkulator</NavLink>
          <NavLink to="/tentang" onClick={toggleNav} className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">Tentang Kami</NavLink>
          <NavLink to="/kontak" onClick={toggleNav} className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">Kontak</NavLink>
          <button onClick={toggleTheme} className="p-2 rounded-full text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
            {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </nav>
      </div>

    </header>
  );
};

export default Header;