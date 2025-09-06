import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users2, TrendingUp, Quote } from "lucide-react";
import headshotImage from "@/assets/headshot.jpg";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Software Engineer",
    content: "I went from zero properties to three rental units in 18 months. The strategies from this webinar completely changed my financial trajectory.",
    rating: 5
  },
  {
    name: "Marcus Johnson", 
    role: "Marketing Manager",
    content: "The step-by-step approach made real estate investing feel achievable. Now I have consistent passive income alongside my day job.",
    rating: 5
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src={headshotImage} 
                alt="Multiculture Mortgage LLC Team" 
                className="w-full rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <Badge className="bg-brand-navy text-white mb-4 px-4 py-2">
              YOUR EXPERT INSTRUCTORS
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-navy">
              Learn From Proven Real Estate Professionals
            </h2>
            
            <p className="text-lg text-brand-gray mb-8 leading-relaxed">
              As the founders of Multiculture Mortgage LLC, our team has personally helped 
              hundreds of working professionals transition from traditional employment to building 
              substantial wealth through strategic real estate investments.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-orange text-white p-2 rounded-lg">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">15+ Years Experience</h4>
                  <p className="text-brand-gray">Licensed mortgage professionals with extensive real estate investment expertise</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-teal text-white p-2 rounded-lg">
                  <Users2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">500+ Successful Clients</h4>
                  <p className="text-brand-gray">Guided professionals from first-time buyers to seasoned investors</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-navy text-white p-2 rounded-lg">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">$100M+ in Transactions</h4>
                  <p className="text-brand-gray">Facilitated millions in real estate investments and wealth creation</p>
                </div>
              </div>
            </div>

            <Button className="bg-gradient-primary text-white font-bold px-8 py-3">
              Secure Your Spot Now
            </Button>
          </div>
        </div>

        {/* Testimonials Row */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-l-4 border-l-brand-orange">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3 mb-3">
                  <Quote className="h-5 w-5 text-brand-orange flex-shrink-0 mt-1" />
                  <p className="text-brand-gray italic">"{testimonial.content}"</p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-brand-navy">{testimonial.name}</p>
                    <p className="text-sm text-brand-gray">{testimonial.role}</p>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-brand-orange fill-current" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;