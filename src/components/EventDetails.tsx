import { Calendar, Clock, Users, AlertCircle, Loader2 } from "lucide-react";

interface EventDetailsProps {
  showChallenge?: boolean;
  displayDate?: string | null;
  isLoading?: boolean;
  error?: string | null;
  variant?: 'hero' | 'footer';
}

const EventDetails = ({ 
  showChallenge = false, 
  displayDate, 
  isLoading = false, 
  error = null,
  variant = 'hero'
}: EventDetailsProps) => {
  if (variant === 'footer') {
    return (
      <ul className="space-y-2 text-sm text-white/80">
        <li className="flex items-start gap-2">
          <span>📅</span>
          {isLoading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-3 w-3 animate-spin" />
              Loading...
            </span>
          ) : error ? (
            <span>{error}</span>
          ) : (
            <span>{displayDate || "June 17th, 2025, 6:00 PM CST"}</span>
          )}
        </li>
        <li>
          ⏱️ {showChallenge ? (
            <>60 minutes + Q&A each day<br />VIP gets an extra personal hour of coaching</>
          ) : (
            "60 minutes + Q&A"
          )}
        </li>
        <li>💻 Live Online Event</li>
        <li>🎯 Limited to 100 {showChallenge ? "participants" : "seats"}</li>
      </ul>
    );
  }

  // Hero variant
  return (
    <div className="space-y-3 mb-8">
      <div className="flex items-center justify-center lg:justify-start text-brand-navy">
        <Calendar className="h-5 w-5 text-brand-orange mr-3" />
        {isLoading ? (
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin text-brand-orange" />
            <span className="font-semibold text-brand-gray">Loading event details...</span>
          </div>
        ) : error ? (
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-brand-orange" />
            <span className="font-semibold text-brand-gray">{error}</span>
          </div>
        ) : displayDate ? (
          <span className="font-semibold">{displayDate}</span>
        ) : null}
      </div>
      <div className="flex items-center justify-center lg:justify-start text-brand-navy">
        <Clock className="h-5 w-5 text-brand-orange mr-3" />
        <span className="font-semibold">60 Minutes + Live Q&A</span>
      </div>
      <div className="flex items-center justify-center lg:justify-start text-brand-navy">
        <Users className="h-5 w-5 text-brand-orange mr-3" />
        <span className="font-semibold">Limited to 100 Attendees</span>
      </div>
    </div>
  );
};

export default EventDetails;
