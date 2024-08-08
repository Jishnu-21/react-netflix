import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-36 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-youtube fa-lg"></i>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 md:mt-0">
            <div>
              <h3 className="text-sm font-semibold text-white mb-2">Audio Description</h3>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-2">Help Centre</h3>
              <ul className="text-gray-400">
                <li className="hover:text-white">
                  <a href="#">Gift Cards</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-2">Media Centre</h3>
              <ul className="text-gray-400">
                <li className="hover:text-white">
                  <a href="#">Terms of Use</a>
                </li>
                <li className="hover:text-white">
                  <a href="#">Privacy</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-2">Corporate Information</h3>
              <ul className="text-gray-400">
                <li className="hover:text-white">
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-8">
          <button className="bg-gray-800 text-white py-2 px-4 rounded">Service Code</button>
          <p className="text-gray-400">&copy; 1997-2024 Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;