import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { MenuItem } from '@/data/menuData';
import { milkshakeFlavours, iceCreamFlavours, rubiconFlavours } from '@/data/menuData';

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
    rubiconFlavor?: string
  ) => void;
}

const sweetStacksFlavors = [
  'Banoffee Bliss: Fresh banana slices, drizzled in warm Nutella and rich toffee sauce, finished with a sprinkle of crunchy chopped nuts.',
  'Biscoff Dream: Loaded with Biscoff pieces, drizzled in luscious Biscoff and Belgian chocolate sauce, then topped with a dusting of Biscoff crumbs and delicate white chocolate curls.',
  'Bueno Bash: Indulgent Kinder Bueno pieces, drizzled with creamy white and milk chocolate sauces, and finished with rich chocolate shavings.',
  'Cookies & Cream Craze: Chunky Oreo pieces, drizzled in smooth milk chocolate sauce.',
  'Stackers\' Royal Delight: Juicy strawberries topped with Ferrero Rocher OR Raffaello, generously drizzled with warm Belgian chocolate OR silky Nutella.'
];

const sweetDipOptions = [
  'Belgian Chocolate', 'Nutella', 'Biscoff', 'Pistachio', 'White Chocolate',
  'Milk Chocolate', 'Mango', 'Strawberry', 'Raspberry', 'Toffee',
  'Caramel', 'Mint', 'Bubblegum'
];

const toppingOptions = [
  'Mini Marshmallows', 'Fudge Cube', 'White Chocolate Flakes', 'Crushed Oreo',
  'Malteaser', 'Crispy M&M\'s', 'Nuts'
];

const cheesecakeFlavors = [
  'Strawberry', 'Biscoff', 'Oreo', 'Kinder', 'Chocolate', 'Banoffee pie'
];

