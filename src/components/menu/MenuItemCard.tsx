import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Plus } from 'lucide-react';
import { 
  MenuItem,
  sweetStacksFlavors,
  cheesecakeFlavors,
  milkshakeFlavors,
  sweetDips,
  toppings,
  rubiconFlavours,
  fantaFlavours,
  pepsiFlavors,
  cokeFlavours,
  saucesAndDipsList
} from '@/data/menuData';

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
  const [selectedCustomizations, setSelectedCustomizations] = useState<string[]>([]);
  const [comment, setComment] = useState('');
  const [sideSize, setSideSize] = useState<'regular' | 'large'>('regular');
  const [milkshakeSize, setMilkshakeSize] = useState<'regular' | 'large'>('regular');
  const [milkshakeFlavor, setMilkshakeFlavor] = useState('');
  const [milkshakeComment, setMilkshakeComment] = useState('');
  const [pizzaSize, setPizzaSize] = useState('10&quot;');
  const [iceCreamScoops, setIceCreamScoops] = useState(1);
  const [iceCreamFlavors, setIceCreamFlavors] = useState<string[]>([]);
  const [sweetStacksType, setSweetStacksType] = useState('');
  const [sweetStacksFlavor, setSweetStacksFlavor] = useState('');
  const [selectedSweetDips, setSelectedSweetDips] = useState<string[]>([]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [drizzleOnTop, setDrizzleOnTop] = useState(false);
  const [drinkSize, setDrinkSize] = useState<'330ml' | '1.5L'>('330ml');
  const [rubiconFlavor, setRubiconFlavor] = useState('');
  const [fantaFlavor, setFantaFlavor] = useState('');
  const [pepsiFlavor, setPepsiFlavor] = useState('');
  const [cokeFlavor, setCokeFlavor] = useState('');
  const [selectedSaucesAndDips, setSelectedSaucesAndDips] = useState<string[]>([]);
  const [chickenBreastQuantity, setChickenBreastQuantity] = useState<'1pc' | '2pc' | '3pc'>('1pc');

  const handleCustomizationChange = (customization: string, checked: boolean) => {
    if (checked) {
      setSelectedCustomizations([...selectedCustomizations, customization]);
    } else {
      setSelectedCustomizations(selectedCustomizations.filter(c => c !== customization));
    }
  };

  const handleIceCreamFlavorChange = (flavor: string, checked: boolean) => {
    if (checked) {
      if (iceCreamFlavors.length < iceCreamScoops) {
        setIceCreamFlavors([...iceCreamFlavors, flavor]);
      }
    } else {
      // Remove only the first occurrence of the flavor
      const index = iceCreamFlavors.indexOf(flavor);
      if (index > -1) {
        const newFlavors = [...iceCreamFlavors];
        newFlavors.splice(index, 1);
        setIceCreamFlavors(newFlavors);
      }
    }
  };

  const handleSweetDipChange = (dip: string, checked: boolean) => {
    if (checked) {
      setSelectedSweetDips([...selectedSweetDips, dip]);
    } else {
      setSelectedSweetDips(selectedSweetDips.filter(d => d !== dip));
    }
  };

  const handleToppingChange = (topping: string, checked: boolean) => {
    if (checked) {
      setSelectedToppings([...selectedToppings, topping]);
    } else {
      setSelectedToppings(selectedToppings.filter(t => t !== topping));
    }
  };

  const handleSauceAndDipChange = (sauce: string, checked: boolean) => {
    if (checked) {
      setSelectedSaucesAndDips([...selectedSaucesAndDips, sauce]);
    } else {
      setSelectedSaucesAndDips(selectedSaucesAndDips.filter(s => s !== sauce));
    }
  };

  const calculatePrice = () => {
    let basePrice = parseFloat(item.price.replace('£', ''));

    // Handle Chicken Breasts pricing
    if (item.name === 'Chicken Breasts') {
      if (chickenBreastQuantity === '1pc') basePrice = 2.50;
      else if (chickenBreastQuantity === '2pc') basePrice = 3.50;
      else if (chickenBreastQuantity === '3pc') basePrice = 4.50;
    }

    // Handle meal pricing
    if (isMeal) {
      basePrice += 2.50;
    }

    // Handle side size pricing
    if (sideSize === 'large') {
      basePrice += 1.00;
    }

    // Handle milkshake pricing
    if (category === 'Milkshakes') {
      basePrice = milkshakeSize === 'regular' ? 4.75 : 5.00;
    }

    // Handle drinks pricing
    if (category === 'Drinks' && ['Irn Bru', 'Pepsi', 'Coke', 'Sprite', 'Fanta', 'Rubicon'].includes(item.name)) {
      basePrice = drinkSize === '330ml' ? 1.25 : 2.99;
    }

    // Handle ice cream pricing
    if (category === 'Ice Creams') {
      if (iceCreamScoops === 1) basePrice = 2.50;
      else if (iceCreamScoops === 2) basePrice = 3.75;
      else if (iceCreamScoops === 3) basePrice = 4.75;
    }

    // Handle Sweet Stacks pricing
    if (category === 'Sweet Stacks') {
      if (item.name === 'Waffle' || item.name === 'Crepe' || item.name === 'Cookie Dough Delight') {
        basePrice = 6.50;
        basePrice += selectedSweetDips.length * 1.00;
        basePrice += selectedToppings.length * 0.50;
      } else if (item.name === 'Cheesecake Slices') {
        basePrice = 3.99;
      }
    }

    // Handle pizza pricing
    if (showPizzaSize) {
      if (pizzaSize === '12&quot;') {
        basePrice += 3.00;
      }
      if (selectedCustomizations.length > 0) {
        const customizationCost = pizzaSize === '10&quot;' ? 1.00 : 1.50;
        basePrice += selectedCustomizations.length * customizationCost;
      }
    }

    // Handle Sauces & Dips pricing
    if (category === 'Sauces & Dips') {
      basePrice = selectedSaucesAndDips.length * 0.70;
    }

    return basePrice.toFixed(2);
  };

  const handleAddToBasket = () => {
    // Validation for required fields
    if (category === 'Milkshakes' && !milkshakeFlavor) {
      alert('Please select a milkshake flavour');
      return;
    }

    if (category === 'Sweet Stacks' && (item.name === 'Waffle' || item.name === 'Crepe' || item.name === 'Cookie Dough Delight') && !sweetStacksFlavor) {
      alert('Please select a flavour');
      return;
    }

    if (category === 'Sweet Stacks' && item.name === 'Cheesecake Slices' && !sweetStacksFlavor) {
      alert('Please select a cheesecake flavour');
      return;
    }

    if (category === 'Ice Creams' && iceCreamFlavors.length < iceCreamScoops) {
      alert(`Please select ${iceCreamScoops} ice cream flavour${iceCreamScoops > 1 ? 's' : ''}`);
      return;
    }

    if (item.name === 'Rubicon' && !rubiconFlavor) {
      alert('Please select a Rubicon flavour');
      return;
    }

    if (item.name === 'Fanta' && !fantaFlavor) {
      alert('Please select a Fanta flavour');
      return;
    }

    if (item.name === 'Pepsi' && !pepsiFlavor) {
      alert('Please select a Pepsi flavour');
      return;
    }

    if (item.name === 'Coke' && !cokeFlavor) {
      alert('Please select a Coke flavour');
      return;
    }

    if (category === 'Sauces & Dips' && selectedSaucesAndDips.length === 0) {
      alert('Please select at least one sauce or dip');
      return;
    }

    onAddToBasket(
      item,
      isMeal,
      selectedCustomizations.length > 0 ? selectedCustomizations : undefined,
      comment || undefined,
      sideSize,
      milkshakeSize,
      milkshakeFlavor || undefined,
      showPizzaSize ? pizzaSize : undefined,
      iceCreamScoops,
      iceCreamFlavors.length > 0 ? iceCreamFlavors : undefined,
      sweetStacksType || undefined,
      sweetStacksFlavor || undefined,
      selectedSweetDips.length > 0 ? selectedSweetDips : undefined,
      selectedToppings.length > 0 ? selectedToppings : undefined,
      drizzleOnTop,
      drinkSize,
      rubiconFlavor || undefined,
      milkshakeComment || undefined,
      fantaFlavor || undefined,
      pepsiFlavor || undefined,
      cokeFlavor || undefined,
      selectedSaucesAndDips.length > 0 ? selectedSaucesAndDips : undefined,
      chickenBreastQuantity
    );

    // Reset form
    setIsMeal(false);
    setSelectedCustomizations([]);
    setComment('');
    setSideSize('regular');
    setMilkshakeSize('regular');
    setMilkshakeFlavor('');
    setMilkshakeComment('');
    setPizzaSize('10&quot;');
    setIceCreamScoops(1);
    setIceCreamFlavors([]);
    setSweetStacksType('');
    setSweetStacksFlavor('');
    setSelectedSweetDips([]);
    setSelectedToppings([]);
    setDrizzleOnTop(false);
    setDrinkSize('330ml');
    setRubiconFlavor('');
    setFantaFlavor('');
    setPepsiFlavor('');
    setCokeFlavor('');
    setSelectedSaucesAndDips([]);
    setChickenBreastQuantity('1pc');
  };

  // Don't show "Add to Basket" button for Student Deals
  const isStudentDealsCategory = category === 'Student Deals' || category === 'Blue Card Holders';

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="aspect-video relative overflow-hidden rounded-lg">
          <img
            src={item.image}
            alt={item.name}
            className="object-cover w-full h-full"
          />
        </div>
        <CardTitle className="text-lg">{item.name}</CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {item.description}
        </CardDescription>
        {!isStudentDealsCategory && (
          <div className="text-xl font-bold text-stackers-yellow">
            £{calculatePrice()}
          </div>
        )}
      </CardHeader>

      <CardContent className="flex-1">
        {/* Chicken Breasts Quantity Selection */}
        {item.name === 'Chicken Breasts' && (
          <div className="mb-4">
            <Label className="text-sm font-medium mb-2 block">Quantity</Label>
            <RadioGroup value={chickenBreastQuantity} onValueChange={(value: '1pc' | '2pc' | '3pc') => setChickenBreastQuantity(value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1pc" id="1pc" />
                <Label htmlFor="1pc">1 piece (£2.50)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="2pc" id="2pc" />
                <Label htmlFor="2pc">2 pieces (£3.50)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="3pc" id="3pc" />
                <Label htmlFor="3pc">3 pieces (£4.50)</Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {/* Milkshake Options */}
        {category === 'Milkshakes' && (
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium mb-2 block">Size</Label>
              <RadioGroup value={milkshakeSize} onValueChange={(value: 'regular' | 'large') => setMilkshakeSize(value)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="regular" id="milkshake-regular" />
                  <Label htmlFor="milkshake-regular">Regular (£4.75)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="large" id="milkshake-large" />
                  <Label htmlFor="milkshake-large">Large (£5.00)</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="text-sm font-medium mb-2 block">Flavour *</Label>
              <RadioGroup value={milkshakeFlavor} onValueChange={setMilkshakeFlavor}>
                {milkshakeFlavors.map((flavor) => (
                  <div key={flavor} className="flex items-center space-x-2">
                    <RadioGroupItem value={flavor} id={`flavor-${flavor}`} />
                    <Label htmlFor={`flavor-${flavor}`}>{flavor}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="milkshake-comment" className="text-sm font-medium">Special Instructions</Label>
              <Textarea
                id="milkshake-comment"
                placeholder="Any special requests..."
                value={milkshakeComment}
                onChange={(e) => setMilkshakeComment(e.target.value)}
                className="mt-1"
              />
            </div>
          </div>
        )}

        {/* Sweet Stacks Options */}
        {showSweetStacks && (
          <div className="space-y-4">
            {(item.name === 'Waffle' || item.name === 'Crepe' || item.name === 'Cookie Dough Delight') && (
              <>
                <div>
                  <Label className="text-sm font-medium mb-2 block">Flavour *</Label>
                  <RadioGroup value={sweetStacksFlavor} onValueChange={(value) => {
                    setSweetStacksFlavor(value);
                    setSweetStacksType(item.name);
                  }}>
                    {sweetStacksFlavors.map((flavor) => (
                      <div key={flavor.name} className="flex items-start space-x-2">
                        <RadioGroupItem value={`${flavor.name}: ${flavor.description}`} id={`sweet-${flavor.name}`} className="mt-1" />
                        <Label htmlFor={`sweet-${flavor.name}`} className="text-sm">
                          <span className="font-medium">{flavor.name}</span>
                          <br />
                          <span className="text-gray-600">{flavor.description}</span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-sm font-medium mb-2 block">Sweet Dips (£1.00 each)</Label>
                  <div className="space-y-2">
                    {sweetDips.map((dip) => (
                      <div key={dip} className="flex items-center space-x-2">
                        <Checkbox
                          id={`dip-${dip}`}
                          checked={selectedSweetDips.includes(dip)}
                          onCheckedChange={(checked) => handleSweetDipChange(dip, checked as boolean)}
                        />
                        <Label htmlFor={`dip-${dip}`}>{dip}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium mb-2 block">Toppings (£0.50 each)</Label>
                  <div className="space-y-2">
                    {toppings.map((topping) => (
                      <div key={topping} className="flex items-center space-x-2">
                        <Checkbox
                          id={`topping-${topping}`}
                          checked={selectedToppings.includes(topping)}
                          onCheckedChange={(checked) => handleToppingChange(topping, checked as boolean)}
                        />
                        <Label htmlFor={`topping-${topping}`}>{topping}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="drizzle-on-top"
                    checked={drizzleOnTop}
                    onCheckedChange={(checked) => setDrizzleOnTop(checked as boolean)}
                  />
                  <Label htmlFor="drizzle-on-top" className="font-medium">Drizzle on top</Label>
                </div>
              </>
            )}

            {item.name === 'Cheesecake Slices' && (
              <div>
                <Label className="text-sm font-medium mb-2 block">Flavour *</Label>
                <RadioGroup value={sweetStacksFlavor} onValueChange={setSweetStacksFlavor}>
                  {cheesecakeFlavors.map((flavor) => (
                    <div key={flavor} className="flex items-center space-x-2">
                      <RadioGroupItem value={flavor} id={`cheesecake-${flavor}`} />
                      <Label htmlFor={`cheesecake-${flavor}`}>{flavor}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}
          </div>
        )}

        {/* Ice Cream Options - Updated to allow duplicate flavours */}
        {category === 'Ice Creams' && (
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium mb-2 block">Number of Scoops</Label>
              <RadioGroup value={iceCreamScoops.toString()} onValueChange={(value) => {
                const scoops = parseInt(value);
                setIceCreamScoops(scoops);
                // Reset flavours if reducing scoops
                if (scoops < iceCreamFlavors.length) {
                  setIceCreamFlavors(iceCreamFlavors.slice(0, scoops));
                }
              }}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1" id="1-scoop" />
                  <Label htmlFor="1-scoop">1 Scoop (£2.50)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="2" id="2-scoops" />
                  <Label htmlFor="2-scoops">2 Scoops (£3.75)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="3" id="3-scoops" />
                  <Label htmlFor="3-scoops">3 Scoops (£4.75)</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="text-sm font-medium mb-2 block">
                Flavours * (Select {iceCreamScoops} flavour{iceCreamScoops > 1 ? 's' : ''})
              </Label>
              <div className="space-y-2">
                {['Vanilla', 'Chocolate', 'Strawberry', 'Mint Chocolate Chip', 'Cookies & Cream', 'Pistachio'].map((flavor) => {
                  const flavorCount = iceCreamFlavors.filter(f => f === flavor).length;
                  const canSelect = iceCreamFlavors.length < iceCreamScoops;
                  const isSelected = flavorCount > 0;
                  
                  return (
                    <div key={flavor} className="flex items-center space-x-2">
                      <Checkbox
                        id={`ice-cream-${flavor}`}
                        checked={isSelected}
                        onCheckedChange={(checked) => handleIceCreamFlavorChange(flavor, checked as boolean)}
                        disabled={!isSelected && !canSelect}
                      />
                      <Label htmlFor={`ice-cream-${flavor}`}>
                        {flavor} {flavorCount > 1 && `(${flavorCount})`}
                      </Label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Drink Size Options */}
        {category === 'Drinks' && ['Irn Bru', 'Pepsi', 'Coke', 'Sprite', 'Fanta', 'Rubicon'].includes(item.name) && (
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium mb-2 block">Size</Label>
              <RadioGroup value={drinkSize} onValueChange={(value: '330ml' | '1.5L') => setDrinkSize(value)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="330ml" id="330ml" />
                  <Label htmlFor="330ml">330ml (£1.25)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1.5L" id="1.5L" />
                  <Label htmlFor="1.5L">1.5L (£2.99)</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Flavour selection for specific drinks */}
            {item.name === 'Rubicon' && (
              <div>
                <Label className="text-sm font-medium mb-2 block">Flavour *</Label>
                <RadioGroup value={rubiconFlavor} onValueChange={setRubiconFlavor}>
                  {rubiconFlavours.map((flavor) => (
                    <div key={flavor} className="flex items-center space-x-2">
                      <RadioGroupItem value={flavor} id={`rubicon-${flavor}`} />
                      <Label htmlFor={`rubicon-${flavor}`}>{flavor}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {item.name === 'Fanta' && (
              <div>
                <Label className="text-sm font-medium mb-2 block">Flavour *</Label>
                <RadioGroup value={fantaFlavor} onValueChange={setFantaFlavor}>
                  {fantaFlavours.map((flavor) => (
                    <div key={flavor} className="flex items-center space-x-2">
                      <RadioGroupItem value={flavor} id={`fanta-${flavor}`} />
                      <Label htmlFor={`fanta-${flavor}`}>{flavor}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {item.name === 'Pepsi' && (
              <div>
                <Label className="text-sm font-medium mb-2 block">Flavour *</Label>
                <RadioGroup value={pepsiFlavor} onValueChange={setPepsiFlavor}>
                  {pepsiFlavors.map((flavor) => (
                    <div key={flavor} className="flex items-center space-x-2">
                      <RadioGroupItem value={flavor} id={`pepsi-${flavor}`} />
                      <Label htmlFor={`pepsi-${flavor}`}>{flavor}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {item.name === 'Coke' && (
              <div>
                <Label className="text-sm font-medium mb-2 block">Flavour *</Label>
                <RadioGroup value={cokeFlavor} onValueChange={setCokeFlavor}>
                  {cokeFlavours.map((flavor) => (
                    <div key={flavor} className="flex items-center space-x-2">
                      <RadioGroupItem value={flavor} id={`coke-${flavor}`} />
                      <Label htmlFor={`coke-${flavor}`}>{flavor}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}
          </div>
        )}

        {/* Sauces & Dips Options */}
        {category === 'Sauces & Dips' && (
          <div>
            <Label className="text-sm font-medium mb-2 block">Select Sauces & Dips (£0.70 each) *</Label>
            <div className="space-y-2">
              {saucesAndDipsList.map((sauce) => (
                <div key={sauce} className="flex items-center space-x-2">
                  <Checkbox
                    id={`sauce-${sauce}`}
                    checked={selectedSaucesAndDips.includes(sauce)}
                    onCheckedChange={(checked) => handleSauceAndDipChange(sauce, checked as boolean)}
                  />
                  <Label htmlFor={`sauce-${sauce}`}>{sauce}</Label>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pizza Size Selection */}
        {showPizzaSize && (
          <div className="mb-4">
            <Label className="text-sm font-medium mb-2 block">Pizza Size</Label>
            <RadioGroup value={pizzaSize} onValueChange={setPizzaSize}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="10&quot;" id="10-inch" />
                <Label htmlFor="10-inch">10&quot; - Base Price</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="12&quot;" id="12-inch" />
                <Label htmlFor="12-inch">12&quot; - +£3.00</Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {/* Pizza Customisations - Removed scrollable and fixed pricing label */}
        {showCustomizations && customizations.length > 0 && (
          <div className="mb-4">
            <Label className="text-sm font-medium mb-2 block">
              Extra Toppings ({pizzaSize === '10&quot;' ? '£1.00' : '£1.50'} each)
            </Label>
            <div className="space-y-2">
              {customizations.map((customization) => (
                <div key={customization} className="flex items-center space-x-2">
                  <Checkbox
                    id={customization}
                    checked={selectedCustomizations.includes(customization)}
                    onCheckedChange={(checked) => handleCustomizationChange(customization, checked as boolean)}
                  />
                  <Label htmlFor={customization} className="text-sm">{customization}</Label>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Meal Option */}
        {showMealOption && (
          <div className="mb-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="meal-option"
                checked={isMeal}
                onCheckedChange={(checked) => setIsMeal(checked as boolean)}
              />
              <Label htmlFor="meal-option" className="text-sm font-medium">
                Make it a meal (+£2.50) - Includes fries and drink
              </Label>
            </div>
          </div>
        )}

        {/* Side Size Options */}
        {showSizeOptions && (
          <div className="mb-4">
            <Label className="text-sm font-medium mb-2 block">Size</Label>
            <RadioGroup value={sideSize} onValueChange={(value: 'regular' | 'large') => setSideSize(value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="regular" id="regular" />
                <Label htmlFor="regular">Regular</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="large" id="large" />
                <Label htmlFor="large">Large (+£1.00)</Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {/* Special Instructions */}
        {showSpecialInstructions && (
          <div className="mb-4">
            <Label htmlFor="comment" className="text-sm font-medium">Special Instructions</Label>
            <Textarea
              id="comment"
              placeholder="Any special requests..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="mt-1"
            />
          </div>
        )}
      </CardContent>

      {!isStudentDealsCategory && (
        <CardFooter>
          <Button
            onClick={handleAddToBasket}
            className="w-full bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400 font-bold"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add to Basket - £{calculatePrice()}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default MenuItemCard;
