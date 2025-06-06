
import React from 'react';
import MenuItemCard from '@/components/menu/MenuItemCard';
import { MenuItem } from '@/data/menuData';

interface MenuSectionProps {
  items: MenuItem[];
  onAddToBasket: (
    item: MenuItem,
    isMeal?: boolean,
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
  ) => void;
  customizations?: string[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ items, onAddToBasket, customizations }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <MenuItemCard
          key={item.name}
          item={item}
          onAddToBasket={onAddToBasket}
          customizations={customizations}
        />
      ))}
    </div>
  );
};

export default MenuSection;
