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
import { 
  sweetStacksFlavors, 
  cheesecakeFlavors, 
  milkshakeFlavors, 
  pepsiFlavors,
  sweetDips,
  toppings
} from '@/data/menuData';

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
  const [pizzaSize, setPizzaSize] = useState('10"');
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

    // Handle milkshake pricing
    if (category === 'Milkshakes') {
      basePrice = milkshakeSize === 'regular' ? 4.75 : 5.00;
    }

    // Handle drinks pricing
    if (category === 'Drinks' && ['Irn Bru', 'Pepsi', 'Coke', 'Sprite', 'Fanta', 'Rubicon'].includes(item.name)) {
      basePrice = drinkSize === '330ml' ? 1.25 : 2.99;
    }

    // Handle pizza pricing
    if (showPizzaSize && pizzaSize === '12"') {
      basePrice += 3.00;
    }

    // Handle pizza customizations
    if (showCustomizations && selectedCustomizations.length > 0) {
      const customizationCost = pizzaSize === '10"' ? 1.00 : 1.50;
      basePrice += selectedCustomizations.length * customizationCost;
    }

    // Handle Sweet Stacks pricing
    if (item.category === 'Sweet Stacks') {
      if (item.name === 'Waffle' || item.name === 'Crepe' || item.name === 'Cookie Dough Delight') {
        basePrice = 6.50;
        
        // Add sweet dips pricing
        if (selectedSweetDips.length > 0) {
          basePrice += selectedSweetDips.length * 1.00;
        }

        // Add toppings pricing
        if (selectedToppings.length > 0) {
          basePrice += selectedToppings.length * 0.50;
        }
      } else if (item.name === 'Cheesecake Slices') {
        basePrice = 3.99;
      }
    }

    // Handle Sauces & Dips pricing
    if (category === 'Sauces & Dips') {
      basePrice = selectedSaucesAndDips.length * 0.70;
    }

    return `£${basePrice.toFixed(2)}`;
  };

  const resetForm = () => {
    setIsMeal(false);
    setComment('');
    setSideSize('regular');
    setMilkshakeSize('regular');
    setMilkshakeFlavor('');
    setPizzaSize('10"');
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

      {showPizzaSize && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Size</h4>
          <RadioGroup defaultValue="10"" className="flex gap-4" onValueChange={handlePizzaSizeChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="10"" id="pizza-10" />
              <label htmlFor="pizza-10" className="text-sm font-medium">10"</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="12"" id="pizza-12" />
              <label htmlFor="pizza-12" className="text-sm font-medium">12" (+£3.00)</label>
            </div>
          </RadioGroup>
        </div>
      )}

      {showCustomizations && customizations && customizations.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">
            Customizations ({pizzaSize === '10"' ? '£1.00' : '£1.50'} each)
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {customizations.map((customization) => (
              <label key={customization} className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-stackers-yellow"
                  value={customization}
                  checked={selectedCustomizations.includes(customization)}
                  onChange={() => handleCustomizationChange(customization)}
                />
                <span className="ml-2 text-gray-700 text-sm">{customization}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {showSizeOptions && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Size</h4>
          <RadioGroup defaultValue="regular" className="flex gap-4" onValueChange={handleSideSizeChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="regular" id="side-regular" />
              <label htmlFor="side-regular" className="text-sm font-medium">Regular</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="large" id="side-large" />
              <label htmlFor="side-large" className="text-sm font-medium">Large (+£1.00)</label>
            </div>
          </RadioGroup>
        </div>
      )}

      {category === 'Milkshakes' && (
        <>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">Size</h4>
            <RadioGroup defaultValue="regular" className="flex gap-4" onValueChange={handleMilkshakeSizeChange}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="regular" id="milkshake-regular" />
                <label htmlFor="milkshake-regular" className="text-sm font-medium">Regular (£4.75)</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="large" id="milkshake-large" />
                <label htmlFor="milkshake-large" className="text-sm font-medium">Large (£5.00)</label>
              </div>
            </RadioGroup>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">Flavor</h4>
            <RadioGroup onValueChange={handleMilkshakeFlavorChange}>
              <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                {milkshakeFlavors.map((flavor) => (
                  <div key={flavor} className="flex items-center space-x-2">
                    <RadioGroupItem value={flavor} id={`milkshake-${flavor}`} />
                    <label htmlFor={`milkshake-${flavor}`} className="text-sm font-medium">{flavor}</label>
                  </div>
                ))}
              </div>
            </RadioGroup>
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

      {category === 'Ice Creams' && (
        <>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">Number of Scoops</h4>
            <RadioGroup defaultValue="1" className="flex gap-4" onValueChange={(value) => handleIceCreamScoopsChange(parseInt(value))}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1" id="scoop-1" />
                <label htmlFor="scoop-1" className="text-sm font-medium">1 Scoop (£2.50)</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="2" id="scoop-2" />
                <label htmlFor="scoop-2" className="text-sm font-medium">2 Scoops (£3.75)</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="3" id="scoop-3" />
                <label htmlFor="scoop-3" className="text-sm font-medium">3 Scoops (£4.75)</label>
              </div>
            </RadioGroup>
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
                <RadioGroup onValueChange={handleWaffleFlavorChange}>
                  {sweetStacksFlavors.map((flavor) => (
                    <div key={flavor.name} className="flex items-start space-x-2 mb-2">
                      <RadioGroupItem value={`${flavor.name}: ${flavor.description}`} id={`flavor-${flavor.name}`} className="mt-1" />
                      <label htmlFor={`flavor-${flavor.name}`} className="text-sm">
                        <span className="font-medium">{flavor.name}:</span> {flavor.description}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Sweet Dips (£1.00 each)</h4>
                {sweetDips.map((dip) => (
                  <label key={dip} className="inline-flex items-center mr-4 mb-2">
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
                <h4 className="font-semibold text-gray-700 mb-2">Toppings (£0.50 each)</h4>
                {toppings.map((topping) => (
                  <label key={topping} className="inline-flex items-center mr-4 mb-2">
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
                  <span className="ml-2 text-gray-700 font-semibold">Drizzle on top</span>
                </label>
              </div>
            </>
          ) : item.name === 'Cheesecake Slices' ? (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">Flavor (£3.99)</h4>
              <RadioGroup onValueChange={handleCheesecakeFlavorChange}>
                {cheesecakeFlavors.map((flavor) => (
                  <div key={flavor} className="flex items-center space-x-2">
                    <RadioGroupItem value={flavor} id={`cheesecake-${flavor}`} />
                    <label htmlFor={`cheesecake-${flavor}`} className="text-sm font-medium">{flavor}</label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ) : item.name === 'Stackers\' Specials' ? (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">Select Special</h4>
              <RadioGroup onValueChange={handleStackersSpecialItemChange}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Waffle on a Stick" id="special-waffle" />
                  <label htmlFor="special-waffle" className="text-sm font-medium">Waffle on a Stick (£4.99)</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Dubai Kunafa" id="special-kunafa" />
                  <label htmlFor="special-kunafa" className="text-sm font-medium">Dubai Kunafa (£6.50)</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Churros (5)" id="special-churros" />
                  <label htmlFor="special-churros" className="text-sm font-medium">Churros (5) (£5.50)</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Mini Pancakes (10)" id="special-pancakes" />
                  <label htmlFor="special-pancakes" className="text-sm font-medium">Mini Pancakes (10) (£6.50)</label>
                </div>
              </RadioGroup>
            </div>
          ) : null}
        </>
      )}

      {category === 'Drinks' && ['Irn Bru', 'Pepsi', 'Coke', 'Sprite', 'Fanta', 'Rubicon'].includes(item.name) && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Size</h4>
          <RadioGroup defaultValue="330ml" className="flex gap-4" onValueChange={handleDrinkSizeChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="330ml" id="drink-330ml" />
              <label htmlFor="drink-330ml" className="text-sm font-medium">330ml (£1.25)</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1.5L" id="drink-1.5L" />
              <label htmlFor="drink-1.5L" className="text-sm font-medium">1.5L (£2.99)</label>
            </div>
          </RadioGroup>
        </div>
      )}

      {item.name === 'Pepsi' && category === 'Drinks' && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Flavor</h4>
          <RadioGroup onValueChange={handlePepsiFlavorChange}>
            {pepsiFlavors.map((flavor) => (
              <div key={flavor} className="flex items-center space-x-2">
                <RadioGroupItem value={flavor} id={`pepsi-${flavor}`} />
                <label htmlFor={`pepsi-${flavor}`} className="text-sm font-medium">{flavor}</label>
              </div>
            ))}
          </RadioGroup>
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
          <h4 className="font-semibold text-gray-700 mb-2">Select Sauces & Dips (£0.70 each)</h4>
          {['Ketchup', 'BBQ', 'Sweet Chilli', 'Mayo'].map((sauce) => (
            <label key={sauce} className="inline-flex items-center mr-4 mb-2">
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
          <RadioGroup defaultValue="1pc" className="flex gap-4" onValueChange={handleChickenBreastQuantityChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1pc" id="chicken-1pc" />
              <label htmlFor="chicken-1pc" className="text-sm font-medium">1 pc (£2.50)</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="2pc" id="chicken-2pc" />
              <label htmlFor="chicken-2pc" className="text-sm font-medium">2 pc (£3.50)</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="3pc" id="chicken-3pc" />
              <label htmlFor="chicken-3pc" className="text-sm font-medium">3 pc (£4.50)</label>
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
