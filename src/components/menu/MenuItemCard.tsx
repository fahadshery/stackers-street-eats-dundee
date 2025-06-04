import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import {
  RadioGroup,
  RadioGroupItem
} from "@/components/ui/radio-group"

export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  image: string;
  category: string;
}

interface MenuItemCardProps {
  item: MenuItem;
  category: string;
  showMealOption?: boolean;
  showCustomizations?: boolean;
  customizations?: string[];
  showSizeOptions?: boolean;
  showSpecialInstructions?: boolean;
  showPizzaSize?: boolean;
  showSweetStacks?: boolean;
  onAddToBasket: (
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
    chickenBreastQuantity?: '1pc' | '2pc' | '3pc'
  ) => void;
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
  showSweetStacks = false,
  onAddToBasket
}) => {
  const [isMeal, setIsMeal] = useState(false);
  const [comment, setComment] = useState('');
  const [sideSize, setSideSize] = useState<'regular' | 'large'>('regular');
  const [milkshakeSize, setMilkshakeSize] = useState<'regular' | 'large'>('regular');
  const [milkshakeFlavor, setMilkshakeFlavor] = useState('');
  const [pizzaSize, setPizzaSize] = useState('');
  const [iceCreamScoops, setIceCreamScoops] = useState<number>(1);
  const [selectedIceCreamFlavors, setSelectedIceCreamFlavors] = useState<string[]>([]);
  const [selectedCustomizations, setSelectedCustomizations] = useState<string[]>([]);
  const [waffleFlavor, setWaffleFlavor] = useState('');
  const [cheesecakeFlavor, setCheesecakeFlavor] = useState('');
  const [stackersSpecialItem, setStackersSpecialItem] = useState('');
  const [selectedSweetDips, setSelectedSweetDips] = useState<string[]>([]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [drizzleOnTop, setDrizzleOnTop] = useState(false);
  const [drinkSize, setDrinkSize] = useState<'330ml' | '1.5L'>('330ml');
  const [rubiconFlavor, setRubiconFlavor] = useState('');
  const [milkshakeComment, setMilkshakeComment] = useState('');
  const [fantaFlavor, setFantaFlavor] = useState('');
  const [pepsiFlavor, setPepsiFlavor] = useState('');
  const [cokeFlavor, setCokeFlavor] = useState('');
  const [selectedSaucesAndDips, setSelectedSaucesAndDips] = useState<string[]>([]);
  const [chickenBreastQuantity, setChickenBreastQuantity] = useState<'1pc' | '2pc' | '3pc'>('1pc');

  const handleMealChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsMeal(event.target.checked);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleSideSizeChange = (size: 'regular' | 'large') => {
    setSideSize(size);
  };

  const handleMilkshakeSizeChange = (size: 'regular' | 'large') => {
    setMilkshakeSize(size);
  };

  const handleMilkshakeFlavorChange = (flavor: string) => {
    setMilkshakeFlavor(flavor);
  };

  const handlePizzaSizeChange = (size: string) => {
    setPizzaSize(size);
  };

  const handleIceCreamScoopsChange = (scoops: number) => {
    setIceCreamScoops(scoops);
  };

  const handleIceCreamFlavorChange = (flavor: string) => {
    setSelectedIceCreamFlavors((prevFlavors) => {
      if (prevFlavors.includes(flavor)) {
        return prevFlavors.filter((f) => f !== flavor);
      } else {
        return [...prevFlavors, flavor];
      }
    });
  };

  const handleCustomizationChange = (customization: string) => {
    setSelectedCustomizations((prevCustomizations) => {
      if (prevCustomizations.includes(customization)) {
        return prevCustomizations.filter((c) => c !== customization);
      } else {
        return [...prevCustomizations, customization];
      }
    });
  };

  const handleWaffleFlavorChange = (flavor: string) => {
    setWaffleFlavor(flavor);
  };

  const handleCheesecakeFlavorChange = (flavor: string) => {
    setCheesecakeFlavor(flavor);
  };

  const handleStackersSpecialItemChange = (specialItem: string) => {
    setStackersSpecialItem(specialItem);
  };

  const handleSweetDipChange = (dip: string) => {
    setSelectedSweetDips((prevDips) => {
      if (prevDips.includes(dip)) {
        return prevDips.filter((d) => d !== dip);
      } else {
        return [...prevDips, dip];
      }
    });
  };

  const handleToppingChange = (topping: string) => {
    setSelectedToppings((prevToppings) => {
      if (prevToppings.includes(topping)) {
        return prevToppings.filter((t) => t !== topping);
      } else {
        return [...prevToppings, topping];
      }
    });
  };

  const handleDrizzleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDrizzleOnTop(event.target.checked);
  };

  const handleDrinkSizeChange = (size: '330ml' | '1.5L') => {
    setDrinkSize(size);
  };

  const handleRubiconFlavorChange = (flavor: string) => {
    setRubiconFlavor(flavor);
  };

  const handleMilkshakeCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMilkshakeComment(event.target.value);
  };

  const handleFantaFlavorChange = (flavor: string) => {
    setFantaFlavor(flavor);
  };

  const handlePepsiFlavorChange = (flavor: string) => {
    setPepsiFlavor(flavor);
  };

  const handleCokeFlavorChange = (flavor: string) => {
    setCokeFlavor(flavor);
  };

  const handleSaucesAndDipsChange = (sauce: string) => {
    setSelectedSaucesAndDips((prevSauces) => {
      if (prevSauces.includes(sauce)) {
        return prevSauces.filter((s) => s !== sauce);
      } else {
        return [...prevSauces, sauce];
      }
    });
  };

  const handleChickenBreastQuantityChange = (quantity: '1pc' | '2pc' | '3pc') => {
    setChickenBreastQuantity(quantity);
  };

  const displayPrice = () => {
    let basePrice = parseFloat(item.price.replace('£', ''));

    if (isMeal) {
      basePrice += 2.50;
    }

    if (sideSize === 'large') {
      basePrice += 1.00;
    }

    if (item.name === 'Chicken Breasts') {
      if (chickenBreastQuantity === '1pc') basePrice = 2.50;
      else if (chickenBreastQuantity === '2pc') basePrice = 3.50;
      else if (chickenBreastQuantity === '3pc') basePrice = 4.50;
    }

    return `£${basePrice.toFixed(2)}`;
  };

  const resetForm = () => {
    setIsMeal(false);
    setComment('');
    setSideSize('regular');
    setMilkshakeSize('regular');
    setMilkshakeFlavor('');
    setPizzaSize('');
    setIceCreamScoops(1);
    setSelectedIceCreamFlavors([]);
    setSelectedCustomizations([]);
    setWaffleFlavor('');
    setCheesecakeFlavor('');
    setStackersSpecialItem('');
    setSelectedSweetDips([]);
    setSelectedToppings([]);
    setDrizzleOnTop(false);
    setDrinkSize('330ml');
    setRubiconFlavor('');
    setMilkshakeComment('');
    setFantaFlavor('');
    setPepsiFlavor('');
    setCokeFlavor('');
    setSelectedSaucesAndDips([]);
    setChickenBreastQuantity('1pc');
  };

  const handleAddToBasket = () => {
    onAddToBasket(
      item,
      isMeal,
      selectedCustomizations.length > 0 ? selectedCustomizations : undefined,
      comment || undefined,
      sideSize,
      milkshakeSize,
      milkshakeFlavor,
      pizzaSize,
      iceCreamScoops,
      selectedIceCreamFlavors.length > 0 ? selectedIceCreamFlavors : undefined,
      item.name === 'Waffle' || item.name === 'Crepe' || item.name === 'Cookie Dough Delight' ? item.name : 
      item.name === 'Cheesecake Slices' ? 'Cheesecake' :
      item.name === 'Stackers\' Specials' ? 'Special' : undefined,
      item.name === 'Waffle' || item.name === 'Crepe' || item.name === 'Cookie Dough Delight' ? waffleFlavor :
      item.name === 'Cheesecake Slices' ? cheesecakeFlavor :
      item.name === 'Stackers\' Specials' ? stackersSpecialItem : undefined,
      selectedSweetDips.length > 0 ? selectedSweetDips : undefined,
      selectedToppings.length > 0 ? selectedToppings : undefined,
      drizzleOnTop || undefined,
      drinkSize,
      rubiconFlavor,
      milkshakeComment || undefined,
      fantaFlavor,
      pepsiFlavor,
      cokeFlavor,
      selectedSaucesAndDips.length > 0 ? selectedSaucesAndDips : undefined,
      item.name === 'Chicken Breasts' ? chickenBreastQuantity : undefined
    );
    resetForm();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-stackers-charcoal">{item.name}</h3>
        <p className="text-gray-600 mb-4">{item.description}</p>

      {showMealOption && (
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-stackers-yellow"
              checked={isMeal}
              onChange={handleMealChange}
            />
            <span className="ml-2 text-gray-700">Make it a Meal (+£2.50)</span>
          </label>
        </div>
      )}

      {showCustomizations && customizations && customizations.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Customizations</h4>
          {customizations.map((customization) => (
            <label key={customization} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-stackers-yellow"
                value={customization}
                checked={selectedCustomizations.includes(customization)}
                onChange={() => handleCustomizationChange(customization)}
              />
              <span className="ml-2 text-gray-700">{customization}</span>
            </label>
          ))}
        </div>
      )}

      {showSizeOptions && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Size</h4>
          <div className="flex items-center">
            <button
              className={`px-4 py-2 rounded-full text-sm font-semibold ${sideSize === 'regular' ? 'bg-stackers-yellow text-stackers-charcoal' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              onClick={() => handleSideSizeChange('regular')}
            >
              Regular
            </button>
            <button
              className={`ml-2 px-4 py-2 rounded-full text-sm font-semibold ${sideSize === 'large' ? 'bg-stackers-yellow text-stackers-charcoal' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              onClick={() => handleSideSizeChange('large')}
            >
              Large (+£1.00)
            </button>
          </div>
        </div>
      )}

      {category === 'Milkshakes' && (
        <>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">Size</h4>
            <div className="flex items-center">
              <button
                className={`px-4 py-2 rounded-full text-sm font-semibold ${milkshakeSize === 'regular' ? 'bg-stackers-yellow text-stackers-charcoal' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                onClick={() => handleMilkshakeSizeChange('regular')}
              >
                Regular
              </button>
              <button
                className={`ml-2 px-4 py-2 rounded-full text-sm font-semibold ${milkshakeSize === 'large' ? 'bg-stackers-yellow text-stackers-charcoal' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                onClick={() => handleMilkshakeSizeChange('large')}
              >
                Large
              </button>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">Flavor</h4>
            <input
              type="text"
              placeholder="Enter milkshake flavor"
              className="w-full border border-gray-300 rounded-md p-2"
              value={milkshakeFlavor}
              onChange={(e) => handleMilkshakeFlavorChange(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">Special Instructions</h4>
            <textarea
              placeholder="Any special instructions for your milkshake..."
              className="w-full border border-gray-300 rounded-md p-2 resize-none"
              rows={3}
              value={milkshakeComment}
              onChange={handleMilkshakeCommentChange}
            />
          </div>
        </>
      )}

      {showPizzaSize && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Size</h4>
          <div className="flex items-center">
            <button
              className={`px-4 py-2 rounded-full text-sm font-semibold ${pizzaSize === '10"' ? 'bg-stackers-yellow text-stackers-charcoal' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              onClick={() => handlePizzaSizeChange('10"')}
            >
              10"
            </button>
            <button
              className={`ml-2 px-4 py-2 rounded-full text-sm font-semibold ${pizzaSize === '12"' ? 'bg-stackers-yellow text-stackers-charcoal' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              onClick={() => handlePizzaSizeChange('12"')}
            >
              12" (+£3.00)
            </button>
          </div>
        </div>
      )}

      {category === 'Ice Creams' && (
        <>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">Number of Scoops</h4>
            <div className="flex items-center">
              <button
                className={`px-4 py-2 rounded-full text-sm font-semibold ${iceCreamScoops === 1 ? 'bg-stackers-yellow text-stackers-charcoal' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                onClick={() => handleIceCreamScoopsChange(1)}
              >
                1 Scoop
              </button>
              <button
                className={`ml-2 px-4 py-2 rounded-full text-sm font-semibold ${iceCreamScoops === 2 ? 'bg-stackers-yellow text-stackers-charcoal' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                onClick={() => handleIceCreamScoopsChange(2)}
              >
                2 Scoops
              </button>
              <button
                className={`ml-2 px-4 py-2 rounded-full text-sm font-semibold ${iceCreamScoops === 3 ? 'bg-stackers-yellow text-stackers-charcoal' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                onClick={() => handleIceCreamScoopsChange(3)}
              >
                3 Scoops
              </button>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">Flavors</h4>
            {['Vanilla', 'Chocolate', 'Strawberry', 'Mint Choc Chip'].map((flavor) => (
              <label key={flavor} className="inline-flex items-center mr-4">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-stackers-yellow"
                  value={flavor}
                  checked={selectedIceCreamFlavors.includes(flavor)}
                  onChange={() => handleIceCreamFlavorChange(flavor)}
                />
                <span className="ml-2 text-gray-700">{flavor}</span>
              </label>
            ))}
          </div>
        </>
      )}

      {showSweetStacks && (
        <>
          {item.name === 'Waffle' || item.name === 'Crepe' || item.name === 'Cookie Dough Delight' ? (
            <>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Flavor</h4>
                <input
                  type="text"
                  placeholder="Enter flavor"
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={waffleFlavor}
                  onChange={(e) => handleWaffleFlavorChange(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Sweet Dips</h4>
                {['Chocolate', 'Caramel', 'Strawberry', 'Nutella'].map((dip) => (
                  <label key={dip} className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-stackers-yellow"
                      value={dip}
                      checked={selectedSweetDips.includes(dip)}
                      onChange={() => handleSweetDipChange(dip)}
                    />
                    <span className="ml-2 text-gray-700">{dip}</span>
                  </label>
                ))}
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Toppings</h4>
                {['Sprinkles', 'Oreo Crumbs', 'Marshmallows', 'Chocolate Chips'].map((topping) => (
                  <label key={topping} className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-stackers-yellow"
                      value={topping}
                      checked={selectedToppings.includes(topping)}
                      onChange={() => handleToppingChange(topping)}
                    />
                    <span className="ml-2 text-gray-700">{topping}</span>
                  </label>
                ))}
              </div>

              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-stackers-yellow"
                    checked={drizzleOnTop}
                    onChange={handleDrizzleOnChange}
                  />
                  <span className="ml-2 text-gray-700">Drizzle on top</span>
                </label>
              </div>
            </>
          ) : item.name === 'Cheesecake Slices' ? (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">Flavor</h4>
              <input
                type="text"
                placeholder="Enter cheesecake flavor"
                className="w-full border border-gray-300 rounded-md p-2"
                value={cheesecakeFlavor}
                onChange={(e) => handleCheesecakeFlavorChange(e.target.value)}
              />
            </div>
          ) : item.name === 'Stackers\' Specials' ? (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">Select Special</h4>
              <Select onValueChange={handleStackersSpecialItemChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a special" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Waffle on a Stick">Waffle on a Stick</SelectItem>
                  <SelectItem value="Dubai Kunafa">Dubai Kunafa</SelectItem>
                  <SelectItem value="Churros (5)">Churros (5)</SelectItem>
                  <SelectItem value="Mini Pancakes (10)">Mini Pancakes (10)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ) : null}
        </>
      )}

      {category === 'Drinks' && ['Irn Bru', 'Pepsi', 'Coke', 'Sprite', 'Fanta', 'Rubicon'].includes(item.name) && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Size</h4>
          <div className="flex items-center">
            <button
              className={`px-4 py-2 rounded-full text-sm font-semibold ${drinkSize === '330ml' ? 'bg-stackers-yellow text-stackers-charcoal' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              onClick={() => handleDrinkSizeChange('330ml')}
            >
              330ml
            </button>
            <button
              className={`ml-2 px-4 py-2 rounded-full text-sm font-semibold ${drinkSize === '1.5L' ? 'bg-stackers-yellow text-stackers-charcoal' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              onClick={() => handleDrinkSizeChange('1.5L')}
            >
              1.5L
            </button>
          </div>
        </div>
      )}

      {item.name === 'Rubicon' && category === 'Drinks' && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Flavor</h4>
          <input
            type="text"
            placeholder="Enter Rubicon flavor"
            className="w-full border border-gray-300 rounded-md p-2"
            value={rubiconFlavor}
            onChange={(e) => handleRubiconFlavorChange(e.target.value)}
          />
        </div>
      )}

      {item.name === 'Fanta' && category === 'Drinks' && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Flavor</h4>
          <input
            type="text"
            placeholder="Enter Fanta flavor"
            className="w-full border border-gray-300 rounded-md p-2"
            value={fantaFlavor}
            onChange={(e) => handleFantaFlavorChange(e.target.value)}
          />
        </div>
      )}

      {item.name === 'Pepsi' && category === 'Drinks' && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Flavor</h4>
          <input
            type="text"
            placeholder="Enter Pepsi flavor"
            className="w-full border border-gray-300 rounded-md p-2"
            value={pepsiFlavor}
            onChange={(e) => handlePepsiFlavorChange(e.target.value)}
          />
        </div>
      )}

      {item.name === 'Coke' && category === 'Drinks' && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Flavor</h4>
          <input
            type="text"
            placeholder="Enter Coke flavor"
            className="w-full border border-gray-300 rounded-md p-2"
            value={cokeFlavor}
            onChange={(e) => handleCokeFlavorChange(e.target.value)}
          />
        </div>
      )}

      {category === 'Sauces & Dips' && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Select Sauces & Dips</h4>
          {['Ketchup', 'BBQ', 'Sweet Chilli', 'Mayo'].map((sauce) => (
            <label key={sauce} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-stackers-yellow"
                value={sauce}
                checked={selectedSaucesAndDips.includes(sauce)}
                onChange={() => handleSaucesAndDipsChange(sauce)}
              />
              <span className="ml-2 text-gray-700">{sauce}</span>
            </label>
          ))}
        </div>
      )}

      {item.name === 'Chicken Breasts' && category === 'Fried Gold' && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Quantity</h4>
          <RadioGroup defaultValue="1pc" className="flex gap-2" onValueChange={handleChickenBreastQuantityChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1pc" id="r1" />
              <label htmlFor="r1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">1 pc</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="2pc" id="r2" />
              <label htmlFor="r2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">2 pc</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="3pc" id="r3" />
              <label htmlFor="r3" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">3 pc</label>
            </div>
          </RadioGroup>
        </div>
      )}

      {showSpecialInstructions && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Special Instructions</h4>
          <textarea
            placeholder="Any special instructions for your order..."
            className="w-full border border-gray-300 rounded-md p-2 resize-none"
            rows={3}
            value={comment}
            onChange={handleCommentChange}
          />
        </div>
      )}

        <Button onClick={handleAddToBasket} className="w-full bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400 font-semibold">
          Add to Basket - {displayPrice()}
        </Button>
      </div>
    </div>
  );
};

export default MenuItemCard;
