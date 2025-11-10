import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <Link to="/" className="text-2xl font-bold text-gray-800">
            This Thing Called Life
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/products" className="text-gray-600 hover:text-blue-500">Products</Link>
          <Link to="/blog" className="text-gray-600 hover:text-blue-500">Blog</Link>
          <Link to="/community" className="text-gray-600 hover:text-blue-500">Community</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-500">About</Link>
        </div>
        {/* Mobile menu button can be added here later */}
      </nav>
    </header>
  );
};

export default Header;
