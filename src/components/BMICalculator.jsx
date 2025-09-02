// src/components/BMICalculator.jsx
import React, { useState } from 'react';
import Button from './Button';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBmi = () => {
    if (height && weight) {
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
    } else {
      alert('Mohon masukkan tinggi dan berat badan.');
    }
  };

  return (
    <div className="space-y-6 text-gray-800 dark:text-gray-100">
      <div>
        <label htmlFor="height" className="block text-sm font-medium">Tinggi Badan (cm)</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="mt-1 block w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
        />
      </div>
      <div>
        <label htmlFor="weight" className="block text-sm font-medium">Berat Badan (kg)</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="mt-1 block w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
        />
      </div>
      <div className="flex justify-center">
        <Button onClick={calculateBmi} variant="primary">Hitung BMI</Button>
      </div>

      {bmi && (
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold">BMI Anda: <span className="text-teal-500">{bmi}</span></h3>
          <p className="text-lg mt-2">Status: <span className="font-semibold">{status}</span></p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;