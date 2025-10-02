import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FriendInvite from "./pages/FriendInvite";
import NotFound from "./pages/NotFound";
import DebugToggle from "@/components/DebugToggle";
import { useEffect, useState } from "react";
import ReactPixel from "react-facebook-pixel";
import { useNavigate, useSearchParams } from "react-router-dom";
import { format, addDays } from 'date-fns';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

interface WebinarData {
  challenge_date: string;
}

const RedirectHandler = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const redirect = searchParams.get('redirect');
    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [searchParams, navigate]);

  return null;
};

const AppContent = () => {
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
    <>
      <RedirectHandler />
      <DebugToggle onToggle={() => {}} />
      <Routes>
        <Route 
          path="/" 
          element={
            <Index 
              showChallenge={showChallenge}
              displayDate={displayDate}
              isLoading={isLoading}
              error={error}
            />
          } 
        />
        <Route 
          path="/friend-invite" 
          element={
            <FriendInvite 
              showChallenge={showChallenge}
              displayDate={displayDate}
              isLoading={isLoading}
              error={error}
            />
          } 
        />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => {
  useEffect(() => {
    // Initialize Facebook Pixel
    ReactPixel.init('1498530354084781', undefined, {
      autoConfig: true,
      debug: false,
    });
    ReactPixel.pageView();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
