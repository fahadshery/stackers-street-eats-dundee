
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Basket, { BasketItem } from '@/components/Basket';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ShoppingBasket } from 'lucide-react';

interface MenuSectionProps {
  id: string;
  label: string;
  children: React.ReactNode;
  sectionRef: React.RefObject<HTMLElement>;
}

const MenuSection: React.FC<MenuSectionProps> = ({ id, label, children, sectionRef }) => (
  <section ref={sectionRef} id={id} className="mb-16">
    <h2 className="text-3xl font-bold text-stackers-charcoal mb-8">{label}</h2>
    {children}
  </section>
);

interface PizzaCardProps {
  pizza: { name: string; price: string };
  customizations: { [pizzaName: string]: { [option: string]: boolean } };
  setCustomizations: React.Dispatch<React.SetStateAction<{ [pizzaName: string]: { [option: string]: boolean } }>>;
  comments: { [pizzaName: string]: string };
  setComments: React.Dispatch<React.SetStateAction<{ [pizzaName: string]: string }>>;
  makeItMeal: { [pizzaName: string]: boolean };
  setMakeItMeal: React.Dispatch<React.SetStateAction<{ [pizzaName: string]: boolean }>>;
  onAddPizza: (pizzaName: string, basePrice: string) => void;
}

const PizzaCard: React.FC<PizzaCardProps> = ({
  pizza,
  customizations,
  setCustomizations,
  comments,
  setComments,
  makeItMeal,
  setMakeItMeal,
  onAddPizza
}) => {
  const options = ['Extra Cheese', 'Extra Pepperoni', 'Mushrooms', 'Olives', 'Peppers'];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-stackers-charcoal mb-2">{pizza.name}</h3>
      <p className="text-lg font-bold text-stackers-yellow mb-4">{pizza.price}</p>

      {/* Customizations */}
      <div className="mb-4">
        <p className="font-medium mb-2">Customizations:</p>
        <div className="space-y-2">
          {options.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={`${pizza.name}-${option}`}
                checked={customizations[pizza.name]?.[option] || false}
                onCheckedChange={(checked) =>
                  setCustomizations((prev) => ({
                    ...prev,
                    [pizza.name]: {
                      ...prev[pizza.name],
                      [option]: !!checked
                    }
                  }))
                }
              />
              <Label htmlFor={`${pizza.name}-${option}`} className="text-sm">
                {option}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Make it a Meal */}
      <div className="mb-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id={`${pizza.name}-meal`}
            checked={makeItMeal[pizza.name] || false}
            onCheckedChange={(checked) =>
              setMakeItMeal((prev) => ({
                ...prev,
                [pizza.name]: !!checked
              }))
            }
          />
          <Label htmlFor={`${pizza.name}-meal`} className="text-sm font-medium">
            Make it a meal +£2.50
          </Label>
        </div>
      </div>

      {/* Comment */}
      <div className="mb-4">
        <Label className="text-sm font-medium mb-2 block">Special instructions:</Label>
        <textarea
          placeholder="Any special requests..."
          value={comments[pizza.name] || ''}
          onChange={(e) =>
            setComments((prev) => ({
              ...prev,
              [pizza.name]: e.target.value
            }))
          }
          rows={2}
          className="w-full border border-gray-300 rounded-md p-2 resize-none"
        />
      </div>

      <Button
        onClick={() => onAddPizza(pizza.name, pizza.price)}
        className="w-full bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400 font-bold"
      >
        Add to Order
      </Button>
    </div>
  );
};

