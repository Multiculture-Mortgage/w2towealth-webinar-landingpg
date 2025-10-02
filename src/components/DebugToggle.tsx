import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface DebugToggleProps {
  onToggle: (isChallenge: boolean) => void;
}

const DebugToggle = ({ onToggle }: DebugToggleProps) => {
  const [isChallenge, setIsChallenge] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide in production (multiculturemortgage.com domain)
    const isProduction = window.location.hostname.includes('multiculturemortgage.com');
    setIsVisible(!isProduction);

    if (!isProduction) {
      // Load from localStorage
      const stored = localStorage.getItem('debug_challenge_mode');
      if (stored) {
        const challengeMode = stored === 'true';
        setIsChallenge(challengeMode);
        onToggle(challengeMode);
      }
    }
  }, [onToggle]);

  const handleToggle = () => {
    const newState = !isChallenge;
    setIsChallenge(newState);
    localStorage.setItem('debug_challenge_mode', String(newState));
    
    // Update URL parameters
    const url = new URL(window.location.href);
    if (newState) {
      url.searchParams.set('pg', 'chlg');
    } else {
      url.searchParams.delete('pg');
    }
    window.history.pushState({}, '', url.toString());
    
    onToggle(newState);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-yellow-400 border-b-2 border-yellow-600 px-4 py-2 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-bold text-black text-sm">🛠️ DEBUG MODE</span>
          <span className="text-xs text-black/70">
            {isChallenge ? 'Challenge View Active' : 'Webinar View Active'}
          </span>
        </div>
        <Button
          onClick={handleToggle}
          size="sm"
          variant={isChallenge ? "default" : "outline"}
          className="text-xs"
        >
          {isChallenge ? 'Switch to Webinar' : 'Switch to Challenge'}
        </Button>
      </div>
    </div>
  );
};

export default DebugToggle;
