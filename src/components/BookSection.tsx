import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen } from "lucide-react";

const BookSection = () => {
  return (
    <section className="relative py-8 overflow-hidden w-full min-h-[300px]" style={{ backgroundColor: '#d9514b' }}>
      {/* Book Raffle Banner */}
      <div className="relative z-30">
        <div className="bg-gradient-to-r from-transparent via-yellow-400 to-transparent text-center py-3 px-4">
          <h3 className="text-xl md:text-2xl font-bold text-black">
            🎉 **All ATTENDEES WILL GET A DIGITAL COPY** 🎉
          </h3>
          <p className="text-xs text-black/70 mt-1">
            VIP ticket holders will get a signed copy in the mail.
          </p>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Book Image - Absolute positioned */}
      <div className="absolute left-1/2 md:left-4 top-24 md:top-1/2 transform -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 z-10">
        <div className="relative w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] mb-8 md:mb-0">
          <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/10 rounded-xl blur-lg"></div>
          <img 
            src="/lovable-uploads/5aa94387-5b12-41fa-8385-80effa22b7a9.png" 
            alt="House Hacking The American Dream book cover"
            className="relative z-10 w-full h-auto rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Content Area - Takes remaining space */}
      <div className="relative z-20 pt-4 md:pt-0 md:ml-80 lg:ml-96 xl:ml-[36rem] px-4 md:px-8 md:mr-8 flex items-center justify-center min-h-[450px] md:min-h-[400px]">
        <div className="flex flex-col items-center gap-6 w-full mt-80 md:mt-0 max-w-full mx-auto">
          
          {/* Combined Section - Horizontal Layout */}
          <div className="w-full flex flex-col md:flex-row gap-6 items-center md:items-center justify-center">
            {/* Title Section */}
            <div className="bg-white p-3 md:p-4 rounded-lg shadow-lg w-full max-w-md md:min-w-[480px] flex-shrink-0 text-center transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="inline-flex items-center px-2 py-1 rounded-full bg-red-100 text-red-600 text-xs font-medium mb-2">
                <BookOpen className="w-3 h-3 mr-1" />
                New Release
              </div>
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-arvo font-bold leading-tight" style={{ color: '#E7907D' }}>
                House Hacking
              </h2>
              <h3 className="text-xl md:text-lg lg:text-xl xl:text-2xl font-arvo font-bold leading-tight" style={{ color: '#2D4350' }}>
                The American Dream
              </h3>
              <p className="text-base md:text-sm lg:text-base font-roboto-condensed leading-relaxed" style={{ color: '#2D4350' }}>
                Maximizing Cash Flow In An Unaffordable America
              </p>
            </div>

            {/* Description and Actions */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              <p className="text-white/90 leading-relaxed">
                Discover the proven strategies to maximize cash flow in an unaffordable America. 
                Learn how to build wealth through smart real estate investing and achieve financial freedom.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
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

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Button 
                  size="lg" 
                  className="group bg-yellow-500 hover:bg-yellow-600 text-black"
                  onClick={() => window.open('https://hhtadbook.com/', '_blank', 'noopener,noreferrer')}
                >
                  Get Your Copy Now
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
      </div>
    </section>
  );
};

export default BookSection;