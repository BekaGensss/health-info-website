// src/components/ThemeSwitcher.jsx
import React from 'react';

const ThemeSwitcher = ({ isDarkMode, setIsDarkMode }) => {
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300"
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeSwitcher;