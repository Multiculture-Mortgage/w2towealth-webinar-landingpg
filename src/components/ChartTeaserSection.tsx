import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const ChartTeaserSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const questions = [
    {
      title: "Is it cheaper to rent or to buy?",
      subtitle: "Learn the truth in this webinar"
    },
    {
      title: "When is the right time to buy?",
      subtitle: "Discover the optimal timing strategies"
    },
    {
      title: "How much house can you afford?",
      subtitle: "Calculate your true buying power"
    },
    {
      title: "What are the hidden costs of buying?",
      subtitle: "Uncover expenses you never considered"
    },
    {
      title: "Should you buy or keep renting?",
      subtitle: "Make the right decision for your future"
    }
  ];

  const nextQuestionIndex = (currentQuestionIndex + 1) % questions.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
        setIsAnimating(false);
      }, 1200); // Slower animation duration
    }, 5000);

    return () => clearInterval(interval);
  }, [questions.length]);

  return (
    <section className="py-12 bg-gradient-to-r from-brand-orange/5 to-brand-teal/5 border-y border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="relative h-24 md:h-28 overflow-hidden">
              {/* Current Question - slides up and out */}
              <div
                className={`absolute inset-0 ${isAnimating ? 'transition-all duration-1000 ease-out opacity-0 transform -translate-y-full' : 'opacity-100 transform translate-y-0'}`}
              >
                <h3 className="text-3xl md:text-4xl font-black text-brand-navy mb-2 drop-shadow-md">
                  {questions[currentQuestionIndex].title}
                </h3>
                <p className="text-lg text-brand-orange font-semibold">
                  {questions[currentQuestionIndex].subtitle}
                </p>
              </div>
              
              {/* Next Question - slides up from bottom only during animation */}
              {isAnimating && (
                <div
                  className="absolute inset-0 transform translate-y-full opacity-0"
                  style={{
                    animation: 'slide-up-fade-in 1000ms ease-in forwards'
                  }}
                >
                  <h3 className="text-3xl md:text-4xl font-black text-brand-navy mb-2 drop-shadow-md">
                    {questions[nextQuestionIndex].title}
                  </h3>
                  <p className="text-lg text-brand-orange font-semibold">
                    {questions[nextQuestionIndex].subtitle}
                  </p>
                </div>
              )}
            </div>
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
              <DialogContent className="max-w-5xl w-full p-0" aria-describedby="chart-description">
                <div className="sr-only" id="chart-description">
                  Full size view of the Owner Costs vs Rent comparison chart
                </div>
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