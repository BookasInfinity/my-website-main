import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white mt-12">
      <div className="container mx-auto px-6 py-4">
        <div className="text-center text-gray-500">
          <p>&copy; {currentYear} This Thing Called Life. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
