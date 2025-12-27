import { useState } from "react";
import LightboxGallery from "@/components/gallery/LightboxGallery";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import galleryData from "@/data/gallery.json";

const categories = [
  { id: "all", name: "All Photos" },
  { id: "farm", name: "Farm" },
  { id: "production", name: "Production" },
  { id: "results", name: "Results" },
  { id: "application", name: "Application" },
  { id: "events", name: "Events" },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const headerSection = useScrollAnimation();
  const filterSection = useScrollAnimation();

  return (
    <div className="section-padding bg-background min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div 
          ref={headerSection.ref}
          className={`text-center mb-10 ${headerSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Gallery</h1>
          <p className="text-muted-foreground">Farm photos, products, and results</p>
        </div>

        {/* Category Filters */}
        <div 
          ref={filterSection.ref}
          className={`flex flex-wrap justify-center gap-2 mb-10 ${filterSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                activeFilter === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid with Lightbox */}
        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <LightboxGallery items={galleryData} activeFilter={activeFilter} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
