interface ChallengeDaysSectionProps {
  showChallenge: boolean;
}

const ChallengeDaysSection = ({ showChallenge }: ChallengeDaysSectionProps) => {
  if (!showChallenge) return null;

  const days = [
    {
      day: 1,
      title: "Foundation & Mindset",
      description: "Learn the fundamental principles of house hacking and develop the mindset needed to succeed in real estate investing. We'll cover the basics of cash flow analysis and how to identify profitable opportunities."
    },
    {
      day: 2,
      title: "Property Analysis & Selection",
      description: "Master the art of analyzing properties and selecting the right investment. Discover how to calculate returns, assess neighborhoods, and identify properties with the highest potential for cash flow and appreciation."
    },
    {
      day: 3,
      title: "Financing Strategies",
      description: "Explore various financing options and strategies to acquire your first property. Learn about conventional loans, FHA loans, and creative financing techniques that can help you get started with minimal capital."
    },
    {
      day: 4,
      title: "Property Management & Tenant Relations",
      description: "Understand the essentials of property management and building positive tenant relationships. We'll cover screening tenants, setting rent prices, handling maintenance, and creating systems for efficient management."
    },
    {
      day: 5,
      title: "Scaling & Long-Term Wealth Building",
      description: "Develop your roadmap for scaling your real estate portfolio and building long-term wealth. Learn strategies for acquiring multiple properties, leveraging equity, and creating sustainable passive income streams."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-arvo font-bold mb-4">
            5-Day Challenge Schedule
          </h2>
          <p className="text-muted-foreground text-lg">
            Each day builds upon the last, creating a comprehensive foundation for your house hacking journey
          </p>
        </div>

        <div className="space-y-6">
          {days.map((day) => (
            <div 
              key={day.day}
              className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl md:text-2xl font-arvo font-bold mb-3">
                Day {day.day} - {day.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {day.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengeDaysSection;
