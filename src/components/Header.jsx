import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-6 fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Branding or Logo */}
        <div className="text-4xl font-extrabold ml-5 text-blue-500">V</div>

        {/* Navigation Links Centered */}
        <div className="flex space-x-9 justify-center w-full">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/shop" className="hover:text-gray-400">Shop</Link>
          <Link to="/blog" className="hover:text-gray-400">Blog</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
