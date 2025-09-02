import React, { useState, useEffect, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Button from '../components/Button';
import { articles } from '../data/articlesData';
import Particles from 'react-tsparticles';
import { FiSearch, FiList } from 'react-icons/fi';
import { loadSlim } from 'tsparticles-slim';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SkeletonCard from '../components/SkeletonCard';

const POSTS_PER_PAGE = 6;

const HomePage = ({ isDarkMode, setIsDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedArticles, setDisplayedArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  // Fungsi debounce untuk performa pencarian
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const handleSearchChange = useCallback(debounce((value) => {
    setSearchTerm(value);
  }, 300), []);

  const categories = ['Semua', ...new Set(articles.map(article => article.category))];

  useEffect(() => {
    // Inisialisasi AOS dan muatannya
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
    AOS.refresh();

    // Simulasikan loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Filter artikel berdasarkan kategori dan pencarian
    const filtered = articles.filter(article =>
      (selectedCategory === 'Semua' || article.category === selectedCategory) &&
      (article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredArticles(filtered);
    setCurrentPage(1); // Reset halaman ke 1 setiap kali filter atau pencarian berubah
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    // Ambil artikel untuk halaman saat ini
    const indexOfLastPost = currentPage * POSTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
    const currentPosts = filteredArticles.slice(indexOfFirstPost, indexOfLastPost);
    setDisplayedArticles(currentPosts);
  }, [currentPage, filteredArticles]);

  const totalPages = Math.ceil(filteredArticles.length / POSTS_PER_PAGE);

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

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Opsional: Gulir ke atas halaman
  };

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen font-sans transition-colors duration-500 ease-in-out relative">
      <Particles
        id="tsparticles"
        className="fixed inset-0 z-0 opacity-50 transition-opacity duration-500"
        init={particlesInit}
        options={isDarkMode ? darkParticlesOptions : particlesOptions}
      />
      
      <div className="relative z-10">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </div>

      <div className="relative z-10 h-96 flex flex-col justify-center items-center text-center p-4">
        <div className="relative z-10 text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white leading-tight transition-colors duration-500">
            Kesehatan Dalam Genggaman
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300 font-light transition-colors duration-500">
            Jelajahi tips, artikel, dan infografis kesehatan yang mudah dicerna, profesional, dan akurat.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 relative z-20">
        <div className="mb-8 max-w-2xl mx-auto -mt-16 relative z-30" data-aos="fade-up" data-aos-delay="200">
          <div className="relative">
            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="Cari artikel..."
              className="w-full pl-14 pr-6 py-4 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-4 focus:ring-teal-400 focus:ring-opacity-50 transition-all duration-300 shadow-xl dark:shadow-teal-900/50"
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 relative z-20" data-aos="fade-up" data-aos-delay="300">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'secondary'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 flex items-center gap-2" data-aos="fade-right">
            <FiList className="text-teal-500" />
            Artikel Pilihan
          </h2>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <div data-aos="fade-up" data-aos-delay={index * 100} key={index}>
                  <SkeletonCard />
                </div>
              ))}
            </div>
          ) : displayedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedArticles.map((article, index) => (
                <div data-aos="fade-up" data-aos-delay={index * 100} key={article.id}>
                  <Card {...article} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-gray-500 dark:text-gray-400 mt-10" data-aos="fade-up">
              Maaf, tidak ada artikel yang cocok dengan kata kunci Anda.
            </p>
          )}
        </section>

        {totalPages > 1 && (
          <nav className="mt-8 flex justify-center space-x-2">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                currentPage === 1
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-teal-500 text-white hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700'
              }`}
            >
              Sebelumnya
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`
                  hidden md:block px-4 py-2 rounded-full font-medium transition-colors duration-200 
                  ${currentPage === i + 1
                    ? 'bg-teal-500 text-white dark:bg-teal-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  }
                `}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                currentPage === totalPages
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-teal-500 text-white hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700'
              }`}
            >
              Berikutnya
            </button>
          </nav>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;