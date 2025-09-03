// src/pages/InfographicPage.jsx

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from 'react-modal';
import { infographics } from '../data/infographicsData'; 
import SkeletonCard from '../components/SkeletonCard';
import { FiImage, FiX } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

Modal.setAppElement('#root');

const InfographicPage = ({ isDarkMode, setIsDarkMode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-in-out' });
    AOS.refresh();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (info) => {
    setSelectedImage(info);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  const hasInfographics = infographics && Array.isArray(infographics) && infographics.length > 0;

  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  const particlesOptions = {
    background: {
      color: { value: "transparent" },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40 },
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#d1d5db" },
      links: { color: "#d1d5db", distance: 150, enable: true, opacity: 0.5, width: 1 },
      collisions: { enable: true },
      move: { direction: "none", enable: true, outMode: "bounce", random: false, speed: 1, straight: false },
      number: { density: { enable: true, value_area: 800 }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { random: true, value: 5 },
    },
    detectRetina: true,
  };

  const darkParticlesOptions = {
    ...particlesOptions,
    particles: {
      ...particlesOptions.particles,
      color: { value: "#6ee7b7" },
      links: { ...particlesOptions.particles.links, color: "#6ee7b7" },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen font-sans transition-colors duration-500 ease-in-out relative flex flex-col">
      <Particles
        id="tsparticles-infographic"
        className="fixed inset-0 z-0 opacity-50 transition-opacity duration-500"
        init={particlesInit}
        options={isDarkMode ? darkParticlesOptions : particlesOptions}
      />

      <div className="relative z-10 flex flex-col flex-grow">
        <Helmet>
          <title>Infografis Kesehatan | Info Sehat</title>
          <meta name="description" content="Kumpulan infografis kesehatan yang mudah dipahami, menarik, dan informatif." />
          <meta property="og:title" content="Infografis Kesehatan | Info Sehat" />
          <meta property="og:description" content="Kumpulan infografis kesehatan yang mudah dipahami, menarik, dan informatif." />
          <meta property="og:image" content="/images/infographic-preview.jpg" />
          <meta property="og:url" content="https://www.infosehat.com/infografis" />
        </Helmet>
        
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        
        <main className="container mx-auto px-4 py-12 md:py-20 flex-grow">
          <section className="text-center mb-12">
            <h1
              className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 leading-tight flex justify-center items-center gap-2"
              data-aos="fade-up"
            >
              <FiImage className="text-teal-500" />
              Galeri Infografis
            </h1>
            <p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-2 font-light max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Informasi kesehatan yang dikemas secara visual, modern, dan mudah dipahami.
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hasInfographics ? (
                infographics.map((info, index) => (
                  <div
                    key={info.id}
                    onClick={() => openModal(info)}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="h-60 overflow-hidden">
                      <img 
                        src={info.thumbnailUrl} 
                        alt={info.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{info.title}</h3>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-lg text-gray-500 dark:text-gray-400 mt-10 col-span-full">
                  Tidak ada infografis yang tersedia saat ini.
                </p>
              )}
            </div>
          )}
        </main>
        
        <Footer />

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Infografis"
          className="fixed inset-0 flex items-center justify-center p-4 z-[1000] outline-none"
          overlayClassName="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[999]"
        >
          {selectedImage && (
            <div className="relative bg-white dark:bg-gray-800 rounded-lg p-2 max-w-full max-h-[90vh] overflow-auto z-[1001]">
              <button 
                onClick={closeModal} 
                className="absolute top-2 right-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300 z-10"
                aria-label="Tutup"
              >
                <FiX size={24} />
              </button>
              <div className="flex flex-col p-4 gap-6 md:flex-row md:items-start">
                <img 
                  src={selectedImage.imageUrl} 
                  alt={selectedImage.title} 
                  className="max-w-full md:max-w-md lg:max-w-lg object-contain mx-auto md:mx-0" 
                />
                <div className="p-4 text-center md:text-left flex-1">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base">{selectedImage.description}</p>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default InfographicPage;