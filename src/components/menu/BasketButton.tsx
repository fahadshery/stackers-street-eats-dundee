
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBasket } from 'lucide-react';
import { BasketItem } from '@/components/Basket';

interface BasketButtonProps {
  basketItems: BasketItem[];
  onOpenBasket: () => void;
}

const BasketButton: React.FC<BasketButtonProps> = ({ basketItems, onOpenBasket }) => {
  const totalItems = basketItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={onOpenBasket}
        className="bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400 font-bold rounded-full p-4 shadow-lg relative"
      >
        <ShoppingBasket size={24} />
        {basketItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
            {totalItems}
          </span>
        )}
      </Button>
    </div>
  );
};

export default BasketButton;
