import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - Logo and About */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Company Name</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec velit vulputate,
              luctus tellus vitae, tempus odio.
            </p>
            <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
          </div>

          {/* Right Section - Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons Section */}
        <div className="mt-8 flex items-center justify-center">
          <a href="#" className="text-white hover:text-gray-400 mx-3">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400 mx-3">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400 mx-3">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400 mx-3">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
