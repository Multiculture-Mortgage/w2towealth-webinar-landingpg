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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
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