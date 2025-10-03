import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";
import ReactPixel from "react-facebook-pixel";
import { useToast } from "@/hooks/use-toast";

const ChallengeRegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ticketType: "",
    ipAddress: "",
    userAgent: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    ticketType: ""
  });

  // Capture IP address and User Agent on page load
  useEffect(() => {
    // Get User Agent
    const userAgent = navigator.userAgent;
    setFormData(prev => ({ ...prev, userAgent }));

    // Get IP address
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        setFormData(prev => ({ ...prev, ipAddress: data.ip }));
      })
      .catch(error => {
        console.error('Failed to fetch IP address:', error);
      });
  }, []);

  const validateName = (name: string) => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    if (!/^[a-zA-Z\s'-]+$/.test(name.trim())) return "Name contains invalid characters";
    return "";
  };

  const validateEmail = (email: string) => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) return "Please enter a valid email address";
    return "";
  };

  const validatePhone = (phone: string) => {
    if (!phone.trim()) return "Phone number is required";
    const phoneRegex = /^[\+]?[(]?[\d\s\-\(\)\.]{10,}$/;
    if (!phoneRegex.test(phone.trim())) return "Please enter a valid phone number";
    return "";
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handlePurchase = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    const ticketTypeError = !formData.ticketType ? "Please select a ticket type" : "";

    const newErrors = {
      name: nameError,
      email: emailError,
      phone: phoneError,
      ticketType: ticketTypeError
    };

    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== "");
    
    if (hasErrors) {
      return;
    }

    // Determine product ID based on ticket type
    const productId = formData.ticketType === "vip" ? "5771" : "5770";
    const ticketValue = formData.ticketType === "vip" ? 97 : 47;
    
    // Track Facebook AddToCart event
    ReactPixel.track('AddToCart', {
      content_ids: [productId],
      content_type: 'product',
      value: ticketValue,
      currency: 'USD'
    });
    
    // Split name into first and last name
    const nameParts = formData.name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Submit to webhook before redirecting
    try {
      const webhookData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        ticketType: formData.ticketType,
        ipAddress: formData.ipAddress,
        userAgent: formData.userAgent,
        productId,
        ticketValue
      };

      await fetch('https://multiculturemortgage.com/wp-json/autonami/v1/webhook/?bwfan_autonami_webhook_id=16&bwfan_autonami_webhook_key=00df48098da8dd7ecc917b1a24338f9d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData)
      });
    } catch (error) {
      console.error('Webhook submission failed:', error);
      // Continue with checkout even if webhook fails
    }

    // Helper function to get cookie value
    const getCookie = (name: string): string | null => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
      return null;
    };

    // Get Facebook _fbp cookie
    const fbp = getCookie('_fbp');

    // Get current URL parameters
    const currentUrl = new URL(window.location.href);
    const currentParams = new URLSearchParams(currentUrl.search);

    // Construct checkout URL with form data
    const checkoutParams = new URLSearchParams({
      'aero-add-to-checkout': productId,
      'aero-qty': '1',
      'billing_email': formData.email,
      'billing_first_name': firstName,
      'billing_last_name': lastName,
      'billing_phone': formData.phone,
    });

    // Add Facebook _fbp cookie if it exists
    if (fbp) checkoutParams.set('_fbp', fbp);

    // Add any current URL parameters
    currentParams.forEach((value, key) => {
      if (!checkoutParams.has(key)) {
        checkoutParams.set(key, value);
      }
    });

    const checkoutUrl = `https://multiculturemortgage.com/checkouts/w2towealth5day-challenge/?${checkoutParams.toString()}`;

    // Redirect to checkout page
    window.location.href = checkoutUrl;
  };

  return (
    <Card className="shadow-xl border-2 border-brand-teal bg-brand-teal/10 backdrop-blur-sm" id="signup-form">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold text-brand-navy">
          Register For Our Next Challenge
        </CardTitle>
        <p className="text-brand-navy/80">
          Join our 5-day challenge to transform your approach to real estate investing. Learn the strategies that turn your W-2 income into wealth-building opportunities through smart homeownership decisions.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handlePurchase} className="space-y-4">
          {/* Name Field */}
          <div>
            <Input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`h-12 text-base ${errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
            />
            {errors.name && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.name}
              </div>
            )}
          </div>

          {/* Email Field */}
          <div>
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`h-12 text-base ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
            />
            {errors.email && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.email}
              </div>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`h-12 text-base ${errors.phone ? 'border-red-500 focus:border-red-500' : ''}`}
            />
            {errors.phone && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.phone}
              </div>
            )}
          </div>

          {/* Ticket Type Selection */}
          <div>
            <Select value={formData.ticketType} onValueChange={(value) => handleInputChange('ticketType', value)}>
              <SelectTrigger className={`h-12 text-base ${errors.ticketType ? 'border-red-500 focus:border-red-500' : ''}`}>
                <SelectValue placeholder="Select Ticket Type" />
              </SelectTrigger>
              <SelectContent className="bg-background border-brand-teal z-50">
                <SelectItem value="general">General Admission</SelectItem>
                <SelectItem value="vip">VIP Admission + 1 Extra Hour of Q&A Coaching</SelectItem>
              </SelectContent>
            </Select>
            {errors.ticketType && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.ticketType}
              </div>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 text-lg font-bold bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            PURCHASE YOUR TICKET
          </Button>
        </form>
        
        <div className="text-center space-y-2">
          <p className="text-sm text-brand-gray">
            ✓ Secure Checkout ✓ Instant Access ✓ Bonus Resources
          </p>
          <p className="text-xs text-muted-foreground">
            Safe and secure payment processing. Your information is protected.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChallengeRegistrationForm;