import { Leaf } from "lucide-react";
import IssueCard from "@/components/cards/IssueCard";
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";
import issuesData from "@/data/cropIssues.json";

const CropIssues = () => {
  const headerSection = useScrollAnimation();
  const cardsSection = useStaggerAnimation(issuesData.length);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-forest-dark overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-leaf-green/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        </div>
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-cream-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Leaf className="w-4 h-4 text-accent" />
            <span className="text-cream-white/90 text-sm">Knowledge Hub</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-cream-white mb-4 animate-slide-in-left">
            Crop Issues <span className="text-accent">Knowledge Hub</span>
          </h1>
          <p className="text-lg text-cream-white/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Learn about common crop problems, understand their causes, and discover effective organic solutions
          </p>
        </div>
      </section>

      {/* Issues Grid */}
      <section ref={cardsSection.ref} className="section-padding bg-background">
        <div className="container-custom">
          <div className={`text-center mb-10 ${cardsSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Common Crop Problems</h2>
            <p className="text-muted-foreground">Click on any issue to learn more and find solutions</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {issuesData.map((issue, i) => (
              <div 
                key={issue.id}
                className={cardsSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}
                style={cardsSection.getStaggerDelay(i)}
              >
                <IssueCard issue={issue} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CropIssues;
