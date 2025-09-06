import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen } from "lucide-react";

const BookSection = () => {
  return (
    <section className="relative py-8 overflow-hidden w-full min-h-[300px]" style={{ backgroundColor: '#d9514b' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Book Image - Absolute positioned */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
        <div className="relative w-48 lg:w-56">
          <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-white/10 rounded-xl blur-lg"></div>
          <img 
            src="/lovable-uploads/5aa94387-5b12-41fa-8385-80effa22b7a9.png" 
            alt="House Hacking The American Dream book cover"
            className="relative z-10 w-full h-auto rounded-xl shadow-xl"
          />
        </div>
      </div>

      {/* Content Area - Takes remaining space */}
      <div className="relative z-20 ml-52 lg:ml-64 mr-4 flex items-center min-h-[300px]">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 w-full">
          
          {/* Title Section */}
          <div className="bg-white p-4 rounded-lg shadow-lg flex-shrink-0">
            <div className="inline-flex items-center px-2 py-1 rounded-full bg-red-100 text-red-600 text-xs font-medium mb-2">
              <BookOpen className="w-3 h-3 mr-1" />
              New Release
            </div>
            <h2 className="text-2xl lg:text-3xl font-arvo font-bold leading-tight" style={{ color: '#E7907D' }}>
              House Hacking
            </h2>
            <h3 className="text-lg lg:text-xl font-arvo font-bold leading-tight" style={{ color: '#2D4350' }}>
              The American Dream
            </h3>
            <p className="text-sm font-roboto-condensed leading-relaxed" style={{ color: '#2D4350' }}>
              Maximizing Cash Flow In An Unaffordable America
            </p>
          </div>

          {/* Description and Actions */}
          <div className="flex-grow space-y-4">
            <p className="text-white/90 leading-relaxed">
              Discover the proven strategies to maximize cash flow in an unaffordable America. 
              Learn how to build wealth through smart real estate investing and achieve financial freedom.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
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

            <div className="flex flex-wrap gap-3">
              <Button 
                size="lg" 
                className="group bg-yellow-500 hover:bg-yellow-600 text-black"
                onClick={() => window.open('https://hhtadbook.com', '_blank')}
              >
                Get Your Copy Now
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/20 border-white text-white hover:bg-white hover:text-red-600"
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