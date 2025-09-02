import React, { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Fungsi untuk menampilkan/menyembunyikan tombol scroll
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false);
    }
  };

  // Fungsi untuk menggulir ke bagian atas halaman
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    // Membersihkan event listener saat komponen di-unmount
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300 py-6 transition-colors duration-300 relative">
      <div className="container mx-auto text-center px-4">
        
        {/* Bagian Tautan Media Sosial dengan Ikon SVG */}
        <div className="flex justify-center items-center space-x-6 mb-4">
          
          {/* Tautan X (Twitter) - Ikon 3D Mirip Asli */}
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.12l-6.577-8.683L5.232 22.25H1.924l7.63-10.134L2.254 2.25H5.46l5.597 7.28L18.244 2.25z"/>
            </svg>
          </a>

          {/* Tautan Facebook - Ikon 3D Mirip Asli */}
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-400 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 48 48">
              <path fill="#3b5998" d="M24 2C12.95 2 4 10.95 4 22s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20z"/>
              <path fill="#ffffff" d="M28.8 20.4h-3.6v-2.4c0-.6.4-1.2 1.2-1.2h2.4V14.4h-2.4c-1.8 0-3.6 1.8-3.6 3.6v2.4h-2.4v3.6h2.4v8.4h3.6v-8.4h2.4l.6-3.6z"/>
            </svg>
          </a>

          {/* Tautan Instagram - Ikon 3D Mirip Asli */}
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="5" ry="5" fill="#f09433"/>
              <path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm5-8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" fill="#ffffff"/>
            </svg>
          </a>

          {/* Tautan TikTok - Ikon "Pokok" & Futuristik */}
          <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="tiktokGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#69C9D0', stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#EE1D52', stopOpacity:1}} />
                </linearGradient>
                <linearGradient id="tiktokGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#000000', stopOpacity:0.8}} />
                  <stop offset="100%" style={{stopColor:'#000000', stopOpacity:0.6}} />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="24" height="24" rx="4" ry="4" fill="url(#tiktokGradient2)"/>
              <path d="M16 8.5h-2.5V11c0 1.25-.5 2.5-1.5 3.5-.83.83-2.08 1.25-3.33 1.25-1.04 0-2.08-.21-2.92-.62-.83-.42-1.46-1.04-1.87-1.87-.21-.42-.31-.83-.31-1.25s.1-.83.31-1.25c.42-.83 1.04-1.46 1.87-1.87.83-.42 1.87-.62 2.92-.62.83 0 1.66.1 2.5.31V7.5c0-.83.42-1.25 1.25-1.25.83 0 1.25.42 1.25 1.25v1.5zm-3.5 0h-2.5V11c0 .83-.42 1.25-1.25 1.25-.83 0-1.25-.42-1.25-1.25V8.5h-2.5c-.83 0-1.25-.42-1.25-1.25s.42-1.25 1.25-1.25h2.5V4.5c0-.83.42-1.25 1.25-1.25s1.25.42 1.25 1.25v2.5h2.5c.83 0 1.25.42 1.25 1.25s-.42 1.25-1.25 1.25z" fill="url(#tiktokGradient1)"/>
            </svg>
          </a>
        </div>
        
        {/* Teks Hak Cipta */}
        <p className="text-sm">&copy; 2025 Info Sehat. Semua hak cipta dilindungi.</p>
        <p className="text-xs mt-1">Dibuat dengan ❤️ oleh Dev Bara Kusuma</p>

      </div>

      {/* Tombol Kembali ke Atas */}
      {showScroll && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-teal-500 text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 z-50"
          aria-label="Kembali ke atas"
        >
          <FiChevronUp size={24} />
        </button>
      )}
    </footer>
  );
};

export default Footer;