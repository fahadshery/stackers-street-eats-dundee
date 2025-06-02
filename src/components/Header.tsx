import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-stackers-charcoal text-white shadow-lg relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/cd6add94-33ad-480b-81fd-35ac59fe407b.png" 
              alt="Stackers Logo" 
              className="h-14 w-auto md:h-16 object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <Link to="/menu" className="hover:text-gray-300 transition-colors">Menu</Link>
            <Link to="/about" className="hover:text-gray-300 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-stackers-charcoal md:hidden absolute top-full left-0 w-full shadow-md">
          <nav className="px-4 py-3 flex flex-col space-y-3">
            <Link to="/" className="hover:text-gray-300 transition-colors block" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/menu" className="hover:text-gray-300 transition-colors block" onClick={() => setIsMenuOpen(false)}>Menu</Link>
            <Link to="/about" className="hover:text-gray-300 transition-colors block" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors block" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
