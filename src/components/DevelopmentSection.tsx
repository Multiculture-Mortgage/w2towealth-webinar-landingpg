const DevelopmentSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/f614d342-c143-429e-b200-dd7293cc6f2a.png" 
              alt="More Doors = More Cashflow" 
              className="h-24 w-auto mx-auto"
            />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            When you have more cash flow, you have more options. Your share of the mortgage can be cut in half if not more.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Development Diagram 1 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-105">
              <div className="aspect-square p-6 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/cbfd8502-cadf-4bcb-8e17-c50177ac2971.png" 
                  alt="Multi-unit residential development layout"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 border-t border-border/20">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Multi-Unit Layout
                </h3>
                <p className="text-muted-foreground text-sm">
                  Optimized floor plans that maximize rental income per square foot.
                </p>
              </div>
            </div>
          </div>

          {/* Development Diagram 2 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-105">
              <div className="aspect-square p-6 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/a3f93aa6-ee0f-48fc-b545-c5577f51a217.png" 
                  alt="Complex residential development design"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 border-t border-border/20">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Complex Design
                </h3>
                <p className="text-muted-foreground text-sm">
                  Sophisticated layouts that accommodate multiple income streams.
                </p>
              </div>
            </div>
          </div>

          {/* Development Diagram 3 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-105">
              <div className="aspect-square p-6 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/366b8e18-bf9d-4c08-8d60-ad747f1a1ef3.png" 
                  alt="Innovative house hacking development"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 border-t border-border/20">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Innovative Design
                </h3>
                <p className="text-muted-foreground text-sm">
                  Creative solutions for house hacking opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary">
            <span className="font-medium">Building is Cheaper Than Buying.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentSection;