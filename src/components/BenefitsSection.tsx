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

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
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
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-brand-teal text-white mb-4 px-4 py-2">
            WEBINAR CURRICULUM
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
            What You'll Master in 90 Minutes
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            A comprehensive roadmap to transform your W-2 salary into a 
            wealth-building real estate investment strategy.
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