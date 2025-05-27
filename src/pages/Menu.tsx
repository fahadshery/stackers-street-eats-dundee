
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Menu = () => {
  const menuCategories = [
    {
      id: 'burgers',
      name: 'Smash Burgers',
      icon: '🍔',
      items: [
        { name: 'The Stacker Supreme', description: 'Double smash patties, cheese, lettuce, tomato, special sauce', price: '£8.50', badge: 'BESTSELLER' },
        { name: 'Crispy Bacon Stack', description: 'Smash patty, crispy bacon, cheese, onion rings, BBQ sauce', price: '£9.00', badge: 'POPULAR' },
        { name: 'Veggie Stacker', description: 'Plant-based patty, avocado, tomato, lettuce, vegan mayo', price: '£7.50', badge: 'VEGAN' },
        { name: 'Double Trouble', description: 'Double smash patties, double cheese, pickles, mustard', price: '£10.00', badge: 'HUGE' }
      ]
    },
    {
      id: 'chicken',
      name: 'Fried Chicken',
      icon: '🍗',
      items: [
        { name: 'Crispy Stack Chicken', description: 'Buttermilk fried chicken, slaw, spicy mayo', price: '£7.50', badge: 'SPICY' },
        { name: 'Buffalo Stack', description: 'Fried chicken, buffalo sauce, blue cheese, celery slaw', price: '£8.00', badge: 'HOT' },
        { name: 'Korean Style Stack', description: 'Fried chicken, korean glaze, kimchi slaw', price: '£8.50', badge: 'FUSION' },
        { name: 'Chicken & Waffle', description: 'Fried chicken, maple waffle, syrup drizzle', price: '£9.00', badge: 'SWEET' }
      ]
    },
    {
      id: 'fries',
      name: 'Loaded Fries',
      icon: '🍟',
      items: [
        { name: 'Loaded Stacker Fries', description: 'Crispy fries, cheese sauce, bacon bits, spring onions', price: '£6.00', badge: 'SHARING' },
        { name: 'Chili Cheese Fries', description: 'Fries, chili con carne, melted cheese, sour cream', price: '£6.50', badge: 'HEARTY' },
        { name: 'Truffle Parmesan Fries', description: 'Fries, truffle oil, parmesan, herbs', price: '£7.00', badge: 'PREMIUM' },
        { name: 'Pulled Pork Fries', description: 'Fries, pulled pork, BBQ sauce, coleslaw', price: '£7.50', badge: 'SMOKY' }
      ]
    },
    {
      id: 'desserts',
      name: 'Sweet Stacks',
      icon: '🧁',
      items: [
        { name: 'Stack Waffles', description: 'Warm waffles, ice cream, berry compote, maple syrup', price: '£5.50', badge: 'CLASSIC' },
        { name: 'Chocolate Brownie Stack', description: 'Triple chocolate brownie, vanilla ice cream, hot fudge', price: '£6.00', badge: 'INDULGENT' },
        { name: 'Salted Caramel Stack', description: 'Caramel cake, salted caramel sauce, whipped cream', price: '£5.50', badge: 'SALTY-SWEET' },
        { name: 'Cookie Dough Bites', description: 'Warm cookie dough pieces, ice cream, chocolate chips', price: '£5.00', badge: 'WARM' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-stackers-charcoal text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Our <span className="text-stackers-yellow">MENU</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Every item crafted with love, stacked with flavour, and guaranteed to satisfy
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 sticky top-20 bg-gray-50 py-4 z-40">
            {menuCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="bg-white border border-stackers-yellow text-stackers-charcoal hover:bg-stackers-yellow font-bold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105"
              >
                {category.icon} {category.name}
              </a>
            ))}
          </div>

          {/* Menu Items */}
          {menuCategories.map((category) => (
            <div key={category.id} id={category.id} className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-stackers-charcoal mb-2">
                  {category.icon} {category.name}
                </h2>
                <div className="w-24 h-1 bg-stackers-yellow mx-auto rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-stackers-charcoal">
                        {item.name}
                      </h3>
                      {item.badge && (
                        <span className="bg-stackers-red text-white text-xs font-bold px-2 py-1 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-stackers-yellow">
                        {item.price}
                      </span>
                      <Button className="bg-stackers-charcoal hover:bg-gray-800 text-white">
                        Add to Order
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Order CTA */}
      <section className="bg-stackers-yellow py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-stackers-charcoal mb-4">
            Ready to Stack Your Order?
          </h2>
          <p className="text-xl text-stackers-charcoal mb-8">
            Get your favourites delivered fresh and hot
          </p>
          <Button className="bg-stackers-charcoal text-white hover:bg-gray-800 font-bold px-8 py-4 text-lg">
            ORDER NOW
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
