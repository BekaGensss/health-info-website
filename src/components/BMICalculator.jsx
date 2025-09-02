// src/components/BMICalculator.jsx
import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const heightInMeters = height / 100;
      const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(calculatedBmi);

      if (calculatedBmi < 18.5) {
        setStatus("Kekurangan Berat Badan");
      } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
        setStatus("Berat Badan Normal");
      } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
        setStatus("Kelebihan Berat Badan");
      } else {
        setStatus("Obesitas");
      }
    } else {
      setBmi(null);
      setStatus('');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">Kalkulator BMI</h2>
      <form onSubmit={calculateBMI}>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2" htmlFor="height">
            Tinggi Badan (cm)
          </label>
          <input
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2" htmlFor="weight">
            Berat Badan (kg)
          </label>
          <input
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-teal-500 text-white font-bold py-2 px-4 rounded-md hover:bg-teal-600 transition duration-300"
        >
          Hitung BMI
        </button>
      </form>

      {bmi && (
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">BMI Anda: {bmi}</h3>
          <p className="text-lg font-semibold mt-2" style={{ color: getStatusColor(status) }}>
            Status: {status}
          </p>
        </div>
      )}
    </div>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case "Kekurangan Berat Badan": return "#f6ad55"; // Orange
    case "Berat Badan Normal": return "#48bb78"; // Green
    case "Kelebihan Berat Badan": return "#f6e05e"; // Yellow
    case "Obesitas": return "#e53e3e"; // Red
    default: return "#4a5568"; // Gray
  }
};

export default BMICalculator;