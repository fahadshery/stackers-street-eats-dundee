import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Menu = () => {
  const menuCategories = [
    {
      id: 'starters',
      name: 'Starters',
      icon: '🥨',
      items: [
        { name: 'Loaded Nachos', description: 'Crispy tortilla chips, melted cheese, jalapeños, sour cream, guacamole', price: '£6.50', badge: 'SHARING' },
        { name: 'Mozzarella Sticks', description: 'Golden fried mozzarella with marinara dipping sauce', price: '£5.50', badge: 'CRISPY' },
        { name: 'Chicken Wings (6)', description: 'Buffalo, BBQ, or Korean glazed wings with ranch dip', price: '£7.00', badge: 'SPICY' },
        { name: 'Jalapeño Poppers', description: 'Cream cheese stuffed jalapeños, breaded and fried', price: '£5.00', badge: 'HOT' }
      ]
    },
    {
      id: 'fried-gold',
      name: 'Fried Gold',
      icon: '🏆',
      items: [
        { name: 'Golden Chicken Burger', description: 'Crispy fried chicken breast, lettuce, mayo, brioche bun', price: '£8.00', badge: 'SIGNATURE' },
        { name: 'Nashville Hot Chicken', description: 'Spicy Nashville-style fried chicken, pickle, slaw', price: '£8.50', badge: 'FIERY' },
        { name: 'Chicken Tenders (4)', description: 'Hand-breaded chicken strips with choice of sauce', price: '£7.50', badge: 'CLASSIC' },
        { name: 'Popcorn Chicken', description: 'Bite-sized crispy chicken pieces, perfect for sharing', price: '£6.00', badge: 'SNACK' }
      ]
    },
    {
      id: 'chicken-burgers',
      name: 'Chicken Burgers',
      icon: '🐔',
      items: [
        { name: 'Classic Chicken Burger', description: 'Grilled chicken breast, lettuce, tomato, mayo, sesame bun', price: '£7.50', badge: 'CLASSIC' },
        { name: 'Spicy Chicken Deluxe', description: 'Spicy chicken breast, jalapeños, pepper jack cheese, chipotle mayo', price: '£8.50', badge: 'HOT' },
        { name: 'BBQ Chicken Stack', description: 'BBQ chicken breast, bacon, onion rings, BBQ sauce', price: '£9.00', badge: 'SMOKY' },
        { name: 'Buffalo Chicken Burger', description: 'Buffalo chicken breast, blue cheese, celery, lettuce', price: '£8.00', badge: 'BUFFALO' }
      ]
    },
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
      id: 'pizzas',
      name: 'Pizzas',
      icon: '🍕',
      items: [
        { name: 'Margherita 10"', description: 'Tomato base, mozzarella, fresh basil, olive oil', price: '£8.00', badge: '10"' },
        { name: 'Pepperoni 10"', description: 'Tomato base, mozzarella, pepperoni', price: '£9.00', badge: '10"' },
        { name: 'BBQ Chicken 10"', description: 'BBQ base, mozzarella, chicken, red onions, peppers', price: '£10.00', badge: '10"' },
        { name: 'Margherita 12"', description: 'Tomato base, mozzarella, fresh basil, olive oil', price: '£10.00', badge: '12"' },
        { name: 'Pepperoni 12"', description: 'Tomato base, mozzarella, pepperoni', price: '£11.50', badge: '12"' },
        { name: 'BBQ Chicken 12"', description: 'BBQ base, mozzarella, chicken, red onions, peppers', price: '£12.50', badge: '12"' }
      ]
    },
    {
      id: 'wraps',
      name: 'Wraps',
      icon: '🌯',
      items: [
        { name: 'Crispy Chicken Wrap', description: 'Fried chicken, lettuce, tomato, ranch dressing in flour tortilla', price: '£7.00', badge: 'FRESH' },
        { name: 'Buffalo Chicken Wrap', description: 'Spicy buffalo chicken, blue cheese, celery, lettuce', price: '£7.50', badge: 'SPICY' },
        { name: 'Veggie Delight Wrap', description: 'Grilled vegetables, hummus, avocado, mixed greens', price: '£6.50', badge: 'HEALTHY' },
        { name: 'BBQ Pulled Pork Wrap', description: 'Slow-cooked pulled pork, BBQ sauce, coleslaw', price: '£8.00', badge: 'SMOKY' }
      ]
    },
    {
      id: 'boxes',
      name: 'Boxes',
      icon: '📦',
      items: [
        { name: 'Chicken & Chips Box', description: 'Fried chicken pieces, seasoned fries, coleslaw, drink', price: '£9.50', badge: 'MEAL DEAL' },
        { name: 'Wings Box', description: '8 chicken wings, loaded fries, garlic bread, drink', price: '£10.00', badge: 'SHARING' },
        { name: 'Tender Box', description: '6 chicken tenders, regular fries, beans, drink', price: '£8.50', badge: 'FILLING' },
        { name: 'Family Feast Box', description: '12 pieces chicken, 2 large fries, 2 sides, 4 drinks', price: '£25.00', badge: 'FAMILY' }
      ]
    },
    {
      id: 'fries',
      name: 'Loaded Stackers\' Fries',
      icon: '🍟',
      items: [
        { name: 'Loaded Stacker Fries', description: 'Crispy fries, cheese sauce, bacon bits, spring onions', price: '£6.00', badge: 'SHARING' },
        { name: 'Chili Cheese Fries', description: 'Fries, chili con carne, melted cheese, sour cream', price: '£6.50', badge: 'HEARTY' },
        { name: 'Truffle Parmesan Fries', description: 'Fries, truffle oil, parmesan, herbs', price: '£7.00', badge: 'PREMIUM' },
        { name: 'Pulled Pork Fries', description: 'Fries, pulled pork, BBQ sauce, coleslaw', price: '£7.50', badge: 'SMOKY' }
      ]
    },
    {
      id: 'meal-deals',
      name: 'Stackers\' Meal Deals',
      icon: '💰',
      items: [
        { name: 'Student Special', description: 'Any burger, regular fries, drink - valid with student ID', price: '£7.99', badge: 'STUDENT' },
        { name: 'Lunch Deal', description: 'Any wrap, small fries, drink - available 12-3pm weekdays', price: '£6.99', badge: 'LUNCH' },
        { name: 'Date Night', description: '2 burgers, 2 sides, 2 drinks, dessert to share', price: '£19.99', badge: 'SHARING' },
        { name: 'Family Bundle', description: '4 burgers, 4 sides, 4 drinks, 2 desserts', price: '£29.99', badge: 'FAMILY' }
      ]
    },
    {
      id: 'sauces',
      name: 'Sauces & Dips',
      icon: '🥄',
      items: [
        { name: 'Garlic Mayo', description: 'Creamy garlic mayonnaise', price: '£1.00', badge: 'CLASSIC' },
        { name: 'BBQ Sauce', description: 'Sweet and smoky barbecue sauce', price: '£1.00', badge: 'SMOKY' },
        { name: 'Buffalo Sauce', description: 'Spicy buffalo wing sauce', price: '£1.00', badge: 'HOT' },
        { name: 'Ranch Dip', description: 'Cool and creamy ranch dressing', price: '£1.00', badge: 'COOL' }
      ]
    },
    {
      id: 'kids',
      name: 'Kids',
      icon: '👶',
      items: [
        { name: 'Kids Chicken Nuggets', description: '4 chicken nuggets, small fries, juice box', price: '£4.50', badge: 'KIDS' },
        { name: 'Mini Burger Meal', description: 'Small beef burger, small fries, juice box', price: '£5.00', badge: 'MINI' },
        { name: 'Chicken Strips Meal', description: '2 chicken strips, small fries, juice box', price: '£4.50', badge: 'STRIPS' },
        { name: 'Grilled Cheese Meal', description: 'Grilled cheese sandwich, small fries, juice box', price: '£4.00', badge: 'CHEESE' }
      ]
    },
    {
      id: 'sides',
      name: 'Sides',
      icon: '🥗',
      items: [
        { name: 'Regular Fries', description: 'Crispy seasoned fries', price: '£3.00', badge: 'CLASSIC' },
        { name: 'Onion Rings', description: 'Golden battered onion rings', price: '£3.50', badge: 'CRISPY' },
        { name: 'Coleslaw', description: 'Fresh creamy coleslaw', price: '£2.50', badge: 'FRESH' },
        { name: 'Garlic Bread', description: 'Toasted garlic bread slices', price: '£3.00', badge: 'WARM' }
      ]
    },
    {
      id: 'drinks',
      name: 'Drinks',
      icon: '🥤',
      items: [
        { name: 'Soft Drinks', description: 'Coke, Pepsi, Fanta, Sprite, Diet options available', price: '£2.50', badge: 'REFILL' },
        { name: 'Fresh Juices', description: 'Orange, Apple, Cranberry - freshly squeezed', price: '£3.00', badge: 'FRESH' },
        { name: 'Milkshakes', description: 'Vanilla, Chocolate, Strawberry, Oreo - thick & creamy', price: '£4.50', badge: 'THICK' },
        { name: 'Hot Beverages', description: 'Coffee, Tea, Hot Chocolate - premium blends', price: '£2.00', badge: 'HOT' }
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
