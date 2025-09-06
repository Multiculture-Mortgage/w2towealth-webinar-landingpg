import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date - you can modify this to your desired date
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7); // 7 days from now
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center space-x-2 text-primary font-bold">
      <span className="text-sm text-muted-foreground">Time Left:</span>
      <div className="flex space-x-1">
        <span className="bg-primary/10 px-2 py-1 rounded text-sm">
          {timeLeft.days.toString().padStart(2, '0')}d
        </span>
        <span className="bg-primary/10 px-2 py-1 rounded text-sm">
          {timeLeft.hours.toString().padStart(2, '0')}h
        </span>
        <span className="bg-primary/10 px-2 py-1 rounded text-sm">
          {timeLeft.minutes.toString().padStart(2, '0')}m
        </span>
        <span className="bg-primary/10 px-2 py-1 rounded text-sm">
          {timeLeft.seconds.toString().padStart(2, '0')}s
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;