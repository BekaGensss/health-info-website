// src/pages/BMICalculatorPage.jsx
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BMICalculator from '../components/BMICalculator';
import { FiTarget } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const BMICalculatorPage = ({ isDarkMode, setIsDarkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-in-out' });
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
      events: { onClick: { enable: true, mode: "push" }, onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40 }, push: { quantity: 4 }, repulse: { distance: 200, duration: 0.4 } },
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
    particles: { ...particlesOptions.particles, color: { value: "#6ee7b7" }, links: { ...particlesOptions.particles.links, color: "#6ee7b7" } },
  };

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen font-sans transition-colors duration-500 relative flex flex-col">
      <Particles
        id="tsparticles-bmi"
        className="fixed inset-0 z-0 opacity-50 transition-opacity duration-500"
        init={particlesInit}
        options={isDarkMode ? darkParticlesOptions : particlesOptions}
      />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Helmet>
          <title>BMI Kalkulator | Info Sehat</title>
          <meta name="description" content="Hitung Indeks Massa Tubuh (BMI) Anda dengan kalkulator sederhana dan akurat." />
        </Helmet>
        
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        
        <main className="container mx-auto px-4 py-12 md:py-20 flex flex-col items-center justify-center flex-grow">
          <section className="text-center mb-12" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 leading-tight flex justify-center items-center gap-2">
              <FiTarget className="text-teal-500" />
              Kalkulator BMI
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-2 font-light max-w-2xl mx-auto">
              Hitung Indeks Massa Tubuh Anda untuk menilai berat badan ideal.
            </p>
          </section>
          
          <div className="w-full max-w-md bg-gray-100 dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl transition-all duration-500 ease-in-out" data-aos="zoom-in" data-aos-delay="200">
            <BMICalculator />
          </div>
        </main>
        
        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default BMICalculatorPage;