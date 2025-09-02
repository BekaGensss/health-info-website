// src/App.jsx
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Lazy load semua halaman
const HomePage = lazy(() => import('./pages/HomePage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const InfographicPage = lazy(() => import('./pages/InfographicPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BMICalculatorPage = lazy(() => import('./pages/BMICalculatorPage'));
const ArticleArchivePage = lazy(() => import('./pages/ArticleArchivePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

import './index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <Router basename="/health-info-website">  {/* <-- Perbaikan: Tambahkan basename */}
      <HelmetProvider>
        <Suspense fallback={<div className="flex justify-center items-center h-screen text-xl text-gray-500 dark:text-gray-400">Memuat...</div>}>
          <Routes>
            <Route path="/" element={<HomePage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
            <Route path="/artikel/:id" element={<ArticlePage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
            <Route path="/infografis" element={<InfographicPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
            <Route path="/artikel-archive" element={<ArticleArchivePage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
            <Route path="/bmi-kalkulator" element={<BMICalculatorPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
            <Route path="/tentang" element={<AboutPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
            <Route path="/kontak" element={<ContactPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
            <Route path="*" element={<NotFoundPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
          </Routes>
        </Suspense>
      </HelmetProvider>
    </Router>
  );
}

export default App;