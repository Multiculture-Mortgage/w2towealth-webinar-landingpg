import { useState } from "react";
import { Search } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const UrgencySection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-foreground">
            You Are Running Out Of Time...
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            Its time to take action. We want to help you get there.
          </p>
          
          {/* Chart Image with Lightbox */}
          <div className="relative group max-w-4xl mx-auto">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <div className="relative cursor-pointer">
                  <img 
                    src="/lovable-uploads/032d8af8-642f-4ffc-87ff-266f166e4346.png" 
                    alt="American Life Expectancy Chart - How long do Americans live and remaining years by age"
                    className="w-full h-auto mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                  {/* Pulsing Magnifying Glass */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg animate-pulse">
                    <Search className="h-8 w-8 text-foreground" />
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
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;