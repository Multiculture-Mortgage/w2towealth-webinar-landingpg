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
    <div className="flex flex-col sm:flex-row items-center gap-4 text-primary font-black">
      <span className="text-base sm:text-lg text-muted-foreground font-bold uppercase">Time Left:</span>
      <div className="flex flex-wrap gap-2 justify-center">
        <span className="bg-primary/10 px-4 py-2 rounded-lg text-2xl font-black">
          {timeLeft.days.toString().padStart(2, '0')}D
        </span>
        <span className="bg-primary/10 px-4 py-2 rounded-lg text-2xl font-black">
          {timeLeft.hours.toString().padStart(2, '0')}H
        </span>
        <span className="bg-primary/10 px-4 py-2 rounded-lg text-2xl font-black">
          {timeLeft.minutes.toString().padStart(2, '0')}M
        </span>
        <span className="bg-primary/10 px-4 py-2 rounded-lg text-2xl font-black">
          {timeLeft.seconds.toString().padStart(2, '0')}S
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;