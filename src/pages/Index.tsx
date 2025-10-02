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
import ChallengeDaysSection from "@/components/ChallengeDaysSection";
import Footer from "@/components/Footer";
import DebugToggle from "@/components/DebugToggle";

interface WebinarData {
  challenge_date: string;
}

const Index = () => {
  const [showChallenge, setShowChallenge] = useState(false);
  const [challengeDate, setChallengeDate] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [debugMode, setDebugMode] = useState(false);

  useEffect(() => {
    const fetchWebinarData = async (wid: string) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://multiculturemortgage.com/wp-json/jet-cct/webinars/${wid}`);
        if (!response.ok) {
          throw new Error('Failed to fetch webinar data');
        }
        const data: WebinarData = await response.json();
        if (data.challenge_date) {
          setChallengeDate(data.challenge_date);
        } else {
          setError('No challenge date available');
        }
      } catch (error) {
        console.error('Failed to fetch webinar data:', error);
        setError('Unable to load challenge details. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    // Check URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const pgParam = urlParams.get('pg');
    const widParam = urlParams.get('wid');
    
    if (pgParam === 'chlg' || debugMode) {
      setShowChallenge(true);
      if (widParam) {
        fetchWebinarData(widParam);
      }
    } else {
      setShowChallenge(false);
    }
  }, [debugMode]);

  const handleDebugToggle = (isChallenge: boolean) => {
    setDebugMode(isChallenge);
  };

  return (
    <div className="min-h-screen">
      <DebugToggle onToggle={handleDebugToggle} />
      {/* <Header /> */}
      <HeroSection
        showChallenge={showChallenge} 
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
      <BookSection />
      <Footer 
        showChallenge={showChallenge}
        displayDate={challengeDate}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default Index;
