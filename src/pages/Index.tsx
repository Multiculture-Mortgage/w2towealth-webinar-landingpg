import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChartTeaserSection from "@/components/ChartTeaserSection";
import BenefitsSection from "@/components/BenefitsSection";
import HomeownershipSection from "@/components/HomeownershipSection";
import DevelopmentSection from "@/components/DevelopmentSection";
import UrgencySection from "@/components/UrgencySection";
import AboutSection from "@/components/AboutSection";
import BookSection from "@/components/BookSection";
import ChallengeDaysSection from "@/components/ChallengeDaysSection";
import Footer from "@/components/Footer";

interface IndexProps {
  showChallenge: boolean;
  displayDate: string | null;
  challengeDate: string | null;
  isLoading: boolean;
  error: string | null;
}

const Index = ({ showChallenge, displayDate, challengeDate, isLoading, error }: IndexProps) => {

  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <HeroSection
        showChallenge={showChallenge} 
        displayDate={displayDate}
        challengeDate={challengeDate}
        isLoading={isLoading}
        error={error}
      />
      <ChartTeaserSection />
      <BenefitsSection showChallenge={showChallenge} />
      <HomeownershipSection showChallenge={showChallenge} />
      <ChallengeDaysSection showChallenge={showChallenge} />
      <DevelopmentSection />
      <UrgencySection />
      <AboutSection />
      <BookSection showChallenge={showChallenge} />
      <Footer
        showChallenge={showChallenge}
        displayDate={displayDate}
        challengeDate={challengeDate}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default Index;
