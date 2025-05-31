
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-stackers-charcoal text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-stackers-yellow">Story</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From the iconic Dundee Stacks to your plate - discover the passion behind 
            every stacked, saucy, and satisfying bite.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold text-stackers-charcoal mb-6">
                  Inspired by <span className="text-stackers-red">Cox's Stack</span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The iconic chimney of Dundee have always been a symbol of our city's industrial 
                  heritage and resilience. Just like those towering stacks, we believe in building 
                  something substantial, something that stands out.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  That's where the name <strong className="text-stackers-yellow">STACKERS</strong> comes 
                  from - food that's layered with care, packed with quality ingredients, and absolutely 
                  stacked with the kind of flavour that makes you stop and think "damn, that's good."
                  These "stacks" weren't just structures; they were icons of strength, resilience, and tradition. 
                  Stackers takes inspiration from this proud industrial past, stacking flavour, quality, and tradition into every bite.
                  
                  At Stackers, every burger, every strip, and every slice tells a story: a story of honest food done right, served fast, and stacked high with goodness — just like the mighty stacks of Dundee that once fueled our nation.
                </p>
              </div>
              <div className="bg-stackers-yellow/10 p-8 rounded-lg border border-stackers-yellow">
                <div className="text-6xl text-center mb-4">🏭</div>
                <h3 className="text-2xl font-bold text-stackers-charcoal text-center mb-4">
                  Dundee Proud
                </h3>
                <p className="text-gray-700 text-center">
                  Every burger, every piece of chicken, every loaded fry is a love letter to our city
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-16">
              <h2 className="text-3xl font-bold text-stackers-charcoal text-center mb-8">
                What Makes Us <span className="text-stackers-yellow">Different</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-stackers-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    🍔
                  </div>
                  <h3 className="text-xl font-bold text-stackers-charcoal mb-3">Fresh Smashed</h3>
                  <p className="text-gray-700">
                    Every burger is hand smashed fresh on the griddle for a killer crispy edge and a mouthwatering juicy centre — no shortcuts, no compromises.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-stackers-yellow text-stackers-charcoal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    🍗
                  </div>
                  <h3 className="text-xl font-bold text-stackers-charcoal mb-3">Fried to Perfection</h3>
                  <p className="text-gray-700">
                    Our signature spice blend hits different — making every bite of chicken bold, juicy, and downright irresistible.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-stackers-charcoal text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    🔥
                  </div>
                  <h3 className="text-xl font-bold text-stackers-charcoal mb-3">House-Made Sauces</h3>
                  <p className="text-gray-700">
                    From our signature Stacker sauce to spicy mayo - every sauce is made fresh and in-house daily
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-stackers-charcoal mb-6">
                Our <span className="text-stackers-yellow">Mission</span>
              </h2>
              <div className="bg-stackers-charcoal text-white p-8 rounded-lg">
                <p className="text-xl leading-relaxed italic">
                  "To serve Dundee the kind of street food that makes you cancel your evening plans 
                  because you're too satisfied to move. Food that's <span className="text-stackers-yellow">stacked</span>, 
                  <span className="text-stackers-red"> saucy</span>, and absolutely 
                  <span className="text-stackers-yellow"> satisfying</span>."
                </p>
                <p className="text-stackers-yellow font-bold mt-4">- The Stackers Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-stackers-yellow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-stackers-charcoal mb-12">
              What We Stand For
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-stackers-charcoal mb-3">Quality First</h3>
                <p className="text-gray-700">
                  No shortcuts, no compromise. Only the best ingredients make it into our kitchen.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-stackers-charcoal mb-3">Community Love</h3>
                <p className="text-gray-700">
                  We're not just serving food, we're feeding our neighbours, friends, and family.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-stackers-charcoal mb-3">Flavour Obsessed</h3>
                <p className="text-gray-700">
                  Every recipes are crafted, tested, refined, and perfected until it makes us "WOW".
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
