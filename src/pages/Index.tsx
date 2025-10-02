import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
import { format, addDays } from 'date-fns';

interface WebinarData {
  challenge_date: string;
}

const Index = () => {
  const [searchParams] = useSearchParams();
  const [challengeDate, setChallengeDate] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const showChallenge = searchParams.get('pg') === 'chlg';

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

    const widParam = searchParams.get('wid');
    
    if (showChallenge && widParam) {
      fetchWebinarData(widParam);
    }
  }, [showChallenge, searchParams]);

  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <HeroSection
        showChallenge={showChallenge} 
        displayDate={displayDate}
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
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default Index;
