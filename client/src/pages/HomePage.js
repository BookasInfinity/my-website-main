import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-100 text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Beautifully chaotic, deeply soulful, wildly practical.
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tools and thoughts for navigating this thing called life. Find belonging, hope, and action-oriented guidance for your messy, beautiful journey.
        </p>
      </div>

      {/* Featured Products Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Featured Kits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for Product Cards */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Surviving the Holidays Kit</h3>
              <p className="text-gray-600">Navigate family gatherings with grace and humor.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">The "I'm Moving" Kit</h3>
              <p className="text-gray-600">From chaos to calm during your big move.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Resume & Interview Kit</h3>
              <p className="text-gray-600">Land your next opportunity with confidence.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join the Journey</h2>
          <p className="text-gray-600 mb-8">Get weekly wisdom, wonder, and practical magic delivered to your inbox.</p>
          <form className="max-w-md mx-auto">
            <div className="flex items-center">
              <input 
                type="email" 
                placeholder="your.email@example.com" 
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-r-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
