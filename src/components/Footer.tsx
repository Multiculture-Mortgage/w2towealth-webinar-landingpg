import logoLight from "@/assets/logo-light.png";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white py-12">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <img 
              src={logoLight} 
              alt="Multiculture Mortgage LLC" 
              className="h-10 mb-4 brightness-0 invert"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Empowering professionals to build wealth through strategic 
              real estate investments and homeownership opportunities.
            </p>
          </div>

          {/* Webinar Info */}
          <div>
            <h4 className="font-bold mb-4 text-brand-orange">Webinar Details</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>📅 June 12th, 2025</li>
              <li>⏱️ 90 minutes + Q&A</li>
              <li>💻 Live Online Event</li>
              <li>🎯 Limited to 500 seats</li>
              <li>🎁 Bonus materials included</li>
            </ul>
          </div>

          {/* What You'll Learn */}
          <div>
            <h4 className="font-bold mb-4 text-brand-orange">Key Topics</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Property selection strategies</li>
              <li>Financing investment properties</li>
              <li>Building passive income</li>
              <li>Risk management</li>
              <li>Portfolio scaling</li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-bold mb-4 text-brand-orange">Don't Miss Out</h4>
            <p className="text-sm text-white/80 mb-4">
              Seats are filling fast. Reserve your spot today for this 
              exclusive wealth-building masterclass.
            </p>
            <Button className="bg-brand-orange hover:bg-brand-orange-light text-white font-bold">
              Register Now
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="grid md:grid-cols-2 gap-4 text-sm text-white/60">
            <div>
              <p>&copy; 2025 Multiculture Mortgage LLC. All rights reserved.</p>
              <p className="mt-1">NMLS #1234567 | Equal Housing Opportunity</p>
            </div>
            <div className="md:text-right">
              <p>Contact: info@multimortgage.com</p>
              <p className="mt-1">Visit: www.mcmmtrg.com/w2tow</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;