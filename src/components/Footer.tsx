import logoLight from "@/assets/MCM Horizontal Logo.png";
import equalHousing from "@/assets/equal-housing-logowhite-250.png";
import narRealtors from "@/assets/nar_membership_cmyk_R.png";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.03) 10px,
            rgba(255,255,255,0.03) 20px
          )`
        }}></div>
      </div>

      {/* Subtle Brand Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-3">
        <div className="absolute top-10 right-10 text-6xl font-black text-white/5 transform rotate-12">LLC</div>
        <div className="absolute bottom-10 left-10 text-4xl font-black text-white/5 transform -rotate-6">MORTGAGE</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company */}
          <div>
            <img 
              src={logoLight} 
              alt="Multiculture Mortgage LLC" 
              className="h-14 mb-4 brightness-0 invert"
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
              <li>📅 June 17th, 2025, 6:00 PM CST</li>
              <li>⏱️ 60 minutes + Q&A</li>
              <li>💻 Live Online Event</li>
              <li>🎯 Limited to 100 seats</li>
            </ul>
          </div>

          {/* What You'll Learn
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
           */}

          {/* CTA */}
          <div>
            <h4 className="font-bold mb-4 text-brand-orange">Don't Miss Out</h4>
            <p className="text-sm text-white/80 mb-4">
              Seats are filling fast. Reserve your spot today for this 
              exclusive strategic homeownership class.
            </p>
            <Button className="bg-brand-orange hover:bg-brand-orange-light text-white font-bold"
              onClick={() => {
                const signupForm = document.getElementById('signup-form');
                if (signupForm) {
                  signupForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
            >
              Register Now
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="grid md:grid-cols-3 gap-4 text-sm text-white/60">
            <div>
              <p>&copy; 2025 Multiculture Mortgage LLC. All rights reserved.</p>
              <p className="mt-1">NMLS #2455872 | Equal Housing Opportunity</p>
            </div>
            <div className="flex flex-row gap-4 justify-left">
              <img
                src={equalHousing}
                alt="Equal Housing Opportunity"
                className="h-14 mb-4 brightness-0 invert"
              />
              <img
                src={narRealtors}
                alt="NAR Realtors"
                className="h-16 mb-4"
              />
              
            </div>
            <div className="md:text-right">
              <p>Contact: info@multimortgage.com</p>
              <p className="mt-1">Ready To Apply For Your Loan? Visit: <a href="https://mcmtg.my1003app.com/" target="_blank" rel="noopener noreferrer" className="text-brand-orange">www.multiculturemortgage.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;