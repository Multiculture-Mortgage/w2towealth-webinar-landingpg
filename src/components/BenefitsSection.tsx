import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, DollarSign, Home, TrendingUp, Users, BookOpen } from "lucide-react";

const benefits = [
  {
    icon: <DollarSign className="h-8 w-8 text-brand-orange" />,
    title: "Create Multiple Income Streams",
    description: "Learn proven strategies to generate passive income through real estate investments while keeping your W-2 job."
  },
  {
    icon: <Home className="h-8 w-8 text-brand-orange" />,
    title: "Real Estate Investment Mastery",
    description: "Discover how to identify, analyze, and acquire profitable rental properties that build long-term wealth."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-brand-orange" />,
    title: "Financial Growth Acceleration",
    description: "Transform your salary into a wealth-building machine through strategic property investments and appreciation."
  },
  {
    icon: <Users className="h-8 w-8 text-brand-orange" />,
    title: "Expert Network Access",
    description: "Connect with experienced investors, lenders, and real estate professionals who can accelerate your journey."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-brand-orange" />,
    title: "Comprehensive Education",
    description: "Get step-by-step guidance on financing, property management, tax strategies, and scaling your portfolio."
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-brand-orange" />,
    title: "Proven Success Framework",
    description: "Follow a tested system that has helped thousands transition from W-2 employees to successful investors."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            What You'll <span className="text-brand-orange">Discover</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This comprehensive webinar will equip you with the knowledge and strategies needed to build wealth through real estate, even while working full-time.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-strong max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-black mb-4">
              Ready to Transform Your <span className="text-brand-orange">Financial Future?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of professionals who are already building wealth through real estate investing.
            </p>
            <div className="flex items-center justify-center space-x-2 text-brand-teal font-semibold">
              <CheckCircle className="h-5 w-5" />
              <span>100% Free Webinar</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-brand-teal font-semibold">
              <CheckCircle className="h-5 w-5" />
              <span>Live Q&A Session</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-brand-teal font-semibold">
              <CheckCircle className="h-5 w-5" />
              <span>Exclusive Bonus Materials</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;