
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { MenuItem } from '@/data/menuData';
import { milkshakeFlavors, iceCreamFlavors } from '@/data/menuData';

interface MenuItemCardProps {
  item: MenuItem;
  category: string;
  showMealOption?: boolean;
  showCustomizations?: boolean;
  customizations?: string[];
  showSizeOptions?: boolean;
  showSpecialInstructions?: boolean;
  showPizzaSize?: boolean;
  onAddToBasket: (item: MenuItem, isMeal: boolean, customizations?: string[], comment?: string, sideSize?: string, milkshakeSize?: string, milkshakeFlavor?: string, pizzaSize?: string, iceCreamScoops?: number, iceCreamFlavors?: string[]) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item,
  category,
  showMealOption = false,
  showCustomizations = false,
  customizations = [],
  showSizeOptions = false,
  showSpecialInstructions = true,
  showPizzaSize = false,
  onAddToBasket
}) => {
  const [selectedCustomizations, setSelectedCustomizations] = useState<string[]>([]);
  const [isMeal, setIsMeal] = useState(false);
  const [comment, setComment] = useState('');
  const [sideSize, setSideSize] = useState<'regular' | 'large'>('regular');
  const [milkshakeSize, setMilkshakeSize] = useState<'regular' | 'large'>('regular');
  const [milkshakeFlavor, setMilkshakeFlavor] = useState('Oreo');
  const [pizzaSize, setPizzaSize] = useState<'10"' | '12"'>('10"');
  const [iceCreamScoops, setIceCreamScoops] = useState<1 | 2 | 3>(1);
  const [selectedIceCreamFlavors, setSelectedIceCreamFlavors] = useState<string[]>([]);

  const handleCustomizationChange = (customization: string, checked: boolean) => {
    if (checked) {
      setSelectedCustomizations(prev => [...prev, customization]);
    } else {
      setSelectedCustomizations(prev => prev.filter(c => c !== customization));
    }
  };

  const handleIceCreamFlavorChange = (flavor: string, checked: boolean) => {
    if (checked && selectedIceCreamFlavors.length < iceCreamScoops) {
      setSelectedIceCreamFlavors(prev => [...prev, flavor]);
    } else if (!checked) {
      setSelectedIceCreamFlavors(prev => prev.filter(f => f !== flavor));
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
      category === 'Milkshakes' ? milkshakeFlavor : undefined,
      showPizzaSize ? pizzaSize : undefined,
      category === 'Ice Creams' ? iceCreamScoops : undefined,
      category === 'Ice Creams' && selectedIceCreamFlavors.length > 0 ? selectedIceCreamFlavors : undefined
    );
    // Reset form
    setSelectedCustomizations([]);
    setIsMeal(false);
    setComment('');
    setSideSize('regular');
    setMilkshakeSize('regular');
    setMilkshakeFlavor('Oreo');
    setPizzaSize('10"');
    setIceCreamScoops(1);
    setSelectedIceCreamFlavors([]);
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

    if (category === 'Ice Creams') {
      if (iceCreamScoops === 1) basePrice = 2.50;
      else if (iceCreamScoops === 2) basePrice = 3.75;
      else if (iceCreamScoops === 3) basePrice = 4.75;
    }

    // Pizza sizing and customization pricing
    if (showPizzaSize) {
      if (pizzaSize === '12"') {
        basePrice += 3.00; // 12" is £3 extra
      }
      
      // Add customization costs
      const customizationCost = pizzaSize === '10"' ? 1.00 : 1.50;
      basePrice += selectedCustomizations.length * customizationCost;
    }
    
    return `£${basePrice.toFixed(2)}`;
  };

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

        {showPizzaSize && (
          <div className="mb-4">
            <p className="font-medium mb-2 text-stackers-charcoal">Pizza Size:</p>
            <RadioGroup value={pizzaSize} onValueChange={(value: string) => setPizzaSize(value as '10"' | '12"')}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value='10"' id={`${item.name}-10inch`} />
                <Label htmlFor={`${item.name}-10inch`} className="text-sm">10" (Standard)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value='12"' id={`${item.name}-12inch`} />
                <Label htmlFor={`${item.name}-12inch`} className="text-sm">12" (+£3.00)</Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {showCustomizations && customizations.length > 0 && (
          <div className="mb-4">
            <p className="font-medium mb-2 text-stackers-charcoal">
              Customizations {showPizzaSize && `(${pizzaSize === '10"' ? '£1.00' : '£1.50'} each):`}
            </p>
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
            <RadioGroup value={sideSize} onValueChange={(value: string) => setSideSize(value as 'regular' | 'large')}>
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
              <RadioGroup value={milkshakeSize} onValueChange={(value: string) => setMilkshakeSize(value as 'regular' | 'large')}>
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

        {category === 'Ice Creams' && (
          <>
            <div className="mb-4">
              <p className="font-medium mb-2 text-stackers-charcoal">Number of Scoops:</p>
              <RadioGroup value={iceCreamScoops.toString()} onValueChange={(value) => {
                const scoops = parseInt(value) as 1 | 2 | 3;
                setIceCreamScoops(scoops);
                // Reset selected flavors if new scoop count is less than current selections
                if (selectedIceCreamFlavors.length > scoops) {
                  setSelectedIceCreamFlavors(selectedIceCreamFlavors.slice(0, scoops));
                }
              }}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1" id={`${item.name}-1-scoop`} />
                  <Label htmlFor={`${item.name}-1-scoop`} className="text-sm">1 Scoop (£2.50)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="2" id={`${item.name}-2-scoops`} />
                  <Label htmlFor={`${item.name}-2-scoops`} className="text-sm">2 Scoops (£3.75)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="3" id={`${item.name}-3-scoops`} />
                  <Label htmlFor={`${item.name}-3-scoops`} className="text-sm">3 Scoops (£4.75)</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="mb-4">
              <p className="font-medium mb-2 text-stackers-charcoal">
                Choose {iceCreamScoops} flavor{iceCreamScoops > 1 ? 's' : ''} ({selectedIceCreamFlavors.length}/{iceCreamScoops} selected):
              </p>
              <div className="grid grid-cols-2 gap-2">
                {iceCreamFlavors.map((flavor) => (
                  <div key={flavor} className="flex items-center space-x-2">
                    <Checkbox
                      id={`${item.name}-ice-${flavor}`}
                      checked={selectedIceCreamFlavors.includes(flavor)}
                      onCheckedChange={(checked) => handleIceCreamFlavorChange(flavor, !!checked)}
                      disabled={!selectedIceCreamFlavors.includes(flavor) && selectedIceCreamFlavors.length >= iceCreamScoops}
                    />
                    <Label htmlFor={`${item.name}-ice-${flavor}`} className="text-xs">{flavor}</Label>
                  </div>
                ))}
              </div>
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
                Make it a meal +£2.50 (chips and a can of juice)
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
          disabled={category === 'Ice Creams' && selectedIceCreamFlavors.length !== iceCreamScoops}
        >
          Add to Order
        </Button>
      </div>
    </div>
  );
};

export default MenuItemCard;
