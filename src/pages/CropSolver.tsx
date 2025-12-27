import CropProblemSolver from "@/components/tools/CropProblemSolver";
import { Leaf, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CropSolver = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-forest-dark py-16 md:py-24">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-cream-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Leaf className="w-4 h-4 text-accent" />
            <span className="text-cream-white/90 text-sm">Interactive Tool</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-cream-white mb-4">
            Crop Problem Solver
          </h1>
          <p className="text-cream-white/80 max-w-2xl mx-auto">
            Find the perfect organic solution for your crops in 3 simple steps. Select your crop, identify the problem, and get personalized recommendations.
          </p>
        </div>
      </section>

      {/* Solver Tool */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <CropProblemSolver />
        </div>
      </section>

      {/* Help Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Need More Help?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our agricultural experts are available to provide personalized guidance for complex crop issues.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/crop-issues">
              <Button variant="outline" className="rounded-full">
                Browse Crop Issues <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="rounded-full">
                Contact Expert <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CropSolver;
