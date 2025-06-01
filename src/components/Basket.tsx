
import React from 'react';
import { Button } from '@/components/ui/button';
import { X, ShoppingCart, Trash2 } from 'lucide-react';

export interface BasketItem {
  id: string;
  name: string;
  price: string;
  category: string;
  description?: string;
  customizations?: string[];
  sideSize?: 'regular' | 'large';
  comment?: string;
  milkshakeSize?: 'regular' | 'large';
  milkshakeFlavor?: string;
  iceCreamFlavors?: string[];
  iceCreamScoops?: number;
  sweetStacksType?: string;
  sweetStacksFlavor?: string;
  sweetDips?: string[];
  toppings?: string[];
  quantity: number;
}

interface BasketProps {
  items: BasketItem[];
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onClearBasket: () => void;
  onProceedToCheckout: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const Basket: React.FC<BasketProps> = ({ 
  items, 
  onRemoveItem, 
  onUpdateQuantity, 
  onClearBasket,
  onProceedToCheckout,
  isOpen, 
  onClose 
}) => {
  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const price = parseFloat(item.price.replace('£', ''));
      return total + (price * item.quantity);
    }, 0).toFixed(2);
  };

  const shouldShowDescription = (category: string) => {
    return ['Smash Burgers', 'Chicken Burgers', 'Wraps', 'Boxes', 'Meal Deals', 'Loaded Stackers\' Fries', 'Sweet Stacks'].includes(category);
  };

  const getItemDisplayName = (item: BasketItem) => {
    if (item.category === 'Sweet Stacks') {
      // For Sweet Stacks, don't include the description in the heading
      return item.name;
    }
    return item.name;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto">
        <div className="p-4 border-b bg-stackers-charcoal text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center">
              <ShoppingCart className="mr-2" size={24} />
              Your Basket
            </h2>
            <div className="flex items-center gap-2">
              {items.length > 0 && (
                <Button 
                  variant="ghost" 
                  onClick={onClearBasket}
                  className="text-white hover:bg-gray-700 text-sm"
                  size="sm"
                >
                  <Trash2 size={16} className="mr-1" />
                  Clear
                </Button>
              )}
              <Button variant="ghost" onClick={onClose} className="text-white hover:bg-gray-700">
                <X size={24} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          {items.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Your basket is empty</p>
          ) : (
            <>
              {items.map((item) => (
                <div key={item.id} className="border-b pb-4 mb-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-stackers-charcoal">{getItemDisplayName(item)}</h3>
                      <p className="text-sm text-gray-600">{item.category}</p>
                      
                      {shouldShowDescription(item.category) && item.description && (
                        <p className="text-xs text-gray-500 mt-1 italic">
                          {item.description}
                        </p>
                      )}
                      
                      {item.customizations && item.customizations.length > 0 && (
                        <p className="text-xs text-gray-500 mt-1">
                          Customizations: {item.customizations.join(', ')}
                        </p>
                      )}
                      
                      {item.sideSize && (
                        <p className="text-xs text-gray-500 mt-1">
                          Size: {item.sideSize}
                        </p>
                      )}
                      
                      {item.milkshakeSize && (
                        <p className="text-xs text-gray-500 mt-1">
                          Size: {item.milkshakeSize}, Flavor: {item.milkshakeFlavor}
                        </p>
                      )}
                      
                      {item.iceCreamFlavors && item.iceCreamFlavors.length > 0 && item.iceCreamScoops && (
                        <p className="text-xs text-gray-500 mt-1">
                          {item.iceCreamScoops} {item.iceCreamScoops === 1 ? 'Scoop' : 'Scoops'}, Flavors: {item.iceCreamFlavors.join(', ')}
                        </p>
                      )}
                      
                      {item.sweetStacksType && item.sweetStacksFlavor && (
                        <p className="text-xs text-gray-500 mt-1">
                          {item.sweetStacksType}: {item.sweetStacksFlavor.split(':')[0]}
                        </p>
                      )}
                      
                      {item.sweetDips && item.sweetDips.length > 0 && (
                        <p className="text-xs text-gray-500 mt-1">
                          Sweet Dips: {item.sweetDips.join(', ')}
                        </p>
                      )}
                      
                      {item.toppings && item.toppings.length > 0 && (
                        <p className="text-xs text-gray-500 mt-1">
                          Toppings: {item.toppings.join(', ')}
                        </p>
                      )}
                      
                      {item.comment && (
                        <p className="text-xs text-gray-500 mt-1 italic">
                          Note: {item.comment}
                        </p>
                      )}
                    </div>
                    
                    <div className="text-right ml-4">
                      <p className="font-bold text-stackers-yellow">{item.price}</p>
                      <div className="flex items-center mt-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="w-8 h-8 p-0"
                        >
                          -
                        </Button>
                        <span className="mx-2 font-semibold">{item.quantity}</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 p-0"
                        >
                          +
                        </Button>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 mt-1"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-stackers-yellow">£{calculateTotal()}</span>
                </div>
                <Button 
                  className="w-full mt-4 bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400 font-bold"
                  onClick={onProceedToCheckout}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Basket;
