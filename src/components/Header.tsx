
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Gift Cards', href: '/gift-cards' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleOrderNow = () => {
    navigate('/menu');
  };

  return (
    <header className="bg-stackers-charcoal text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            {/* Desktop Logo */}
            <img
              src="/lovable-uploads/1c302daa-0169-4d63-bc70-bbcfba050a32.png"
              alt="STACKERS"
              className="h-8 w-auto hidden md:block"
              onClick={() => navigate('/')}
              style={{ cursor: 'pointer' }}
            />
            {/* Mobile Logo - Made even bigger */}
            <img
              src="/lovable-uploads/cd6add94-33ad-480b-81fd-35ac59fe407b.png"
              alt="STACKERS"
              className="h-16 w-auto md:hidden"
              onClick={() => navigate('/')}
              style={{ cursor: 'pointer' }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-stackers-yellow transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={handleOrderNow}
              className="bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-500 font-bold px-6 py-2 transition-all duration-200 hover:scale-105"
            >
              ORDER NOW
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-stackers-yellow" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-stackers-charcoal border-t border-gray-700">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-white hover:text-stackers-yellow hover:bg-gray-800 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button
                  onClick={handleOrderNow}
                  className="w-full bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-500 font-bold py-2 transition-all duration-200"
                >
                  ORDER NOW
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;