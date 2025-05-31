
import { Clock, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocationSection = () => {
  const openingHours = [
    { day: "Monday", hours: "15:00 PM - 11:00 PM" },
    { day: "Tuesday", hours: "15:00 PM - 11:00 PM" },
    { day: "Wednesday", hours: "15:00 PM - 11:00 PM" },
    { day: "Thursday", hours: "15:00 PM - 11:00 PM" },
    { day: "Friday", hours: "15:00 PM - 11:00 PM" },
    { day: "Saturday", hours: "15:00 PM - 11:00 PM" },
    { day: "Sunday", hours: "15:00 PM - 11:00 PM" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-stackers-charcoal mb-4">
            Visit <span className="text-stackers-yellow">STACKERS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find us in the heart of Dundee, serving up stacked satisfaction
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Location Info */}
          <div className="space-y-8">
            <div className="bg-stackers-yellow/10 border border-stackers-yellow rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Map className="w-6 h-6 text-stackers-red mr-3" />
                <h3 className="text-2xl font-bold text-stackers-charcoal">Location</h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                123 High Street<br />
                Dundee, Scotland<br />
                DD1 1AA
              </p>
              <Button className="bg-stackers-red hover:bg-red-600 text-white">
                Get Directions
              </Button>
            </div>
            
            <div className="bg-stackers-charcoal text-white rounded-lg p-6">
              <h3 className="text-2xl font-bold text-stackers-yellow mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <p className="flex items-center">
                  <span className="text-stackers-yellow mr-2">📞</span>
                  01382 624 786
                </p>
                <p className="flex items-center">
                  <span className="text-stackers-yellow mr-2">💬</span>
                  WhatsApp: 07988 747 121
                </p>
                <p className="flex items-center">
                  <span className="text-stackers-yellow mr-2">✉️</span>
                  hello@stackersmash.com
                </p>
              </div>
            </div>
          </div>
          
          {/* Opening Hours */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-6">
              <Clock className="w-6 h-6 text-stackers-red mr-3" />
              <h3 className="text-2xl font-bold text-stackers-charcoal">Opening Hours</h3>
            </div>
            
            <div className="space-y-3">
              {openingHours.map((item, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0"
                >
                  <span className="font-medium text-stackers-charcoal">
                    {item.day}
                  </span>
                  <span className="text-gray-700">
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-stackers-yellow/20 border border-stackers-yellow rounded-lg">
              <p className="text-stackers-charcoal font-medium text-center">
                🍔 Order ahead to skip the queue!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
