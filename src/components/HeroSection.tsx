import { Badge } from "@/components/ui/badge";
import WebinarRegistrationForm from './WebinarRegistrationForm';
import ChallengeRegistrationForm from './ChallengeRegistrationForm';
import EventDetails from './EventDetails';
import { format, addDays } from 'date-fns';

interface HeroSectionProps {
  showChallenge?: boolean;
  challengeDate?: string | null;
  isLoading?: boolean;
  error?: string | null;
}

const HeroSection = ({ showChallenge = false, challengeDate, isLoading = false, error = null }: HeroSectionProps) => {
  const formatChallengeDateRange = (dateString: string) => {
    try {
      const startDate = new Date(dateString);
      const endDate = addDays(startDate, 4);
      const startFormatted = format(startDate, "MMMM do");
      const endFormatted = format(endDate, "MMMM do, yyyy, h:mm a 'CST'");
      return `${startFormatted} - ${endFormatted}`;
    } catch (error) {
      return null;
    }
  };

  const displayDate = showChallenge && challengeDate 
    ? formatChallengeDateRange(challengeDate)
    : "June 17th, 2025, 6:00 PM CST";


  return (
    <section className="bg-gradient-subtle py-20 relative overflow-hidden">
      {/* Softly Blended Property Photos */}
      <div className="absolute inset-0 opacity-8">
        <div 
          className="absolute top-0 right-0 w-1/2 h-1/2 opacity-60"
          style={{
            backgroundImage: `url(/lovable-uploads/84f850f2-3417-499a-82b5-e953f162c627.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: `radial-gradient(ellipse at center, black 20%, transparent 70%)`,
            WebkitMaskImage: `radial-gradient(ellipse at center, black 20%, transparent 70%)`
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-50"
          style={{
            backgroundImage: `url(/lovable-uploads/3a87bf2d-9ef7-4224-b887-dc977122b26f.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: `radial-gradient(ellipse at center, black 30%, transparent 80%)`,
            WebkitMaskImage: `radial-gradient(ellipse at center, black 30%, transparent 80%)`
          }}
        ></div>
      </div>
      
      {/* Soft Gradient Overlays for Seamless Blending */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/3 via-transparent to-brand-teal/3"></div>

      {/* Wavy Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path d="M0,160 C320,100 420,200 640,180 C860,160 1120,80 1440,120 L1440,0 L0,0 Z" fill="hsl(var(--brand-orange) / 0.06)"/>
          <path d="M0,320 C360,280 480,360 720,340 C960,320 1200,240 1440,280 L1440,0 L0,0 Z" fill="hsl(var(--brand-teal) / 0.06)"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <Badge className="bg-brand-orange text-white mb-6 text-sm px-4 py-2">
              {showChallenge ? "5-DAY CHALLENGE - LIMITED SPOTS" : "FREE WEBINAR - LIMITED SEATS"}
            </Badge>
            
            <h1 className="font-black mb-6 leading-tight font-montserrat drop-shadow-lg">
              <span className="text-brand-navy font-black text-7xl md:text-6xl">W-2 TO</span>{" "}
              <span className="text-brand-orange font-black text-7xl md:text-6xl">WEALTH</span>
              <br /><br />
              <span className="text-brand-teal text-4xl md:text-4xl sm:text-4xl font-extrabold uppercase leading-[3rem]">
                {showChallenge ? "5-Day Real Estate Challenge" : "Building Net-Worth Through Home Ownership"}
              </span>
            </h1>
            
            <p className="text-xl text-brand-gray mb-8 leading-relaxed">
              {showChallenge 
                ? "Join our intensive 5-day challenge to master the fundamentals of real estate investing and turn your W-2 income into wealth-building opportunities."
                : <>Turn your 9-to-5 income into <strong>income generating real estate assets</strong> through strategic home ownership.</>
              }
            </p>

            {/* Event Details */}
            <EventDetails 
              showChallenge={showChallenge}
              displayDate={displayDate}
              isLoading={isLoading}
              error={error}
              variant="hero"
            />

            <div className="mb-8 flex justify-center lg:justify-start">
              <img 
                src="/lovable-uploads/f614d342-c143-429e-b200-dd7293cc6f2a.png" 
                alt="More Doors = More Cashflow" 
                className="h-14 w-auto"
              />
            </div>
          </div>

          {/* Registration Card */}
          <div>
            {showChallenge ? <ChallengeRegistrationForm /> : <WebinarRegistrationForm />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;