// src/components/PageLayout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PageLayout = ({ children, isDarkMode, setIsDarkMode }) => {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen font-sans transition-colors duration-500 ease-in-out">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main className="container mx-auto px-4 py-8 md:py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;