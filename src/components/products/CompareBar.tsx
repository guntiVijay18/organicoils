import { X, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCompare } from "@/context/CompareContext";

const CompareBar = () => {
  const { compareList, removeFromCompare, clearCompare, setShowComparison } = useCompare();

  if (compareList.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-forest-dark border-t border-border shadow-lg animate-fade-in">
      <div className="container-custom py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-x-auto">
            <div className="flex items-center gap-2 text-cream-white shrink-0">
              <Scale className="w-5 h-5" />
              <span className="text-sm font-medium">Compare ({compareList.length}/4)</span>
            </div>
            <div className="flex items-center gap-2">
              {compareList.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-2 bg-cream-white/10 rounded-full pl-3 pr-1 py-1 shrink-0"
                >
                  <span className="text-xs text-cream-white truncate max-w-[100px]">{product.name}</span>
                  <button
                    onClick={() => removeFromCompare(product.id)}
                    className="p-1 rounded-full hover:bg-cream-white/20 text-cream-white/70 hover:text-cream-white"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={clearCompare}
              className="text-cream-white/70 hover:text-cream-white hover:bg-cream-white/10"
            >
              Clear
            </Button>
            <Button
              size="sm"
              onClick={() => setShowComparison(true)}
              disabled={compareList.length < 2}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Compare Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareBar;
