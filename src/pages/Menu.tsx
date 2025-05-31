
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
  pizzaCustomizations,
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
        { ref: drinksRef, id: 'drinks' }
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
      drinks: drinksRef
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

  const addToBasket = (item: MenuItem, isMeal: boolean, customizations?: string[], comment?: string, sideSize?: string, milkshakeSize?: string, milkshakeFlavor?: string, pizzaSize?: string, iceCreamScoops?: number, iceCreamFlavors?: string[]) => {
    let basePrice = parseFloat(item.price.replace('£', ''));
    let itemName = item.name;

    // Handle meal pricing and naming
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

    // Handle ice cream pricing
    if (item.category === 'Ice Creams') {
      if (iceCreamScoops === 1) basePrice = 2.50;
      else if (iceCreamScoops === 2) basePrice = 3.75;
      else if (iceCreamScoops === 3) basePrice = 4.75;
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
    }

    const basketItem: Omit<BasketItem, 'id' | 'quantity'> = {
      name: itemName,
      price: `£${basePrice.toFixed(2)}`,
      category: item.category,
      customizations,
      comment,
      sideSize,
      milkshakeSize,
      milkshakeFlavor,
      iceCreamFlavors
    };

    const existingItemIndex = basketItems.findIndex(
      (basketItem) =>
        basketItem.name === itemName &&
        JSON.stringify(basketItem.customizations) === JSON.stringify(customizations) &&
        basketItem.comment === comment &&
        basketItem.sideSize === sideSize &&
        basketItem.milkshakeSize === milkshakeSize &&
        basketItem.milkshakeFlavor === milkshakeFlavor &&
        JSON.stringify(basketItem.iceCreamFlavors) === JSON.stringify(iceCreamFlavors)
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
    <div className="min-h-screen bg-gray-50">
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
                customizations={pizzaCustomizations}
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
