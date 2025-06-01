
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Gift, CreditCard, Check } from 'lucide-react';

const GiftCards = () => {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [recipientEmail, setRecipientEmail] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');
  const [purchaseStep, setPurchaseStep] = useState<'select' | 'details' | 'payment'>('select');
  const [emailError, setEmailError] = useState('');

  const giftCardAmounts = [5, 10, 20, 50];

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setRecipientEmail(email);
    
    if (email && !validateEmail(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setPurchaseStep('details');
  };

  const handleDetailsSubmit = () => {
    if (recipientEmail && recipientName && senderName && validateEmail(recipientEmail)) {
      setPurchaseStep('payment');
    }
  };

  const isFormValid = recipientEmail && recipientName && senderName && validateEmail(recipientEmail) && !emailError;

  const handlePurchase = () => {
    // This would integrate with a payment processor
    alert(`Gift card purchase of £${selectedAmount} would be processed here. The gift card would be sent to ${recipientEmail}.`);
    // Reset form
    setSelectedAmount(null);
    setRecipientEmail('');
    setRecipientName('');
    setSenderName('');
    setMessage('');
    setEmailError('');
    setPurchaseStep('select');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Gift className="mx-auto h-16 w-16 text-stackers-yellow mb-4" />
          <h1 className="text-4xl font-bold text-stackers-charcoal mb-4">Gift Cards</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Share the joy of delicious food with your loved ones. Perfect for any occasion!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Purchase Gift Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-stackers-charcoal">
                  <CreditCard className="mr-2" size={24} />
                  Purchase Gift Card
                </CardTitle>
                <CardDescription>
                  Buy a gift card for someone special
                </CardDescription>
              </CardHeader>
              <CardContent>
                {purchaseStep === 'select' && (
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold text-stackers-charcoal">
                      Select Amount
                    </Label>
                    <div className="grid grid-cols-2 gap-4">
                      {giftCardAmounts.map((amount) => (
                        <Button
                          key={amount}
                          variant="outline"
                          className="h-20 text-xl font-bold border-2 border-stackers-yellow hover:bg-stackers-yellow hover:text-stackers-charcoal transition-all duration-200"
                          onClick={() => handleAmountSelect(amount)}
                        >
                          £{amount}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {purchaseStep === 'details' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-stackers-charcoal">
                        Gift Card Details
                      </h3>
                      <span className="text-2xl font-bold text-stackers-yellow">
                        £{selectedAmount}
                      </span>
                    </div>
                    
                    <div>
                      <Label htmlFor="recipientName">Recipient Name *</Label>
                      <Input
                        id="recipientName"
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        placeholder="Who is this gift card for?"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="recipientEmail">Recipient Email *</Label>
                      <Input
                        id="recipientEmail"
                        type="email"
                        value={recipientEmail}
                        onChange={handleEmailChange}
                        placeholder="Where should we send the gift card?"
                        className={emailError ? 'border-red-500' : ''}
                      />
                      {emailError && (
                        <p className="text-red-500 text-sm mt-1">{emailError}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="senderName">Your Name *</Label>
                      <Input
                        id="senderName"
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="Who is this gift card from?"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Personal Message (Optional)</Label>
                      <Input
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Add a personal message..."
                      />
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={() => setPurchaseStep('select')}
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button
                        onClick={handleDetailsSubmit}
                        disabled={!isFormValid}
                        className="flex-1 bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400"
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {purchaseStep === 'payment' && (
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Order Summary</h3>
                      <div className="flex justify-between">
                        <span>Gift Card Amount:</span>
                        <span className="font-bold">£{selectedAmount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Recipient:</span>
                        <span>{recipientName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Email:</span>
                        <span>{recipientEmail}</span>
                      </div>
                      {message && (
                        <div className="mt-2">
                          <span className="text-sm text-gray-600">Message: "{message}"</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={() => setPurchaseStep('details')}
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button
                        onClick={handlePurchase}
                        className="flex-1 bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400"
                      >
                        Purchase Gift Card
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Redeem Gift Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-stackers-charcoal">
                  <Check className="mr-2" size={24} />
                  Redeem Gift Card
                </CardTitle>
                <CardDescription>
                  Already have a gift card? Use it here or at checkout
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="giftCardCode">Gift Card Code</Label>
                  <Input
                    id="giftCardCode"
                    placeholder="Enter your gift card code"
                  />
                </div>
                
                <Button 
                  className="w-full bg-stackers-yellow text-stackers-charcoal hover:bg-yellow-400"
                  onClick={() => alert('Gift card validation would happen here')}
                >
                  Check Balance
                </Button>
                
                <Separator />
                
                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    Ready to order? You can also redeem your gift card at checkout.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => navigate('/menu')}
                    className="border-stackers-yellow text-stackers-yellow hover:bg-stackers-yellow hover:text-stackers-charcoal"
                  >
                    View Menu
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Gift Card Info */}
          <Card className="mt-8 shadow-lg">
            <CardHeader>
              <CardTitle className="text-stackers-charcoal">Gift Card Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 text-stackers-charcoal">How it works:</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Choose your gift card amount</li>
                    <li>• Add recipient details and personal message</li>
                    <li>• Complete secure payment</li>
                    <li>• Gift card is sent via email instantly</li>
                    <li>• Recipient can use it online or in-store</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-stackers-charcoal">Terms & Conditions:</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Gift cards are valid for 12 months from purchase</li>
                    <li>• Can be used for any menu items</li>
                    <li>• Non-refundable and cannot be exchanged for cash</li>
                    <li>• Can be used multiple times until balance is zero</li>
                    <li>• Lost or stolen cards cannot be replaced</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GiftCards;
