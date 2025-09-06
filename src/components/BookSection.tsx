import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen } from "lucide-react";

const BookSection = () => {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-br from-background to-secondary/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Book Image */}
          <div className="relative">
            <div className="relative z-10 max-w-md mx-auto lg:mx-0">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img 
                  src="/lovable-uploads/5aa94387-5b12-41fa-8385-80effa22b7a9.png" 
                  alt="House Hacking The American Dream book cover"
                  className="relative z-10 w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-8 -right-4 opacity-20">
              <BookOpen className="w-16 h-16 text-primary animate-pulse" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <BookOpen className="w-4 h-4 mr-2" />
                New Release
              </div>
              
              <div className="text-center space-y-2">
                <h2 className="text-5xl lg:text-6xl font-arvo font-bold leading-tight" style={{ color: '#E7907D' }}>
                  House Hacking
                </h2>
                <h3 className="text-3xl lg:text-4xl font-arvo font-bold leading-tight" style={{ color: '#2D4350' }}>
                  The American Dream
                </h3>
                <p className="text-xl font-roboto-condensed leading-relaxed" style={{ color: '#2D4350' }}>
                  Maximizing Cash Flow In An Unaffordable America
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover the proven strategies to maximize cash flow in an unaffordable America. 
                Learn how to build wealth through smart real estate investing and achieve financial freedom.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  Real Estate Strategy
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Cash Flow Maximization
                </span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                  Investment Guide
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group"
                onClick={() => window.open('https://hhtadbook.com', '_blank')}
              >
                Get Your Copy Now
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://hhtadbook.com', '_blank')}
              >
                Learn More
              </Button>
            </div>

            <div className="pt-4 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                "A comprehensive guide that breaks down complex real estate strategies into actionable steps." 
                <span className="block mt-1 font-medium">- Real Estate Professional</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;