
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBasket } from 'lucide-react';

interface BasketButtonProps {
  itemCount: number;
  onClick: () => void;
}

const BasketButton: React.FC<BasketButtonProps> = ({ itemCount, onClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={onClick}
        className="bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400 font-bold rounded-full p-4 shadow-lg relative"
      >
        <ShoppingBasket size={24} />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
            {itemCount}
          </span>
        )}
      </Button>
    </div>
  );
};

export default BasketButton;
