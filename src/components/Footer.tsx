
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stackers-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-stackers-yellow">STACKERS</h3>
            <p className="text-gray-300">
              Street food inspired. Flavour obsessed. Dundee proud.
            </p>
            <div className="flex space-x-4">
              <span className="text-2xl">📘</span>
              <span className="text-2xl">📷</span>
              <span className="text-2xl">🐦</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-stackers-yellow mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-stackers-yellow transition-colors">Home</a></li>
              <li><a href="/menu" className="hover:text-stackers-yellow transition-colors">Menu</a></li>
              <li><a href="/gift-cards" className="hover:text-stackers-yellow transition-colors">Gift Cards</a></li>
              <li><a href="/about" className="hover:text-stackers-yellow transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-stackers-yellow transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Menu Categories */}
          <div>
            <h4 className="text-lg font-bold text-stackers-yellow mb-4">Menu</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/menu#smash-burgers" className="hover:text-stackers-yellow transition-colors">Smash Burgers</a></li>
              <li><a href="/menu#fried-gold" className="hover:text-stackers-yellow transition-colors">Fried Chicken</a></li>
              <li><a href="/menu#loaded-fries" className="hover:text-stackers-yellow transition-colors">Loaded Fries</a></li>
              <li><a href="/menu#sweet-stacks" className="hover:text-stackers-yellow transition-colors">Desserts</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-stackers-yellow mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>96 High Street</p>
              <p>Dundee, Scotland DD2 3AY</p>
              <p>📞 01382 624 786</p>
              <p>✉️ hello@stackersmash.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Stackers Dundee. All rights reserved. | Built with ❤️ in Scotland</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
