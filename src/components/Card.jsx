// src/components/Card.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, title, description, imageUrl }) => {
  return (
    <Link 
      to={`/artikel/${id}`} 
      className="block bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
          loading="lazy" // Tambahkan ini untuk lazy loading
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 font-light line-clamp-3">{description}</p>
      </div>
    </Link>
  );
};

export default Card;