import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { 
  CreditCard, 
  Smartphone, 
  Banknote, 
  MapPin, 
  Truck, 
  Shield,
  Loader2,
  CheckCircle2,
  ArrowLeft,
  Copy,
  Check
} from "lucide-react";
import { z } from "zod";

const addressSchema = z.object({
  fullName: z.string().min(2).max(100),
  phone: z.string().min(10).max(15),
  address: z.string().min(10).max(500),
  city: z.string().min(2).max(100),
  state: z.string().min(2).max(100),
  pincode: z.string().regex(/^\d{6}$/, "Invalid pincode"),
});

// UPI ID masked as brand payment
const MELLO_UPI_ID = "8884162999-4@ybl";
const MELLO_UPI_DISPLAY = "mellomelt@upi";

export default function Checkout() {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [copied, setCopied] = useState(false);
  
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const GST_RATE = 0.05;
  const DELIVERY_FEE = totalPrice >= 500 ? 0 : 49;
  const gstAmount = totalPrice * GST_RATE;
  const grandTotal = totalPrice + gstAmount + DELIVERY_FEE;

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const validateAddress = () => {
    const result = addressSchema.safeParse(address);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleContinueToPayment = () => {
    if (validateAddress()) {
      setStep(2);
    }
  };

  const copyUpiId = () => {
    navigator.clipboard.writeText(MELLO_UPI_ID);
    setCopied(true);
    toast({ title: "UPI ID copied!" });
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePlaceOrder = async () => {
    setIsLoading(true);
    
    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    const newOrderId = `MM${Date.now().toString(36).toUpperCase()}`;
    setOrderId(newOrderId);
    setOrderComplete(true);
    clearCart();
    
    toast({
      title: "Order placed successfully!",
      description: `Order ID: ${newOrderId}`,
    });
    
    setIsLoading(false);
  };

  if (items.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold mb-4">Your cart is empty</h1>
            <Button onClick={() => navigate("/products")}>Continue Shopping</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-md"
          >
            <div className="h-20 w-20 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="font-display text-3xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-muted-foreground mb-4">
              Thank you for your order. We'll send you a confirmation email shortly.
            </p>
            <Card className="mb-6">
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">Order ID</p>
                <p className="font-mono text-lg font-bold">{orderId}</p>
              </CardContent>
            </Card>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={() => navigate("/")}>
                Go Home
              </Button>
              <Button onClick={() => navigate("/products")}>
                Continue Shopping
              </Button>
            </div>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-8">
        <div className="container">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}>
                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                  1
                </div>
                <span className="hidden sm:inline font-medium">Address</span>
              </div>
              <div className="w-12 h-0.5 bg-border" />
              <div className={`flex items-center gap-2 ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}>
                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                  2
                </div>
                <span className="hidden sm:inline font-medium">Payment</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        Delivery Address
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={address.fullName}
                            onChange={handleAddressChange}
                            placeholder="John Doe"
                          />
                          {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={address.phone}
                            onChange={handleAddressChange}
                            placeholder="+91 98765 43210"
                          />
                          {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address *</Label>
                        <Input
                          id="address"
                          name="address"
                          value={address.address}
                          onChange={handleAddressChange}
                          placeholder="House/Flat No., Street, Landmark"
                        />
                        {errors.address && <p className="text-sm text-destructive">{errors.address}</p>}
                      </div>
                      <div className="grid sm:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            name="city"
                            value={address.city}
                            onChange={handleAddressChange}
                            placeholder="Hyderabad"
                          />
                          {errors.city && <p className="text-sm text-destructive">{errors.city}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State *</Label>
                          <Input
                            id="state"
                            name="state"
                            value={address.state}
                            onChange={handleAddressChange}
                            placeholder="Telangana"
                          />
                          {errors.state && <p className="text-sm text-destructive">{errors.state}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pincode">Pincode *</Label>
                          <Input
                            id="pincode"
                            name="pincode"
                            value={address.pincode}
                            onChange={handleAddressChange}
                            placeholder="500001"
                          />
                          {errors.pincode && <p className="text-sm text-destructive">{errors.pincode}</p>}
                        </div>
                      </div>
                      <Button onClick={handleContinueToPayment} className="w-full" size="lg">
                        Continue to Payment
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" onClick={() => setStep(1)}>
                          <ArrowLeft className="h-5 w-5" />
                        </Button>
                        <CardTitle className="flex items-center gap-2">
                          <CreditCard className="h-5 w-5" />
                          Payment Method
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                        <div className="grid gap-4">
                          <Label
                            htmlFor="upi"
                            className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                              paymentMethod === "upi" ? "border-primary bg-primary/5" : "border-border"
                            }`}
                          >
                            <RadioGroupItem value="upi" id="upi" />
                            <Smartphone className="h-6 w-6 text-primary" />
                            <div className="flex-1">
                              <p className="font-medium">UPI Payment</p>
                              <p className="text-sm text-muted-foreground">Pay using any UPI app</p>
                            </div>
                            <Badge variant="secondary">Recommended</Badge>
                          </Label>
                          
                          <Label
                            htmlFor="cod"
                            className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                              paymentMethod === "cod" ? "border-primary bg-primary/5" : "border-border"
                            }`}
                          >
                            <RadioGroupItem value="cod" id="cod" />
                            <Banknote className="h-6 w-6" />
                            <div className="flex-1">
                              <p className="font-medium">Cash on Delivery</p>
                              <p className="text-sm text-muted-foreground">Pay when you receive</p>
                            </div>
                            <Badge variant="outline">+₹29</Badge>
                          </Label>
                        </div>
                      </RadioGroup>

                      {paymentMethod === "upi" && (
                        <Card className="bg-muted/50">
                          <CardContent className="p-4">
                            <p className="text-sm text-muted-foreground mb-2">Pay to UPI ID:</p>
                            <div className="flex items-center gap-2 bg-background p-3 rounded-lg">
                              <span className="font-mono font-medium flex-1">{MELLO_UPI_DISPLAY}</span>
                              <Button variant="ghost" size="sm" onClick={copyUpiId}>
                                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                              </Button>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">
                              Open any UPI app and pay ₹{grandTotal.toFixed(0)} to complete your order
                            </p>
                          </CardContent>
                        </Card>
                      )}

                      <Button 
                        onClick={handlePlaceOrder} 
                        className="w-full" 
                        size="lg"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                          <Shield className="mr-2 h-4 w-4" />
                        )}
                        Place Order • ₹{grandTotal.toFixed(0)}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-3">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{item.product.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        <p className="text-sm font-medium">₹{item.product.price * item.quantity}</p>
                      </div>
                    </div>
                  ))}
                  
                  <Separator />
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>₹{totalPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">GST (5%)</span>
                      <span>₹{gstAmount.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Delivery</span>
                      <span className={DELIVERY_FEE === 0 ? "text-green-600" : ""}>
                        {DELIVERY_FEE === 0 ? "FREE" : `₹${DELIVERY_FEE}`}
                      </span>
                    </div>
                    {paymentMethod === "cod" && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">COD Fee</span>
                        <span>₹29</span>
                      </div>
                    )}
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹{(grandTotal + (paymentMethod === "cod" ? 29 : 0)).toFixed(0)}</span>
                  </div>

                  {DELIVERY_FEE === 0 && (
                    <Badge variant="secondary" className="w-full justify-center">
                      <Truck className="mr-2 h-4 w-4" />
                      Free delivery on orders above ₹500
                    </Badge>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
