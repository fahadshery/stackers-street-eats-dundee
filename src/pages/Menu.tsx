import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Basket, { BasketItem } from '@/components/Basket';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ShoppingBasket } from 'lucide-react';

interface MenuSectionProps {
  id: string;
  label: string;
  children: React.ReactNode;
  sectionRef: React.RefObject<HTMLElement>;
  isActive: boolean;
}

const MenuSection: React.FC<MenuSectionProps> = ({ id, label, children, sectionRef, isActive }) => (
  <section ref={sectionRef} id={id} className="mb-16">
    <div className="text-center mb-12">
      <h2 className={`text-4xl font-bold text-stackers-charcoal mb-2 ${isActive ? 'relative inline-block' : ''}`}>
        {label}
        {isActive && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-stackers-yellow"></div>
        )}
      </h2>
    </div>
    {children}
  </section>
);

interface MenuItemCardProps {
  item: {
    name: string;
    price: string;
    description: string;
    image: string;
  };
  category: string;
  showMealOption?: boolean;
  showCustomizations?: boolean;
  customizations?: string[];
  showSizeOptions?: boolean;
  showSpecialInstructions?: boolean;
  onAddToBasket: (item: any, isMeal: boolean, customizations?: string[], comment?: string, sideSize?: string, milkshakeSize?: string, milkshakeFlavor?: string) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item,
  category,
  showMealOption = false,
  showCustomizations = false,
  customizations = [],
  showSizeOptions = false,
  showSpecialInstructions = true,
  onAddToBasket
}) => {
  const [selectedCustomizations, setSelectedCustomizations] = useState<string[]>([]);
  const [isMeal, setIsMeal] = useState(false);
  const [comment, setComment] = useState('');
  const [sideSize, setSideSize] = useState<'regular' | 'large'>('regular');
  const [milkshakeSize, setMilkshakeSize] = useState<'regular' | 'large'>('regular');
  const [milkshakeFlavor, setMilkshakeFlavor] = useState('Oreo');

  const handleCustomizationChange = (customization: string, checked: boolean) => {
    if (checked) {
      setSelectedCustomizations(prev => [...prev, customization]);
    } else {
      setSelectedCustomizations(prev => prev.filter(c => c !== customization));
    }
  };

  const handleAddToBasket = () => {
    onAddToBasket(
      item, 
      isMeal, 
      selectedCustomizations.length > 0 ? selectedCustomizations : undefined, 
      comment || undefined,
      showSizeOptions ? sideSize : undefined,
      category === 'Milkshakes' ? milkshakeSize : undefined,
      category === 'Milkshakes' ? milkshakeFlavor : undefined
    );
    // Reset form with properly typed values
    setSelectedCustomizations([]);
    setIsMeal(false);
    setComment('');
    setSideSize('regular');
    setMilkshakeSize('regular');
    setMilkshakeFlavor('Oreo');
  };

  const displayPrice = () => {
    let basePrice = parseFloat(item.price.replace('£', ''));
    
    if (isMeal) {
      basePrice += 2.50;
    }
    
    if (showSizeOptions && sideSize === 'large') {
      basePrice += 1.00;
    }
    
    if (category === 'Milkshakes') {
      basePrice = milkshakeSize === 'regular' ? 4.20 : 5.00;
    }
    
    return `£${basePrice.toFixed(2)}`;
  };

  const milkshakeFlavors = [
    'Oreo', 'Biscoff', 'Strawberry', 'Kinder Bueno', 'White Kinder Bueno', 
    'Malteaser', 'Galaxy Caramel', 'Galaxy', 'Milky bar', 'Banana', 
    'Ferrero Rocher', 'Mango', 'Twix', 'Mars bar', 'Snickers', 'Milky way', 'Crunchie'
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-video bg-gray-200 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-stackers-charcoal mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
        <p className="text-2xl font-bold text-stackers-yellow mb-4">{displayPrice()}</p>

        {showCustomizations && customizations.length > 0 && (
          <div className="mb-4">
            <p className="font-medium mb-2 text-stackers-charcoal">Customizations:</p>
            <div className="space-y-2">
              {customizations.map((customization) => (
                <div key={customization} className="flex items-center space-x-2">
                  <Checkbox
                    id={`${item.name}-${customization}`}
                    checked={selectedCustomizations.includes(customization)}
                    onCheckedChange={(checked) => handleCustomizationChange(customization, !!checked)}
                  />
                  <Label htmlFor={`${item.name}-${customization}`} className="text-sm">
                    {customization}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        )}

        {showSizeOptions && (
          <div className="mb-4">
            <p className="font-medium mb-2 text-stackers-charcoal">Size:</p>
            <RadioGroup value={sideSize} onValueChange={(value: 'regular' | 'large') => setSideSize(value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="regular" id={`${item.name}-regular`} />
                <Label htmlFor={`${item.name}-regular`} className="text-sm">Regular</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="large" id={`${item.name}-large`} />
                <Label htmlFor={`${item.name}-large`} className="text-sm">Large (+£1.00)</Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {category === 'Milkshakes' && (
          <>
            <div className="mb-4">
              <p className="font-medium mb-2 text-stackers-charcoal">Size:</p>
              <RadioGroup value={milkshakeSize} onValueChange={(value: 'regular' | 'large') => setMilkshakeSize(value)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="regular" id={`${item.name}-regular-shake`} />
                  <Label htmlFor={`${item.name}-regular-shake`} className="text-sm">Regular (£4.20)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="large" id={`${item.name}-large-shake`} />
                  <Label htmlFor={`${item.name}-large-shake`} className="text-sm">Large (£5.00)</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="mb-4">
              <p className="font-medium mb-2 text-stackers-charcoal">Flavor:</p>
              <RadioGroup value={milkshakeFlavor} onValueChange={setMilkshakeFlavor}>
                <div className="grid grid-cols-2 gap-2">
                  {milkshakeFlavors.map((flavor) => (
                    <div key={flavor} className="flex items-center space-x-2">
                      <RadioGroupItem value={flavor} id={`${item.name}-${flavor}`} />
                      <Label htmlFor={`${item.name}-${flavor}`} className="text-xs">{flavor}</Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </>
        )}

        {showMealOption && (
          <div className="mb-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id={`${item.name}-meal`}
                checked={isMeal}
                onCheckedChange={(checked) => setIsMeal(!!checked)}
              />
              <Label htmlFor={`${item.name}-meal`} className="text-sm font-medium">
                Make it a meal +£2.50
              </Label>
            </div>
          </div>
        )}

        {showSpecialInstructions && (
          <div className="mb-4">
            <Label className="text-sm font-medium mb-2 block">Special instructions:</Label>
            <textarea
              placeholder="Any special requests..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={2}
              className="w-full border border-gray-300 rounded-md p-2 resize-none text-sm"
            />
          </div>
        )}

        <Button
          onClick={handleAddToBasket}
          className="w-full bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400 font-bold py-3"
        >
          Add to Order
        </Button>
      </div>
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

  const addToBasket = (item: any, isMeal: boolean, customizations?: string[], comment?: string, sideSize?: string, milkshakeSize?: string, milkshakeFlavor?: string) => {
    let basePrice = parseFloat(item.price.replace('£', ''));
    let itemName = item.name;

    // Handle meal pricing
    if (isMeal) {
      basePrice += 2.50;
      itemName = `${item.name} (Meal)`;
    }

    // Handle side size pricing
    if (sideSize === 'large') {
      basePrice += 1.00;
    }

    // Handle milkshake pricing
    if (item.category === 'Milkshakes') {
      basePrice = milkshakeSize === 'regular' ? 4.20 : 5.00;
    }

    const basketItem: Omit<BasketItem, 'id' | 'quantity'> = {
      name: itemName,
      price: `£${basePrice.toFixed(2)}`,
      category: item.category || 'Menu Item',
      customizations,
      comment,
      sideSize,
      milkshakeSize,
      milkshakeFlavor
    };

    const existingItemIndex = basketItems.findIndex(
      (basketItem) =>
        basketItem.name === itemName &&
        JSON.stringify(basketItem.customizations) === JSON.stringify(customizations) &&
        basketItem.comment === comment &&
        basketItem.sideSize === sideSize &&
        basketItem.milkshakeSize === milkshakeSize &&
        basketItem.milkshakeFlavor === milkshakeFlavor
    );

    if (existingItemIndex > -1) {
      const updatedItems = [...basketItems];
      updatedItems[existingItemIndex].quantity += 1;
      setBasketItems(updatedItems);
    } else {
      const newItem: BasketItem = {
        ...basketItem,
        id: Date.now().toString(),
        quantity: 1
      };
      setBasketItems([...basketItems, newItem]);
    }
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

  const startersItems = [
    {
      name: 'Chicken Wings (6pc)',
      price: '£4.99',
      description: 'Crispy golden chicken wings seasoned with our special blend of spices.',
      image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop'
    },
    {
      name: 'Chicken Wings (12pc)',
      price: '£8.99',
      description: 'Double portion of our signature crispy chicken wings, perfect for sharing.',
      image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop'
    },
    {
      name: 'Hot Wings (6pc)',
      price: '£4.99',
      description: 'Spicy chicken wings with a fiery kick that will leave you wanting more.',
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop'
    },
    {
      name: 'Hot Wings (12pc)',
      price: '£8.99',
      description: 'Double portion of our spiciest wings for the heat lovers.',
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop'
    },
    {
      name: 'Onion Rings (8pc)',
      price: '£3.49',
      description: 'Crispy beer-battered onion rings served with our house sauce.',
      image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop'
    },
    {
      name: 'Mozzarella Sticks (6pc)',
      price: '£4.99',
      description: 'Golden fried mozzarella sticks with marinara dipping sauce.',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop'
    }
  ];

  const friedGoldItems = [
    {
      name: 'Fish & Chips',
      price: '£6.99',
      description: 'Fresh cod in crispy batter served with golden chips and mushy peas.',
      image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?w=400&h=300&fit=crop'
    },
    {
      name: 'Battered Sausage & Chips',
      price: '£5.49',
      description: 'Premium pork sausage in crispy batter with chips.',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop'
    },
    {
      name: 'Scampi & Chips',
      price: '£6.49',
      description: 'Wholetail breaded scampi with chips and tartare sauce.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop'
    },
    {
      name: 'Pie & Chips',
      price: '£5.99',
      description: 'Traditional steak and kidney pie served with chips and gravy.',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop'
    }
  ];

  const chickenBurgerItems = [
    {
      name: 'Classic Chicken Burger',
      price: '£6.99',
      description: 'Crispy chicken breast with lettuce, tomato and mayo in a brioche bun.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop'
    },
    {
      name: 'Spicy Chicken Burger',
      price: '£7.49',
      description: 'Spicy chicken breast with jalapeños, cheese and chipotle mayo.',
      image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=300&fit=crop'
    },
    {
      name: 'BBQ Chicken Burger',
      price: '£7.99',
      description: 'Grilled chicken with BBQ sauce, crispy bacon and onion rings.',
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop'
    },
    {
      name: 'Buffalo Chicken Burger',
      price: '£7.99',
      description: 'Buffalo chicken with blue cheese sauce and crispy lettuce.',
      image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=300&fit=crop'
    }
  ];

  const smashBurgerItems = [
    {
      name: 'Classic Smash Burger',
      price: '£5.99',
      description: 'Double smashed beef patties with cheese, pickles and special sauce.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop'
    },
    {
      name: 'Double Smash Burger',
      price: '£7.99',
      description: 'Four smashed patties with double cheese and all the fixings.',
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop'
    },
    {
      name: 'Bacon Smash Burger',
      price: '£6.99',
      description: 'Smashed patties with crispy bacon, cheese and onions.',
      image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=300&fit=crop'
    },
    {
      name: 'BBQ Bacon Smash',
      price: '£7.49',
      description: 'Smashed beef with BBQ sauce, bacon and onion rings.',
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop'
    }
  ];

  const pizzaItems = [
    {
      name: 'Margherita Pizza',
      price: '£8.99',
      description: 'Classic pizza with tomato sauce, fresh mozzarella and basil.',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop'
    },
    {
      name: 'Pepperoni Pizza',
      price: '£9.99',
      description: 'Traditional pepperoni pizza with mozzarella cheese.',
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop'
    },
    {
      name: 'BBQ Chicken Pizza',
      price: '£10.99',
      description: 'BBQ sauce base with grilled chicken, red onions and peppers.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop'
    },
    {
      name: 'Meat Feast Pizza',
      price: '£11.99',
      description: 'Loaded with pepperoni, sausage, ham and bacon.',
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop'
    }
  ];

  const wrapItems = [
    {
      name: 'Chicken Caesar Wrap',
      price: '£5.99',
      description: 'Grilled chicken with romaine lettuce, parmesan and caesar dressing.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop'
    },
    {
      name: 'Buffalo Chicken Wrap',
      price: '£6.49',
      description: 'Spicy buffalo chicken with lettuce, tomatoes and ranch dressing.',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop'
    },
    {
      name: 'Veggie Wrap',
      price: '£5.49',
      description: 'Fresh vegetables with hummus and mixed greens.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop'
    },
    {
      name: 'BLT Wrap',
      price: '£5.49',
      description: 'Crispy bacon, lettuce, tomato and mayo in a flour tortilla.',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop'
    }
  ];

  const kidsItems = [
    {
      name: 'Kids Chicken Nuggets & Chips',
      price: '£4.99',
      description: 'Golden chicken nuggets with crispy chips and beans.',
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop'
    },
    {
      name: 'Kids Fish Fingers & Chips',
      price: '£4.99',
      description: 'Crispy fish fingers with chips and peas.',
      image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?w=400&h=300&fit=crop'
    },
    {
      name: 'Kids Burger & Chips',
      price: '£5.49',
      description: 'Mini beef burger with cheese and chips.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop'
    },
    {
      name: 'Kids Pizza Slice & Chips',
      price: '£4.99',
      description: 'Margherita pizza slice with crispy chips.',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop'
    }
  ];

  const sidesItems = [
    {
      name: 'Chips',
      price: '£2.99',
      description: 'Golden crispy chips seasoned with sea salt.',
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop'
    },
    {
      name: 'Cheesy Chips',
      price: '£3.49',
      description: 'Crispy chips topped with melted cheese.',
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop'
    },
    {
      name: 'Loaded Fries',
      price: '£4.99',
      description: 'Chips loaded with cheese, bacon and sour cream.',
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop'
    },
    {
      name: 'Onion Rings',
      price: '£3.49',
      description: 'Crispy beer-battered onion rings.',
      image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop'
    }
  ];

  const drinkItems = [
    {
      name: 'Coca Cola Can',
      price: '£1.25',
      description: 'Classic Coca Cola in a 330ml can.',
      image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop'
    },
    {
      name: 'Coca Cola 1.5L',
      price: '£2.99',
      description: 'Classic Coca Cola in a 1.5L bottle.',
      image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop'
    },
    {
      name: 'Sprite Can',
      price: '£1.25',
      description: 'Refreshing lemon-lime soda in a 330ml can.',
      image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop'
    },
    {
      name: 'Sprite 1.5L',
      price: '£2.99',
      description: 'Refreshing lemon-lime soda in a 1.5L bottle.',
      image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop'
    },
    {
      name: 'Orange Juice',
      price: '£2.49',
      description: 'Fresh squeezed orange juice.',
      image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=400&h=300&fit=crop'
    },
    {
      name: 'Water',
      price: '£1.49',
      description: 'Still mineral water.',
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop'
    }
  ];

  const milkshakeItems = [
    {
      name: 'Milkshake',
      price: '£4.20',
      description: 'Creamy milkshake in your choice of flavor and size.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    }
  ];

  const sweetStacksItems = [
    {
      name: 'Chocolate Waffle',
      price: '£5.99',
      description: 'Warm waffle drizzled with chocolate sauce and fresh berries.',
      image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&h=300&fit=crop'
    },
    {
      name: 'Strawberry Crepe',
      price: '£6.49',
      description: 'Delicate crepe filled with fresh strawberries and cream.',
      image: 'https://images.unsplash.com/photo-1519915195129-7d93adf4b882?w=400&h=300&fit=crop'
    },
    {
      name: 'Cookie Dough Delight',
      price: '£5.49',
      description: 'Warm cookie dough served with vanilla ice cream.',
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop'
    },
    {
      name: 'Premium Ice Cream (2 Scoops)',
      price: '£3.99',
      description: 'Two scoops of premium ice cream in your choice of flavors.',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop'
    }
  ];

  const pizzaCustomizations = ['Extra Cheese', 'Extra Pepperoni', 'Mushrooms', 'Olives', 'Peppers'];

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
        <MenuSection id="starters" label="Starters" sectionRef={startersRef} isActive={activeSection === 'starters'}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {startersItems.map((item) => (
              <MenuItemCard
                key={item.name}
                item={item}
                category="Starters"
                showSpecialInstructions={false}
                onAddToBasket={addToBasket}
              />
            ))}
          </div>
        </MenuSection>

        {/* Fried Gold Section */}
        <MenuSection id="fried-gold" label="Fried Gold" sectionRef={friedGoldRef} isActive={activeSection === 'fried-gold'}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {friedGoldItems.map((item) => (
              <MenuItemCard
                key={item.name}
                item={item}
                category="Fried Gold"
                showMealOption={true}
                showSpecialInstructions={false}
                onAddToBasket={addToBasket}
              />
            ))}
          </div>
        </MenuSection>

        {/* Chicken Burgers Section */}
        <MenuSection id="chicken-burgers" label="Chicken Burgers" sectionRef={chickenBurgersRef} isActive={activeSection === 'chicken-burgers'}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chickenBurgerItems.map((item) => (
              <MenuItemCard
                key={item.name}
                item={item}
                category="Chicken Burgers"
                showMealOption={true}
                onAddToBasket={addToBasket}
              />
            ))}
          </div>
        </MenuSection>

        {/* Smash Burgers Section */}
        <MenuSection id="smash-burgers" label="Smash Burgers" sectionRef={smashBurgersRef} isActive={activeSection === 'smash-burgers'}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smashBurgerItems.map((item) => (
              <MenuItemCard
                key={item.name}
                item={item}
                category="Smash Burgers"
                showMealOption={true}
                onAddToBasket={addToBasket}
              />
            ))}
          </div>
        </MenuSection>

        {/* Pizzas Section */}
        <MenuSection id="pizzas" label="Pizzas" sectionRef={pizzasRef} isActive={activeSection === 'pizzas'}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pizzaItems.map((item) => (
              <MenuItemCard
                key={item.name}
                item={item}
                category="Pizzas"
                showMealOption={true}
                showCustomizations={true}
                customizations={pizzaCustomizations}
                onAddToBasket={addToBasket}
              />
            ))}
          </div>
        </MenuSection>

        {/* Wraps Section */}
        <MenuSection id="wraps" label="Wraps" sectionRef={wrapsRef} isActive={activeSection === 'wraps'}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wrapItems.map((item) => (
              <MenuItemCard
                key={item.name}
                item={item}
                category="Wraps"
                showMealOption={true}
                onAddToBasket={addToBasket}
              />
            ))}
          </div>
        </MenuSection>

        {/* Kids Section */}
        <MenuSection id="kids" label="Kids" sectionRef={kidsRef} isActive={activeSection === 'kids'}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kidsItems.map((item) => (
              <MenuItemCard
                key={item.name}
                item={item}
                category="Kids"
                showSpecialInstructions={false}
                onAddToBasket={addToBasket}
              />
            ))}
          </div>
        </MenuSection>

        {/* Sides Section */}
        <MenuSection id="sides" label="Sides" sectionRef={sidesRef} isActive={activeSection === 'sides'}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sidesItems.map((item) => (
              <MenuItemCard
                key={item.name}
                item={item}
                category="Sides"
                showSizeOptions={true}
                showSpecialInstructions={false}
                onAddToBasket={addToBasket}
              />
            ))}
          </div>
        </MenuSection>

        {/* Drinks Section */}
        <MenuSection id="drinks" label="Drinks" sectionRef={drinksRef} isActive={activeSection === 'drinks'}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {drinkItems.map((item) => (
              <MenuItemCard
                key={item.name}
                item={item}
                category="Drinks"
                showSpecialInstructions={false}
                onAddToBasket={addToBasket}
              />
            ))}
          </div>
        </MenuSection>

        {/* Milkshakes Section */}
        <MenuSection id="milkshakes" label="Milkshakes" sectionRef={milkshakesRef} isActive={activeSection === 'milkshakes'}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milkshakeItems.map((item) => (
              <MenuItemCard
                key={item.name}
                item={item}
                category="Milkshakes"
                showSpecialInstructions={false}
                onAddToBasket={addToBasket}
              />
            ))}
          </div>
        </MenuSection>

        {/* Sweet Stacks Section */}
        <MenuSection id="sweet-stacks" label="Sweet Stacks" sectionRef={sweetStacksRef} isActive={activeSection === 'sweet-stacks'}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sweetStacksItems.map((item) => (
              <MenuItemCard
                key={item.name}
                item={item}
                category="Sweet Stacks"
                showSpecialInstructions={false}
                onAddToBasket={addToBasket}
              />
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
