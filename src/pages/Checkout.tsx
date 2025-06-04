import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BasketItem } from '@/components/Basket';
import { ArrowLeft } from 'lucide-react';

interface CustomerDetails {
  name: string;
  email: string;
  phone: string;
  houseNumber: string;
  streetName: string;
  streetName2: string;
  city: string;
  postcode: string;
}

const formatIceCreamFlavors = (flavors: string[]) => {
  const flavorCounts = flavors.reduce((acc, flavor) => {
    acc[flavor] = (acc[flavor] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(flavorCounts)
    .map(([flavor, count]) => count > 1 ? `${flavor} (${count})` : flavor)
    .join(', ');
};

const validateUKPhone = (phone: string): boolean => {
  const ukPhoneRegex = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/;
  return ukPhoneRegex.test(phone.replace(/\s/g, ''));
};

const validateUKPostcode = (postcode: string): boolean => {
  const ukPostcodeRegex = /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i;
  return ukPostcodeRegex.test(postcode.trim());
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    name: '',
    email: '',
    phone: '',
    houseNumber: '',
    streetName: '',
    streetName2: '',
    city: '',
    postcode: ''
  });
  const [orderType, setOrderType] = useState<'collection' | 'delivery'>('collection');
  const [specialRequests, setSpecialRequests] = useState('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  useEffect(() => {
    if (location.state && location.state.basketItems) {
      setBasketItems(location.state.basketItems);
    } else {
      // If basketItems are not in location.state, try to get them from localStorage
      const savedBasket = localStorage.getItem('stackers-basket');
      if (savedBasket) {
        setBasketItems(JSON.parse(savedBasket));
      }
    }
  }, [location.state]);

  const calculateTotal = () => {
    return basketItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('£', ''));
      return total + (price * item.quantity);
    }, 0).toFixed(2);
  };

  const shouldShowDescription = (category: string) => {
    return ['Smash Burgers', 'Chicken Burgers', 'Wraps', 'Boxes', 'Meal Deals', 'Loaded Stackers\' Fries', 'Sweet Stacks', 'Pizzas', 'Kids'].includes(category);
  };

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};

    // Name validation
    if (!customerDetails.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    if (!customerDetails.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(customerDetails.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!customerDetails.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validateUKPhone(customerDetails.phone)) {
      newErrors.phone = 'Please enter a valid UK phone number';
    }

    // Delivery address validation
    if (orderType === 'delivery') {
      if (!customerDetails.houseNumber.trim()) {
        newErrors.houseNumber = 'House name/number is required';
      }
      if (!customerDetails.streetName.trim()) {
        newErrors.streetName = 'Street name is required';
      }
      if (!customerDetails.city.trim()) {
        newErrors.city = 'City is required';
      }
      if (!customerDetails.postcode.trim()) {
        newErrors.postcode = 'Postcode is required';
      } else if (!validateUKPostcode(customerDetails.postcode)) {
        newErrors.postcode = 'Please enter a valid UK postcode';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Here you would typically send the order data to your server
    console.log('Order Details:', {
      items: basketItems,
      customerDetails,
      orderType,
      specialRequests,
      total: calculateTotal()
    });

    // Clear the basket
    localStorage.removeItem('stackers-basket');
    setBasketItems([]);

    // Redirect to a confirmation page or display a success message
    navigate('/order-confirmation');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/menu" className="inline-flex items-center text-stackers-yellow hover:text-yellow-600 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Menu
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold text-stackers-charcoal mb-8">Checkout</h1>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {basketItems.map((item) => (
                <div key={item.id} className="flex justify-between items-start border-b pb-4">
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                    
                    {shouldShowDescription(item.category) && item.description && (
                      <p className="text-xs text-gray-500 mt-1 italic">
                        {item.description}
                      </p>
                    )}

                    {item.customizations && item.customizations.length > 0 && (
                      <p className="text-xs text-gray-500 mt-1">
                        Customisations: {item.customizations.join(', ')}
                      </p>
                    )}

                    {item.sideSize && (
                      <p className="text-xs text-gray-500 mt-1">
                        Size: {item.sideSize}
                      </p>
                    )}

                    {item.milkshakeSize && (
                      <p className="text-xs text-gray-500 mt-1">
                        Size: {item.milkshakeSize}
                      </p>
                    )}

                    {item.drinkSize && (
                      <p className="text-xs text-gray-500 mt-1">
                        Size: {item.drinkSize}
                      </p>
                    )}

                    {item.chickenBreastQuantity && (
                      <p className="text-xs text-gray-500 mt-1">
                        Quantity: {item.chickenBreastQuantity}
                      </p>
                    )}

                    {item.iceCreamFlavors && item.iceCreamFlavors.length > 0 && item.iceCreamScoops && (
                      <p className="text-xs text-gray-500 mt-1">
                        {item.iceCreamScoops} {item.iceCreamScoops === 1 ? 'Scoop' : 'Scoops'}, Flavours: {formatIceCreamFlavors(item.iceCreamFlavors)}
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

                    {item.drizzleOnTop && (
                      <p className="text-xs text-gray-500 mt-1">
                        Drizzle on top
                      </p>
                    )}

                    {item.milkshakeComment && (
                      <p className="text-xs text-gray-500 mt-1 italic">
                        Milkshake Note: {item.milkshakeComment}
                      </p>
                    )}

                    {item.saucesAndDips && item.saucesAndDips.length > 0 && (
                      <p className="text-xs text-gray-500 mt-1">
                        Sauces & Dips: {item.saucesAndDips.join(', ')}
                      </p>
                    )}

                    {item.comment && (
                      <p className="text-xs text-gray-500 mt-1 italic">
                        Note: {item.comment}
                      </p>
                    )}
                    
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-bold text-stackers-yellow ml-4">{item.price}</p>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Total:</span>
                <span className="text-stackers-yellow">£{calculateTotal()}</span>
              </div>
            </div>
          </div>

          {/* Customer Details Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={customerDetails.name}
                  onChange={(e) => setCustomerDetails({...customerDetails, name: e.target.value})}
                  className={errors.name ? 'border-red-500' : ''}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={customerDetails.email}
                  onChange={(e) => setCustomerDetails({...customerDetails, email: e.target.value})}
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <Label htmlFor="phone">UK Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={customerDetails.phone}
                  onChange={(e) => setCustomerDetails({...customerDetails, phone: e.target.value})}
                  placeholder="e.g. 07700 900123 or +44 7700 900123"
                  className={errors.phone ? 'border-red-500' : ''}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <Label htmlFor="orderType">Order Type *</Label>
                <select
                  id="orderType"
                  value={orderType}
                  onChange={(e) => setOrderType(e.target.value as 'collection' | 'delivery')}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                >
                  <option value="collection">Collection</option>
                  <option value="delivery">Delivery</option>
                </select>
              </div>

              {orderType === 'delivery' && (
                <>
                  <div>
                    <Label htmlFor="houseNumber">House Name / Number *</Label>
                    <Input
                      id="houseNumber"
                      value={customerDetails.houseNumber}
                      onChange={(e) => setCustomerDetails({...customerDetails, houseNumber: e.target.value})}
                      placeholder="e.g. 123 or Apartment 4B"
                      className={errors.houseNumber ? 'border-red-500' : ''}
                    />
                    {errors.houseNumber && <p className="text-red-500 text-sm mt-1">{errors.houseNumber}</p>}
                  </div>

                  <div>
                    <Label htmlFor="streetName">Street Name *</Label>
                    <Input
                      id="streetName"
                      value={customerDetails.streetName}
                      onChange={(e) => setCustomerDetails({...customerDetails, streetName: e.target.value})}
                      placeholder="e.g. High Street"
                      className={errors.streetName ? 'border-red-500' : ''}
                    />
                    {errors.streetName && <p className="text-red-500 text-sm mt-1">{errors.streetName}</p>}
                  </div>

                  <div>
                    <Label htmlFor="streetName2">Street Name 2 (Optional)</Label>
                    <Input
                      id="streetName2"
                      value={customerDetails.streetName2}
                      onChange={(e) => setCustomerDetails({...customerDetails, streetName2: e.target.value})}
                      placeholder="e.g. Near the park"
                    />
                  </div>

                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={customerDetails.city}
                      onChange={(e) => setCustomerDetails({...customerDetails, city: e.target.value})}
                      placeholder="e.g. London"
                      className={errors.city ? 'border-red-500' : ''}
                    />
                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                  </div>

                  <div>
                    <Label htmlFor="postcode">UK Postcode *</Label>
                    <Input
                      id="postcode"
                      value={customerDetails.postcode}
                      onChange={(e) => setCustomerDetails({...customerDetails, postcode: e.target.value.toUpperCase()})}
                      placeholder="e.g. SW1A 1AA"
                      className={errors.postcode ? 'border-red-500' : ''}
                    />
                    {errors.postcode && <p className="text-red-500 text-sm mt-1">{errors.postcode}</p>}
                  </div>
                </>
              )}

              <div>
                <Label htmlFor="specialRequests">Special Requests</Label>
                <textarea
                  id="specialRequests"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Any special instructions for your order..."
                  rows={3}
                  className="w-full border border-gray-300 rounded-md p-2 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400 font-bold py-3"
                disabled={basketItems.length === 0}
              >
                Pay Now - £{calculateTotal()}
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Checkout;
