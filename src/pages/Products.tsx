import { useState, useMemo } from "react";
import { Grid3X3, List } from "lucide-react";
import ProductCard from "@/components/cards/ProductCard";
import { ProductFilters, ActiveFilters } from "@/components/products/ProductFilters";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import productsData from "@/data/products.json";

type SortOption = "featured" | "name-asc" | "name-desc";

const Products = () => {
  const [activeFilters, setActiveFilters] = useState({
    crops: [] as string[],
    problems: [] as string[],
    application: [] as string[],
  });
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const headerSection = useScrollAnimation();

  const handleFilterChange = (type: "crops" | "problems" | "application", value: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value],
    }));
  };

  const clearFilters = () => {
    setActiveFilters({ crops: [], problems: [], application: [] });
  };

  const problemKeywords: Record<string, string[]> = {
    Pests: ["pest", "aphid", "whitefl", "mite", "caterpillar", "borer", "beetle"],
    Fungus: ["fungal", "mildew", "rust", "blight", "rot", "powdery"],
    Growth: ["growth", "stunted", "weak", "nutrient"],
    "Leaf Issues": ["leaf", "curl", "yellow", "necrosis", "chlorosis"],
    "Fruit Issues": ["fruit", "drop", "fall", "size", "ripening"],
    "Root Problems": ["root", "rot", "soil"],
  };

  const filteredProducts = useMemo(() => {
    let result = [...productsData];

    // Filter by crops
    if (activeFilters.crops.length > 0) {
      result = result.filter((product) =>
        activeFilters.crops.some((crop) =>
          product.suitableCrops.some((pc) =>
            pc.toLowerCase().includes(crop.toLowerCase()) ||
            crop.toLowerCase().includes(pc.toLowerCase())
          ) || product.suitableCrops.includes("All Crops")
        )
      );
    }

    // Filter by problems
    if (activeFilters.problems.length > 0) {
      result = result.filter((product) =>
        activeFilters.problems.some((problem) => {
          const keywords = problemKeywords[problem] || [problem.toLowerCase()];
          return keywords.some((keyword) =>
            product.problemsSolved.some((ps) => ps.toLowerCase().includes(keyword)) ||
            product.category.toLowerCase().includes(keyword)
          );
        })
      );
    }

    // Filter by application
    if (activeFilters.application.length > 0) {
      result = result.filter((product) =>
        activeFilters.application.some((app) =>
          product.applicationType.toLowerCase() === app.toLowerCase()
        )
      );
    }

    // Sort
    switch (sortBy) {
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [activeFilters, sortBy]);

  return (
    <div className="section-padding bg-background min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div ref={headerSection.ref} className={`mb-8 ${headerSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Our Products</h1>
          <p className="text-muted-foreground">Organic solutions for every crop problem</p>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters */}
          <ProductFilters
            filters={{ crops: [], problems: [], application: [] }}
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
            onClearFilters={clearFilters}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                {/* Mobile Filter Trigger is inside ProductFilters */}
                <div className="lg:hidden">
                  <ProductFilters
                    filters={{ crops: [], problems: [], application: [] }}
                    activeFilters={activeFilters}
                    onFilterChange={handleFilterChange}
                    onClearFilters={clearFilters}
                  />
                </div>
                <span className="text-sm text-muted-foreground">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="text-sm border border-border rounded-lg px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="featured">Featured</option>
                  <option value="name-asc">Name A-Z</option>
                  <option value="name-desc">Name Z-A</option>
                </select>

                {/* View Toggle */}
                <div className="hidden sm:flex items-center border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 transition-colors ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 transition-colors ${viewMode === "list" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            <ActiveFilters
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
            />

            {/* Products Grid/List */}
            {filteredProducts.length > 0 ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                    : "space-y-4"
                }
              >
                {filteredProducts.map((product, i) => (
                  <div 
                    key={product.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${Math.min(i * 0.05, 0.3)}s` }}
                  >
                    <ProductCard product={product} listView={viewMode === "list"} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 animate-fade-in">
                <p className="text-muted-foreground mb-4">No products match your filters.</p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
