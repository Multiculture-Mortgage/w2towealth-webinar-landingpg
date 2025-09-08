import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users2, TrendingUp, Quote } from "lucide-react";

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
    <section className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Curved Top Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C480,100 960,20 1440,60 L1440,0 L0,0 Z" fill="hsl(var(--brand-orange))"/>
        </svg>
      </div>

      {/* Beautifully Blended Property Photos */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 right-10 w-1/3 h-1/2 opacity-25"
          style={{
            backgroundImage: `url(/lovable-uploads/84f850f2-3417-499a-82b5-e953f162c627.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: `radial-gradient(ellipse 70% 50% at center, black 20%, transparent 60%)`,
            WebkitMaskImage: `radial-gradient(ellipse 70% 50% at center, black 20%, transparent 60%)`,
            filter: 'blur(1px)',
            borderRadius: '12px'
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-10 w-1/4 h-1/3 opacity-30"
          style={{
            backgroundImage: `url(/lovable-uploads/3a87bf2d-9ef7-4224-b887-dc977122b26f.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: `radial-gradient(ellipse 60% 60% at center, black 25%, transparent 65%)`,
            WebkitMaskImage: `radial-gradient(ellipse 60% 60% at center, black 25%, transparent 65%)`,
            filter: 'blur(1px)',
            borderRadius: '12px'
          }}
        ></div>
      </div>

      {/* Multi-Layer Blending */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/70 to-background/85"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/4 via-transparent to-brand-teal/4"></div>

      {/* Curved Design Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-1/4 right-10 w-32 h-64 opacity-6" viewBox="0 0 100 200">
          <path d="M0,0 Q100,100 0,200 L100,200 L100,0 Z" fill="hsl(var(--brand-teal) / 0.05)"/>
        </svg>
        <svg className="absolute bottom-1/4 left-10 w-40 h-48 opacity-6" viewBox="0 0 100 200">
          <path d="M100,0 Q0,100 100,200 L0,200 L0,0 Z" fill="hsl(var(--brand-orange) / 0.05)"/>
        </svg>
      </div>

      {/* Fine Texture Enhancement */}
      <div className="absolute inset-0 opacity-3" style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 30px,
          hsl(var(--brand-teal) / 0.02) 30px,
          hsl(var(--brand-teal) / 0.02) 31px
        )`
      }}></div>

      <div className="container mx-auto px-6 relative z-10 pt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="/lovable-uploads/eebbfb3a-615e-4617-b7b0-d6fc4424ba7c.png"
                alt="Multiculture Mortgage LLC Team" 
                className="w-full rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <Badge className="bg-brand-navy text-white mb-6 text-lg sm:text-md px-4 py-2">
              YOUR LICENSED WEBINAR HOSTS
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-navy">
              Learn From Proven Real Estate Professionals
            </h2>
            
            <p className="text-lg text-brand-gray mb-8 leading-relaxed">
              As founders of Multiculture Mortgage LLC and active real estate developer-builders, Lavon and his wife Diana are positioned to personally help 
              you and your family to leverage your employment to build wealth through strategic real estate ownership.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-orange text-white p-2 rounded-lg">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">5+ Years Licensed Mortgage Experience & 10+ years of Real Estate Ownership Experience</h4>
                  <p className="text-brand-gray">Married Licensed Real Estate Professionals with a combined in depth knowledge of underwriting guidelines, the home buying process, and the home selling process to get you to the closing table.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-teal text-white p-2 rounded-lg">
                  <Users2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">Many Successful Client Closings</h4>
                  <p className="text-brand-gray">Guided home owners from first-time buyers to investors</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-navy text-white p-2 rounded-lg">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">$5M+ in Real Estate Investements Owned and Developed</h4>
                  <p className="text-brand-gray">Facilitated millions in real estate development and home ownership creation</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })} 
              className="bg-gradient-primary text-white font-bold px-8 py-3">
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