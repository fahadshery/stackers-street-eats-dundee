
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';

const Menu = () => {
  const [customizations, setCustomizations] = useState<{[key: string]: any}>({});

  const customizationOptions = [
    'Creamy mayo',
    'Fresh lettuce', 
    'Onions',
    'Fiery jalapeños',
    'Our signature secret sauce',
    'Turkey rashers',
    'Gherkins'
  ];

  const handleCustomizationChange = (itemIndex: string, option: string, checked: boolean) => {
    setCustomizations(prev => ({
      ...prev,
      [itemIndex]: {
        ...prev[itemIndex],
        [option]: checked
      }
    }));
  };

  const menuCategories = [
    {
      id: 'starters',
      name: 'Starters',
      icon: '🥨',
      items: [
        { name: 'Mozzarella Sticks (6)', description: 'Golden fried mozzarella with marinara dipping sauce', price: '£4.25', badge: 'CRISPY', image: 'photo-1618160702438-9b02ab6515c9' },
        { name: 'Onion Rings (10)', description: 'Golden battered onion rings, crispy and delicious', price: '£4.25', badge: 'CRISPY', image: 'photo-1582562124811-c09040d0a901' },
        { name: 'Jalapeños Poppers (6)', description: 'Cream cheese stuffed jalapeños, breaded and fried', price: '£4.25', badge: 'HOT', image: 'photo-1535268647677-300dbf3d78d1' },
        { name: 'Garlic Bread (4)', description: 'Toasted garlic bread slices, warm and aromatic', price: '£3.25', badge: 'WARM', image: 'photo-1493962853295-0fd70327578a' },
        { name: 'Garlic Bread and Cheese (4)', description: 'Toasted garlic bread with melted cheese', price: '£3.75', badge: 'CHEESY', image: 'photo-1500673922987-e212871fec22' },
        { name: 'Chargrilled Halloumi (2)', description: 'Grilled halloumi cheese, golden and squeaky', price: '£4.25', badge: 'GRILLED', image: 'photo-1618160702438-9b02ab6515c9' },
        { name: 'Peri-Peri Chicken Strips (4)', description: 'Spicy peri-peri marinated chicken strips', price: '£4.25', badge: 'SPICY', image: 'photo-1582562124811-c09040d0a901' }
      ]
    },
    {
      id: 'fried-gold',
      name: 'Fried Gold',
      icon: '🏆',
      items: [
        { name: 'Chicken (1pc)', description: 'Crispy fried chicken piece, golden and juicy', price: '£2.25', badge: 'CLASSIC', image: 'photo-1535268647677-300dbf3d78d1' },
        { name: 'Chicken (2pc)', description: 'Two crispy fried chicken pieces, golden and juicy', price: '£4.25', badge: 'CLASSIC', image: 'photo-1493962853295-0fd70327578a' },
        { name: 'Chicken (3pc)', description: 'Three crispy fried chicken pieces, golden and juicy', price: '£5.75', badge: 'CLASSIC', image: 'photo-1500673922987-e212871fec22' },
        { name: 'Wings (1pc)', description: 'Crispy fried chicken wing, perfectly seasoned', price: '£2.25', badge: 'SPICY', image: 'photo-1618160702438-9b02ab6515c9' },
        { name: 'Wings (2pc)', description: 'Two crispy fried chicken wings, perfectly seasoned', price: '£4.25', badge: 'SPICY', image: 'photo-1582562124811-c09040d0a901' },
        { name: 'Wings (3pc)', description: 'Three crispy fried chicken wings, perfectly seasoned', price: '£5.75', badge: 'SPICY', image: 'photo-1535268647677-300dbf3d78d1' },
        { name: 'Premium Strips (3pc)', description: 'Hand-breaded premium chicken strips', price: '£3.99', badge: 'PREMIUM', image: 'photo-1493962853295-0fd70327578a' },
        { name: 'Premium Strips (6pc)', description: 'Six hand-breaded premium chicken strips', price: '£5.99', badge: 'PREMIUM', image: 'photo-1500673922987-e212871fec22' },
        { name: 'Premium Strips (12pc)', description: 'Twelve hand-breaded premium chicken strips', price: '£9.99', badge: 'SHARING', image: 'photo-1618160702438-9b02ab6515c9' }
      ]
    },
    {
      id: 'chicken-burgers',
      name: 'Chicken Burgers',
      icon: '🐔',
      hasCustomization: true,
      items: [
        { name: 'Chicken Stack Classic', description: 'Succulent chicken coated in a seasoned breading, stacked in a soft seeded bun, layered with melted cheese, fresh lettuce, onions, creamy mayo. A true Stackers favourite.', price: '£6.45', badge: 'CLASSIC', image: 'photo-1582562124811-c09040d0a901' },
        { name: 'Zing Stack', description: 'Our signature zinger burger with a bold spicy kick, layered in a soft bun, mayo, fresh onions, and crunchy lettuce. Because bland just isn\'t your thing!', price: '£7.45', badge: 'SPICY', image: 'photo-1535268647677-300dbf3d78d1' },
        { name: 'Peri-Peri Chicken Stack', description: 'Tender grilled peri-peri chicken, melted cheese, peri mayo, crisp lettuce, and fresh onions all stacked in a soft bun for the perfect bite. Grilled to perfection, stacked for satisfaction.', price: '£7.45', badge: 'GRILLED', image: 'photo-1493962853295-0fd70327578a' },
        { name: 'Stack Veg Titan', description: 'Grilled halloumi, cheese, golden hash brown, fresh veggie patty, onion rings, mayo, red onions, and fresh lettuce. Crunchy. Cheesy. Legendary.', price: '£8.00', badge: 'VEGGIE', image: 'photo-1500673922987-e212871fec22' },
        { name: 'Firebird Stack', description: 'Crispy fried chicken meets melted cheese, our signature fire-cracker hot sauce, creamy mayo, topped with fresh lettuce, onions and fiery jalapeños for a kick. All nestled in a toasted bun. Packed with spice and crunch.', price: '£8.45', badge: 'FIERY', image: 'photo-1618160702438-9b02ab6515c9' },
        { name: 'Halloumi Chicken Stack', description: 'Golden crispy fried chicken layered with melted cheese, flame grilled halloumi, tangy Algerian sauce, creamy mayo, fresh lettuce, zesty onions, fiery jalapeños, then crowned with crunchy nachos for the ultimate texture explosion. Engineered for serious taste seekers.', price: '£8.99', badge: 'PREMIUM', image: 'photo-1582562124811-c09040d0a901' }
      ]
    },
    {
      id: 'burgers',
      name: 'Smash Burgers',
      icon: '🍔',
      hasCustomization: true,
      items: [
        { name: 'Stack Classic', description: 'Premium quality Angus beef, melted cheese, our secret sauce, mayo, onions, gherkins, and fresh lettuce on a soft bun. Simple. Juicy. Iconic.', price: '£6.45', badge: 'CLASSIC', image: 'photo-1535268647677-300dbf3d78d1' },
        { name: 'BBQ Stack', description: 'Tender Angus beef, melted cheese, BBQ sauce, onions, and fresh lettuce on a soft bun. Smoky, juicy, and irresistible!', price: '£7.45', badge: 'SMOKY', image: 'photo-1493962853295-0fd70327578a' },
        { name: 'Double Stack', description: 'Signature Angus beef stacked with cheese, secret sauce, mayo, onions, gherkins, and lettuce in a toasted bun. Twice the beef, double the flavour.', price: '£8.45', badge: 'DOUBLE', image: 'photo-1500673922987-e212871fec22' },
        { name: 'Stackzilla', description: 'A towering Angus beef with melted cheese, secret sauce, mayo, onions, gherkins, and lettuce. Massive. Meaty. Unstoppable.', price: '£10.45', badge: 'MASSIVE', image: 'photo-1618160702438-9b02ab6515c9' },
        { name: 'Fire Stack', description: 'Juicy Angus beef stacked with turkey rashers, crispy hash brown, fiery jalapeños, melted cheese, secret sauce, mayo, onions, gherkins, and lettuce. Crunchy. Spicy. Loaded.', price: '£10.45', badge: 'SPICY', image: 'photo-1582562124811-c09040d0a901' },
        { name: 'Stack Titan', description: 'Premium Angus beef, secret seasoning, cheddar, mozzarella, hash brown, two crispy onion rings, turkey rashers, jalapeños, mayo, red onions, gherkins, lettuce, and our secret sauce in a toasted bun. The ultimate flavour stack.', price: '£10.99', badge: 'ULTIMATE', image: 'photo-1535268647677-300dbf3d78d1' }
      ]
    },
    {
      id: 'pizzas',
      name: 'Pizzas',
      icon: '🍕',
      hasCustomization: true,
      items: [
        { name: 'Margherita 10"', description: 'Tomato base, mozzarella, fresh basil, olive oil', price: '£8.00', badge: '10"', image: 'photo-1493962853295-0fd70327578a' },
        { name: 'Pepperoni 10"', description: 'Tomato base, mozzarella, pepperoni', price: '£9.00', badge: '10"', image: 'photo-1500673922987-e212871fec22' },
        { name: 'BBQ Chicken 10"', description: 'BBQ base, mozzarella, chicken, red onions, peppers', price: '£10.00', badge: '10"', image: 'photo-1618160702438-9b02ab6515c9' },
        { name: 'Margherita 12"', description: 'Tomato base, mozzarella, fresh basil, olive oil', price: '£10.00', badge: '12"', image: 'photo-1582562124811-c09040d0a901' },
        { name: 'Pepperoni 12"', description: 'Tomato base, mozzarella, pepperoni', price: '£11.50', badge: '12"', image: 'photo-1535268647677-300dbf3d78d1' },
        { name: 'BBQ Chicken 12"', description: 'BBQ base, mozzarella, chicken, red onions, peppers', price: '£12.50', badge: '12"', image: 'photo-1493962853295-0fd70327578a' }
      ]
    },
    {
      id: 'wraps',
      name: 'Wraps',
      icon: '🌯',
      hasCustomization: true,
      items: [
        { name: 'Chicken Stack Wrap', description: 'Crispy fried chicken with your choice of fresh lettuce, onions, creamy mayo, and our signature secret sauce.', price: '£6.45', badge: 'SIGNATURE', image: 'photo-1500673922987-e212871fec22' },
        { name: 'BBQ Blaze Wrap', description: 'Bold BBQ flavour meets crispy fried chicken, layered with your choice of jalapeños, lettuce, onions, and creamy mayo.', price: '£6.45', badge: 'SMOKY', image: 'photo-1618160702438-9b02ab6515c9' },
        { name: 'Grilled Chicken Wrap', description: 'Juicy grilled chicken with your choice of fresh lettuce, onions, and smooth mayo, all wrapped for a lighter, satisfying bite.', price: '£6.45', badge: 'HEALTHY', image: 'photo-1582562124811-c09040d0a901' },
        { name: 'Peri-Peri Chicken Wrap', description: 'Succulent grilled peri-peri chicken with your choice of lettuce, onions, and smooth mayo.', price: '£6.45', badge: 'SPICY', image: 'photo-1535268647677-300dbf3d78d1' },
        { name: 'Fire-cracker Wrap', description: 'Crunchy and crispy fried chicken strips with our signature fire-cracker hot sauce with optional fresh lettuce, & jalapeños.', price: '£6.99', badge: 'FIERY', image: 'photo-1493962853295-0fd70327578a' },
        { name: 'Grilloumi Stack Wrap', description: 'Grilled halloumi, stacked with lettuce, onions, and mayo. A melt-in-your-mouth vegetarian delight.', price: '£7.45', badge: 'VEGGIE', image: 'photo-1500673922987-e212871fec22' }
      ]
    },
    {
      id: 'boxes',
      name: 'Boxes',
      icon: '📦',
      items: [
        { name: 'Chicken & Chips Box', description: 'Fried chicken pieces, seasoned fries, coleslaw, drink', price: '£9.50', badge: 'MEAL DEAL', image: 'photo-1618160702438-9b02ab6515c9' },
        { name: 'Wings Box', description: '8 chicken wings, loaded fries, garlic bread, drink', price: '£10.00', badge: 'SHARING', image: 'photo-1582562124811-c09040d0a901' },
        { name: 'Tender Box', description: '6 chicken tenders, regular fries, beans, drink', price: '£8.50', badge: 'FILLING', image: 'photo-1535268647677-300dbf3d78d1' },
        { name: 'Family Feast Box', description: '12 pieces chicken, 2 large fries, 2 sides, 4 drinks', price: '£25.00', badge: 'FAMILY', image: 'photo-1493962853295-0fd70327578a' },
        { name: 'Burger Bash', description: 'Stack Classic smash burger, Zing Stack burger, Peri-Peri Chicken Stack burger, curly fries, and a can of juice.', price: '£15.00', badge: 'COMBO', image: 'photo-1500673922987-e212871fec22' },
        { name: 'Gold Box', description: 'Zing Stack burger, 5 gold strips, 5 gold wings, 5 mozzarella sticks, 5 jalapeño poppers, curly fries, 2 garlic dips and 2 cans of juice.', price: '£18.00', badge: 'ULTIMATE', image: 'photo-1618160702438-9b02ab6515c9' }
      ]
    },
    {
      id: 'fries',
      name: 'Loaded Stackers\' Fries',
      icon: '🍟',
      items: [
        { name: 'Loaded Stackers\' Fries', description: 'Chunks of peri-peri chicken, crispy chicken bites, cheesy sauce and jalapeños.', price: '£7.50', badge: 'SIGNATURE', image: 'photo-1500673922987-e212871fec22' },
        { name: 'Chili Cheese Fries', description: 'Fries, chili con carne, melted cheese, sour cream', price: '£6.50', badge: 'HEARTY', image: 'photo-1618160702438-9b02ab6515c9' },
        { name: 'Truffle Parmesan Fries', description: 'Fries, truffle oil, parmesan, herbs', price: '£7.00', badge: 'PREMIUM', image: 'photo-1582562124811-c09040d0a901' },
        { name: 'Pulled Pork Fries', description: 'Fries, pulled pork, BBQ sauce, coleslaw', price: '£7.50', badge: 'SMOKY', image: 'photo-1535268647677-300dbf3d78d1' }
      ]
    },
    {
      id: 'meal-deals',
      name: 'Stackers\' Meal Deals',
      icon: '💰',
      items: [
        { name: 'Student Special', description: 'Any burger, regular fries, drink - valid with student ID', price: '£7.99', badge: 'STUDENT', image: 'photo-1493962853295-0fd70327578a' },
        { name: 'Lunch Deal', description: 'Any wrap, small fries, drink - available 12-3pm weekdays', price: '£6.99', badge: 'LUNCH', image: 'photo-1500673922987-e212871fec22' },
        { name: 'Date Night', description: '2 burgers, 2 sides, 2 drinks, dessert to share', price: '£19.99', badge: 'SHARING', image: 'photo-1618160702438-9b02ab6515c9' },
        { name: 'Family Bundle', description: '4 burgers, 4 sides, 4 drinks, 2 desserts', price: '£29.99', badge: 'FAMILY', image: 'photo-1582562124811-c09040d0a901' }
      ]
    },
    {
      id: 'sauces',
      name: 'Sauces & Dips',
      icon: '🥄',
      items: [
        { name: 'Garlic Mayo', description: 'Creamy garlic mayonnaise', price: '£1.00', badge: 'CLASSIC', image: 'photo-1535268647677-300dbf3d78d1' },
        { name: 'BBQ Sauce', description: 'Sweet and smoky barbecue sauce', price: '£1.00', badge: 'SMOKY', image: 'photo-1493962853295-0fd70327578a' },
        { name: 'Buffalo Sauce', description: 'Spicy buffalo wing sauce', price: '£1.00', badge: 'HOT', image: 'photo-1500673922987-e212871fec22' },
        { name: 'Ranch Dip', description: 'Cool and creamy ranch dressing', price: '£1.00', badge: 'COOL', image: 'photo-1618160702438-9b02ab6515c9' }
      ]
    },
    {
      id: 'kids',
      name: 'Kids',
      icon: '👶',
      items: [
        { name: 'Kids Chicken Nuggets', description: '4 chicken nuggets, small fries, juice box', price: '£4.50', badge: 'KIDS', image: 'photo-1582562124811-c09040d0a901' },
        { name: 'Mini Burger Meal', description: 'Small beef burger, small fries, juice box', price: '£5.00', badge: 'MINI', image: 'photo-1535268647677-300dbf3d78d1' },
        { name: 'Chicken Strips Meal', description: '2 chicken strips, small fries, juice box', price: '£4.50', badge: 'STRIPS', image: 'photo-1493962853295-0fd70327578a' },
        { name: 'Grilled Cheese Meal', description: 'Grilled cheese sandwich, small fries, juice box', price: '£4.00', badge: 'CHEESE', image: 'photo-1500673922987-e212871fec22' }
      ]
    },
    {
      id: 'sides',
      name: 'Sides',
      icon: '🥗',
      items: [
        { name: 'Coleslaw', description: 'Fresh creamy coleslaw', regularPrice: '£1.50', largePrice: '£2.50', badge: 'FRESH', image: 'photo-1618160702438-9b02ab6515c9' },
        { name: 'Chips / Fries', description: 'Crispy seasoned fries', regularPrice: '£2.25', largePrice: '£3.25', badge: 'CLASSIC', image: 'photo-1582562124811-c09040d0a901' },
        { name: 'Peri-Peri Chips', description: 'Seasoned fries with peri-peri spice', regularPrice: '£2.75', largePrice: '£3.75', badge: 'SPICY', image: 'photo-1535268647677-300dbf3d78d1' },
        { name: 'Curly Fries', description: 'Seasoned curly cut fries', regularPrice: '£3.00', largePrice: '£4.00', badge: 'CRISPY', image: 'photo-1493962853295-0fd70327578a' },
        { name: 'Cheesy Chips', description: 'Chips topped with melted cheese', regularPrice: '£3.95', largePrice: '£4.95', badge: 'CHEESY', image: 'photo-1500673922987-e212871fec22' },
        { name: 'Peri-Peri Curly Fries', description: 'Curly fries with peri-peri seasoning', regularPrice: '£4.00', largePrice: '£5.00', badge: 'SPICY', image: 'photo-1618160702438-9b02ab6515c9' },
        { name: 'Peri-Peri Cheesy Chips', description: 'Cheesy chips with peri-peri spice', regularPrice: '£4.45', largePrice: '£5.45', badge: 'LOADED', image: 'photo-1582562124811-c09040d0a901' }
      ]
    },
    {
      id: 'drinks',
      name: 'Drinks',
      icon: '🥤',
      items: [
        { name: 'Soft Drinks', description: 'Coke, Pepsi, Fanta, Sprite, Diet options available', price: '£2.50', badge: 'REFILL', image: 'photo-1500673922987-e212871fec22' },
        { name: 'Fresh Juices', description: 'Orange, Apple, Cranberry - freshly squeezed', price: '£3.00', badge: 'FRESH', image: 'photo-1618160702438-9b02ab6515c9' },
        { name: 'Milkshakes', description: 'Vanilla, Chocolate, Strawberry, Oreo - thick & creamy', price: '£4.50', badge: 'THICK', image: 'photo-1582562124811-c09040d0a901' },
        { name: 'Hot Beverages', description: 'Coffee, Tea, Hot Chocolate - premium blends', price: '£2.00', badge: 'HOT', image: 'photo-1535268647677-300dbf3d78d1' }
      ]
    },
    {
      id: 'desserts',
      name: 'Sweet Stacks',
      icon: '🧁',
      hasCustomization: true,
      items: [
        { name: 'Stack Waffles', description: 'Warm waffles, ice cream, berry compote, maple syrup', price: '£5.50', badge: 'CLASSIC', image: 'photo-1493962853295-0fd70327578a' },
        { name: 'Chocolate Brownie Stack', description: 'Triple chocolate brownie, vanilla ice cream, hot fudge', price: '£6.00', badge: 'INDULGENT', image: 'photo-1500673922987-e212871fec22' },
        { name: 'Salted Caramel Stack', description: 'Caramel cake, salted caramel sauce, whipped cream', price: '£5.50', badge: 'SALTY-SWEET', image: 'photo-1618160702438-9b02ab6515c9' },
        { name: 'Cookie Dough Bites', description: 'Warm cookie dough pieces, ice cream, chocolate chips', price: '£5.00', badge: 'WARM', image: 'photo-1582562124811-c09040d0a901' }
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
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200"
                  >
                    {/* Image placeholder */}
                    <div className="h-48 bg-gray-200 relative">
                      <img 
                        src={`https://images.unsplash.com/${item.image}?w=400&h=200&fit=crop`}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      {item.badge && (
                        <span className="absolute top-3 right-3 bg-stackers-red text-white text-xs font-bold px-2 py-1 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-stackers-charcoal mb-3">
                        {item.name}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Customization Options for specific categories */}
                      {category.hasCustomization && (
                        <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                          <h4 className="text-sm font-semibold text-stackers-charcoal mb-3">Customize Your Order:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {customizationOptions.map((option) => (
                              <div key={option} className="flex items-center space-x-2">
                                <Checkbox 
                                  id={`${category.id}-${index}-${option}`}
                                  checked={customizations[`${category.id}-${index}`]?.[option] || false}
                                  onCheckedChange={(checked) => 
                                    handleCustomizationChange(`${category.id}-${index}`, option, checked as boolean)
                                  }
                                />
                                <label 
                                  htmlFor={`${category.id}-${index}-${option}`}
                                  className="text-xs text-gray-700 cursor-pointer"
                                >
                                  {option}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Size options for Sides */}
                      {category.id === 'sides' && item.regularPrice && (
                        <div className="mb-4">
                          <RadioGroup defaultValue="regular" className="flex gap-4">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="regular" id={`regular-${index}`} />
                              <label htmlFor={`regular-${index}`} className="text-sm font-medium">
                                Regular {item.regularPrice}
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="large" id={`large-${index}`} />
                              <label htmlFor={`large-${index}`} className="text-sm font-medium">
                                Large {item.largePrice}
                              </label>
                            </div>
                          </RadioGroup>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-stackers-yellow">
                          {item.price || item.regularPrice}
                        </span>
                        <div className="flex flex-col gap-2">
                          <Button variant="outline" className="border-stackers-charcoal text-stackers-charcoal hover:bg-stackers-charcoal hover:text-white">
                            Add to Order
                          </Button>
                          {(category.id === 'burgers' || category.id === 'chicken-burgers' || category.id === 'fried-gold' || category.id === 'wraps') && (
                            <Button variant="outline" className="text-sm border-stackers-yellow text-stackers-charcoal hover:bg-stackers-yellow">
                              Make it a meal +£2.50
                            </Button>
                          )}
                        </div>
                      </div>
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
