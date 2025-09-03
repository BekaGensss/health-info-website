// src/pages/ContactPage.jsx

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { Helmet } from 'react-helmet-async';
import { FiMail } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ContactPage = ({ isDarkMode, setIsDarkMode }) => {

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-in-out' });
    AOS.refresh();
  }, []);

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
    <div className="bg-white dark:bg-gray-950 min-h-screen relative font-sans transition-colors duration-500 ease-in-out flex flex-col">
      {/* Tambahkan latar belakang partikel */}
      <Particles
        id="tsparticles-contact"
        className="fixed inset-0 z-0 opacity-50 transition-opacity duration-500"
        init={particlesInit}
        options={isDarkMode ? darkParticlesOptions : particlesOptions}
      />
      
      {/* Konten utama di lapisan atas agar interaktif */}
      <div className="relative z-10 flex flex-col flex-grow">
        <Helmet>
          <title>Hubungi Kami | Info Sehat</title>
          <meta name="description" content="Hubungi kami untuk pertanyaan, saran, atau kolaborasi." />
          <meta property="og:title" content="Hubungi Kami | Info Sehat" />
          <meta property="og:description" content="Hubungi kami untuk pertanyaan, saran, atau kolaborasi." />
          <meta property="og:url" content="https://www.infosehat.com/kontak" />
        </Helmet>
        
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        
        <main className="container mx-auto px-4 py-12 md:py-20 flex justify-center flex-grow">
          <div 
            className="w-full max-w-xl bg-gray-50 dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl transition-all duration-500 ease-in-out"
            data-aos="fade-up"
          >
            
            {/* Bagian Judul dan Deskripsi */}
            <div className="text-center mb-10">
              <h1 
                className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 flex items-center justify-center gap-3 mb-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <FiMail className="text-teal-500" />
                Hubungi Kami
              </h1>
              <p 
                className="text-lg text-gray-600 dark:text-gray-300 font-light mt-2"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Kami siap mendengarkan. Kirimkan pesan, pertanyaan, atau saran Anda melalui formulir di bawah ini.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
                <ContactForm />
            </div>

          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;