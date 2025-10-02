import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useSearchParams } from "react-router-dom";

interface DebugToggleProps {
  onToggle: (isChallenge: boolean) => void;
}

const DebugToggle = ({ onToggle }: DebugToggleProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isProduction = window.location.hostname.includes('multiculturemortgage.com');
  const [isVisible] = useState(!isProduction);
  const isChallenge = searchParams.get('pg') === 'chlg';

  useEffect(() => {
    onToggle(isChallenge);
  }, [isChallenge, onToggle]);

  const handleToggle = () => {
    if (isChallenge) {
      searchParams.delete('pg');
    } else {
      searchParams.set('pg', 'chlg');
    }
    setSearchParams(searchParams);
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
        <div className="flex items-center gap-2">
          <Link 
            to="/" 
            className="bg-green-600 text-white px-3 py-1 rounded text-xs font-bold hover:bg-green-700 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/friend-invite" 
            className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold hover:bg-blue-700 transition-colors"
          >
            Friend Invite
          </Link>
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
    </div>
  );
};

export default DebugToggle;