const Menu = () => {
  const navigate = useNavigate();
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('starters');

  // Section refs for scroll detection
  const startersRef = useRef<HTMLElement>(null);
  const friedGoldRef = useRef<HTMLElement>(null);
  const chickenBurgersRef = useRef<HTMLElement>(null);
  const smashBurgersRef = useRef<HTMLElement>(null);
  const pizzasRef = useRef<HTMLElement>(null);
  const wrapsRef = useRef<HTMLElement>(null);
  const kidsRef = useRef<HTMLElement>(null);
  const sidesRef = useRef<HTMLElement>(null);
  const drinksRef = useRef<HTMLElement>(null);
  const milkshakesRef = useRef<HTMLElement>(null);
  const sweetStacksRef = useRef<HTMLElement>(null);

  // Load basket from localStorage on component mount
  useEffect(() => {
    const savedBasket = localStorage.getItem('stackers-basket');
    if (savedBasket) {
      setBasketItems(JSON.parse(savedBasket));
    }
  }, []);

  // Save basket to localStorage whenever basketItems changes
  useEffect(() => {
    localStorage.setItem('stackers-basket', JSON.stringify(basketItems));
  }, [basketItems]);

  // Scroll detection for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: startersRef, id: 'starters' },
        { ref: friedGoldRef, id: 'fried-gold' },
        { ref: chickenBurgersRef, id: 'chicken-burgers' },
        { ref: smashBurgersRef, id: 'smash-burgers' },
        { ref: pizzasRef, id: 'pizzas' },
        { ref: wrapsRef, id: 'wraps' },
        { ref: kidsRef, id: 'kids' },
        { ref: sidesRef, id: 'sides' },
        { ref: drinksRef, id: 'drinks' },
        { ref: milkshakesRef, id: 'milkshakes' },
        { ref: sweetStacksRef, id: 'sweet-stacks' }
      ];

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        if (section.ref.current) {
          const sectionTop = section.ref.current.offsetTop;
          const sectionHeight = section.ref.current.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const sectionRefs: { [key: string]: React.RefObject<HTMLElement> } = {
      starters: startersRef,
      'fried-gold': friedGoldRef,
      'chicken-burgers': chickenBurgersRef,
      'smash-burgers': smashBurgersRef,
      pizzas: pizzasRef,
      wraps: wrapsRef,
      kids: kidsRef,
      sides: sidesRef,
      drinks: drinksRef,
      milkshakes: milkshakesRef,
      'sweet-stacks': sweetStacksRef
    };

    const targetRef = sectionRefs[sectionId];
    if (targetRef?.current) {
      const headerHeight = 140;
      const elementPosition = targetRef.current.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // State for pizza customizations, comments, and make it meal
  const [pizzaCustomizations, setPizzaCustomizations] = useState<{ [pizzaName: string]: { [option: string]: boolean } }>({});
  const [pizzaComments, setPizzaComments] = useState<{ [pizzaName: string]: string }>({});
  const [pizzaMakeItMeal, setPizzaMakeItMeal] = useState<{ [pizzaName: string]: boolean }>({});

  // State for burger/wrap comments and make it meal
  const [burgerComments, setBurgerComments] = useState<{ [itemName: string]: string }>({});
  const [burgerMakeItMeal, setBurgerMakeItMeal] = useState<{ [itemName: string]: boolean }>({});
  const [wrapComments, setWrapComments] = useState<{ [itemName: string]: string }>({});
  const [wrapMakeItMeal, setWrapMakeItMeal] = useState<{ [itemName: string]: boolean }>({});

  // State for ice cream flavors selection
  const [iceCreamFlavors, setIceCreamFlavors] = useState<{ [flavor: string]: boolean }>({});

  // State for milkshake size and flavor
  const [milkshakeSize, setMilkshakeSize] = useState<'regular' | 'large'>('regular');
  const [milkshakeFlavor, setMilkshakeFlavor] = useState<string>('');

  // State for sides size
  const [sideSize, setSideSize] = useState<{ [itemName: string]: 'regular' | 'large' }>({});

  const addToBasket = (item: Omit<BasketItem, 'id' | 'quantity'>) => {
    const existingItemIndex = basketItems.findIndex(
      (basketItem) =>
        basketItem.name === item.name &&
        JSON.stringify(basketItem.customizations) === JSON.stringify(item.customizations) &&
        basketItem.sideSize === item.sideSize &&
        basketItem.comment === item.comment &&
        basketItem.milkshakeSize === item.milkshakeSize &&
        basketItem.milkshakeFlavor === item.milkshakeFlavor &&
        JSON.stringify(basketItem.iceCreamFlavors) === JSON.stringify(item.iceCreamFlavors)
    );

    if (existingItemIndex > -1) {
      const updatedItems = [...basketItems];
      updatedItems[existingItemIndex].quantity += 1;
      setBasketItems(updatedItems);
    } else {
      const newItem: BasketItem = {
        ...item,
        id: Date.now().toString(),
        quantity: 1
      };
      setBasketItems([...basketItems, newItem]);
    }
  };

  // Calculate ice cream discount
  const calculateIceCreamDiscount = () => {
    const hasWaffleCrepeOrCookie = basketItems.some(
      (item) =>
        item.category === 'Sweet Stacks' &&
        (item.name.includes('Waffle') || item.name.includes('Crepe') || item.name.includes('Cookie Dough'))
    );

    const hasIceCream = basketItems.some((item) => item.name.includes('Premium Ice Cream'));

    return hasWaffleCrepeOrCookie && hasIceCream ? 1.0 : 0;
  };

  const handleAddPizza = (pizzaName: string, basePrice: string) => {
    const selectedCustomizations = Object.entries(pizzaCustomizations[pizzaName] || {})
      .filter(([_, selected]) => selected)
      .map(([customization]) => customization);

    const comment = pizzaComments[pizzaName] || '';
    const makeItMeal = pizzaMakeItMeal[pizzaName] || false;

    let finalPrice = parseFloat(basePrice.replace('£', ''));
    if (makeItMeal) {
      finalPrice += 2.5;
    }

    addToBasket({
      name: pizzaName,
      price: `£${finalPrice.toFixed(2)}`,
      category: 'Pizzas',
      customizations: selectedCustomizations.length > 0 ? selectedCustomizations : undefined,
      comment: comment || undefined
    });

    // Reset form
    setPizzaCustomizations((prev) => ({ ...prev, [pizzaName]: {} }));
    setPizzaComments((prev) => ({ ...prev, [pizzaName]: '' }));
    setPizzaMakeItMeal((prev) => ({ ...prev, [pizzaName]: false }));
  };

  const handleAddBurger = (itemName: string, basePrice: string) => {
    const comment = burgerComments[itemName] || '';
    const makeItMeal = burgerMakeItMeal[itemName] || false;

    let finalPrice = parseFloat(basePrice.replace('£', ''));
    if (makeItMeal) {
      finalPrice += 2.5;
    }

    addToBasket({
      name: itemName,
      price: `£${finalPrice.toFixed(2)}`,
      category: 'Chicken Burgers',
      comment: comment || undefined
    });

    // Reset form
    setBurgerComments((prev) => ({ ...prev, [itemName]: '' }));
    setBurgerMakeItMeal((prev) => ({ ...prev, [itemName]: false }));
  };

  const handleAddWrap = (itemName: string, basePrice: string) => {
    const comment = wrapComments[itemName] || '';
    const makeItMeal = wrapMakeItMeal[itemName] || false;

    let finalPrice = parseFloat(basePrice.replace('£', ''));
    if (makeItMeal) {
      finalPrice += 2.5;
    }

    addToBasket({
      name: itemName,
      price: `£${finalPrice.toFixed(2)}`,
      category: 'Wraps',
      comment: comment || undefined
    });

    // Reset form
    setWrapComments((prev) => ({ ...prev, [itemName]: '' }));
    setWrapMakeItMeal((prev) => ({ ...prev, [itemName]: false }));
  };

  const removeFromBasket = (id: string) => {
    setBasketItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setBasketItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Fixed Navigation Bar */}
      <div className="sticky top-16 bg-white shadow-md z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-3 space-x-4 scrollbar-hide">
            {[
              { id: 'starters', label: 'Starters' },
              { id: 'fried-gold', label: 'Fried Gold' },
              { id: 'chicken-burgers', label: 'Chicken Burgers' },
              { id: 'smash-burgers', label: 'Smash Burgers' },
              { id: 'pizzas', label: 'Pizzas' },
              { id: 'wraps', label: 'Wraps' },
              { id: 'kids', label: 'Kids' },
              { id: 'sides', label: 'Sides' },
              { id: 'drinks', label: 'Drinks' },
              { id: 'milkshakes', label: 'Milkshakes' },
              { id: 'sweet-stacks', label: 'Sweet Stacks' }
            ].map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                onClick={() => scrollToSection(section.id)}
                className={`whitespace-nowrap px-4 py-2 font-medium transition-colors ${
                  activeSection === section.id
                    ? 'bg-stackers-yellow text-stackers-charcoal'
                    : 'text-gray-700 hover:text-stackers-yellow hover:bg-gray-100'
                }`}
              >
                {section.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Basket Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsBasketOpen(true)}
            className="bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400 font-bold rounded-full p-4 shadow-lg relative"
          >
            <ShoppingBasket size={24} />
            {basketItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                {basketItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </Button>
        </div>

        {/* Starters Section */}
        <MenuSection id="starters" label="Starters" sectionRef={startersRef}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Chicken (1pc)', price: '£2.25' },
              { name: 'Chicken (2pc)', price: '£3.99' },
              { name: 'Chicken (3pc)', price: '£5.49' },
              { name: 'Hot Wings (6pc)', price: '£4.99' },
              { name: 'Hot Wings (12pc)', price: '£8.99' },
              { name: 'Onion Rings (8pc)', price: '£3.49' }
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-stackers-charcoal mb-2">{item.name}</h3>
                <p className="text-lg font-bold text-stackers-yellow mb-4">{item.price}</p>
                <Button
                  onClick={() => addToBasket({ name: item.name, price: item.price, category: 'Starters' })}
                  className="w-full bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400 font-bold"
                >
                  Add to Order
                </Button>
              </div>
            ))}
          </div>
        </MenuSection>

        {/* Fried Gold Section */}
        <MenuSection id="fried-gold" label="Fried Gold" sectionRef={friedGoldRef}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Fish & Chips', price: '£6.99' },
              { name: 'Battered Sausage & Chips', price: '£5.49' },
              { name: 'Chicken Burger & Chips', price: '£7.99' },
              { name: 'Scampi & Chips', price: '£6.49' },
              { name: 'Pie & Chips', price: '£5.99' },
              { name: 'Large Cod & Chips', price: '£8.99' }
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-stackers-charcoal mb-2">{item.name}</h3>
                <p className="text-lg font-bold text-stackers-yellow mb-4">{item.price}</p>
                <Button
                  onClick={() => addToBasket({ name: item.name, price: item.price, category: 'Fried Gold' })}
                  className="w-full bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400 font-bold"
                >
                  Add to Order
                </Button>
              </div>
            ))}
          </div>
        </MenuSection>

        {/* Chicken Burgers Section */}
        <MenuSection id="chicken-burgers" label="Chicken Burgers" sectionRef={chickenBurgersRef}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Classic Chicken Burger', price: '£6.99' },
              { name: 'Spicy Chicken Burger', price: '£7.49' },
              { name: 'BBQ Chicken Burger', price: '£7.99' },
              { name: 'Southern Fried Chicken Burger', price: '£7.49' },
              { name: 'Buffalo Chicken Burger', price: '£7.99' },
              { name: 'Chicken Deluxe Burger', price: '£8.49' }
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-stackers-charcoal mb-2">{item.name}</h3>
                <p className="text-lg font-bold text-stackers-yellow mb-4">{item.price}</p>
                
                {/* Make it a Meal */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`${item.name}-meal`}
                      checked={burgerMakeItMeal[item.name] || false}
                      onCheckedChange={(checked) =>
                        setBurgerMakeItMeal((prev) => ({
                          ...prev,
                          [item.name]: !!checked
                        }))
                      }
                    />
                    <Label htmlFor={`${item.name}-meal`} className="text-sm font-medium">
                      Make it a meal +£2.50
                    </Label>
                  </div>
                </div>

                {/* Comment */}
                <div className="mb-4">
                  <Label className="text-sm font-medium mb-2 block">Special instructions:</Label>
                  <textarea
                    placeholder="Any special requests..."
                    value={burgerComments[item.name] || ''}
                    onChange={(e) =>
                      setBurgerComments((prev) => ({
                        ...prev,
                        [item.name]: e.target.value
                      }))
                    }
                    rows={2}
                    className="w-full border border-gray-300 rounded-md p-2 resize-none"
                  />
                </div>

                <Button
                  onClick={() => handleAddBurger(item.name, item.price)}
                  className="w-full bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400 font-bold"
                >
                  Add to Order
                </Button>
              </div>
            ))}
          </div>
        </MenuSection>

        {/* Smash Burgers Section */}
        <MenuSection id="smash-burgers" label="Smash Burgers" sectionRef={smashBurgersRef}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Classic Smash Burger', price: '£5.99' },
              { name: 'Double Smash Burger', price: '£7.99' },
              { name: 'Bacon Smash Burger', price: '£6.99' },
              { name: 'Cheese Smash Burger', price: '£6.49' },
              { name: 'BBQ Bacon Smash', price: '£7.49' },
              { name: 'Mushroom Swiss Smash', price: '£6.99' }
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-stackers-charcoal mb-2">{item.name}</h3>
                <p className="text-lg font-bold text-stackers-yellow mb-4">{item.price}</p>
                <Button
                  onClick={() => addToBasket({ name: item.name, price: item.price, category: 'Smash Burgers' })}
                  className="w-full bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400 font-bold"
                >
                  Add to Order
                </Button>
              </div>
            ))}
          </div>
        </MenuSection>

        {/* Pizzas Section - Updated with Make it a Meal */}
        <MenuSection id="pizzas" label="Pizzas" sectionRef={pizzasRef}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Margherita Pizza', price: '£8.99' },
              { name: 'Pepperoni Pizza', price: '£9.99' },
              { name: 'BBQ Chicken Pizza', price: '£10.99' },
              { name: 'Meat Feast Pizza', price: '£11.99' },
              { name: 'Veggie Supreme Pizza', price: '£9.99' },
              { name: 'Hawaiian Pizza', price: '£9.99' }
            ].map((pizza) => (
              <PizzaCard
                key={pizza.name}
                pizza={pizza}
                customizations={pizzaCustomizations}
                setCustomizations={setPizzaCustomizations}
                comments={pizzaComments}
                setComments={setPizzaComments}
                makeItMeal={pizzaMakeItMeal}
                setMakeItMeal={setPizzaMakeItMeal}
                onAddPizza={handleAddPizza}
              />
            ))}
          </div>
        </MenuSection>

        {/* Wraps Section */}
        <MenuSection id="wraps" label="Wraps" sectionRef={wrapsRef}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Chicken Caesar Wrap', price: '£5.99' },
              { name: 'Buffalo Chicken Wrap', price: '£6.49' },
              { name: 'BBQ Chicken Wrap', price: '£6.49' },
              { name: 'Veggie Wrap', price: '£5.49' },
              { name: 'Tuna Mayo Wrap', price: '£5.99' },
              { name: 'BLT Wrap', price: '£5.49' }
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-stackers-charcoal mb-2">{item.name}</h3>
                <p className="text-lg font-bold text-stackers-yellow mb-4">{item.price}</p>
                
                {/* Make it a Meal */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`${item.name}-meal`}
                      checked={wrapMakeItMeal[item.name] || false}
                      onCheckedChange={(checked) =>
                        setWrapMakeItMeal((prev) => ({
                          ...prev,
                          [item.name]: !!checked
                        }))
                      }
                    />
                    <Label htmlFor={`${item.name}-meal`} className="text-sm font-medium">
                      Make it a meal +£2.50
                    </Label>
                  </div>
                </div>

                {/* Comment */}
                <div className="mb-4">
                  <Label className="text-sm font-medium mb-2 block">Special instructions:</Label>
                  <textarea
                    placeholder="Any special requests..."
                    value={wrapComments[item.name] || ''}
                    onChange={(e) =>
                      setWrapComments((prev) => ({
                        ...prev,
                        [item.name]: e.target.value
                      }))
                    }
                    rows={2}
                    className="w-full border border-gray-300 rounded-md p-2 resize-none"
                  />
                </div>

                <Button
                  onClick={() => handleAddWrap(item.name, item.price)}
                  className="w-full bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400 font-bold"
                >
                  Add to Order
                </Button>
              </div>
            ))}
          </div>
        </MenuSection>

        {/* Kids Section */}
        <MenuSection id="kids" label="Kids" sectionRef={kidsRef}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Kids Chicken Nuggets & Chips', price: '£4.99' },
              { name: 'Kids Fish Fingers & Chips', price: '£4.99' },
              { name: 'Kids Burger & Chips', price: '£5.49' },
              { name: 'Kids Pizza Slice & Chips', price: '£4.99' },
              { name: 'Kids Sausage & Chips', price: '£4.49' },
              { name: 'Kids Beans & Chips', price: '£3.99' }
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-stackers-charcoal mb-2">{item.name}</h3>
                <p className="text-lg font-bold text-stackers-yellow mb-4">{item.price}</p>
                <Button
                  onClick={() => addToBasket({ name: item.name, price: item.price, category: 'Kids' })}
                  className="w-full bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400 font-bold"
                >
                  Add to Order
                </Button>
              </div>
            ))}
          </div>
        </MenuSection>

        {/* Sides Section */}
        <MenuSection id="sides" label="Sides" sectionRef={sidesRef}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Regular Chips', price: '£2.99', large: '£3.99' },
              { name: 'Cheesy Chips', price: '£3.49', large: '£4.49' },
              { name: 'Loaded Fries', price: '£4.99', large: '£5.99' },
              { name: 'Onion Rings', price: '£3.49', large: '£4.49' },
              { name: 'Mozzarella Sticks', price: '£4.99', large: '£5.99' },
              { name: 'Garlic Bread', price: '£2.99', large: '£3.99' }
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-stackers-charcoal mb-2">{item.name}</h3>
                <div className="mb-4">
                  <div className="flex items-center space-x-4 mb-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={`${item.name}-size`}
                        checked={sideSize[item.name] === 'regular' || !sideSize[item.name]}
                        onChange={() => setSideSize(prev => ({ ...prev, [item.name]: 'regular' }))}
                        className="text-stackers-yellow"
                      />
                      <span className="text-sm">Regular - {item.price}</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={`${item.name}-size`}
                        checked={sideSize[item.name] === 'large'}
                        onChange={() => setSideSize(prev => ({ ...prev, [item.name]: 'large' }))}
                        className="text-stackers-yellow"
                      />
                      <span className="text-sm">Large - {item.large}</span>
                    </label>
                  </div>
                </div>
                <Button
                  onClick={() => {
                    const selectedSize = sideSize[item.name] || 'regular';
                    const price = selectedSize === 'large' ? item.large : item.price;
                    addToBasket({
                      name: item.name,
                      price,
                      category: 'Sides',
                      sideSize: selectedSize
                    });
                  }}
                  className="w-full bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400 font-bold"
                >
                  Add to Order
                </Button>
              </div>
            ))}
          </div>
        </MenuSection>

        {/* Drinks Section */}
        <MenuSection id="drinks" label="Drinks" sectionRef={drinksRef}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Coca Cola', price: '£1.99' },
              { name: 'Pepsi', price: '£1.99' },
              { name: 'Sprite', price: '£1.99' },
              { name: 'Orange Juice', price: '£2.49' },
              { name: 'Apple Juice', price: '£2.49' },
              { name: 'Water', price: '£1.49' }
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-stackers-charcoal mb-2">{item.name}</h3>
                <p className="text-lg font-bold text-stackers-yellow mb-4">{item.price}</p>
                <Button
                  onClick={() => addToBasket({ name: item.name, price: item.price, category: 'Drinks' })}
                  className="w-full bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400 font-bold"
                >
                  Add to Order
                </Button>
              </div>
            ))}
          </div>
        </MenuSection>

        {/* Milkshakes Section */}
        <MenuSection id="milkshakes" label="Milkshakes" sectionRef={milkshakesRef}>
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-stackers-charcoal mb-4">Premium Milkshakes</h3>
            
            {/* Size Selection */}
            <div className="mb-4">
              <p className="font-medium mb-2">Size:</p>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="milkshake-size"
                    checked={milkshakeSize === 'regular'}
                    onChange={() => setMilkshakeSize('regular')}
                    className="text-stackers-yellow"
                  />
                  <span className="text-sm">Regular - £4.50</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="milkshake-size"
                    checked={milkshakeSize === 'large'}
                    onChange={() => setMilkshakeSize('large')}
                    className="text-stackers-yellow"
                  />
                  <span className="text-sm">Large - £5.50</span>
                </label>
              </div>
            </div>

            {/* Flavor Selection */}
            <div className="mb-4">
              <p className="font-medium mb-2">Flavor:</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Oreo', 'Biscoff', 'Strawberry', 'Kinder Bueno / White Kinder Bueno',
                  'Maltesers', 'Galaxy Caramel / Galaxy', 'Milky Bar', 'Banana',
                  'Ferrero Rocher', 'Mango', 'Twix', 'Mars Bar',
                  'Snickers', 'Milky Way', 'Crunchie'
                ].map((flavor) => (
                  <label key={flavor} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="milkshake-flavor"
                      checked={milkshakeFlavor === flavor}
                      onChange={() => setMilkshakeFlavor(flavor)}
                      className="text-stackers-yellow"
                    />
                    <span className="text-sm">{flavor}</span>
                  </label>
                ))}
              </div>
            </div>

            <Button
              onClick={() => {
                if (milkshakeFlavor) {
                  const price = milkshakeSize === 'large' ? '£5.50' : '£4.50';
                  addToBasket({
                    name: 'Premium Milkshake',
                    price,
                    category: 'Milkshakes',
                    milkshakeSize,
                    milkshakeFlavor
                  });
                  setMilkshakeFlavor('');
                }
              }}
              disabled={!milkshakeFlavor}
              className="w-full bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400 font-bold disabled:opacity-50"
            >
              Add to Order
            </Button>
          </div>
        </MenuSection>

        {/* Sweet Stacks Section */}
        <MenuSection id="sweet-stacks" label="Sweet Stacks" sectionRef={sweetStacksRef}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Regular Sweet Items */}
            {[
              { name: 'Chocolate Waffle', price: '£5.99' },
              { name: 'Strawberry Crepe', price: '£6.49' },
              { name: 'Cookie Dough Delight', price: '£5.49' },
              { name: 'Banana Split', price: '£4.99' },
              { name: 'Apple Pie', price: '£3.99' },
              { name: 'Cheesecake Slice', price: '£4.49' }
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-stackers-charcoal mb-2">{item.name}</h3>
                <p className="text-lg font-bold text-stackers-yellow mb-4">{item.price}</p>
                <Button
                  onClick={() => addToBasket({ name: item.name, price: item.price, category: 'Sweet Stacks' })}
                  className="w-full bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400 font-bold"
                >
                  Add to Order
                </Button>
              </div>
            ))}

            {/* Ice Cream Section */}
            {[
              { name: '1 Scoop Premium Ice Cream', price: '£3.99', scoops: 1 },
              { name: '2 Scoops Premium Ice Cream', price: '£5.99', scoops: 2 },
              { name: '3 Scoops Premium Ice Cream', price: '£7.99', scoops: 3 }
            ].map((iceCream) => (
              <div key={iceCream.name} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-stackers-charcoal mb-2">{iceCream.name}</h3>
                <p className="text-lg font-bold text-stackers-yellow mb-4">{iceCream.price}</p>
                
                <div className="mb-4">
                  <p className="font-medium mb-2">Choose {iceCream.scoops} flavor{iceCream.scoops > 1 ? 's' : ''}:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Vanilla', 'Strawberry', 'Scottish Tablet', 'Blue Bubblegum',
                      'Belgian Chocolate', 'White Bueno', 'Cookies & Cream',
                      'Raspberry Ripple', 'Chocolate Fudge Brownie', 'Honeycomb', 'Mint'
                    ].map((flavor) => {
                      const selectedCount = Object.values(iceCreamFlavors).filter(Boolean).length;
                      const isDisabled = !iceCreamFlavors[flavor] && selectedCount >= iceCream.scoops;
                      
                      return (
                        <label key={flavor} className={`flex items-center space-x-2 ${isDisabled ? 'opacity-50' : ''}`}>
                          <input
                            type="checkbox"
                            checked={iceCreamFlavors[flavor] || false}
                            disabled={isDisabled}
                            onChange={(e) => {
                              setIceCreamFlavors(prev => ({
                                ...prev,
                                [flavor]: e.target.checked
                              }));
                            }}
                            className="text-stackers-yellow"
                          />
                          <span className="text-sm">{flavor}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <Button
                  onClick={() => {
                    const selectedFlavors = Object.entries(iceCreamFlavors)
                      .filter(([_, selected]) => selected)
                      .map(([flavor]) => flavor);
                    
                    if (selectedFlavors.length === iceCream.scoops) {
                      addToBasket({
                        name: iceCream.name,
                        price: iceCream.price,
                        category: 'Sweet Stacks',
                        iceCreamFlavors: selectedFlavors
                      });
                      setIceCreamFlavors({});
                    }
                  }}
                  disabled={Object.values(iceCreamFlavors).filter(Boolean).length !== iceCream.scoops}
                  className="w-full bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400 font-bold disabled:opacity-50"
                >
                  Add to Order
                </Button>
              </div>
            ))}
          </div>
        </MenuSection>
      </div>

      <Basket
        items={basketItems}
        onRemoveItem={removeFromBasket}
        onUpdateQuantity={updateQuantity}
        onClearBasket={() => setBasketItems([])}
        onProceedToCheckout={() => navigate('/checkout', { state: { basketItems } })}
        isOpen={isBasketOpen}
        onClose={() => setIsBasketOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default Menu;
