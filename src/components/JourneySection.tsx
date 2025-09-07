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

      {/* Road */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg 
          viewBox="0 0 800 600" 
          className="w-full h-full"
          style={{ transform: 'perspective(800px) rotateX(45deg)' }}
        >
          {/* Road Surface */}
          <path
            d="M 400 50 
               L 450 50
               L 600 600
               L 200 600
               L 350 50
               Z"
            fill="#374151"
            opacity="0.9"
          />
          
          {/* Road Center Dashed Line */}
          <path
            d="M 400 50 L 400 600"
            stroke="#fde047"
            strokeWidth="4"
            strokeDasharray="20 15"
            opacity="0.8"
          />
          
          {/* Road Edges */}
          <path d="M 350 50 L 200 600" stroke="#1f2937" strokeWidth="2" opacity="0.6" />
          <path d="M 450 50 L 600 600" stroke="#1f2937" strokeWidth="2" opacity="0.6" />
        </svg>
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