const stackersSpecialItems = [
  { name: 'Waffle on a Stick', price: 4.99, description: 'Crispy waffle on a stick, perfect for dipping and enjoying on the go.' },
  { name: 'Dubai Kunafa', price: 6.50, description: 'Traditional Middle Eastern dessert with crispy pastry, sweet cheese filling, and fragrant syrup.' },
  { name: 'Churros (5)', price: 5.50, description: 'Five golden churros dusted with cinnamon sugar, served warm and crispy.' },
  { name: 'Mini Pancakes (10)', price: 6.50, description: 'Ten fluffy mini pancakes, perfect for sharing and customizing with your favorite toppings.' }
];

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
  const [selectedCustomizations, setSelectedCustomizations] = useState<string[]>([]);
  const [isMeal, setIsMeal] = useState(false);
  const [comment, setComment] = useState('');
  const [sideSize, setSideSize] = useState<'regular' | 'large'>('regular');
  const [milkshakeSize, setMilkshakeSize] = useState<'regular' | 'large'>('regular');
  const [milkshakeFlavor, setMilkshakeFlavor] = useState('Oreo');
  const [pizzaSize, setPizzaSize] = useState<'10"' | '12"'>('10"');
  const [iceCreamScoops, setIceCreamScoops] = useState<1 | 2 | 3>(1);
  const [selectedIceCreamFlavors, setSelectedIceCreamFlavors] = useState<string[]>([]);
  const [drizzleOnTop, setDrizzleOnTop] = useState(false);
  const [drinkSize, setDrinkSize] = useState<'330ml' | '1.5L'>('330ml');
  const [rubiconFlavor, setRubiconFlavor] = useState<string>('Mango');

  // Sweet Stacks states
  const [sweetStacksFlavor, setSweetStacksFlavor] = useState<string>('');
  const [selectedSweetDips, setSelectedSweetDips] = useState<string[]>([]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);

  // Cheesecake and Stackers' Specials states
  const [cheesecakeFlavor, setCheesecakeFlavor] = useState<string>('Strawberry');
  const [stackersSpecialItem, setStackersSpecialItem] = useState<string>('Waffle on a Stick');

  const handleCustomizationChange = (customization: string, checked: boolean) => {
    if (checked) {
      setSelectedCustomizations(prev => [...prev, customization]);
    } else {
      setSelectedCustomizations(prev => prev.filter(c => c !== customization));
    }
  };

  const handleIceCreamFlavorChange = (flavor: string, checked: boolean) => {
    if (checked) {
      setSelectedIceCreamFlavors(prev => [...prev, flavor]);
    } else {
      setSelectedIceCreamFlavors(prev => prev.filter(f => f !== flavor));
    }
  };

  const handleSweetDipChange = (dip: string, checked: boolean) => {
    if (checked) {
      setSelectedSweetDips(prev => [...prev, dip]);
    } else {
      setSelectedSweetDips(prev => prev.filter(d => d !== dip));
    }
  };

  const handleToppingChange = (topping: string, checked: boolean) => {
    if (checked) {
      setSelectedToppings(prev => [...prev, topping]);
    } else {
      setSelectedToppings(prev => prev.filter(t => t !== topping));
    }
  };

  const renderIceCreamFlavorCheckboxes = () => {
    const checkboxes = [];
    
    for (let i = 0; i < iceCreamScoops; i++) {
      checkboxes.push(
        <div key={`scoop-${i}`} className="mb-4">
          <p className="font-medium mb-2 text-stackers-charcoal">
            Scoop {i + 1} Flavour:
          </p>
          <div className="grid grid-cols-2 gap-2">
            {iceCreamFlavours.map((flavor) => (
              <div key={`${flavor}-${i}`} className="flex items-center space-x-2">
                <Checkbox
                  id={`${item.name}-ice-${flavor}-${i}`}
                  checked={selectedIceCreamFlavors[i] === flavor}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      const newFlavors = [...selectedIceCreamFlavors];
                      newFlavors[i] = flavor;
                      setSelectedIceCreamFlavors(newFlavors);
                    } else {
                      const newFlavors = [...selectedIceCreamFlavors];
                      newFlavors[i] = '';
                      setSelectedIceCreamFlavors(newFlavors);
                    }
                  }}
                />
                <Label htmlFor={`${item.name}-ice-${flavor}-${i}`} className="text-xs">
                  {flavor}
                </Label>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    return checkboxes;
  };

  const handleAddToBasket = () => {
    let finalSweetStacksType = '';
    let finalSweetStacksFlavor = sweetStacksFlavor;

    // Handle different Sweet Stacks items
    if (item.name === 'Waffle') {
      finalSweetStacksType = 'Waffles';
    } else if (item.name === 'Crepe') {
      finalSweetStacksType = 'Crepes';
    } else if (item.name === 'Cookie Dough Delight') {
      finalSweetStacksType = 'Cookie Dough';
    } else if (item.name === 'Cheesecake Slices') {
      finalSweetStacksType = 'Cheesecake';
      finalSweetStacksFlavor = cheesecakeFlavor;
    } else if (item.name === 'Stackers\' Specials') {
      finalSweetStacksType = 'Stackers\' Specials';
      finalSweetStacksFlavor = stackersSpecialItem;
    }

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
      category === 'Ice Creams' && selectedIceCreamFlavors.length > 0 ? selectedIceCreamFlavors : undefined,
      finalSweetStacksType || undefined,
      finalSweetStacksFlavor || undefined,
      showSweetStacks && selectedSweetDips.length > 0 ? selectedSweetDips : undefined,
      showSweetStacks && selectedToppings.length > 0 ? selectedToppings : undefined,
      drizzleOnTop,
      category === 'Drinks' && ['Irn Bru', 'Pepsi', 'Coke', 'Sprite', 'Fanta', 'Rubicon'].includes(item.name) ? drinkSize : undefined,
      item.name === 'Rubicon' ? rubiconFlavor : undefined
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
    setSweetStacksFlavor('');
    setSelectedSweetDips([]);
    setSelectedToppings([]);
    setCheesecakeFlavor('Strawberry');
    setStackersSpecialItem('Waffle on a Stick');
    setDrizzleOnTop(false);
    setDrinkSize('330ml');
    setRubiconFlavor('Mango');
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

    // Drinks pricing based on size
    if (category === 'Drinks' && ['Irn Bru', 'Pepsi', 'Coke', 'Sprite', 'Fanta', 'Rubicon'].includes(item.name)) {
      basePrice = drinkSize === '330ml' ? 1.25 : 2.99;
    }

    // Sweet Stacks pricing
    if (showSweetStacks) {
      // Handle different Sweet Stacks items
      if (item.name === 'Waffle' || item.name === 'Crepe' || item.name === 'Cookie Dough Delight') {
        basePrice = 6.50; // Base price for Waffles, Crepes, Cookie Dough
      } else if (item.name === 'Cheesecake Slices') {
        basePrice = 3.99; // Fixed price for cheesecake
      } else if (item.name === 'Stackers\' Specials') {
        const selectedItem = stackersSpecialItems.find(special => special.name === stackersSpecialItem);
        basePrice = selectedItem ? selectedItem.price : 4.99;
      }

      // Add sweet dips and toppings pricing only for customizable items
      if (item.name !== 'Cheesecake Slices' && item.name !== 'Stackers\' Specials') {
        basePrice += selectedSweetDips.length * 1.00; // £1 per sweet dip
        basePrice += selectedToppings.length * 0.50; // £0.50 per topping
      }
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

  const isButtonDisabled = () => {
    if (category === 'Ice Creams' && selectedIceCreamFlavors.length !== iceCreamScoops) {
      return true;
    }

    if (showSweetStacks) {
      // For customizable Sweet Stacks items, require flavor selection
      if ((item.name === 'Waffle' || item.name === 'Crepe' || item.name === 'Cookie Dough Delight') && !sweetStacksFlavor) {
        return true;
      }
    }

    return false;
  };

  // Determine which categories should show customer instructions
  const shouldShowCustomerInstructions = ['Smash Burgers', 'Chicken Burgers', 'Wraps', 'Pizzas', 'Sweet Stacks', 'Ice Creams'].includes(category);
  
  // Special logic for Sweet Stacks - don't show for Cheesecake Slices
  const shouldShowSweetStacksInstructions = category === 'Sweet Stacks' && item.name !== 'Cheesecake Slices';

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
        
        {/* Only show price and Add to Order button if item has a price */}
        {item.price && (
          <p className="text-2xl font-bold text-stackers-yellow mb-4">{displayPrice()}</p>
        )}

        {/* Drinks size selection for specific items */}
        {category === 'Drinks' && ['Irn Bru', 'Pepsi', 'Coke', 'Sprite', 'Fanta'].includes(item.name) && (
          <div className="mb-4">
            <p className="font-medium mb-2 text-stackers-charcoal">Size:</p>
            <RadioGroup value={drinkSize} onValueChange={(value: string) => setDrinkSize(value as '330ml' | '1.5L')}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="330ml" id={`${item.name}-330ml`} />
                <Label htmlFor={`${item.name}-330ml`} className="text-sm">330ml Can (£1.25)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1.5L" id={`${item.name}-1.5L`} />
                <Label htmlFor={`${item.name}-1.5L`} className="text-sm">1.5L (£2.99)</Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {/* Rubicon flavor and size selection */}
        {item.name === 'Rubicon' && (
          <>
            <div className="mb-4">
              <p className="font-medium mb-2 text-stackers-charcoal">Flavour:</p>
              <RadioGroup value={rubiconFlavor} onValueChange={setRubiconFlavor}>
                {rubiconFlavours.map((flavor) => (
                  <div key={flavor} className="flex items-center space-x-2">
                    <RadioGroupItem value={flavor} id={`${item.name}-${flavor}`} />
                    <Label htmlFor={`${item.name}-${flavor}`} className="text-sm">{flavor}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div className="mb-4">
              <p className="font-medium mb-2 text-stackers-charcoal">Size:</p>
              <RadioGroup value="330ml" onValueChange={() => {}}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="330ml" id={`${item.name}-330ml-only`} />
                  <Label htmlFor={`${item.name}-330ml-only`} className="text-sm">330ml Can (£1.25)</Label>
                </div>
              </RadioGroup>
            </div>
          </>
        )}

        {/* Sweet Stacks customization sections */}
        {showSweetStacks && (item.name === 'Waffle' || item.name === 'Crepe' || item.name === 'Cookie Dough Delight') && (
          <>
            <div className="mb-4">
              <p className="font-medium mb-2 text-stackers-charcoal">Flavour:</p>
              <RadioGroup value={sweetStacksFlavor} onValueChange={setSweetStacksFlavor}>
                {sweetStacksFlavors.map((flavor) => {
                  const flavorName = flavor.split(':')[0];
                  return (
                    <div key={flavor} className="flex items-start space-x-2 mb-2">
                      <RadioGroupItem value={flavor} id={`${item.name}-${flavorName}`} className="mt-1" />
                      <Label htmlFor={`${item.name}-${flavorName}`} className="text-xs leading-relaxed">{flavor}</Label>
                    </div>
                  );
                })}
              </RadioGroup>
            </div>

            <div className="mb-4">
              <p className="font-medium mb-2 text-stackers-charcoal">Sweet Dips (£1.00 each):</p>
              <div className="grid grid-cols-2 gap-2">
                {sweetDipOptions.map((dip) => (
                  <div key={dip} className="flex items-center space-x-2">
                    <Checkbox
                      id={`${item.name}-dip-${dip}`}
                      checked={selectedSweetDips.includes(dip)}
                      onCheckedChange={(checked) => handleSweetDipChange(dip, !!checked)}
                    />
                    <Label htmlFor={`${item.name}-dip-${dip}`} className="text-xs">{dip}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="font-medium mb-2 text-stackers-charcoal">Toppings (£0.50 each):</p>
              <div className="grid grid-cols-2 gap-2">
                {toppingOptions.map((topping) => (
                  <div key={topping} className="flex items-center space-x-2">
                    <Checkbox
                      id={`${item.name}-topping-${topping}`}
                      checked={selectedToppings.includes(topping)}
                      onCheckedChange={(checked) => handleToppingChange(topping, !!checked)}
                    />
                    <Label htmlFor={`${item.name}-topping-${topping}`} className="text-xs">{topping}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`${item.name}-drizzle`}
                  checked={drizzleOnTop}
                  onCheckedChange={(checked) => setDrizzleOnTop(!!checked)}
                />
                <Label htmlFor={`${item.name}-drizzle`} className="text-sm font-bold">
                  Drizzle on top
                </Label>
              </div>
            </div>
          </>
        )}

        {showSweetStacks && item.name === 'Cheesecake Slices' && (
          <div className="mb-4">
            <p className="font-medium mb-2 text-stackers-charcoal">Flavour:</p>
            <RadioGroup value={cheesecakeFlavor} onValueChange={setCheesecakeFlavor}>
              {cheesecakeFlavors.map((flavor) => (
                <div key={flavor} className="flex items-center space-x-2">
                  <RadioGroupItem value={flavor} id={`${item.name}-${flavor}`} />
                  <Label htmlFor={`${item.name}-${flavor}`} className="text-sm">{flavor}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}

        {showSweetStacks && item.name === 'Stackers\' Specials' && (
          <div className="mb-4">
            <p className="font-medium mb-2 text-stackers-charcoal">Choose your special:</p>
            <RadioGroup value={stackersSpecialItem} onValueChange={setStackersSpecialItem}>
              {stackersSpecialItems.map((special) => (
                <div key={special.name} className="flex items-start space-x-2 mb-2">
                  <RadioGroupItem value={special.name} id={`${item.name}-${special.name}`} className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor={`${item.name}-${special.name}`} className="text-sm font-medium">
                      {special.name} - £{special.price.toFixed(2)}
                    </Label>
                    <p className="text-xs text-gray-500 mt-1">{special.description}</p>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}

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
              Customisations {showPizzaSize && `(${pizzaSize === '10"' ? '£1.00' : '£1.50'} each):`}
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
              <p className="font-medium mb-2 text-stackers-charcoal">Flavour:</p>
              <RadioGroup value={milkshakeFlavor} onValueChange={setMilkshakeFlavor}>
                <div className="grid grid-cols-2 gap-2">
                  {milkshakeFlavours.map((flavor) => (
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
                // Reset selected flavors when scoop count changes
                setSelectedIceCreamFlavors([]);
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
            
            {renderIceCreamFlavorCheckboxes()}
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

        {/* Customer Instructions - Updated logic */}
        {shouldShowCustomerInstructions && (category !== 'Sweet Stacks' || shouldShowSweetStacksInstructions) && (
          <div className="mb-4">
            <Label className="text-sm font-medium mb-2 block">Customer instructions:</Label>
            <Textarea
              placeholder="Any special requests..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={2}
              className="w-full resize-none text-sm"
            />
          </div>
        )}

        {/* Only show Add to Order button if item has a price */}
        {item.price && (
          <Button
            onClick={handleAddToBasket}
            className="w-full bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400 font-bold py-3"
            disabled={isButtonDisabled()}
          >
            Add to Order
          </Button>
        )}
      </div>
    </div>
  );
};

export default MenuItemCard;
