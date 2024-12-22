import React from 'react';

const Content = () => {
  return (
    <div>
      {/* Video Background */}
      <div className="relative h-screen bg-gray-900">
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute left-0 w-full h-full object-cover"
        >
          <source src="/smokeV.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold mb-4">Welcome to Vapor World</h1>
          <p className="text-lg italic">
            "Inhale the future, exhale the past."
          </p>
        </div>
      </div>

      {/* Sulit Deals Section */}
      <div className="container mx-auto py-16">
        {/* Sulit Deals Text Above Products */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-extrabold text-white">Sulit Deals</h2> {/* Increased font size */}
          <p className="text-4xl pb-4 text-gray-400">Explore the best deals on vaping products</p>
        </div>

        {/* Product Grid for Sulit Deals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Product 1 */}
          <div className="relative group bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <img
              src="ww.webp"
              alt="Product 1"
              className="w-full h-[300px] object-cover group-hover:opacity-90 transition duration-300"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">ChesterField</h3>
              <p className="text-gray-400 mt-2"></p>
              <p className="text-xl font-bold text-blue-500 mt-4">₱8</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="relative group bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <img
              src="w.webp"
              alt="Product 2"
              className="w-full h-[300px] object-cover group-hover:opacity-90 transition duration-300"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">Ice Blast</h3>
              <p className="text-gray-400 mt-2"></p>
              <p className="text-xl font-bold text-blue-500 mt-4">₱10</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="relative group bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <img
              src="m.png"
              alt="Product 3"
              className="w-full h-[300px] object-cover group-hover:opacity-90 transition duration-300"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">Marlboro</h3>
              <p className="text-gray-400 mt-2"></p>
              <p className="text-xl font-bold text-blue-500 mt-4">₱8</p>
            </div>
          </div>

          {/* Product 4 */}
          <div className="relative group bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <img
              src="cam.jpg"
              alt="Product 4"
              className="w-full h-[300px] object-cover group-hover:opacity-90 transition duration-300"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">Camel</h3>
              <p className="text-gray-400 mt-2"></p>
              <p className="text-xl font-bold text-blue-500 mt-4">₱10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
