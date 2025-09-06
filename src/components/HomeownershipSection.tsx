import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Home, TrendingUp } from "lucide-react";

const HomeownershipSection = () => {
  return (
    <section className="py-20 bg-brand-orange text-white relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 transform rotate-12">
          <Home className="h-24 w-24" />
        </div>
        <div className="absolute bottom-10 right-10 transform -rotate-12">
          <TrendingUp className="h-32 w-32" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45">
          <Home className="h-40 w-40" />
        </div>
        <div className="absolute top-20 right-1/4 transform rotate-45">
          <TrendingUp className="h-20 w-20" />
        </div>
        <div className="absolute bottom-20 left-1/4 transform -rotate-45">
          <Home className="h-28 w-28" />
        </div>
      </div>

      {/* Textured Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>

      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-black/10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-black mb-12">
            Get On The Path To Homeownership
          </h2>

          {/* Quote Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <Quote className="h-8 w-8 mx-auto mb-4 text-white" />
                <p className="text-xl md:text-2xl font-bold italic leading-relaxed">
                  "Time of ownership is more important than what your rate is!"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <Quote className="h-8 w-8 mx-auto mb-4 text-white" />
                <p className="text-xl md:text-2xl font-bold italic leading-relaxed">
                  "Don't wait to buy real estate. Buy real estate and wait!"
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-xl mb-6 text-white/90">
              Ready to start building wealth through homeownership and real estate investing?
            </p>
            <Button 
              size="lg" 
              className="bg-white text-brand-orange hover:bg-white/90 font-bold px-8 py-4 text-lg"
            >
              Join The Webinar Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeownershipSection;