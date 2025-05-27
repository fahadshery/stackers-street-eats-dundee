
const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Best smash burger in Dundee! The flavour is absolutely unreal 🔥",
      author: "Sarah M.",
      platform: "Google Reviews",
      rating: 5
    },
    {
      text: "That fried chicken is something else. Crispy perfection every time!",
      author: "Jamie K.",
      platform: "Facebook",
      rating: 5
    },
    {
      text: "Loaded fries are massive and so worth it. Can't stop coming back!",
      author: "Alex R.",
      platform: "Instagram",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-stackers-charcoal text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why People <span className="text-stackers-yellow">Love Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - here's what our customers are saying
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-stackers-yellow text-xl">⭐</span>
                ))}
              </div>
              
              <p className="text-white text-lg mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-stackers-yellow">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {testimonial.platform}
                  </p>
                </div>
                <div className="text-2xl">💛</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-stackers-yellow/20 border border-stackers-yellow rounded-full px-6 py-3">
            <span className="text-stackers-yellow font-bold">⭐ 4.8/5 Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
