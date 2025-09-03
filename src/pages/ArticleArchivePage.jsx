// src/pages/ArticleArchivePage.jsx

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Button from '../components/Button';
import { articles } from '../data/articlesData';
import { FiArchive } from 'react-icons/fi';
import SkeletonCard from '../components/SkeletonCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ARTICLES_PER_PAGE = 6;

const ArticleArchivePage = ({ isDarkMode, setIsDarkMode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
    AOS.refresh();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const currentArticles = articles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#d1d5db", 
      },
      links: {
        color: "#d1d5db", 
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
  };

  const darkParticlesOptions = {
    ...particlesOptions,
    particles: {
      ...particlesOptions.particles,
      color: {
        value: "#6ee7b7",
      },
      links: {
        ...particlesOptions.particles.links,
        color: "#6ee7b7",
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen font-sans transition-colors duration-500 ease-in-out relative flex flex-col">
      <Particles
        id="tsparticles-archive"
        className="fixed inset-0 z-0 opacity-50 transition-opacity duration-500"
        init={particlesInit}
        options={isDarkMode ? darkParticlesOptions : particlesOptions}
      />
      
      <div className="relative z-10 flex flex-col flex-grow">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <main className="container mx-auto px-4 py-8 flex-grow">
          <section className="text-center mb-12">
            <h1 
              className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 leading-tight flex justify-center items-center gap-2"
              data-aos="fade-up"
            >
              <FiArchive className="text-teal-500" />
              Arsip Artikel
            </h1>
            <p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-2 font-light max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Jelajahi semua artikel kesehatan yang kami miliki, diurutkan dari yang terbaru.
            </p>
          </section>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <SkeletonCard />
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentArticles.map((article, index) => (
                  <div key={article.id} data-aos="fade-up" data-aos-delay={index * 100}>
                    <Card {...article} />
                  </div>
                ))}
              </div>

              {articles.length > ARTICLES_PER_PAGE && (
                <div className="flex justify-center items-center space-x-2 mt-12">
                  {[...Array(totalPages)].map((_, index) => (
                    <Button
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      variant={currentPage === index + 1 ? 'primary' : 'secondary'}
                      size="sm"
                    >
                      {index + 1}
                    </Button>
                  ))}
                </div>
              )}
            </>
          )}

          {articles.length === 0 && !isLoading && (
            <p className="text-center text-lg text-gray-500 dark:text-gray-400 mt-10">
              Tidak ada artikel yang tersedia saat ini.
            </p>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ArticleArchivePage;