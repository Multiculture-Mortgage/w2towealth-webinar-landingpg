import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface DebugToggleProps {
  onToggle: (isChallenge: boolean) => void;
}

const DebugToggle = ({ onToggle }: DebugToggleProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { toast } = useToast();
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

  const handleTestWebhook = async () => {
    const testData = {
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@test.com",
      phone: "+1234567890",
      ticketType: "vip",
      ipAddress: "192.168.1.1",
      userAgent: navigator.userAgent,
      productId: "5771",
      ticketValue: 97
    };

    try {
      const response = await fetch('https://multiculturemortgage.com/wp-json/autonami/v1/webhook/?bwfan_autonami_webhook_id=16&bwfan_autonami_webhook_key=00df48098da8dd7ecc917b1a24338f9d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData)
      });

      if (response.ok) {
        toast({
          title: "Webhook Test Successful",
          description: "Test data sent successfully to webhook",
        });
      } else {
        toast({
          title: "Webhook Test Failed",
          description: `Status: ${response.status}`,
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Webhook Test Error",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive"
      });
    }
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
            onClick={handleTestWebhook}
            size="sm"
            className="bg-purple-600 hover:bg-purple-700 text-white text-xs"
          >
            Test Webhook
          </Button>
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
