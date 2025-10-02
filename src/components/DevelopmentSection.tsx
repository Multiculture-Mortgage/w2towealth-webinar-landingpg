const DevelopmentSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/f614d342-c143-429e-b200-dd7293cc6f2a.png" 
              alt="More Doors = More Cashflow" 
              className="h-16 md:h-20 lg:h-24 w-auto mx-auto max-w-full"
            />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lets face it, single family homes have become a luxury purchase in most major cities.There is a mindset shift happening across America right now. Local municipalities in cities all across America are changing local zoning laws and ordinances to allow citizens to build more units on existing available space. It’s really just simple math. When the whole pie becomes too expensive you have to start selling slices.<br /><br />
            It only make sense for you as a future homeowner to take advantage of these new laws because more units equals more cash flow. When you have more cash flow, you have more options. Your share of the mortgage can be cut in half if not more. <br /><br />
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
                  Three Unit (Tri-Plex) Detached
                </h3>
                <p className="text-muted-foreground text-sm">
                  Place three homes on one lot with a shared driveway. Live in one unit and rent out the others to people in your community.
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
                  Four Unit (Quad-Plex) Attached
                </h3>
                <p className="text-muted-foreground text-sm">
                  This is a shared wall 4 unit building with alley rear access parking.
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
                  A Single Family w/ ADU
                </h3>
                <p className="text-muted-foreground text-sm">
                  A single family home with a detached dwelling unit in the rear of the lot known as an Accessory Dwelling Unit (ADU). The ADU is not considered a second unit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary">
            <span className="font-medium">Building or Renovating is Cheaper Than Buying.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentSection;