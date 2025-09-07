import { useEffect, useState } from "react";

const JourneySection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('journey-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey-section" className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-sky-200 to-sky-100">
      {/* Skyline Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-300/20 to-sky-400/30" />
      
      {/* Mountain Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3">
        <svg viewBox="0 0 1200 400" className="w-full h-full opacity-20">
          <path d="M0,400 L0,200 L200,150 L400,100 L600,80 L800,120 L1000,180 L1200,200 L1200,400 Z" fill="hsl(var(--primary))" />
        </svg>
      </div>

      {/* Road Container with Perspective */}
      <div className="absolute inset-0 flex items-end justify-center" style={{ perspective: '1000px' }}>
        <div 
          className="relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(60deg) translateY(50%)'
          }}
        >
          {/* Road */}
          <div 
            className="absolute bottom-0 left-1/2 bg-gray-800 opacity-80"
            style={{
              width: '8px',
              height: '100vh',
              transform: 'translateX(-50%) scaleY(4)',
              transformOrigin: 'bottom',
              background: 'linear-gradient(to top, #374151 0%, #374151 45%, transparent 100%)'
            }}
          />
          
          {/* Road Center Line */}
          <div 
            className="absolute bottom-0 left-1/2 bg-yellow-300 opacity-60"
            style={{
              width: '2px',
              height: '100vh',
              transform: 'translateX(-50%) scaleY(4)',
              transformOrigin: 'bottom',
              background: 'linear-gradient(to top, #fde047 0%, #fde047 45%, transparent 100%)',
              backgroundSize: '2px 40px',
              backgroundImage: 'repeating-linear-gradient(to top, #fde047 0px, #fde047 20px, transparent 20px, transparent 40px)'
            }}
          />
        </div>
      </div>

      {/* Section Title */}
      <div className="absolute top-16 left-0 right-0 text-center z-10">
        <h2 className="text-5xl md:text-6xl font-black text-brand-navy drop-shadow-lg">
          Our Journey
        </h2>
      </div>

      {/* Animated Card */}
      <div
        className={`absolute transform transition-opacity duration-1000 ${
          isVisible ? 'opacity-100 animate-journey-card' : 'opacity-0'
        }`}
        style={{ top: '45%', left: '50%' }}
      >
        <div className="bg-white rounded-lg shadow-2xl p-6 border-2 border-brand-orange transform-gpu">
          <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-brand-orange to-brand-orange/80">
            <img 
              src="/lovable-uploads/5aa94387-5b12-41fa-8385-80effa22b7a9.png" 
              alt="Journey milestone" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold text-brand-navy mb-2">Building Dreams</h3>
            <p className="text-sm text-gray-600">Every step forward matters</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default JourneySection;