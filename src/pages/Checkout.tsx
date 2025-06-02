import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BasketItem } from '@/components/Basket';

interface CustomerDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
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

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [orderType, setOrderType] = useState<'collection' | 'delivery'>('collection');
  const [specialRequests, setSpecialRequests] = useState('');

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
    return ['Smash Burgers', 'Chicken Burgers', 'Wraps', 'Boxes', 'Meal Deals', 'Loaded Stackers\' Fries', 'Sweet Stacks'].includes(category);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic form validation
    if (!customerDetails.name || !customerDetails.email || !customerDetails.phone) {
      alert('Please fill out all required fields.');
      return;
    }

    if (orderType === 'delivery' && !customerDetails.address) {
      alert('Please provide a delivery address.');
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
                        Size: {item.milkshakeSize}, Flavour: {item.milkshakeFlavor}
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
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={customerDetails.email}
                  onChange={(e) => setCustomerDetails({...customerDetails, email: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={customerDetails.phone}
                  onChange={(e) => setCustomerDetails({...customerDetails, phone: e.target.value})}
                  required
                />
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
                <div>
                  <Label htmlFor="address">Delivery Address *</Label>
                  <Input
                    id="address"
                    value={customerDetails.address}
                    onChange={(e) => setCustomerDetails({...customerDetails, address: e.target.value})}
                    placeholder="Enter your full delivery address"
                    required
                  />
                </div>
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
                Place Order
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
