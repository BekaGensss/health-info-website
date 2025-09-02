// src/pages/ArticlePage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { articles } from '../data/articlesData';
import { FiFileText, FiCalendar, FiUser, FiClock, FiTag, FiDownload } from 'react-icons/fi'; // <-- Tambahkan FiDownload di sini
import { TwitterShareButton, FacebookShareButton, WhatsappShareButton } from 'react-share';
import { FaTwitter, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ArticlePage = ({ isDarkMode, setIsDarkMode }) => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Inisialisasi AOS saat komponen dimuat
    AOS.init({ duration: 800, once: true, easing: 'ease-in-out' });
    AOS.refresh();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const article = articles.find(a => a.id === id);
  const shareUrl = window.location.href;
  const title = article?.title || "Artikel Kesehatan";
  const description = article?.description || "Baca artikel kesehatan menarik ini!";
  const imageUrl = article?.imageUrl;

  // Fungsi untuk menghitung waktu baca
  const readingTime = (content) => {
    // Menggunakan regex untuk membersihkan tag HTML sebelum menghitung kata
    const cleanContent = content.replace(/<[^>]*>/g, '');
    const wordsPerMinute = 200;
    const words = cleanContent.split(/\s/g).length;
    return Math.ceil(words / wordsPerMinute);
  };

  const ArticleSkeleton = () => (
    <div data-aos="fade-up" className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 md:p-10 animate-pulse transition-colors duration-500">
      <div className="w-full h-80 bg-gray-300 dark:bg-gray-700 rounded-2xl mb-6"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
      <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-6"></div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/5"></div>
      </div>
    </div>
  );

  if (!article) {
    return (
      <div className="bg-white dark:bg-gray-950 min-h-screen font-sans transition-colors duration-500">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <main className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Artikel tidak ditemukan</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen font-sans transition-colors duration-500">
      <Helmet>
        <title>{article.title} | Info Sehat</title>
        <meta name="description" content={article.description} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:image" content={article.imageUrl} />
        <meta property="og:url" content={shareUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.description} />
        <meta name="twitter:image" content={article.imageUrl} />
      </Helmet>
      
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main className="container mx-auto px-4 py-12 md:py-20">
        {isLoading ? (
          <ArticleSkeleton />
        ) : (
          <article data-aos="fade-up" className="bg-gray-50 dark:bg-gray-800 rounded-3xl shadow-2xl p-6 md:p-10 transition-colors duration-500">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-80 object-cover rounded-2xl mb-6 shadow-md transform hover:scale-[1.01] transition-transform duration-300"
              data-aos="zoom-in"
              loading="lazy" 
            />
            <div data-aos="fade-up" data-aos-delay="200" className="flex items-center flex-wrap gap-4 text-gray-500 dark:text-gray-400 text-sm mb-4">
              <span className="flex items-center gap-1 font-semibold text-teal-600 dark:text-teal-400">
                <FiFileText />
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <FiCalendar />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <FiUser />
                {article.author}
              </span>
              <span className="flex items-center gap-1">
                <FiClock />
                {readingTime(article.content)} Menit Baca
              </span>
            </div>
            <h1 data-aos="fade-up" data-aos-delay="300" className="text-3xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 leading-tight mb-4">{article.title}</h1>
            
            {/* Konten artikel */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="prose dark:prose-invert max-w-none text-lg text-gray-700 dark:text-gray-200"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* Bagian Baru: Tombol Unduh PDF */}
            {article.pdfUrl && (
              <div data-aos="fade-up" data-aos-delay="500" className="mt-8">
                <a 
                  href={article.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-red-600 hover:bg-red-700 transition-colors transform hover:scale-105"
                >
                  <FiDownload className="mr-2" />
                  Unduh Dokumen Asli (PDF)
                </a>
              </div>
            )}

            {/* Bagian Share */}
            <div data-aos="fade-up" data-aos-delay="600" className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400 font-semibold mb-4 md:mb-0">Bagikan artikel ini:</span>
              <div className="flex space-x-4">
                <TwitterShareButton url={shareUrl} title={title}>
                  <div className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors duration-300 transform hover:scale-110">
                    <FaTwitter />
                  </div>
                </TwitterShareButton>
                <FacebookShareButton url={shareUrl} quote={title}>
                  <div className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-110">
                    <FaFacebookF />
                  </div>
                </FacebookShareButton>
                <WhatsappShareButton url={shareUrl} title={title}>
                  <div className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300 transform hover:scale-110">
                    <FaWhatsapp />
                  </div>
                </WhatsappShareButton>
              </div>
            </div>

            {/* Bagian Tags */}
            <div data-aos="fade-up" data-aos-delay="700" className="mt-6 flex flex-wrap gap-2">
              <span className="text-gray-600 dark:text-gray-400 font-semibold flex items-center gap-1"><FiTag /> Tags:</span>
              {article.tags?.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ArticlePage;