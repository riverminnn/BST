import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTruck, 
  faPhone, 
  faEnvelope,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top bar */}
        <div className="border-b border-blue-800 py-2 hidden md:flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="tel:7706683771" className="hover:text-yellow-400 transition-colors">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              (770) 668-3771
            </a>
            <a href="mailto:bstrucking25@gmail.com" className="hover:text-yellow-400 transition-colors">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              bstrucking25@gmail.com
            </a>
          </div>
          <div className="text-yellow-400 font-semibold">
            Safety. Reliability.
          </div>
        </div>

        {/* Main navigation */}
        <div className="py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <FontAwesomeIcon icon={faTruck} className="text-3xl text-yellow-400" />
            <div>
              <div className="text-2xl font-bold">Best Service Trucking</div>
              <div className="text-sm text-gray-300">Moving Cargo with Care</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-yellow-400 transition-colors font-semibold text-lg">
              Home
            </Link>
            <Link to="/about" className="hover:text-yellow-400 transition-colors font-semibold text-lg">
              About
            </Link>
            <Link to="/services" className="hover:text-yellow-400 transition-colors font-semibold text-lg">
              Services
            </Link>
            <Link to="/fleet" className="hover:text-yellow-400 transition-colors font-semibold text-lg">
              Fleet
            </Link>
            <Link 
              to="/contact" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-6 py-2 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl cursor-pointer"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-blue-800">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-yellow-400 transition-colors font-semibold text-lg py-2"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-yellow-400 transition-colors font-semibold text-lg py-2"
              >
                About
              </Link>
              <Link 
                to="/services" 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-yellow-400 transition-colors font-semibold text-lg py-2"
              >
                Services
              </Link>
              <Link 
                to="/fleet" 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-yellow-400 transition-colors font-semibold text-lg py-2"
              >
                Fleet
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-6 py-2 rounded-lg font-bold transition-all duration-300 text-center"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
