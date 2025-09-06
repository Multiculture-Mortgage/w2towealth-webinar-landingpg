import { useState } from "react";
import { Search } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const ChartTeaserSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-12 bg-gradient-to-r from-brand-orange/5 to-brand-teal/5 border-y border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-black text-brand-navy mb-2 drop-shadow-md">
              Is it cheaper to rent or to buy?
            </h3>
            <p className="text-lg text-brand-orange font-semibold">
              Learn the truth in this webinar
            </p>
          </div>
          
          {/* Chart Image with Lightbox */}
          <div className="lg:w-1/2 relative group">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <div className="relative cursor-pointer">
                  <img 
                    src="/lovable-uploads/a2bf3a61-c911-4e09-93eb-630ab9dce576.png" 
                    alt="Owner Costs vs. Rent Chart - Wealth creation comparison across major cities"
                    className="w-3/4 h-auto mx-auto rounded-lg shadow-sm mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity"
                  />
                  {/* Pulsing Magnifying Glass */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-[0_4px_12px_rgba(0,0,0,0.4)] animate-pulse">
                    <Search className="h-6 w-6 text-brand-navy" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-full p-0">
                <img 
                  src="/lovable-uploads/a2bf3a61-c911-4e09-93eb-630ab9dce576.png" 
                  alt="Owner Costs vs. Rent Chart - Full Size"
                  className="w-full h-auto rounded-lg"
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartTeaserSection;