// src/pages/ContactPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import ParticleBackground from '../components/ParticleBackground';
import { FiMail, FiMessageSquare } from 'react-icons/fi'; // Impor ikon

const ContactPage = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen relative font-sans transition-colors duration-500 ease-in-out">
      {/* Particle background diletakkan di lapisan terbawah */}
      <ParticleBackground isDarkMode={isDarkMode} />
      
      {/* Konten utama di lapisan atas agar interaktif */}
      <div className="relative z-10">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        
        <main className="container mx-auto px-4 py-12 md:py-20 flex justify-center">
          <div className="w-full max-w-xl bg-gray-50 dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl transition-all duration-500 ease-in-out">
            
            {/* Bagian Judul dan Deskripsi */}
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 flex items-center justify-center gap-3 mb-2">
                <FiMail className="text-teal-500" />
                Hubungi Kami
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-light mt-2">
                Kami siap mendengarkan. Kirimkan pesan, pertanyaan, atau saran Anda melalui formulir di bawah ini.
              </p>
            </div>

            <ContactForm />

          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;