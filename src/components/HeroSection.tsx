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
          <div>
            <Badge className="bg-brand-orange text-white mb-6 text-sm px-4 py-2">
              FREE WEBINAR - LIMITED SEATS
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight font-montserrat drop-shadow-lg">
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

            <div className="text-2xl font-bold mb-8 border-4 border-black inline-block px-4 py-2 rounded-lg">
              <span className="text-white">MORE DOORS</span>{" "}
              <span className="text-brand-orange" style={{WebkitTextStroke: '2px white'}}>= MORE CASHFLOW</span>
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