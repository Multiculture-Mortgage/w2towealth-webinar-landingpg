import { useEffect, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChartTeaserSection from "@/components/ChartTeaserSection";
import BenefitsSection from "@/components/BenefitsSection";
import HomeownershipSection from "@/components/HomeownershipSection";
import DevelopmentSection from "@/components/DevelopmentSection";
import UrgencySection from "@/components/UrgencySection";
import AboutSection from "@/components/AboutSection";
import BookSection from "@/components/BookSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showChallenge, setShowChallenge] = useState(false);

  useEffect(() => {
    // Check URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const pgParam = urlParams.get('pg');
    
    if (pgParam === 'chlg') {
      setShowChallenge(true);
    } else {
      setShowChallenge(false);
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <HeroSection showChallenge={showChallenge} />
      <ChartTeaserSection />
      <BenefitsSection />
      <HomeownershipSection />
      <DevelopmentSection />
      <UrgencySection />
      <AboutSection />
      <BookSection />
      <Footer />
    </div>
  );
};

export default Index;
