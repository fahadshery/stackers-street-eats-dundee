
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { BasketItem } from '@/components/Basket';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const basketItems: BasketItem[] = location.state?.basketItems || [];
  
  const [orderType, setOrderType] = useState<'collection' | 'delivery'>('collection');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    telephone: '',
    email: '',
    address: ''
  });

  const calculateTotal = () => {
    return basketItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('£', ''));
      return total + (price * item.quantity);
    }, 0).toFixed(2);
  };

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePayment = () => {
    // This would typically integrate with a payment processor
    // For now, we'll just show an alert
    alert('Payment functionality would be integrated here with Apple Pay, Debit Card, Credit Card options');
  };

  const isFormValid = () => {
    if (orderType === 'collection') {
      return customerInfo.name && customerInfo.telephone && customerInfo.email;
    } else {
      return customerInfo.name && customerInfo.telephone && customerInfo.email && customerInfo.address;
    }
  };

  // Redirect if no items in basket
  if (!basketItems || basketItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-stackers-charcoal mb-4">No Items in Basket</h1>
          <p className="text-gray-600 mb-8">Please add items to your basket before proceeding to checkout.</p>
          <Button 
            onClick={() => navigate('/menu')}
            className="bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400 font-bold"
          >
            View Menu
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/menu')}
          className="mb-6 text-stackers-charcoal hover:bg-gray-200"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Menu
        </Button>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-stackers-charcoal mb-4 flex items-center">
              <ShoppingBag className="mr-2" size={24} />
              Order Summary
            </h2>
            
            <div className="space-y-4">
              {basketItems.map((item) => (
                <div key={item.id} className="border-b pb-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-stackers-charcoal">{item.name}</h3>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      
                      {item.customizations && item.customizations.length > 0 && (
                        <p className="text-xs text-gray-500 mt-1">
                          Customizations: {item.customizations.join(', ')}
                        </p>
                      )}
                      
                      {item.sideSize && (
                        <p className="text-xs text-gray-500 mt-1">Size: {item.sideSize}</p>
                      )}
                      
                      {item.milkshakeSize && (
                        <p className="text-xs text-gray-500 mt-1">
                          Size: {item.milkshakeSize}, Flavor: {item.milkshakeFlavor}
                        </p>
                      )}
                      
                      {item.iceCreamFlavors && item.iceCreamFlavors.length > 0 && (
                        <p className="text-xs text-gray-500 mt-1">
                          Flavors: {item.iceCreamFlavors.join(', ')}
                        </p>
                      )}
                      
                      {item.comment && (
                        <p className="text-xs text-gray-500 mt-1 italic">Note: {item.comment}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-stackers-yellow">{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-stackers-yellow">£{calculateTotal()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-stackers-charcoal mb-6">Order Details</h2>
            
            {/* Order Type Selection */}
            <div className="mb-6">
              <Label className="text-lg font-semibold text-stackers-charcoal mb-3 block">
                Order Type
              </Label>
              <RadioGroup value={orderType} onValueChange={(value: 'collection' | 'delivery') => setOrderType(value)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="collection" id="collection" />
                  <label htmlFor="collection" className="font-medium">Collection</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="delivery" id="delivery" />
                  <label htmlFor="delivery" className="font-medium">Delivery</label>
                </div>
              </RadioGroup>
            </div>

            {/* Customer Information */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={customerInfo.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="telephone" className="text-sm font-medium">Telephone *</Label>
                <Input
                  id="telephone"
                  type="tel"
                  value={customerInfo.telephone}
                  onChange={(e) => handleInputChange('telephone', e.target.value)}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={customerInfo.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              {orderType === 'delivery' && (
                <div>
                  <Label htmlFor="address" className="text-sm font-medium">Delivery Address *</Label>
                  <Textarea
                    id="address"
                    value={customerInfo.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Enter your full delivery address including postcode"
                    rows={3}
                    required
                  />
                </div>
              )}
            </div>

            {/* Payment Button */}
            <div className="mt-8">
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Order Total:</span>
                  <span className="text-stackers-yellow">£{calculateTotal()}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {orderType === 'collection' ? 'Ready for collection in 15-20 minutes' : 'Delivery within 30-45 minutes'}
                </p>
              </div>
              
              <Button 
                className="w-full bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400 font-bold py-3 text-lg"
                onClick={handlePayment}
                disabled={!isFormValid()}
              >
                Pay Now - £{calculateTotal()}
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-2">
                Secure payment with Apple Pay, Debit Card, or Credit Card
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
