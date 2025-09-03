// src/pages/AboutPage.jsx

import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiInfo, FiHeart, FiSearch, FiCode } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const AboutPage = ({ isDarkMode, setIsDarkMode }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

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
        id="tsparticles-about"
        className="fixed inset-0 z-0 opacity-50 transition-opacity duration-500"
        init={particlesInit}
        options={isDarkMode ? darkParticlesOptions : particlesOptions}
      />

      <div className="relative z-10 flex flex-col flex-grow">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <main className="container mx-auto px-4 py-12 md:py-20 flex-grow">
          <div 
            className="bg-gray-50 dark:bg-gray-800 rounded-3xl shadow-2xl p-6 md:p-12 text-center transition-all duration-500 ease-in-out transform hover:scale-[1.01]"
            data-aos="fade-up"
          >
            <h1 
              className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-4 flex items-center justify-center gap-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <FiInfo className="text-teal-500" />
              Tentang Website Ini
            </h1>
            <p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-10 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Website ini adalah proyek pribadi yang dibuat dengan semangat untuk berbagi informasi kesehatan yang mudah dipahami dan bisa diandalkan.
            </p>
            
            <div className="my-8" data-aos="fade-up" data-aos-delay="300">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center justify-center gap-2">
                <FiHeart className="text-red-500" />
                Motivasi Kami
              </h2>
              <p className="text-gray-700 dark:text-gray-200 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Kami percaya bahwa informasi kesehatan yang akurat harus bisa diakses oleh siapa saja. Melalui website ini, kami berharap dapat membantu Anda memahami kesehatan lebih baik dan menjalani hidup yang lebih sehat. Semua konten dikemas dengan cara yang santai dan menarik.
              </p>
            </div>

            <hr className="my-10 border-gray-300 dark:border-gray-700 w-2/3 mx-auto" data-aos="zoom-in" data-aos-delay="400" />

            <div className="my-8" data-aos="fade-up" data-aos-delay="500">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center justify-center gap-2">
                <FiSearch className="text-blue-500" />
                Sumber Informasi
              </h2>
              <p className="text-gray-700 dark:text-gray-200 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Semua artikel dan infografis di sini dikembangkan dari riset mendalam pada sumber-sumber terpercaya, termasuk jurnal ilmiah dan referensi kesehatan terkemuka.
              </p>
            </div>

            <div className="my-8" data-aos="fade-up" data-aos-delay="600">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center justify-center gap-2">
                <FiCode className="text-purple-500" />
                Dibuat Dengan
              </h2>
              <p className="text-gray-700 dark:text-gray-200 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Website ini dibangun menggunakan teknologi modern seperti React.js dan Tailwind CSS, memberikan pengalaman pengguna yang cepat, responsif, dan elegan.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;