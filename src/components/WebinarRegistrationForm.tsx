import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

import CountdownTimer from './CountdownTimer';
import { getTurnstileSiteKey } from '@/config/turnstile';

interface WebinarRegistrationFormProps {
  challengeDate?: string | null;
}

const WebinarRegistrationForm = ({ challengeDate }: WebinarRegistrationFormProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Set up global callbacks for Turnstile
  useEffect(() => {
    (window as any).onTurnstileCallback = (token: string) => {
      setCaptchaToken(token);
    };

    (window as any).onTurnstileError = () => {
      setCaptchaToken(null);
    };

    return () => {
      delete (window as any).onTurnstileCallback;
      delete (window as any).onTurnstileError;
    };
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

  const handleInputBlur = (field: string, value: string) => {
    let error = "";
    
    switch (field) {
      case 'name':
        error = validateName(value);
        break;
      case 'email':
        error = validateEmail(value);
        break;
      case 'phone':
        error = validatePhone(value);
        break;
    }
    
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);

    const newErrors = {
      name: nameError,
      email: emailError,
      phone: phoneError
    };

    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== "");
    
    if (hasErrors) {
      setIsSubmitting(false);
      return;
    }

    // Check Turnstile
    if (!captchaToken) {
      alert("Please complete the security verification");
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    try {
      console.log("Registration data:", { ...formData, captchaToken });
      
      // Here you would typically send the data to your backend
      // await submitRegistration({ ...formData, captchaToken });
      
      // Navigate to friend invite page on successful registration
      navigate('/friend-invite');
      
      // Reset form
      setFormData({ name: "", email: "", phone: "" });
      setCaptchaToken(null);
      
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-xl border-2 border-brand-teal bg-brand-teal/10 backdrop-blur-sm" id="signup-form">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold text-brand-navy">
          Register For Our Next Webinar 
        </CardTitle>
        <p className="text-brand-navy/80">
          We will be breaking down the logic and math behind why homeownership in general is necessary and why we prefer 2-4 units for first time home buyers and investors alike. Start looking at home ownership as an investment or it can become a nightmare. <br/><br/>
          This is for those that are looking to pull themselves up by their bootstraps!
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleRegistration} className="space-y-4">
          {/* Name Field */}
          <div>
            <Input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              onBlur={(e) => handleInputBlur('name', e.target.value)}
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
              onBlur={(e) => handleInputBlur('email', e.target.value)}
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
              onBlur={(e) => handleInputBlur('phone', e.target.value)}
              className={`h-12 text-base ${errors.phone ? 'border-red-500 focus:border-red-500' : ''}`}
            />
            {errors.phone && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.phone}
              </div>
            )}
          </div>

          {/* Cloudflare Turnstile */}
          <div className="flex justify-center">
            <div
              className="cf-turnstile"
              data-sitekey={getTurnstileSiteKey()}
              data-callback="onTurnstileCallback"
              data-error-callback="onTurnstileError"
            ></div>
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full h-12 text-lg font-bold bg-gradient-primary hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {isSubmitting ? "REGISTERING..." : "REGISTER FREE NOW"}
          </Button>
        </form>

        <div className="flex justify-center py-4">
          <CountdownTimer targetDate={challengeDate} />
        </div>
        
        <div className="text-center space-y-2">
          <p className="text-sm text-brand-gray">
            ✓ 100% Free Access ✓ Instant Confirmation ✓ Bonus Materials
          </p>
          <p className="text-xs text-muted-foreground">
            No spam. Unsubscribe anytime. Your information is secure.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WebinarRegistrationForm;