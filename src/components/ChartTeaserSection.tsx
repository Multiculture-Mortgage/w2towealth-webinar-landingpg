const ChartTeaserSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-brand-orange/5 to-brand-teal/5 border-y border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-2">
              Is it cheaper to rent or to buy?
            </h3>
            <p className="text-lg text-brand-orange font-semibold">
              Learn the truth in this webinar
            </p>
          </div>
          
          {/* Chart Image */}
          <div className="lg:w-2/3">
            <img 
              src="/lovable-uploads/a2bf3a61-c911-4e09-93eb-630ab9dce576.png" 
              alt="Owner Costs vs. Rent Chart - Wealth creation comparison across major cities"
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartTeaserSection;