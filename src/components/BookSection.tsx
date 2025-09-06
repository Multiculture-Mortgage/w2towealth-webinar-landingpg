import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen } from "lucide-react";

const BookSection = () => {
  return (
    <section className="relative py-8 px-0 overflow-hidden" style={{ backgroundColor: '#d9514b' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full px-8 xl:px-16">
          {/* Book Image */}
          <div className="relative flex justify-center lg:justify-end lg:pr-8">
            <div className="relative z-10 w-full max-w-md lg:max-w-lg">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img 
                  src="/lovable-uploads/5aa94387-5b12-41fa-8385-80effa22b7a9.png" 
                  alt="House Hacking The American Dream book cover"
                  className="relative z-10 w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-8 -right-4 opacity-20">
              <BookOpen className="w-16 h-16 text-white animate-pulse" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 flex flex-col justify-center w-full lg:pl-8">
            <div className="space-y-3">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium">
                <BookOpen className="w-4 h-4 mr-2" />
                New Release
              </div>
              
              <div className="text-center space-y-1 bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-4xl lg:text-5xl font-arvo font-bold leading-tight" style={{ color: '#E7907D' }}>
                  House Hacking
                </h2>
                <h3 className="text-2xl lg:text-3xl font-arvo font-bold leading-tight" style={{ color: '#2D4350' }}>
                  The American Dream
                </h3>
                <p className="text-lg font-roboto-condensed leading-relaxed" style={{ color: '#2D4350' }}>
                  Maximizing Cash Flow In An Unaffordable America
                </p>
              </div>
              
              <p className="text-base text-white/90 leading-relaxed">
                Discover the proven strategies to maximize cash flow in an unaffordable America. 
                Learn how to build wealth through smart real estate investing and achieve financial freedom.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white/20 text-white rounded-full text-xs font-medium">
                  Real Estate Strategy
                </span>
                <span className="px-2 py-1 bg-white/20 text-white rounded-full text-xs font-medium">
                  Cash Flow Maximization
                </span>
                <span className="px-2 py-1 bg-white/20 text-white rounded-full text-xs font-medium">
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

            <div className="pt-3 border-t border-white/20">
              <p className="text-sm text-white/80">
                "A comprehensive guide that breaks down complex real estate strategies into actionable steps." 
                <span className="block mt-1 font-medium text-white">- Real Estate Professional</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;