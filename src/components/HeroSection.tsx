import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import heroBackground from "@/assets/hero-background.jpg";
import logoLight from "@/assets/logo-light.png";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registration email:", email);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/80 via-brand-teal/70 to-brand-orange/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src={logoLight} 
            alt="Multiculture Mortgage LLC" 
            className="h-16 mx-auto mb-4"
          />
        </div>

        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
            <span className="text-brand-orange">MORE DOORS</span>
            <br />
            <span className="text-white">=</span>
            <br />
            <span className="text-brand-orange">MORE CASHFLOW</span>
          </h1>
        </div>

        {/* Webinar Title */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            W2 TO <span className="text-brand-orange">WEALTH</span>
          </h2>
          <h3 className="text-2xl md:text-4xl font-black text-brand-orange">
            WEBINAR
          </h3>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">
          TURN YOUR 9 TO 5 INCOME INTO REAL ESTATE ASSETS
        </p>

        {/* Date */}
        <div className="mb-8">
          <p className="text-2xl md:text-3xl font-bold text-brand-orange">
            JUNE 12TH, 2025
          </p>
        </div>

        {/* Registration Form */}
        <Card className="max-w-md mx-auto p-6 bg-white/95 backdrop-blur-sm shadow-strong">
          <form onSubmit={handleRegistration} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-center text-lg py-3"
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              className="w-full text-lg font-bold py-3 bg-gradient-cta hover:shadow-strong transform hover:scale-105 transition-all duration-300"
            >
              REGISTER NOW!
            </Button>
          </form>
          <p className="text-sm text-muted-foreground mt-4">
            Secure your spot - Limited seats available
          </p>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;