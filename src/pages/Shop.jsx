import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Shop = () => {
  // State to hold product data
  const [products, setProducts] = useState([]);

  // Fetch data from a fake API (JSONPlaceholder)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl text-center font-bold mb-10 text-white">Shop</h2>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative group bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover group-hover:opacity-90 transition duration-300"
            />
            <div className="pl-6 pr-6 pt-6 pb-4">
              <h3 className="text-xl font-semibold text-white">{product.title}</h3>
              <p className="text-gray-400 mt-2">{product.description.slice(0, 80)}...</p>
              <p className="text-xl font-bold text-blue-500 mt-4">${product.price}</p>
            </div>

            {/* Fancy Hover Effect */}
            <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <span className="text-white text-lg font-semibold">View Details</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
