
import { Button } from '@/components/ui/button';

const MenuHighlights = () => {
  const menuItems = [
    {
      category: "Smash Burgers",
      name: "The Stacker Supreme",
      description: "Double smash patties, cheese, lettuce, tomato, special sauce",
      price: "£8.50",
      badge: "BESTSELLER",
      bgColor: "bg-stackers-yellow"
    },
    {
      category: "Fried Chicken",
      name: "Crispy Stack Chicken",
      description: "Buttermilk fried chicken, slaw, spicy mayo",
      price: "£7.50",
      badge: "SPICY",
      bgColor: "bg-stackers-red"
    },
    {
      category: "Loaded Fries",
      name: "Loaded Stacker Fries",
      description: "Crispy fries, cheese sauce, bacon bits, spring onions",
      price: "£6.00",
      badge: "SHARING SIZE",
      bgColor: "bg-stackers-charcoal"
    },
    {
      category: "Desserts",
      name: "Stack Waffles",
      description: "Warm waffles, ice cream, berry compote, maple syrup",
      price: "£5.50",
      badge: "SWEET",
      bgColor: "bg-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-stackers-charcoal mb-4">
            Menu <span className="text-stackers-yellow">Highlights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Can't decide? Here are the crowd favorites that keep our customers coming back for more
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {menuItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Image Placeholder */}
              <div className={`h-48 ${item.bgColor} relative flex items-center justify-center`}>
                <span className="text-white text-6xl">🍔</span>
                <div className="absolute top-3 right-3 bg-white text-xs font-bold px-2 py-1 rounded-full">
                  {item.badge}
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-stackers-red font-medium mb-1">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-stackers-charcoal mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-stackers-yellow">
                    {item.price}
                  </span>
                  <Button 
                    size="sm" 
                    className="bg-stackers-charcoal hover:bg-gray-800 text-white"
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-500 font-bold px-8 py-4 text-lg">
            VIEW FULL MENU
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
