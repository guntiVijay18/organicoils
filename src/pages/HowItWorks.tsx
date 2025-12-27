import { Droplets, Shield, Bug, Leaf, Sprout, Zap, CheckCircle, FlaskConical, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: FlaskConical,
    title: "Natural Extraction",
    description: "Cold-pressed oils preserve active compounds like azadirachtin, nimbin, and essential fatty acids without chemical solvents.",
    detail: "Our extraction process maintains the full spectrum of bioactive compounds."
  },
  {
    icon: Droplets,
    title: "Targeted Application",
    description: "When sprayed, oils create a thin protective film on plant surfaces, acting as a physical barrier against pests and pathogens.",
    detail: "The oil coating suffocates soft-bodied insects on contact."
  },
  {
    icon: Bug,
    title: "Pest Repellent Action",
    description: "Natural compounds disrupt insect feeding, mating, and egg-laying behavior. Pests avoid treated plants entirely.",
    detail: "Works as both repellent and growth regulator for insects."
  },
  {
    icon: Shield,
    title: "Plant Strengthening",
    description: "Essential nutrients and bioactive compounds boost plant immunity, helping crops resist future attacks naturally.",
    detail: "Systemic action enhances overall plant health and vigor."
  }
];

const comparison = [
  { aspect: "Environmental Impact", organic: "Biodegradable, eco-friendly", chemical: "Pollutes soil & water" },
  { aspect: "Safety", organic: "Safe for farmers & consumers", chemical: "Health risks with exposure" },
  { aspect: "Resistance", organic: "No pest resistance buildup", chemical: "Pests develop resistance" },
  { aspect: "Beneficial Insects", organic: "Protects bees & pollinators", chemical: "Kills beneficial insects" },
  { aspect: "Soil Health", organic: "Improves soil microbiome", chemical: "Destroys soil life" },
  { aspect: "Residue", organic: "Zero harmful residue", chemical: "Chemical residue on crops" }
];

const sciencePoints = [
  { title: "200+ Active Compounds", description: "Neem oil contains over 200 bioactive compounds that work synergistically" },
  { title: "Multi-Mode Action", description: "Combines physical, biochemical, and systemic protection mechanisms" },
  { title: "Research Backed", description: "Validated by agricultural universities and ICAR research centers" },
  { title: "Traditional Wisdom", description: "5000+ years of documented use in Indian agriculture" }
];

const HowItWorks = () => (
  <div>
    {/* Hero Section */}
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary/80" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary-foreground rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-primary-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-primary-foreground rounded-full" />
      </div>
      <div className="container-custom relative z-10 text-center">
        <Leaf className="w-16 h-16 text-accent mx-auto mb-6 animate-float" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
          How Our Organic Oils Work
        </h1>
        <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
          Discover the science behind nature's most effective crop protection. Our oils harness 
          centuries of traditional wisdom combined with modern extraction technology.
        </p>
      </div>
    </section>

    {/* 4-Step Process */}
    <section className="section-padding container-custom">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">The 4-Step Protection Process</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From extraction to application, every step is designed to maximize effectiveness while maintaining complete safety.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary/50 transform -translate-x-1/2" />

        <div className="space-y-12 lg:space-y-0">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`lg:flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16'}`}>
                <div className={`card-organic p-8 inline-block ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                  <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-accent font-semibold">Step {index + 1}</span>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">{step.description}</p>
                  <p className="text-sm text-primary font-medium">{step.detail}</p>
                </div>
              </div>

              {/* Timeline Node */}
              <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground font-bold text-xl shadow-lg z-10">
                {index + 1}
              </div>

              <div className="lg:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Mechanism Illustration */}
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Triple-Action Protection</h2>
            <p className="text-muted-foreground mb-8">
              Our organic oils work through three complementary mechanisms to provide complete crop protection:
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Physical Barrier</h4>
                  <p className="text-sm text-muted-foreground">
                    Oil film blocks pest entry points and suffocates soft-bodied insects on contact.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Biochemical Disruption</h4>
                  <p className="text-sm text-muted-foreground">
                    Active compounds interfere with pest hormones, preventing feeding and reproduction.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Sprout className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Systemic Immunity</h4>
                  <p className="text-sm text-muted-foreground">
                    Nutrients absorbed by plants boost natural defense mechanisms from within.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 flex items-center justify-center">
              <div className="relative">
                {/* Central Plant */}
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                  <Leaf className="w-16 h-16 text-primary" />
                </div>
                {/* Orbiting Protection */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center animate-float">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <Droplets className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                  <Sprout className="w-6 h-6 text-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Organic vs Chemical Comparison */}
    <section className="section-padding container-custom">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Organic is Better</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          See how organic oils compare to chemical pesticides across key factors.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-3 gap-4 mb-4 text-center font-semibold">
          <div className="text-left">Aspect</div>
          <div className="text-primary">Organic Oils</div>
          <div className="text-destructive/70">Chemical Pesticides</div>
        </div>
        <div className="space-y-3">
          {comparison.map((item) => (
            <div key={item.aspect} className="grid grid-cols-3 gap-4 items-center p-4 rounded-xl bg-card border border-border/50">
              <div className="font-medium text-sm">{item.aspect}</div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{item.organic}</span>
              </div>
              <div className="text-sm text-muted-foreground/70">{item.chemical}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Scientific Backing */}
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Science-Backed Effectiveness</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Our products are validated by leading agricultural research institutions.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sciencePoints.map((point) => (
            <div key={point.title} className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <h4 className="font-bold text-lg mb-2">{point.title}</h4>
              <p className="text-sm text-primary-foreground/80">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="section-padding container-custom text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Go Organic?</h2>
      <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
        Discover the right organic oil for your crops. Our Crop Problem Solver helps you find the perfect solution.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/crop-solver">
          <Button size="lg" className="rounded-full px-8">
            Try Crop Solver <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
        <Link to="/products">
          <Button size="lg" variant="outline" className="rounded-full px-8">
            Browse Products
          </Button>
        </Link>
      </div>
    </section>
  </div>
);

export default HowItWorks;
