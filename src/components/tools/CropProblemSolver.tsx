import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Leaf, Bug, Droplets, Flower2, Apple, Sprout, TreeDeciduous, Wheat, Check, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import productsData from "@/data/products.json";

const crops = [
  { id: "rice", name: "Rice", icon: Wheat },
  { id: "cotton", name: "Cotton", icon: Flower2 },
  { id: "vegetables", name: "Vegetables", icon: Sprout },
  { id: "fruits", name: "Fruits", icon: Apple },
  { id: "maize", name: "Maize", icon: Wheat },
  { id: "cereals", name: "Cereals", icon: Wheat },
  { id: "pulses", name: "Pulses", icon: Leaf },
  { id: "ornamentals", name: "Ornamentals", icon: Flower2 },
];

const problems = [
  { id: "pests", name: "Pest Attack", icon: Bug, keywords: ["pest", "aphid", "whitefl", "mite", "caterpillar", "borer"] },
  { id: "fungus", name: "Fungal Disease", icon: Droplets, keywords: ["fungal", "mildew", "rust", "blight", "rot"] },
  { id: "growth", name: "Stunted Growth", icon: Sprout, keywords: ["growth", "stunted", "weak", "nutrient"] },
  { id: "leaf", name: "Leaf Problems", icon: Leaf, keywords: ["leaf", "curl", "yellow", "necrosis"] },
  { id: "fruit", name: "Fruit Issues", icon: Apple, keywords: ["fruit", "drop", "fall", "size"] },
  { id: "root", name: "Root Damage", icon: TreeDeciduous, keywords: ["root", "rot", "soil"] },
];

interface CropProblemSolverProps {
  compact?: boolean;
}

const CropProblemSolver = ({ compact = false }: CropProblemSolverProps) => {
  const [step, setStep] = useState(1);
  const [selectedCrop, setSelectedCrop] = useState<string | null>(null);
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);

  const getRecommendedProducts = () => {
    if (!selectedProblem) return [];
    const problem = problems.find((p) => p.id === selectedProblem);
    if (!problem) return [];

    return productsData.filter((product) => {
      const matchesProblem = problem.keywords.some((keyword) =>
        product.problemsSolved.some((ps) => ps.toLowerCase().includes(keyword)) ||
        product.category.toLowerCase().includes(keyword)
      );
      const matchesCrop = selectedCrop
        ? product.suitableCrops.some((crop) =>
            crop.toLowerCase().includes(selectedCrop) || selectedCrop.includes(crop.toLowerCase())
          ) || product.suitableCrops.includes("All Crops")
        : true;
      return matchesProblem && matchesCrop;
    }).slice(0, 3);
  };

  const reset = () => {
    setStep(1);
    setSelectedCrop(null);
    setSelectedProblem(null);
  };

  const recommendations = getRecommendedProducts();

  return (
    <div className={`${compact ? "" : "card-organic p-6 md:p-8"}`}>
      {!compact && (
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-foreground">Crop Problem Solver</h3>
          {step > 1 && (
            <Button variant="ghost" size="sm" onClick={reset} className="gap-1 text-muted-foreground">
              <RotateCcw className="w-4 h-4" /> Start Over
            </Button>
          )}
        </div>
      )}

      {/* Progress */}
      <div className="flex items-center gap-2 mb-6">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                step >= s
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {step > s ? <Check className="w-4 h-4" /> : s}
            </div>
            {s < 3 && (
              <div className={`w-8 md:w-16 h-1 mx-1 rounded ${step > s ? "bg-primary" : "bg-muted"}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Select Crop */}
      {step === 1 && (
        <div className="animate-fade-in">
          <p className="text-muted-foreground mb-4">Step 1: Select your crop type</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {crops.map((crop) => (
              <button
                key={crop.id}
                onClick={() => {
                  setSelectedCrop(crop.id);
                  setStep(2);
                }}
                className={`p-4 rounded-xl border-2 transition-all hover:border-primary hover:bg-primary/5 ${
                  selectedCrop === crop.id
                    ? "border-primary bg-primary/10"
                    : "border-border bg-background"
                }`}
              >
                <crop.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <span className="text-sm font-medium">{crop.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Select Problem */} 
      {step === 2 && (
        <div className="animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <button onClick={() => setStep(1)} className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <p className="text-muted-foreground">Step 2: What problem are you facing?</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {problems.map((problem) => (
              <button
                key={problem.id}
                onClick={() => {
                  setSelectedProblem(problem.id);
                  setStep(3);
                }}
                className={`p-4 rounded-xl border-2 transition-all hover:border-primary hover:bg-primary/5 ${
                  selectedProblem === problem.id
                    ? "border-primary bg-primary/10"
                    : "border-border bg-background"
                }`}
              >
                <problem.icon className="w-8 h-8 mx-auto mb-2 text-accent" />
                <span className="text-sm font-medium">{problem.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Results */}
      {step === 3 && (
        <div className="animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <button onClick={() => setStep(2)} className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <p className="text-muted-foreground">Step 3: Recommended Solutions</p>
          </div>

          <div className="bg-primary/5 rounded-xl p-4 mb-4">
            <p className="text-sm text-muted-foreground">
              For <span className="font-semibold text-foreground capitalize">{selectedCrop}</span> with{" "}
              <span className="font-semibold text-foreground">{problems.find((p) => p.id === selectedProblem)?.name}</span>
            </p>
          </div>

          {recommendations.length > 0 ? (
            <div className="space-y-3">
              {recommendations.map((product) => (
                <div key={product.id} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-background hover:border-primary/50 transition-all">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-leaf-green/20 flex items-center justify-center shrink-0">
                    <Leaf className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground">{product.name}</h4>
                    <p className="text-xs text-muted-foreground truncate">{product.shortDescription}</p>
                    <p className="text-xs text-primary mt-1">Dosage: {product.dosage}</p>
                  </div>
                  <Link to={`/products/${product.id}`}>
                    <Button size="sm" className="shrink-0">
                      View <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <p>No specific products found for this combination.</p>
              <Link to="/contact">
                <Button variant="outline" className="mt-4">Contact Our Experts</Button>
              </Link>
            </div>
          )}

          <div className="mt-6 p-4 bg-accent/10 rounded-xl">
            <h4 className="font-semibold text-sm mb-2">💡 Quick Tips</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Apply early morning or late evening for best results</li>
              <li>• Repeat application as per recommended frequency</li>
              <li>• Store products in cool, dry place</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CropProblemSolver;
