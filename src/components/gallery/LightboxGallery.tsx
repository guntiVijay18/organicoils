import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface LightboxGalleryProps {
  items: GalleryItem[];
  activeFilter: string;
}

const categoryColors: Record<string, string> = {
  farm: "from-leaf-green/30 to-primary/30",
  production: "from-accent/30 to-harvest-gold/30",
  results: "from-primary/30 to-forest-dark/30",
  application: "from-earth-brown/30 to-primary/30",
  events: "from-harvest-gold/30 to-accent/30",
};

const LightboxGallery = ({ items, activeFilter }: LightboxGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = activeFilter === "all" ? items : items.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  }, [filteredItems.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  }, [filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, goNext, goPrev]);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => openLightbox(index)}
            className="group relative aspect-square rounded-xl overflow-hidden bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {/* Placeholder with gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[item.category] || "from-primary/20 to-muted"}`} />
            
            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
              <span className="text-4xl mb-2">
                {item.category === "farm" && "🌾"}
                {item.category === "production" && "🏭"}
                {item.category === "results" && "📊"}
                {item.category === "application" && "💧"}
                {item.category === "events" && "👥"}
              </span>
              <span className="text-sm font-medium text-foreground">{item.title}</span>
              <span className="text-xs text-muted-foreground capitalize mt-1">{item.category}</span>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-forest-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-cream-white" />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-forest-dark/95 flex items-center justify-center animate-fade-in">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-cream-white/10 hover:bg-cream-white/20 text-cream-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 text-cream-white/70 text-sm">
            {currentIndex + 1} / {filteredItems.length}
          </div>

          {/* Navigation */}
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-cream-white/10 hover:bg-cream-white/20 text-cream-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-cream-white/10 hover:bg-cream-white/20 text-cream-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image container */}
          <div className="max-w-4xl max-h-[80vh] mx-16 flex flex-col items-center">
            {/* Placeholder for lightbox view */}
            <div className={`w-full aspect-video rounded-xl bg-gradient-to-br ${categoryColors[filteredItems[currentIndex]?.category] || "from-primary/30 to-muted"} flex flex-col items-center justify-center`}>
              <span className="text-6xl mb-4">
                {filteredItems[currentIndex]?.category === "farm" && "🌾"}
                {filteredItems[currentIndex]?.category === "production" && "🏭"}
                {filteredItems[currentIndex]?.category === "results" && "📊"}
                {filteredItems[currentIndex]?.category === "application" && "💧"}
                {filteredItems[currentIndex]?.category === "events" && "👥"}
              </span>
              <span className="text-xl font-semibold text-foreground">{filteredItems[currentIndex]?.title}</span>
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-cream-white">{filteredItems[currentIndex]?.title}</h3>
              <p className="text-cream-white/60 text-sm capitalize">{filteredItems[currentIndex]?.category}</p>
            </div>
          </div>

          {/* Touch swipe hint on mobile */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-cream-white/40 text-xs md:hidden">
            Swipe or use arrow keys to navigate
          </div>
        </div>
      )}
    </>
  );
};

export default LightboxGallery;
