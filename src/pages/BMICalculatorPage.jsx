// src/pages/BMICalculatorPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BMICalculator from '../components/BMICalculator';
import ParticleBackground from '../components/ParticleBackground';
import { FiTarget, FiInfo } from 'react-icons/fi';

const BMICalculatorPage = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen font-sans transition-colors duration-500 ease-in-out relative">
      <ParticleBackground isDarkMode={isDarkMode} />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        
        <main className="container mx-auto px-4 py-12 md:py-20 flex-grow flex justify-center items-center">
          {/* Hapus semua data-aos di sini */}
          <div className="w-full max-w-lg bg-gray-50 dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl transition-all duration-500 ease-in-out">
            
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 flex items-center justify-center gap-3 mb-2">
                <FiTarget className="text-teal-500" />
                Kalkulator BMI
                
                {/* --- Tooltip BMI --- */}
                <div className="relative group">
                  <FiInfo className="text-gray-400 dark:text-gray-500 cursor-pointer text-2xl" />
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 mt-2 w-72 p-4 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-800 text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none">
                    <p className="font-bold mb-2">Apa itu BMI?</p>
                    <p>BMI (Body Mass Index) adalah ukuran yang menggunakan berat dan tinggi badan untuk menentukan apakah Anda memiliki berat badan yang sehat.</p>
                    <ul className="mt-2 list-disc list-inside text-left">
                      <li>&lt; 18.5: Kurus</li>
                      <li>18.5 - 24.9: Normal</li>
                      <li>25 - 29.9: Kelebihan berat badan</li>
                      <li>&gt; 30: Obesitas</li>
                    </ul>
                  </div>
                </div>
                {/* --- Akhir Tooltip --- */}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-light mt-2">
                Hitung Indeks Massa Tubuh (BMI) Anda untuk mengetahui status berat badan ideal.
              </p>
            </div>

            <BMICalculator />

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default BMICalculatorPage;