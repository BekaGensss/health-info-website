// src/components/BMICalculator.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button'; // Asumsi komponen Button sudah ada

const getStatusColor = (bmi) => {
  if (bmi < 18.5) return 'text-blue-400';
  if (bmi >= 18.5 && bmi <= 24.9) return 'text-teal-500';
  if (bmi >= 25 && bmi <= 29.9) return 'text-yellow-500';
  return 'text-red-500';
};

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const calculateBmi = () => {
    if (!height || !weight) {
      alert('Mohon masukkan tinggi dan berat badan.');
      return;
    }

    setIsAnimating(true);
    setTimeout(() => {
      const heightInMeters = height / 100;
      const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(calculatedBmi);

      if (calculatedBmi < 18.5) {
        setStatus('Kekurangan berat badan');
      } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
        setStatus('Berat badan normal');
      } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
        setStatus('Kelebihan berat badan');
      } else {
        setStatus('Obesitas');
      }
      setIsAnimating(false);
    }, 500); // Penundaan untuk efek loading
  };

  const clearResults = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    setStatus('');
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-xl transition-all duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="height" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Tinggi Badan (cm)
          </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Contoh: 175"
            className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Berat Badan (kg)
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Contoh: 70"
            className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <Button onClick={calculateBmi} disabled={isAnimating}>
          {isAnimating ? 'Menghitung...' : 'Hitung BMI'}
        </Button>
        <Button onClick={clearResults} variant="secondary">
          Reset
        </Button>
      </div>

      <AnimatePresence>
        {bmi && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-10 text-center"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Hasil Perhitungan
            </h3>
            
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
              className={`p-6 md:p-8 rounded-full inline-block ${getStatusColor(bmi)} border-4 dark:border-gray-600 font-extrabold text-5xl md:text-6xl`}
            >
              {bmi}
            </motion.div>
            
            <p className={`text-lg md:text-xl font-semibold mt-4 ${getStatusColor(bmi)}`}>
              Status: <span className="font-bold">{status}</span>
            </p>

            <p className="text-sm mt-4 text-gray-600 dark:text-gray-400">
              Informasi ini hanya perkiraan. Konsultasikan dengan profesional kesehatan untuk saran medis.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BMICalculator;