import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { Calendar, Clock, Users, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

import CountdownTimer from './CountdownTimer';
import { getTurnstileSiteKey } from '@/config/turnstile';

const HeroSection = () => {
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
    <section className="bg-gradient-subtle py-20 relative overflow-hidden">
      {/* Softly Blended Property Photos */}
      <div className="absolute inset-0 opacity-8">
        <div 
          className="absolute top-0 right-0 w-1/2 h-1/2 opacity-60"
          style={{
            backgroundImage: `url(/lovable-uploads/84f850f2-3417-499a-82b5-e953f162c627.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: `radial-gradient(ellipse at center, black 20%, transparent 70%)`,
            WebkitMaskImage: `radial-gradient(ellipse at center, black 20%, transparent 70%)`
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-50"
          style={{
            backgroundImage: `url(/lovable-uploads/3a87bf2d-9ef7-4224-b887-dc977122b26f.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: `radial-gradient(ellipse at center, black 30%, transparent 80%)`,
            WebkitMaskImage: `radial-gradient(ellipse at center, black 30%, transparent 80%)`
          }}
        ></div>
      </div>
      
      {/* Soft Gradient Overlays for Seamless Blending */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/3 via-transparent to-brand-teal/3"></div>

      {/* Wavy Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path d="M0,160 C320,100 420,200 640,180 C860,160 1120,80 1440,120 L1440,0 L0,0 Z" fill="hsl(var(--brand-orange) / 0.06)"/>
          <path d="M0,320 C360,280 480,360 720,340 C960,320 1200,240 1440,280 L1440,0 L0,0 Z" fill="hsl(var(--brand-teal) / 0.06)"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <Badge className="bg-brand-orange text-white mb-6 text-sm px-4 py-2">
              FREE WEBINAR - LIMITED SEATS
            </Badge>
            
            <h1 className="text-6xl md:text-6xl font-black mb-6 leading-tight font-montserrat drop-shadow-lg">
              <span className="text-brand-navy font-extrabold">W-2 TO</span>{" "}
              <span className="text-brand-orange font-extrabold">WEALTH</span>
              <br />
              <span className="text-brand-teal text-3xl md:text-4xl font-extrabold uppercase">
                Building Wealth Through Home Ownership
              </span>
            </h1>
            
            <p className="text-xl text-brand-gray mb-8 leading-relaxed">
              Turn your 9-to-5 income into <strong>real estate assets</strong> and build 
              generational wealth through strategic homeownership.
            </p>

            {/* Event Details */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-center lg:justify-start text-brand-navy">
                <Calendar className="h-5 w-5 text-brand-orange mr-3" />
                <span className="font-semibold">June 12th, 2025</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-brand-navy">
                <Clock className="h-5 w-5 text-brand-orange mr-3" />
                <span className="font-semibold">60 Minutes + Live Q&A</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-brand-navy">
                <Users className="h-5 w-5 text-brand-orange mr-3" />
                <span className="font-semibold">Limited to 100 Attendees</span>
              </div>
            </div>

            <div className="mb-8 flex justify-center lg:justify-start">
              <img 
                src="/lovable-uploads/f614d342-c143-429e-b200-dd7293cc6f2a.png" 
                alt="More Doors = More Cashflow" 
                className="h-14 w-auto"
              />
            </div>
          </div>

          {/* Registration Card */}
          <div>
            <Card className="shadow-xl border-0" id="signup-form">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-brand-navy">
                  Register For Our Next Webinar 
                </CardTitle>
                <p className="text-brand-gray">
                  We will be breaking down the logic and math behind why homeownership in general is necessary and why we prefer 2-4 units for first time home buyers and investors alike. Start looking at home ownership as an investment or it can become a nightmare. <br/><br/>
                  If you are already wealthy then this webinar may not be for you. This is for those that are looking to pull themselves up by their bootstraps!
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
                  <CountdownTimer />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;