import { useState } from "react";
import { Filter, X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface FiltersProps {
  filters: {
    crops: string[];
    problems: string[];
    application: string[];
  };
  activeFilters: {
    crops: string[];
    problems: string[];
    application: string[];
  };
  onFilterChange: (type: "crops" | "problems" | "application", value: string) => void;
  onClearFilters: () => void;
}

const filterOptions = {
  crops: [ "Cotton", "Maize", "Vegetables", "Fruits", "Cereals", "Pulses", "Ornamentals"],
  problems: ["Pests", "Fungus", "Growth", "Leaf Issues", "Fruit Issues", "Root Problems"],
  application: ["mix", "Drip"],
};

const FilterSection = ({
  title,
  options,
  selected,
  onToggle,
  expanded,
  onExpandToggle,
}: {
  title: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
  expanded: boolean;
  onExpandToggle: () => void;
}) => (
  <div className="border-b border-border/50 pb-4">
    <button
      onClick={onExpandToggle}
      className="flex items-center justify-between w-full py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
    >
      {title}
      {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
    </button>
    {expanded && (
      <div className="flex flex-wrap gap-2 mt-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onToggle(option)}
            className={`px-3 py-1.5 text-xs rounded-full border transition-all ${
              selected.includes(option)
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    )}
  </div>
);

const FilterContent = ({ activeFilters, onFilterChange, onClearFilters }: Omit<FiltersProps, "filters">) => {
  const [expanded, setExpanded] = useState({ crops: true, problems: true, application: true });
  const totalActive =
    activeFilters.crops.length + activeFilters.problems.length + activeFilters.application.length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <Filter className="w-4 h-4" /> Filters
        </h3>
        {totalActive > 0 && (
          <Button variant="ghost" size="sm" onClick={onClearFilters} className="text-xs text-muted-foreground">
            Clear All ({totalActive})
          </Button>
        )}
      </div>

      <FilterSection
        title="By Crop"
        options={filterOptions.crops}
        selected={activeFilters.crops}
        onToggle={(v) => onFilterChange("crops", v)}
        expanded={expanded.crops}
        onExpandToggle={() => setExpanded((e) => ({ ...e, crops: !e.crops }))}
      />

      <FilterSection
        title="By Problem"
        options={filterOptions.problems}
        selected={activeFilters.problems}
        onToggle={(v) => onFilterChange("problems", v)}
        expanded={expanded.problems}
        onExpandToggle={() => setExpanded((e) => ({ ...e, problems: !e.problems }))}
      />

      <FilterSection
        title="By Application"
        options={filterOptions.application}
        selected={activeFilters.application}
        onToggle={(v) => onFilterChange("application", v)}
        expanded={expanded.application}
        onExpandToggle={() => setExpanded((e) => ({ ...e, application: !e.application }))}
      />
    </div>
  );
};

export const ProductFilters = ({ activeFilters, onFilterChange, onClearFilters }: FiltersProps) => {
  const totalActive =
    activeFilters.crops.length + activeFilters.problems.length + activeFilters.application.length;

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-24 card-organic p-5">
          <FilterContent
            activeFilters={activeFilters}
            onFilterChange={onFilterChange}
            onClearFilters={onClearFilters}
          />
        </div>
      </aside>

      {/* Mobile Filter Drawer */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
              {totalActive > 0 && (
                <Badge variant="secondary" className="ml-1 bg-primary text-primary-foreground">
                  {totalActive}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <SheetHeader>
              <SheetTitle>Filter Products</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent
                activeFilters={activeFilters}
                onFilterChange={onFilterChange}
                onClearFilters={onClearFilters}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export const ActiveFilters = ({
  activeFilters,
  onFilterChange,
  onClearFilters,
}: Omit<FiltersProps, "filters">) => {
  const allFilters = [
    ...activeFilters.crops.map((f) => ({ type: "crops" as const, value: f })),
    ...activeFilters.problems.map((f) => ({ type: "problems" as const, value: f })),
    ...activeFilters.application.map((f) => ({ type: "application" as const, value: f })),
  ];

  if (allFilters.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 mb-4">
      <span className="text-sm text-muted-foreground">Active:</span>
      {allFilters.map((filter) => (
        <Badge
          key={`${filter.type}-${filter.value}`}
          variant="secondary"
          className="gap-1 pr-1 bg-primary/10 text-primary hover:bg-primary/20"
        >
          {filter.value}
          <button
            onClick={() => onFilterChange(filter.type, filter.value)}
            className="ml-1 p-0.5 rounded-full hover:bg-primary/20"
          >
            <X className="w-3 h-3" />
          </button>
        </Badge>
      ))}
      <Button variant="ghost" size="sm" onClick={onClearFilters} className="text-xs h-6">
        Clear All
      </Button>
    </div>
  );
};

export default ProductFilters;
