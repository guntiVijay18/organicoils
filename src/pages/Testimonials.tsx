import { useState } from "react";
import { Star, Play, Quote, Users, MapPin, Sprout, Award } from "lucide-react";
import TestimonialCard from "@/components/cards/TestimonialCard";
import testimonialsData from "@/data/testimonials.json";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";



const categories = ["All", "Farmers", "Organic Growers", "Large Scale"];


const videoTestimonials = [
  { id: 1, name: "Ravi Shankar", location: "Tamil Nadu", title: "From Chemicals to Organic Success", duration: "3:45", src: "wpMOZ20Tebk" },
  { id: 2, name: "Priya Patel", location: "Gujarat", title: "Saving My Grape Vineyard", duration: "4:20", src: "wpMOZ20Tebk" },
  { id: 3, name: "Mohammad Ali", location: "Karnataka", title: "Cotton Farming Revolution", duration: "5:10", src: "wpMOZ20Tebk" }
];

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Farmers" },
  { icon: Sprout, value: "50+", label: "Crops Covered" },
  { icon: MapPin, value: "15+", label: "States Across India" },
  { icon: Award, value: "98%", label: "Satisfaction Rate" }
];

const Testimonials = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeVideo, setActiveVideo] = useState(null);


  const filteredTestimonials = activeCategory === "All"
    ? testimonialsData
    : testimonialsData.filter(t => {
      if (activeCategory === "Farmers") return t.crop.includes("Farmer");
      if (activeCategory === "Organic Growers") return t.crop.includes("Organic");
      if (activeCategory === "Large Scale") return t.crop.includes("Orchardist") || t.crop.includes("Owner");
      return true;
    });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary/80" />
        <div className="absolute inset-0 opacity-10">
          <Quote className="absolute top-10 left-10 w-32 h-32" />
          <Quote className="absolute bottom-10 right-10 w-24 h-24" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Farmer Success Stories
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Hear directly from farmers who transformed their crops with our organic solutions.
            </p>

            {/* Featured Testimonial */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 text-left">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-accent">RK</span>
                </div>
                <div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-lg text-primary-foreground/95 italic mb-4">
                    "{testimonialsData[0].quote}"
                  </p>
                  <p className="font-semibold text-primary-foreground">{testimonialsData[0].name}</p>
                  <p className="text-sm text-primary-foreground/70">{testimonialsData[0].crop} • {testimonialsData[0].location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-card border-y border-border">
        <div className="container-custom py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding container-custom">
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              onClick={() => setActiveCategory(cat)}
              className="rounded-full"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Watch Their Stories
            </h2>
            <p className="text-muted-foreground">
              Video testimonials from farmers across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {videoTestimonials.map((video) => (
              <div
                key={video.id}
                className="card-organic overflow-hidden group cursor-pointer"
                onClick={() => setActiveVideo(video.src)}
              >
                {/* Thumbnail container */}
                <div className="relative aspect-video overflow-hidden">
                  {/* YouTube thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${video.src}/hqdefault.jpg`}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/30" />

                  {/* Play button */}
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    </div>
                  </div>

                  {/* Duration badge */}
                  <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
                    {video.duration}
                  </span>
                </div>

                {/* Card text (unchanged) */}
                <div className="p-4">
                  <h4 className="font-semibold mb-1">{video.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {video.name} • {video.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8 text-sm">
            Video testimonials coming soon. Check back for inspiring farmer stories!
          </p>
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
              <button
                className="absolute top-3 right-3 text-white text-2xl z-10"
                onClick={() => setActiveVideo(null)}
              >
                ✕
              </button>

              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Video Testimonial"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </section>



      { }
      <section className="section-padding container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Share Your Success Story</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Have you experienced great results with our products? We'd love to hear from you!
        </p>
        <Button size="lg" className="rounded-full">Submit Your Testimonial</Button>
      </section>
    </div>
  );
};

export default Testimonials;
