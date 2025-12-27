import { X, Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCompare } from "@/context/CompareContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const ProductComparison = () => {
  const { compareList, showComparison, setShowComparison, clearCompare } = useCompare();

  const CompareRow = ({ label, getValue }: { label: string; getValue: (p: typeof compareList[0]) => React.ReactNode }) => (
    <tr className="border-b border-border/50">
      <td className="py-3 px-4 font-medium text-sm text-muted-foreground bg-muted/30 sticky left-0">{label}</td>
      {compareList.map((product) => (
        <td key={product.id} className="py-3 px-4 text-sm min-w-[200px]">
          {getValue(product)}
        </td>
      ))}
    </tr>
  );

  return (
    <Dialog open={showComparison} onOpenChange={setShowComparison}>
      <DialogContent className="max-w-5xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="flex items-center justify-between">
            <span>Product Comparison</span>
            <Button variant="ghost" size="sm" onClick={clearCompare} className="text-muted-foreground">
              Clear All
            </Button>
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh]">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-4 text-left font-semibold bg-muted/30 sticky left-0 min-w-[120px]">Feature</th>
                  {compareList.map((product) => (
                    <th key={product.id} className="py-4 px-4 text-left min-w-[200px]">
                      <div className="flex flex-col gap-2">
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-leaf-green/20 flex items-center justify-center">
                          <span className="text-2xl">🌿</span>
                        </div>
                        <span className="font-semibold text-foreground">{product.name}</span>
                        <span className="text-xs text-muted-foreground font-normal">{product.shortDescription}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <CompareRow
                  label="Category"
                  getValue={(p) => (
                    <span className="capitalize">{p.category.replace("-", " ")}</span>
                  )}
                />
                <CompareRow
                  label="Application"
                  getValue={(p) => (
                    <span className="capitalize bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                      {p.applicationType}
                    </span>
                  )}
                />
                <CompareRow label="Dosage" getValue={(p) => p.dosage} />
                <CompareRow
                  label="Problems Solved"
                  getValue={(p) => (
                    <div className="flex flex-wrap gap-1">
                      {p.problemsSolved.slice(0, 4).map((problem) => (
                        <span key={problem} className="text-xs bg-accent/20 text-accent-foreground px-2 py-0.5 rounded">
                          {problem}
                        </span>
                      ))}
                      {p.problemsSolved.length > 4 && (
                        <span className="text-xs text-muted-foreground">+{p.problemsSolved.length - 4} more</span>
                      )}
                    </div>
                  )}
                />
                <CompareRow
                  label="Suitable Crops"
                  getValue={(p) => (
                    <div className="flex flex-wrap gap-1">
                      {p.suitableCrops.slice(0, 3).map((crop) => (
                        <span key={crop} className="text-xs bg-muted px-2 py-0.5 rounded">
                          {crop}
                        </span>
                      ))}
                      {p.suitableCrops.length > 3 && (
                        <span className="text-xs text-muted-foreground">+{p.suitableCrops.length - 3} more</span>
                      )}
                    </div>
                  )}
                />
                <CompareRow
                  label="Key Ingredients"
                  getValue={(p) => (
                    <ul className="space-y-1">
                      {p.ingredients.slice(0, 3).map((ing) => (
                        <li key={ing} className="text-xs flex items-center gap-1">
                          <Check className="w-3 h-3 text-primary" /> {ing}
                        </li>
                      ))}
                    </ul>
                  )}
                />
                <CompareRow
                  label="Benefits"
                  getValue={(p) => (
                    <ul className="space-y-1">
                      {p.benefits.slice(0, 4).map((benefit) => (
                        <li key={benefit} className="text-xs flex items-center gap-1">
                          <Check className="w-3 h-3 text-leaf-green" /> {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                />
              </tbody>
            </table>
          </div>
        </ScrollArea>
        <div className="p-4 border-t border-border flex justify-end gap-2">
          <Button variant="outline" onClick={() => setShowComparison(false)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductComparison;
