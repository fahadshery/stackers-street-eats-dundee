import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Basket, { BasketItem } from '@/components/Basket';
import MenuItemCard from '@/components/menu/MenuItemCard';
import MenuSection from '@/components/menu/MenuSection';
import MenuNavigation from '@/components/menu/MenuNavigation';
import BasketButton from '@/components/menu/BasketButton';
import {
  startersItems,
  friedGoldItems,
  chickenBurgerItems,
  smashBurgerItems,
  pizzaItems,
  wrapItems,
  kidsItems,
  sidesItems,
  drinkItems,
  milkshakeItems,
  iceCreamItems,
  sweetStacksItems,
  mealDealsItems,
  boxesItems,
  loadedFriesItems,
  saucesAndDipsItems,
  pizzaCustomisations,
  MenuItem
} from '@/data/menuData';

const Menu = () => {
  const navigate = useNavigate();
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('starters');

  // Section refs for scroll detection - reordered according to user's request
  const startersRef = useRef<HTMLElement>(null);
  const friedGoldRef = useRef<HTMLElement>(null);
  const smashBurgersRef = useRef<HTMLElement>(null);
  const chickenBurgersRef = useRef<HTMLElement>(null);
  const wrapsRef = useRef<HTMLElement>(null);
  const pizzasRef = useRef<HTMLElement>(null);
  const boxesRef = useRef<HTMLElement>(null);
  const mealDealsRef = useRef<HTMLElement>(null);
  const loadedFriesRef = useRef<HTMLElement>(null);
  const kidsRef = useRef<HTMLElement>(null);
  const sidesRef = useRef<HTMLElement>(null);
  const sweetStacksRef = useRef<HTMLElement>(null);
  const iceCreamRef = useRef<HTMLElement>(null);
  const milkshakesRef = useRef<HTMLElement>(null);
  const drinksRef = useRef<HTMLElement>(null);
  const saucesAndDipsRef = useRef<HTMLElement>(null);

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

  // Scroll detection for active section highlighting - reordered
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: startersRef, id: 'starters' },
        { ref: friedGoldRef, id: 'fried-gold' },
        { ref: smashBurgersRef, id: 'smash-burgers' },
        { ref: chickenBurgersRef, id: 'chicken-burgers' },
        { ref: wrapsRef, id: 'wraps' },
        { ref: pizzasRef, id: 'pizzas' },
        { ref: boxesRef, id: 'boxes' },
        { ref: mealDealsRef, id: 'meal-deals' },
        { ref: loadedFriesRef, id: 'loaded-fries' },
        { ref: kidsRef, id: 'kids' },
        { ref: sidesRef, id: 'sides' },
        { ref: sweetStacksRef, id: 'sweet-stacks' },
        { ref: iceCreamRef, id: 'ice-creams' },
        { ref: milkshakesRef, id: 'milkshakes' },
        { ref: drinksRef, id: 'drinks' },
        { ref: saucesAndDipsRef, id: 'sauces-and-dips' }
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
      'smash-burgers': smashBurgersRef,
      'chicken-burgers': chickenBurgersRef,
      wraps: wrapsRef,
      pizzas: pizzasRef,
      boxes: boxesRef,
      'meal-deals': mealDealsRef,
      'loaded-fries': loadedFriesRef,
      kids: kidsRef,
      sides: sidesRef,
      'sweet-stacks': sweetStacksRef,
      'ice-creams': iceCreamRef,
      milkshakes: milkshakesRef,
      drinks: drinksRef,
      'sauces-and-dips': saucesAndDipsRef
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

  const addToBasket = (
    item: MenuItem,
    isMeal: boolean,
    customizations?: string[],
    comment?: string,
    sideSize?: 'regular' | 'large',
    milkshakeSize?: 'regular' | 'large',
    milkshakeFlavor?: string,
    pizzaSize?: string,
    iceCreamScoops?: number,
    iceCreamFlavors?: string[],
    sweetStacksType?: string,
    sweetStacksFlavor?: string,
    sweetDips?: string[],
    toppings?: string[],
    drizzleOnTop?: boolean,
    drinkSize?: '330ml' | '1.5L',
    rubiconFlavor?: string,
    milkshakeComment?: string,
    fantaFlavor?: string,
    pepsiFlavor?: string,
    cokeFlavor?: string,
    saucesAndDips?: string[],
    chickenOnBonePieces?: number,
    friedGoldWings?: number,
    friedGoldStrips?: number
  ) => {
    let basePrice = parseFloat(item.price.replace('£', ''));
    let itemName = item.name;

    // Handle Chicken on the bone pricing and naming
    if (item.name === 'Chicken on the bone' && chickenOnBonePieces) {
      if (chickenOnBonePieces === 1) {
        basePrice = 2.25;
        itemName = 'Chicken on the bone (1 piece)';
      } else if (chickenOnBonePieces === 2) {
        basePrice = 4.25;
        itemName = 'Chicken on the bone (2 pieces)';
      } else if (chickenOnBonePieces === 3) {
        basePrice = 5.75;
        itemName = 'Chicken on the bone (3 pieces)';
      }
    }

    // Handle gold fried Wings pricing and naming
    if (item.name === 'Wings' && friedGoldWings) {
      if (friedGoldWings === 1) {
        basePrice = 2.25;
        itemName = 'Wings (1 piece)';
      } else if (friedGoldWings === 2) {
        basePrice = 4.25;
        itemName = 'Wings (2 pieces)';
      } else if (friedGoldWings === 3) {
        basePrice = 5.75;
        itemName = 'Wings (3 pieces)';
      }
    }

    // Handle gold fried Stips pricing and naming
    if (item.name === 'Stips' && friedGoldStrips) {
      if (friedGoldStrips === 1) {
        basePrice = 3.99;
        itemName = 'Strips (3 piece)';
      } else if (friedGoldStrips === 2) {
        basePrice = 5.99;
        itemName = 'Strips (6 pieces)';
      } else if (friedGoldStrips === 3) {
        basePrice = 9.99;
        itemName = 'Strips (12 pieces)';
      }
    }

    // Handle meal pricing and naming
    if (isMeal) {
      basePrice += 2.50;
      itemName = `${itemName} (Meal)`;
    }

    // Handle side size pricing
    if (sideSize === 'large') {
      basePrice += 1.00;
    }

    // Handle milkshake pricing and naming
    if (item.category === 'Milkshakes') {
      basePrice = milkshakeSize === 'regular' ? 4.20 : 5.00;
      // For basket display, show flavor + "Milkshake"
      if (milkshakeFlavor) {
        itemName = `${milkshakeFlavor} Milkshake`;
      }
    }

    // Handle drinks pricing
    if (item.category === 'Drinks' && ['Irn Bru', 'Pepsi', 'Coke', 'Sprite', 'Fanta', 'Rubicon'].includes(item.name)) {
      basePrice = drinkSize === '330ml' ? 1.25 : 2.99;
    }

    // Handle ice cream pricing
    if (item.category === 'Ice Creams') {
      if (iceCreamScoops === 1) basePrice = 2.50;
      else if (iceCreamScoops === 2) basePrice = 3.75;
      else if (iceCreamScoops === 3) basePrice = 4.75;
    }

    // Handle Sweet Stacks pricing
    if (item.category === 'Sweet Stacks') {
      if (item.name === 'Waffle' || item.name === 'Crepe' || item.name === 'Cookie Dough Delight') {
        basePrice = 6.50; // Base price for customizable Sweet Stacks

        // Add sweet dips pricing
        if (sweetDips && sweetDips.length > 0) {
          basePrice += sweetDips.length * 1.00;
        }

        // Add toppings pricing
        if (toppings && toppings.length > 0) {
          basePrice += toppings.length * 0.50;
        }

        // Update item name with type and flavor
        if (sweetStacksType && sweetStacksFlavor) {
          itemName = `${sweetStacksType} - ${sweetStacksFlavor.split(':')[0]}`;
        }
      } else if (item.name === 'Cheesecake Slices') {
        basePrice = 3.99;
        if (sweetStacksFlavor) {
          itemName = `${sweetStacksFlavor} Cheesecake`;
        }
      } else if (item.name === 'Stackers\' Specials') {
        // Price is determined by the selected special item
        const specialItems = [
          { name: 'Waffle on a Stick', price: 4.99 },
          { name: 'Dubai Kunafa', price: 6.50 },
          { name: 'Churros (5)', price: 5.50 },
          { name: 'Mini Pancakes (10)', price: 6.50 }
        ];
        const selectedItem = specialItems.find(special => special.name === sweetStacksFlavor);
        basePrice = selectedItem ? selectedItem.price : 4.99;
        itemName = sweetStacksFlavor || item.name;
      }
    }

    // Handle pizza sizing and customizations
    if (pizzaSize) {
      if (pizzaSize === '12"') {
        basePrice += 3.00;
      }

      if (customizations && customizations.length > 0) {
        const customizationCost = pizzaSize === '10"' ? 1.00 : 1.50;
        basePrice += customizations.length * customizationCost;
      }

      itemName = `${item.name} (${pizzaSize})`;

      // Add (Meal) tag for pizzas if selected
      if (isMeal) {
        itemName = `${item.name} (${pizzaSize}) (Meal)`;
      }
    }

    // Handle Sauces & Dips pricing
    if (item.category === 'Sauces & Dips') {
      basePrice = saucesAndDips ? saucesAndDips.length * 0.70 : 0;
      if (saucesAndDips && saucesAndDips.length > 0) {
        itemName = `Sauces & Dips (${saucesAndDips.length})`;
      }
    }

    const basketItem: Omit<BasketItem, 'id' | 'quantity'> = {
      name: itemName,
      price: `£${basePrice.toFixed(2)}`,
      category: item.category,
      description: item.description,
      customizations,
      comment,
      sideSize,
      milkshakeSize,
      milkshakeFlavor,
      milkshakeComment,
      iceCreamFlavors,
      iceCreamScoops,
      sweetStacksType,
      sweetStacksFlavor,
      sweetDips,
      toppings,
      drizzleOnTop,
      drinkSize,
      rubiconFlavor,
      fantaFlavor,
      pepsiFlavor,
      cokeFlavor,
      saucesAndDips
    };

    const existingItemIndex = basketItems.findIndex(
      (basketItem) =>
        basketItem.name === itemName &&
        JSON.stringify(basketItem.customizations) === JSON.stringify(customizations) &&
        basketItem.comment === comment &&
        basketItem.sideSize === sideSize &&
        basketItem.milkshakeSize === milkshakeSize &&
        basketItem.milkshakeFlavor === milkshakeFlavor &&
        basketItem.milkshakeComment === milkshakeComment &&
        JSON.stringify(basketItem.iceCreamFlavors) === JSON.stringify(iceCreamFlavors) &&
        basketItem.iceCreamScoops === iceCreamScoops &&
        basketItem.sweetStacksType === sweetStacksType &&
        basketItem.sweetStacksFlavor === sweetStacksFlavor &&
        JSON.stringify(basketItem.sweetDips) === JSON.stringify(sweetDips) &&
        JSON.stringify(basketItem.toppings) === JSON.stringify(toppings) &&
        basketItem.drizzleOnTop === drizzleOnTop &&
        basketItem.drinkSize === drinkSize &&
        basketItem.rubiconFlavor === rubiconFlavor &&
        basketItem.fantaFlavor === fantaFlavor &&
        basketItem.pepsiFlavor === pepsiFlavor &&
        basketItem.cokeFlavor === cokeFlavor &&
        JSON.stringify(basketItem.saucesAndDips) === JSON.stringify(saucesAndDips)
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

  return (
    <div
      className="min-h-screen bg-gray-50 relative"
      style={{
        backgroundImage: `url('/lovable-uploads/426be6e6-1553-496a-9104-16472d338479.png')`,
        backgroundRepeat: 'repeat',
        backgroundSize: '300px 300px',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay to dim the background */}
      <div className="absolute inset-0 bg-white/85 z-0"></div>

      <div className="relative z-10">
        <Header />

        <MenuNavigation activeSection={activeSection} onScrollToSection={scrollToSection} />

        <div className="container mx-auto px-4 py-8">
          <BasketButton basketItems={basketItems} onOpenBasket={() => setIsBasketOpen(true)} />

          {/* Sections rendered in the new order */}
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

          <MenuSection id="pizzas" label="Pizzas" sectionRef={pizzasRef} isActive={activeSection === 'pizzas'}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pizzaItems.map((item) => (
                <MenuItemCard
                  key={item.name}
                  item={item}
                  category="Pizzas"
                  showMealOption={true}
                  showCustomizations={true}
                  customizations={pizzaCustomisations}
                  showPizzaSize={true}
                  onAddToBasket={addToBasket}
                />
              ))}
            </div>
          </MenuSection>

          <MenuSection id="boxes" label="Boxes" sectionRef={boxesRef} isActive={activeSection === 'boxes'}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boxesItems.map((item) => (
                <MenuItemCard
                  key={item.name}
                  item={item}
                  category="Boxes"
                  showSpecialInstructions={false}
                  onAddToBasket={addToBasket}
                />
              ))}
            </div>
          </MenuSection>

          <MenuSection id="meal-deals" label="Meal Deals" sectionRef={mealDealsRef} isActive={activeSection === 'meal-deals'}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mealDealsItems.map((item) => (
                <MenuItemCard
                  key={item.name}
                  item={item}
                  category="Meal Deals"
                  showSpecialInstructions={false}
                  onAddToBasket={addToBasket}
                />
              ))}
            </div>
          </MenuSection>

          <MenuSection id="loaded-fries" label="Loaded Stackers' Fries" sectionRef={loadedFriesRef} isActive={activeSection === 'loaded-fries'}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {loadedFriesItems.map((item) => (
                <MenuItemCard
                  key={item.name}
                  item={item}
                  category="Loaded Stackers' Fries"
                  showSpecialInstructions={false}
                  onAddToBasket={addToBasket}
                />
              ))}
            </div>
          </MenuSection>

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

          <MenuSection id="sweet-stacks" label="Sweet Stacks" sectionRef={sweetStacksRef} isActive={activeSection === 'sweet-stacks'}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sweetStacksItems.map((item) => (
                <MenuItemCard
                  key={item.name}
                  item={item}
                  category="Sweet Stacks"
                  showSpecialInstructions={false}
                  showSweetStacks={true}
                  onAddToBasket={addToBasket}
                />
              ))}
            </div>
          </MenuSection>

          <MenuSection id="ice-creams" label="Ice Creams" sectionRef={iceCreamRef} isActive={activeSection === 'ice-creams'}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {iceCreamItems.map((item) => (
                <MenuItemCard
                  key={item.name}
                  item={item}
                  category="Ice Creams"
                  showSpecialInstructions={false}
                  onAddToBasket={addToBasket}
                />
              ))}
            </div>
          </MenuSection>

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

          <MenuSection id="sauces-and-dips" label="Sauces & Dips" sectionRef={saucesAndDipsRef} isActive={activeSection === 'sauces-and-dips'}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {saucesAndDipsItems.map((item) => (
                <MenuItemCard
                  key={item.name}
                  item={item}
                  category="Sauces & Dips"
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
    </div>
  );
};

export default Menu;
