import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users2, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge className="bg-brand-orange text-white mb-4">
              Your Host & Expert Guide
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Learn From a <span className="text-brand-orange">Proven Expert</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              As the founder of Multiculture Mortgage LLC, our expert has helped hundreds of professionals transition from traditional employment to building substantial wealth through strategic real estate investments.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Licensed Mortgage Professional</h4>
                  <p className="text-muted-foreground">Over 10 years helping clients secure optimal financing for investment properties</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Users2 className="h-6 w-6 text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">500+ Successful Clients</h4>
                  <p className="text-muted-foreground">Guided professionals from first-time buyers to seasoned investors</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <TrendingUp className="h-6 w-6 text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">$100M+ in Transactions</h4>
                  <p className="text-muted-foreground">Facilitated millions in real estate investments and wealth creation</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-gradient-cta text-white font-bold">
              Register for Free Access
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="space-y-6">
            <Card className="bg-brand-orange text-white">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-black mb-2">15+</div>
                <div className="text-lg font-semibold">Years Experience</div>
                <div className="text-sm opacity-90">In Real Estate & Finance</div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-brand-teal text-white">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-black mb-1">500+</div>
                  <div className="text-sm font-semibold">Happy Clients</div>
                </CardContent>
              </Card>
              
              <Card className="bg-brand-navy text-white">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-black mb-1">98%</div>
                  <div className="text-sm font-semibold">Success Rate</div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border-2 border-brand-orange">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-brand-orange fill-current" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "This webinar completely changed my perspective on wealth building. I went from zero properties to owning three rental units in just 18 months!"
                </p>
                <p className="text-sm font-semibold mt-2">- Sarah M., Software Engineer</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;