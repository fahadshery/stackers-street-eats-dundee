
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-stackers-charcoal via-gray-900 to-stackers-charcoal flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FFD600" fill-opacity="0.3"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">STACKED.</span>
            <br />
            <span className="text-stackers-yellow">SAUCY.</span>
            <br />
            <span className="text-stackers-red">SATISFYING.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">
            Burgers built to stack your cravings.<br />
            <span className="text-stackers-yellow">Fried chicken that slaps.</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-500 font-bold px-8 py-4 text-lg transition-all duration-200 hover:scale-105 transform">
              ORDER NOW
            </Button>
            <Button variant="outline" className="border-stackers-yellow text-stackers-yellow hover:bg-stackers-yellow hover:text-stackers-charcoal font-bold px-8 py-4 text-lg transition-all duration-200">
              VIEW MENU
            </Button>
          </div>
          
          {/* Location Tag */}
          <div className="mt-12 inline-flex items-center bg-stackers-red/20 border border-stackers-red rounded-full px-6 py-2">
            <span className="text-stackers-red font-medium">📍 Serving Dundee, Scotland</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-stackers-yellow rounded-full flex justify-center">
          <div className="w-1 h-3 bg-stackers-yellow rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
