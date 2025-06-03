
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-stackers-charcoal text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Get in <span className="text-stackers-yellow">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Questions? Cravings? Compliments? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-stackers-charcoal mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input 
                      type="text" 
                      required 
                      className="border-gray-300 focus:border-stackers-yellow focus:ring-stackers-yellow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input 
                      type="text" 
                      required 
                      className="border-gray-300 focus:border-stackers-yellow focus:ring-stackers-yellow"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    required 
                    className="border-gray-300 focus:border-stackers-yellow focus:ring-stackers-yellow"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone (Optional)
                  </label>
                  <Input 
                    type="tel" 
                    className="border-gray-300 focus:border-stackers-yellow focus:ring-stackers-yellow"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea 
                    required 
                    rows={5}
                    className="border-gray-300 focus:border-stackers-yellow focus:ring-stackers-yellow"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-500 font-bold py-3"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* Location */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-stackers-charcoal mb-4 flex items-center">
                  📍 Visit Our Kitchen
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p className="text-lg">96 High Street</p>
                  <p className="text-lg">Dundee, Scotland</p>
                  <p className="text-lg">DD2 3AY</p>
                </div>
                <Button className="mt-4 bg-stackers-red hover:bg-red-600 text-white">
                  Get Directions
                </Button>
              </div>

              {/* Contact Details */}
              <div className="bg-stackers-charcoal text-white rounded-lg p-6">
                <h3 className="text-2xl font-bold text-stackers-yellow mb-4">
                  💬 Talk to Us
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-stackers-yellow mr-3 text-lg">📞</span>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-300">01382 624 786</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-stackers-yellow mr-3 text-lg">💚</span>
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-gray-300">07988 747 121</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-stackers-yellow mr-3 text-lg">✉️</span>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-300">hello@stackersmash.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-stackers-charcoal mb-4 flex items-center">
                  🕒 Opening Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Sunday</span>
                    <span className="text-gray-700">15:00 PM - 11:00 PM</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-stackers-yellow/20 border border-stackers-yellow rounded-lg">
                  <p className="text-stackers-charcoal font-medium text-sm text-center">
                    💡 Tip: Order ahead to skip the queue!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-stackers-charcoal mb-4">
              Find Us in Dundee
            </h2>
            <p className="text-gray-600 mb-6">
              Right in the heart of the city, close to all the action
            </p>
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🗺️</div>
                <p className="text-gray-600">Interactive map coming soon!</p>
                <p className="text-sm text-gray-500">96 High Street, Dundee DD2 3AY</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
