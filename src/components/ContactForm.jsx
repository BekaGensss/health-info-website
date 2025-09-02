// src/components/ContactForm.jsx
import React, { useState } from 'react';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Nama wajib diisi.';
    if (!formData.email) {
      newErrors.email = 'Email wajib diisi.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid.';
    }
    if (!formData.message) newErrors.message = 'Pesan wajib diisi.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      // Simulasi pengiriman data ke server
      setTimeout(() => {
        setLoading(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        // Sembunyikan notifikasi setelah 5 detik
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 1500);
    }
  };

  return (
    <div className="w-full">
      {isSubmitted && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-lg shadow-md" role="alert">
          <div className="flex items-center">
            <FiCheckCircle className="text-2xl mr-3" />
            <p className="font-semibold">Pesan Anda berhasil dikirim!</p>
          </div>
          <p className="text-sm mt-1">Kami akan segera merespons Anda.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Nama</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 ${
              errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-teal-500 dark:bg-gray-700 dark:text-gray-200'
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><FiAlertCircle />{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 ${
              errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-teal-500 dark:bg-gray-700 dark:text-gray-200'
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><FiAlertCircle />{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Pesan</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 ${
              errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-teal-500 dark:bg-gray-700 dark:text-gray-200'
            }`}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><FiAlertCircle />{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 rounded-full font-bold text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105"
          disabled={loading}
        >
          {loading ? 'Mengirim...' : 'Kirim Pesan'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;