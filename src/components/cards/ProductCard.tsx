import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Scale, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCompare } from "@/context/CompareContext";

interface Product {
  id: string;
  name: string;
  shortDescription: string;
  image: string;
  category: string;
  problemsSolved: string[];
  suitableCrops: string[];
  applicationType?: string;
  dosage?: string;
  ingredients?: string[];
  benefits?: string[];
  featured?: boolean;
}

interface ProductCardProps {
  product: Product;
  listView?: boolean;
}

const ProductCard = ({ product, listView = false }: ProductCardProps) => {
  const { addToCompare, removeFromCompare, isInCompare, compareList } = useCompare();
  const inCompare = isInCompare(product.id);

  const handleCompareToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inCompare) {
      removeFromCompare(product.id);
    } else {
      addToCompare(product as any);
    }
  };

  if (listView) {
    return (
      <div className="card-organic p-4 flex gap-4 hover:shadow-hover transition-all group">
        <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary/20 to-leaf-green/20 flex items-center justify-center shrink-0">
          <Leaf className="w-10 h-10 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-1">{product.shortDescription}</p>
            </div>
            {product.featured && (
              <Badge className="bg-accent text-accent-foreground shrink-0">Featured</Badge>
            )}
          </div>
          <div className="flex flex-wrap gap-1 mt-2">
            {product.problemsSolved.slice(0, 3).map((problem) => (
              <span key={problem} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                {problem}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-3">
            <Link to={`/products/${product.id}`}>
              <Button size="sm" className="rounded-full">
                View Details <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </Link>
            <Button
              size="sm"
              variant={inCompare ? "secondary" : "outline"}
              onClick={handleCompareToggle}
              disabled={!inCompare && compareList.length >= 4}
              className="rounded-full"
            >
              {inCompare ? <Check className="w-3 h-3 mr-1" /> : <Scale className="w-3 h-3 mr-1" />}
              {inCompare ? "Added" : "Compare"}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card-organic group hover:shadow-hover transition-all overflow-hidden">
      <div className="relative h-48 bg-gradient-to-br from-primary/20 via-leaf-green/10 to-accent/20 flex items-center justify-center overflow-hidden">
        <Leaf className="w-20 h-20 text-primary/40 group-hover:scale-110 transition-transform duration-300" />
        {product.featured && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">Featured</Badge>
        )}
        <button
          onClick={handleCompareToggle}
          disabled={!inCompare && compareList.length >= 4}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
            inCompare
              ? "bg-primary text-primary-foreground"
              : "bg-cream-white/80 text-muted-foreground hover:bg-cream-white hover:text-primary"
          } ${!inCompare && compareList.length >= 4 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {inCompare ? <Check className="w-4 h-4" /> : <Scale className="w-4 h-4" />}
        </button>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.shortDescription}</p>

        <div className="flex flex-wrap gap-1 mb-4">
          {product.problemsSolved.slice(0, 3).map((problem) => (
            <span key={problem} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              {problem}
            </span>
          ))}
          {product.problemsSolved.length > 3 && (
            <span className="text-xs text-muted-foreground">+{product.problemsSolved.length - 3} more</span>
          )}
        </div>

        <div className="text-xs text-muted-foreground mb-4">
          <span className="font-medium">Crops:</span> {product.suitableCrops.slice(0, 3).join(", ")}
          {product.suitableCrops.length > 3 && ` +${product.suitableCrops.length - 3}`}
        </div>

        <Link to={`/products/${product.id}`}>
          <Button className="w-full rounded-full group/btn">
            View Details
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
