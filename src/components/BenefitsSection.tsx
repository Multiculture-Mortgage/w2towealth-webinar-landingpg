import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  Home, 
  TrendingUp, 
  Users, 
  BookOpen, 
  Target,
  PieChart,
  Shield
} from "lucide-react";
import { useState, useEffect } from "react";

const benefits = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Strategic Property Selection",
    description: "Learn our proven system for identifying high-ROI rental properties in emerging markets."
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Multiple Income Streams", 
    description: "Create passive income through rentals while leveraging appreciation for long-term wealth."
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    title: "Portfolio Diversification",
    description: "Build a balanced real estate portfolio that generates consistent monthly cash flow."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Risk Mitigation Strategies",
    description: "Protect your investments with proper insurance, legal structures, and market analysis."
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Wealth Acceleration",
    description: "Use leverage and compound growth to build wealth faster than traditional investments."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Expert Network Access",
    description: "Connect with experienced investors, contractors, and real estate professionals."
  }
];

const questions = [
  "How much do I need to start?",
  "What about my credit score?",
  "Can I do this with a full-time job?",
  "How do I find good deals?",
  "What if the market crashes?",
  "Should I buy or build?",
  "How much cash flow is realistic?",
  "What about property management?",
  "How do I qualify for loans?",
  "Is house hacking right for me?"
];

