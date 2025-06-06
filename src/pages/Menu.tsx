
import React, { useState } from 'react';
import MenuNavigation from '@/components/menu/MenuNavigation';
import MenuSection from '@/components/menu/MenuSection';
import BasketButton from '@/components/menu/BasketButton';
import Basket, { BasketItem } from '@/components/Basket';
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
  const [activeCategory, setActiveCategory] = useState('Starters');
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const categories = [
    'Starters',
    'Fried Gold',
    'Smash Burgers',
    'Chicken Burgers',
    'Pizzas',
    'Wraps',
    'Kids',
    'Sides',
    'Drinks',
    'Milkshakes',
    'Ice Creams',
    'Sweet Stacks',
    'Meal Deals',
    'Boxes',
    'Loaded Stackers\' Fries',
    'Sauces & Dips'
  ];

  const getCategoryItems = (category: string): MenuItem[] => {
    switch (category) {
      case 'Starters': return startersItems;
      case 'Fried Gold': return friedGoldItems;
      case 'Chicken Burgers': return chickenBurgerItems;
      case 'Smash Burgers': return smashBurgerItems;
      case 'Pizzas': return pizzaItems;
      case 'Wraps': return wrapItems;
      case 'Kids': return kidsItems;
      case 'Sides': return sidesItems;
      case 'Drinks': return drinkItems;
      case 'Milkshakes': return milkshakeItems;
      case 'Ice Creams': return iceCreamItems;
      case 'Sweet Stacks': return sweetStacksItems;
      case 'Meal Deals': return mealDealsItems;
      case 'Boxes': return boxesItems;
      case 'Loaded Stackers\' Fries': return loadedFriesItems;
      case 'Sauces & Dips': return saucesAndDipsItems;
      default: return [];
    }
  };

  const addToBasket = (
    item: MenuItem,
    isMeal: boolean = false,
    customizations?: string[],
    comment?: string,
    sideSize?: string,
    milkshakeSize?: string,
    milkshakeFlavor?: string,
    pizzaSize?: string,
    iceCreamScoops?: number,
    iceCreamFlavors?: string[],
    sweetStacksType?: string,
    sweetStacksFlavor?: string,
    sweetDips?: string[],
    toppings?: string[],
    drizzleOnTop?: boolean,
    drinkSize?: string,
    rubiconFlavor?: string,
    milkshakeComment?: string,
    fantaFlavor?: string,
    pepsiFlavor?: string,
    cokeFlavor?: string,
    saucesAndDips?: string[],
    friedGoldPieces?: number
  ) => {
    let basePrice = parseFloat(item.price.replace('£', ''));

    // Special handling for "Chicken on the bone"
    if (item.name === 'Chicken on the bone' && friedGoldPieces) {
      if (friedGoldPieces === 1) basePrice = 2.25;
      else if (friedGoldPieces === 2) basePrice = 4.25;
      else if (friedGoldPieces === 3) basePrice = 5.75;
    }

    if (isMeal) {
      basePrice += 2.50;
    }

    if (sideSize === 'large') {
      basePrice += 1.00;
    }

    if (milkshakeSize === 'large') {
      basePrice = 5.00;
    } else if (milkshakeSize === 'regular') {
      basePrice = 4.20;
    }

    if (iceCreamScoops) {
      if (iceCreamScoops === 1) basePrice = 2.50;
      else if (iceCreamScoops === 2) basePrice = 3.75;
      else if (iceCreamScoops === 3) basePrice = 4.75;
    }

    if (pizzaSize === '12"') {
      basePrice += 3.00;
    }

    if (customizations && pizzaSize) {
      const customizationCost = pizzaSize === '10"' ? 1.00 : 1.50;
      basePrice += customizations.length * customizationCost;
    }

    // Drinks pricing
    if (['Irn Bru', 'Pepsi', 'Coke', 'Sprite', 'Fanta'].includes(item.name) && drinkSize) {
      basePrice = drinkSize === '330ml' ? 1.25 : 2.99;
    }

    // Sweet Stacks pricing
    if (sweetStacksType) {
      if (sweetStacksType === 'Waffles' || sweetStacksType === 'Crepes' || sweetStacksType === 'Cookie Dough') {
        basePrice = 6.50;
        if (sweetDips) basePrice += sweetDips.length * 1.00;
        if (toppings) basePrice += toppings.length * 0.50;
      } else if (sweetStacksType === 'Cheesecake') {
        basePrice = 3.99;
      } else if (sweetStacksType === 'Stackers\' Specials') {
        if (sweetStacksFlavor === 'Waffle on a Stick') basePrice = 4.99;
        else if (sweetStacksFlavor === 'Dubai Kunafa') basePrice = 6.50;
        else if (sweetStacksFlavor === 'Churros (5)') basePrice = 5.50;
        else if (sweetStacksFlavor === 'Mini Pancakes (10)') basePrice = 6.50;
      }
    }

    // Sauces & Dips pricing
    if (saucesAndDips && saucesAndDips.length > 0) {
      basePrice = saucesAndDips.length * 0.70;
    }

    const finalPrice = `£${basePrice.toFixed(2)}`;

    const basketItem: BasketItem = {
      id: `${item.name}-${Date.now()}-${Math.random()}`,
      name: item.name,
      price: finalPrice,
      category: item.category,
      description: item.description,
      customizations,
      sideSize: sideSize as 'regular' | 'large',
      comment,
      milkshakeSize: milkshakeSize as 'regular' | 'large',
      milkshakeFlavor,
      milkshakeComment,
      iceCreamFlavors,
      iceCreamScoops,
      sweetStacksType,
      sweetStacksFlavor,
      sweetDips,
      toppings,
      drizzleOnTop,
      drinkSize: drinkSize as '330ml' | '1.5L',
      rubiconFlavor,
      fantaFlavor,
      pepsiFlavor,
      cokeFlavor,
      saucesAndDips,
      quantity: 1,
      friedGoldPieces
    };

    setBasketItems(prev => [...prev, basketItem]);
  };

  const removeFromBasket = (id: string) => {
    setBasketItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      removeFromBasket(id);
      return;
    }
    setBasketItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearBasket = () => {
    setBasketItems([]);
  };

  const handleProceedToCheckout = () => {
    // Handle checkout logic here
    console.log('Proceeding to checkout with items:', basketItems);
  };

  const getTotalItems = () => {
    return basketItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-stackers-charcoal mb-4">Our Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our mouth-watering selection of burgers, fried chicken, pizzas, and more. 
            Each dish is crafted with premium ingredients and bold flavours that will keep you coming back for more.
          </p>
        </div>

        <MenuNavigation
          categories={categories}
          activeCategory={activeCategory}
          onCategorySelect={setActiveCategory}
        />

        <MenuSection
          category={activeCategory}
          items={getCategoryItems(activeCategory)}
          onAddToBasket={addToBasket}
          customizations={activeCategory === 'Pizzas' ? pizzaCustomisations : []}
        />
      </div>

      <BasketButton 
        itemCount={getTotalItems()}
        onClick={() => setIsBasketOpen(true)}
      />

      <Basket
        items={basketItems}
        onRemoveItem={removeFromBasket}
        onUpdateQuantity={updateQuantity}
        onClearBasket={clearBasket}
        onProceedToCheckout={handleProceedToCheckout}
        isOpen={isBasketOpen}
        onClose={() => setIsBasketOpen(false)}
      />
    </div>
  );
};

export default Menu;
