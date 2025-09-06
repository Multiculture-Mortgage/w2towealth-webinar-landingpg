import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Calendar, Clock, Users } from "lucide-react";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration email:", email);
  };

  return (
    <section className="bg-gradient-subtle py-20 relative overflow-hidden">
      {/* Background Texture Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-orange rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-brand-teal rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-brand-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-brand-teal rounded-full blur-2xl"></div>
      </div>
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-3" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--brand-navy)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge className="bg-brand-orange text-white mb-6 text-sm px-4 py-2">
              FREE WEBINAR - LIMITED SEATS
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              <span className="text-brand-navy">W2 TO</span>{" "}
              <span className="text-brand-orange">WEALTH</span>
              <br />
              <span className="text-brand-teal text-3xl md:text-4xl">
                Through Homeownership
              </span>
            </h1>
            
            <p className="text-xl text-brand-gray mb-8 leading-relaxed">
              Turn your 9-to-5 income into <strong>real estate assets</strong> and build 
              generational wealth through strategic property investments.
            </p>

            {/* Event Details */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-brand-navy">
                <Calendar className="h-5 w-5 text-brand-orange mr-3" />
                <span className="font-semibold">June 12th, 2025</span>
              </div>
              <div className="flex items-center text-brand-navy">
                <Clock className="h-5 w-5 text-brand-orange mr-3" />
                <span className="font-semibold">90 Minutes + Live Q&A</span>
              </div>
              <div className="flex items-center text-brand-navy">
                <Users className="h-5 w-5 text-brand-orange mr-3" />
                <span className="font-semibold">Limited to 500 Attendees</span>
              </div>
            </div>

            <div className="text-2xl font-bold text-brand-orange mb-8">
              MORE DOORS = MORE CASHFLOW
            </div>
          </div>

          {/* Registration Card */}
          <div>
            <Card className="shadow-xl border-0">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-brand-navy">
                  Reserve Your Spot Today
                </CardTitle>
                <p className="text-brand-gray">
                  Join professionals already building wealth through real estate
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleRegistration} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 text-base"
                  />
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg font-bold bg-gradient-primary hover:opacity-90 transition-opacity"
                  >
                    REGISTER FREE NOW
                  </Button>
                </form>
                
                <div className="text-center space-y-2">
                  <p className="text-sm text-brand-gray">
                    ✓ 100% Free Access ✓ Instant Confirmation ✓ Bonus Materials
                  </p>
                  <p className="text-xs text-muted-foreground">
                    No spam. Unsubscribe anytime.
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