const BenefitsSection = () => {
  const [questionPositions, setQuestionPositions] = useState<Array<{
    top: string;
    left: string;
    rotation: number;
    background: string;
    border: string;
    animationDelay: string;
  }>>([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  useEffect(() => {
    const generateRandomPositions = () => {
      const positions = [];
      const usedAreas: Array<{x: number, y: number, width: number, height: number}> = [];
      
      for (let i = 0; i < questions.length; i++) {
        let attempts = 0;
        let position;
        let isValidPosition = false;
        
        do {
          // On mobile/tablet, keep questions in upper area only
          const isMobile = window.innerWidth < 1024;
          const maxTop = isMobile ? 30 : 70; // Much smaller area on mobile - only top 30%
          const maxLeft = isMobile ? 60 : 70; // Slightly smaller left area on mobile
          const top = Math.random() * maxTop + 5; // 5-35% on mobile, 5-75% on desktop
          const left = Math.random() * maxLeft + -15; // 5-65% on mobile, 5-75% on desktop
          const rotation = (Math.random() - 0.5) * 6; // -3 to 3 degrees
          
          // Estimated dimensions for collision detection (in percentage)
          const estimatedWidth = 20; // roughly 20% of container width
          const estimatedHeight = 20; // roughly 8% of container height
          
          // Check for overlaps with existing positions
          isValidPosition = usedAreas.every(area => {
            const horizontalClear = (left > area.x + area.width) || (left + estimatedWidth < area.x);
            const verticalClear = (top > area.y + area.height) || (top + estimatedHeight < area.y);
            return horizontalClear || verticalClear;
          });
          
          if (isValidPosition || attempts > 100) {
            position = {
              top: `${top}%`,
              left: `${Math.ceil(left)}%`,
              rotation,
              background: Math.random() > 0.5 
                ? "bg-white/90" 
                : "bg-gradient-to-r from-brand-teal/10 to-brand-orange/10",
              border: Math.random() > 0.5 
                ? "border-brand-orange/20" 
                : "border-brand-teal/20",
              animationDelay: `${i * 0.1}s`
            };
            
            // Add this position to used areas
            usedAreas.push({
              x: left,
              y: top,
              width: estimatedWidth,
              height: estimatedHeight
            });
          }
          
          attempts++;
        } while (!isValidPosition && attempts < 100);
        
        if (position) {
          positions.push(position);
        }
      }
      
      return positions;
    };

    setQuestionPositions(generateRandomPositions());
  }, []);

  // Auto-cycle through questions every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuestionIndex((prev) => (prev + 1) % questions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#EDF0F3' }}>
      {/* Wavy Separator at Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-16" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C360,0 480,100 720,80 C960,60 1200,0 1440,40 L1440,0 L0,0 Z" fill="hsl(var(--background))"/>
        </svg>
      </div>

      {/* Elegantly Masked Property Photos */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-0 w-1/3 h-1/2 opacity-40"
          style={{
            backgroundImage: `url(/lovable-uploads/48e440a1-ac81-4f6c-b194-0af2cad87659.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: `linear-gradient(to right, black 10%, transparent 60%)`,
            WebkitMaskImage: `linear-gradient(to right, black 10%, transparent 60%)`,
            filter: 'blur(0.5px)'
          }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 w-2/5 h-1/3 opacity-35"
          style={{
            backgroundImage: `url(/lovable-uploads/91aa4631-3794-4e2c-b7dd-30d4a336c824.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: `linear-gradient(to left, black 20%, transparent 70%)`,
            WebkitMaskImage: `linear-gradient(to left, black 20%, transparent 70%)`,
            filter: 'blur(0.5px)'
          }}
        ></div>
      </div>

      {/* Soft Blending Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/75 to-background/90"></div>
      
      {/* Subtle Texture Enhancement */}
      <div className="absolute inset-0 opacity-4" style={{
        backgroundImage: `linear-gradient(90deg, transparent 97%, hsl(var(--brand-teal) / 0.1) 100%)`,
        backgroundSize: '80px 100%'
      }}></div>

      {/* Curved Accent Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-1/4 right-0 w-64 h-64 opacity-4" viewBox="0 0 200 200">
          <path d="M50,200 Q200,50 200,0 L200,200 Z" fill="hsl(var(--brand-orange))"/>
        </svg>
        <svg className="absolute bottom-1/4 left-0 w-48 h-48 opacity-4" viewBox="0 0 200 200">
          <path d="M0,0 Q150,200 200,50 L0,0 Z" fill="hsl(var(--brand-teal))"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-8">
        {/* Question Cloud */}
        <div className="text-center mb-6 relative">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-12">
            Do You Have More Questions Than Answers?
          </h2>
          <div className="relative h-[400px] lg:h-[800px] md:h-[400px] sm:h-[450px] w-full max-w-7xl mx-auto mb-16 lg:mb-0">
            {/* Question bubbles */}
            {questions.map((question, index) => {
              const position = questionPositions[index];
              if (!position) return null;
              
              const isActive = index === activeQuestionIndex;
              
              return (
                <div 
                  key={index}
                  className={`absolute animate-fade-in transition-all duration-150 cursor-pointer group z-50 ${
                    isActive 
                      ? 'scale-110 animate-[float_1s_ease-in-out_infinite]' 
                      : 'hover:scale-110 hover:animate-[float_1s_ease-in-out_infinite]'
                  }`}
                  style={{ 
                    top: position.top,
                    left: position.left,
                    transform: `rotate(${position.rotation}deg)`,
                    animationDelay: position.animationDelay
                  }}
                >
                  <div className={`${position.background} shadow-lg rounded-2xl px-6 py-4 text-lg md:text-xl font-black text-brand-navy border ${position.border} drop-shadow-md backdrop-blur-sm ${isActive ? 'shadow-2xl' : 'group-hover:shadow-2xl'}`}>
                    "{question}"
                  </div>
                </div>
              );
            })}
            
            {/* Overlay Image - Responsive positioning */}
            <div 
              className="absolute top-[320px] left-1/2 transform -translate-x-1/2 lg:top-0 lg:left-auto lg:right-[-280px] lg:transform-none w-[640px] h-[768px] opacity-85 z-5"
              style={{
                backgroundImage: `url(/lovable-uploads/cbc109f7-c822-4ba1-9912-a4c9909a3c15.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                maskImage: `radial-gradient(ellipse 110% 100% at center, black 50%, transparent 60%)`,
                WebkitMaskImage: `radial-gradient(ellipse 110% 100% at center, black 50%, transparent 60%)`,
              }}
            ></div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16 mt-[800px] md:mt-[650px] lg:mt-0">
          <Badge className="bg-brand-teal text-white mb-4 px-4 py-2">
            WEBINAR AGENDA
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
            What You'll Learn in 60 Minutes
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            A comprehensive roadmap to transform your W-2 salary into 
            wealth-building homeownership, the strategic way.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border border-border hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-orange text-white p-3 rounded-lg flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-brand-gray leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bonus Section */}
        <Card className="bg-gradient-subtle border-2 border-brand-orange">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-brand-navy mb-4">
              🎁 Exclusive Bonus Materials
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-brand-orange font-semibold mb-2">Property Analysis Toolkit</div>
                <p className="text-sm text-brand-gray">Spreadsheets and calculators to evaluate deals</p>
              </div>
              <div>
                <div className="text-brand-orange font-semibold mb-2">Market Research Guide</div>
                <p className="text-sm text-brand-gray">Step-by-step area analysis methodology</p>
              </div>
              <div>
                <div className="text-brand-orange font-semibold mb-2">Financing Checklist</div>
                <p className="text-sm text-brand-gray">Complete guide to securing investment loans</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BenefitsSection;