import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, ShoppingBag, Tag, Gift } from 'lucide-react';
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
    houseNumber: '',
    streetName: '',
    streetName2: '',
    city: '',
    postcode: ''
  });
  
  const [couponCode, setCouponCode] = useState('');
  const [giftCardCode, setGiftCardCode] = useState('');
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [giftCardValue, setGiftCardValue] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [giftCardApplied, setGiftCardApplied] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // Load basket from localStorage if not passed through navigation
  useEffect(() => {
    if (!basketItems || basketItems.length === 0) {
      const savedBasket = localStorage.getItem('stackers-basket');
      if (savedBasket) {
        const parsedBasket = JSON.parse(savedBasket);
        if (parsedBasket.length === 0) {
          navigate('/menu');
        }
      } else {
        navigate('/menu');
      }
    }
  }, [basketItems, navigate]);

  const calculateSubtotal = () => {
    return basketItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('£', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const calculateIceCreamDiscount = () => {
    const hasWaffleCrepeOrCookie = basketItems.some(item => 
      item.category === 'Sweet Stacks' && 
      (item.name.includes('Waffle') || item.name.includes('Crepe') || item.name.includes('Cookie Dough'))
    );
    
    const hasIceCream = basketItems.some(item => 
      item.name.includes('Premium Ice Cream')
    );

    return hasWaffleCrepeOrCookie && hasIceCream ? 1.00 : 0;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const iceCreamDiscount = calculateIceCreamDiscount();
    return Math.max(0, subtotal - iceCreamDiscount - couponDiscount - giftCardValue);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$|^(\+44\s?1\d{3}|\(?01\d{3}\)?)\s?\d{3}\s?\d{3}$|^(\+44\s?2\d{3}|\(?02\d{3}\)?)\s?\d{3}\s?\d{4}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const validatePostcode = (postcode: string) => {
    const postcodeRegex = /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i;
    return postcodeRegex.test(postcode.replace(/\s/g, ''));
  };

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!customerInfo.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!customerInfo.telephone.trim()) {
      newErrors.telephone = 'Telephone is required';
    } else if (!validatePhone(customerInfo.telephone)) {
      newErrors.telephone = 'Please enter a valid UK phone number';
    }

    if (!customerInfo.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(customerInfo.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (orderType === 'delivery') {
      if (!customerInfo.houseNumber.trim()) {
        newErrors.houseNumber = 'House number is required';
      }
      if (!customerInfo.streetName.trim()) {
        newErrors.streetName = 'Street name is required';
      }
      if (!customerInfo.city.trim()) {
        newErrors.city = 'City is required';
      }
      if (!customerInfo.postcode.trim()) {
        newErrors.postcode = 'Postcode is required';
      } else if (!validatePostcode(customerInfo.postcode)) {
        newErrors.postcode = 'Please enter a valid UK postcode';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const applyCoupon = () => {
    // Mock coupon validation
    const validCoupons: {[key: string]: number} = {
      'SAVE10': 10,
      'WELCOME15': 15,
      'STUDENT20': 20
    };

    if (validCoupons[couponCode.toUpperCase()]) {
      setCouponDiscount(validCoupons[couponCode.toUpperCase()]);
      setCouponApplied(true);
    } else {
      alert('Invalid coupon code');
    }
  };

  const applyGiftCard = () => {
    // Mock gift card validation
    const validGiftCards: {[key: string]: number} = {
      'GIFT50': 50,
      'GIFT25': 25,
      'GIFT100': 100
    };

    if (validGiftCards[giftCardCode.toUpperCase()]) {
      setGiftCardValue(validGiftCards[giftCardCode.toUpperCase()]);
      setGiftCardApplied(true);
    } else {
      alert('Invalid gift card code');
    }
  };

  const handlePayment = () => {
    if (!validateForm()) {
      return;
    }
    
    // This would typically integrate with a payment processor
    alert('Payment functionality would be integrated here with Apple Pay, Debit Card, Credit Card options');
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
                      <p className="text-sm text-gray-600">{item.category}</p>
                      
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
                      
                      {item.comment && (
                        <p className="text-xs text-gray-500 mt-1 italic">
                          Note: {item.comment}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-stackers-yellow">{item.price}</span>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>£{calculateSubtotal().toFixed(2)}</span>
                </div>
                
                {calculateIceCreamDiscount() > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Ice Cream Discount:</span>
                    <span>-£{calculateIceCreamDiscount().toFixed(2)}</span>
                  </div>
                )}
                
                {couponDiscount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Coupon Discount:</span>
                    <span>-£{couponDiscount.toFixed(2)}</span>
                  </div>
                )}
                
                {giftCardValue > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Gift Card:</span>
                    <span>-£{giftCardValue.toFixed(2)}</span>
                  </div>
                )}
                
                <Separator />
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-stackers-yellow">£{calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Coupon and Gift Card Section */}
            <div className="mt-6 space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3 flex items-center">
                  <Tag className="mr-2" size={16} />
                  Coupon Code
                </h3>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    disabled={couponApplied}
                  />
                  <Button
                    onClick={applyCoupon}
                    disabled={!couponCode || couponApplied}
                    variant="outline"
                  >
                    Apply
                  </Button>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3 flex items-center">
                  <Gift className="mr-2" size={16} />
                  Gift Card
                </h3>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter gift card code"
                    value={giftCardCode}
                    onChange={(e) => setGiftCardCode(e.target.value)}
                    disabled={giftCardApplied}
                  />
                  <Button
                    onClick={applyGiftCard}
                    disabled={!giftCardCode || giftCardApplied}
                    variant="outline"
                  >
                    Apply
                  </Button>
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
                  className={errors.name ? 'border-red-500' : ''}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <Label htmlFor="telephone" className="text-sm font-medium">Telephone *</Label>
                <Input
                  id="telephone"
                  type="tel"
                  value={customerInfo.telephone}
                  onChange={(e) => handleInputChange('telephone', e.target.value)}
                  placeholder="Enter your phone number"
                  className={errors.telephone ? 'border-red-500' : ''}
                />
                {errors.telephone && <p className="text-red-500 text-sm mt-1">{errors.telephone}</p>}
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={customerInfo.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email address"
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {orderType === 'delivery' && (
                <>
                  <div>
                    <Label htmlFor="houseNumber" className="text-sm font-medium">House Number/Name *</Label>
                    <Input
                      id="houseNumber"
                      type="text"
                      value={customerInfo.houseNumber}
                      onChange={(e) => handleInputChange('houseNumber', e.target.value)}
                      placeholder="House number or name"
                      className={errors.houseNumber ? 'border-red-500' : ''}
                    />
                    {errors.houseNumber && <p className="text-red-500 text-sm mt-1">{errors.houseNumber}</p>}
                  </div>

                  <div>
                    <Label htmlFor="streetName" className="text-sm font-medium">Street Name *</Label>
                    <Input
                      id="streetName"
                      type="text"
                      value={customerInfo.streetName}
                      onChange={(e) => handleInputChange('streetName', e.target.value)}
                      placeholder="Street name"
                      className={errors.streetName ? 'border-red-500' : ''}
                    />
                    {errors.streetName && <p className="text-red-500 text-sm mt-1">{errors.streetName}</p>}
                  </div>

                  <div>
                    <Label htmlFor="streetName2" className="text-sm font-medium">Street Name 2 (Optional)</Label>
                    <Input
                      id="streetName2"
                      type="text"
                      value={customerInfo.streetName2}
                      onChange={(e) => handleInputChange('streetName2', e.target.value)}
                      placeholder="Additional address line (optional)"
                    />
                  </div>

                  <div>
                    <Label htmlFor="city" className="text-sm font-medium">City *</Label>
                    <Input
                      id="city"
                      type="text"
                      value={customerInfo.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      placeholder="City"
                      className={errors.city ? 'border-red-500' : ''}
                    />
                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                  </div>

                  <div>
                    <Label htmlFor="postcode" className="text-sm font-medium">Postcode *</Label>
                    <Input
                      id="postcode"
                      type="text"
                      value={customerInfo.postcode}
                      onChange={(e) => handleInputChange('postcode', e.target.value.toUpperCase())}
                      placeholder="Postcode"
                      className={errors.postcode ? 'border-red-500' : ''}
                    />
                    {errors.postcode && <p className="text-red-500 text-sm mt-1">{errors.postcode}</p>}
                  </div>
                </>
              )}
            </div>

            {/* Payment Button */}
            <div className="mt-8">
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Order Total:</span>
                  <span className="text-stackers-yellow">£{calculateTotal().toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {orderType === 'collection' ? 'Ready for collection in 15-20 minutes' : 'Delivery within 30-45 minutes'}
                </p>
              </div>
              
              <Button 
                className="w-full bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400 font-bold py-3 text-lg"
                onClick={handlePayment}
              >
                Pay Now - £{calculateTotal().toFixed(2)}
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
