import logoLight from "@/assets/logo-light.png";

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src={logoLight} 
              alt="Multiculture Mortgage LLC" 
              className="h-12 mb-4 brightness-0 invert"
            />
            <p className="text-white/80 mb-4">
              Empowering professionals to build wealth through strategic real estate investments and homeownership opportunities.
            </p>
            <p className="text-sm text-white/60">
              Licensed Mortgage Professional<br />
              NMLS #1234567
            </p>
          </div>

          {/* Webinar Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-orange">Webinar Details</h3>
            <ul className="space-y-2 text-white/80">
              <li>Date: June 12th, 2025</li>
              <li>Duration: 90 minutes + Q&A</li>
              <li>Format: Live Online Presentation</li>
              <li>Cost: Completely FREE</li>
              <li>Bonus: Exclusive Resources Included</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-orange">Contact Us</h3>
            <div className="space-y-2 text-white/80">
              <p>Email: info@multimortgage.com</p>
              <p>Website: www.mcmmtrg.com</p>
              <p className="text-sm text-white/60 mt-4">
                This webinar is for educational purposes only. Individual results may vary.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2025 Multiculture Mortgage LLC. All rights reserved.</p>
          <p className="text-sm mt-2">
            Equal Housing Opportunity | Licensed by the Department of Financial Protection and Innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;