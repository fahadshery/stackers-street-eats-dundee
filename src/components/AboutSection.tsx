
const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-stackers-charcoal mb-8">
            About <span className="text-stackers-yellow">STACKERS</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Inspired by the iconic <strong className="text-stackers-red">Dundee Stacks</strong>, 
                we're all about food that's layered, packed, and absolutely 
                <strong className="text-stackers-yellow"> STACKED with flavour</strong>.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                From our signature smash burgers to crispy fried chicken that'll make you question 
                everything you thought you knew about takeaway - we're here to satisfy those 
                <strong className="text-stackers-charcoal"> serious cravings</strong>.
              </p>
              
              <div className="bg-stackers-yellow/10 border-l-4 border-stackers-yellow p-6 rounded-r-lg">
                <p className="text-stackers-charcoal font-medium italic">
                  "Street food inspired. Flavour obsessed. Dundee proud."
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-stackers-charcoal text-white p-6 rounded-lg transform hover:scale-105 transition-all duration-200">
                <h3 className="text-xl font-bold text-stackers-yellow mb-2">🍔 Smash Burgers</h3>
                <p>Juicy, crispy-edged perfection</p>
              </div>
              
              <div className="bg-stackers-red text-white p-6 rounded-lg transform hover:scale-105 transition-all duration-200">
                <h3 className="text-xl font-bold mb-2">🍗 Fried Chicken</h3>
                <p>Signature crispy coating, tender inside</p>
              </div>
              
              <div className="bg-stackers-yellow text-stackers-charcoal p-6 rounded-lg transform hover:scale-105 transition-all duration-200">
                <h3 className="text-xl font-bold mb-2">🍟 Loaded Fries</h3>
                <p>Stacked high with all the good stuff</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
