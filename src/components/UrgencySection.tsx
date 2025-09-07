import { useState } from "react";
import { Search } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const UrgencySection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Chart Image with Lightbox */}
          <div className="w-full lg:w-1/2 relative group z-10">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <div className="relative cursor-pointer">
                  <img 
                    src="/lovable-uploads/032d8af8-642f-4ffc-87ff-266f166e4346.png" 
                    alt="American Life Expectancy Chart - How long do Americans live and remaining years by age"
                    className="w-3/4 h-40 md:h-52 object-cover object-top mx-auto rounded-lg shadow-sm mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity"
                  />
                  {/* Pulsing Magnifying Glass */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-[0_4px_12px_rgba(0,0,0,0.4)] animate-pulse">
                    <Search className="h-6 w-6 text-foreground" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-6xl w-full p-0" aria-describedby="lifespan-chart-description">
                <div className="sr-only" id="lifespan-chart-description">
                  Full size view of the American life expectancy chart showing remaining years by current age
                </div>
                <img 
                  src="/lovable-uploads/032d8af8-642f-4ffc-87ff-266f166e4346.png" 
                  alt="American Life Expectancy Chart - Full Size"
                  className="w-full h-auto rounded-lg"
                />
              </DialogContent>
            </Dialog>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-foreground">
              You Are Running Out Of Time...
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground">
              Its time to take action. We want to help you get there.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;