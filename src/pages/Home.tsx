import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Shield, FlaskConical, Recycle, Users, Sparkles, Lightbulb, Droplets, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/cards/ProductCard";
import IssueCard from "@/components/cards/IssueCard";
import TestimonialCard from "@/components/cards/TestimonialCard";
import CropProblemSolver from "@/components/tools/CropProblemSolver";
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";
import productsData from "@/data/products.json";
import issuesData from "@/data/cropIssues.json";
import testimonialsData from "@/data/testimonials.json";

const Home = () => {
  const featuredProducts = productsData.filter((p) => p.featured).slice(0, 4);
  const issues = issuesData.slice(0, 6);
  const testimonials = testimonialsData.slice(0, 3);

  const whyChooseUs = [
    { icon: Leaf, title: "100% Organic", desc: "Pure natural ingredients, no chemicals" },
    { icon: FlaskConical, title: "Lab Tested", desc: "Scientifically proven effectiveness" },
    { icon: Recycle, title: "Eco-Friendly", desc: "Safe for environment & biodiversity" },
    { icon: Shield, title: "Farmer Safe", desc: "Non-toxic, safe for handling" },
    { icon: Users, title: "Expert Support", desc: "Guidance from agricultural experts" },
    { icon: Sparkles, title: "Premium Quality", desc: "Highest standards in production" },
  ];

  const steps = [
    { num: "01", title: "Identify Problem", desc: "Diagnose your crop issue using our guide" },
    { num: "02", title: "Choose Product", desc: "Select the right organic oil solution" },
    { num: "03", title: "Apply Correctly", desc: "Follow dosage & application instructions" },
    { num: "04", title: "See Results", desc: "Watch your crops thrive naturally" },
  ];

  const stats = [
    { value: "50+", label: "Products" },
    { value: "10K+", label: "Farmers" },
    { value: "15+", label: "States" },
    { value: "99%", label: "Satisfaction" },
  ];

  // Animation hooks
  const whySection = useScrollAnimation();
  const solverSection = useScrollAnimation();
  const productsSection = useStaggerAnimation(featuredProducts.length);
  const stepsSection = useStaggerAnimation(steps.length);
  const issuesSection = useStaggerAnimation(issues.length);
  const testimonialSection = useStaggerAnimation(testimonials.length);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary via-primary to-forest-dark overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-leaf-green/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-golden-yellow/10 rounded-full blur-2xl animate-blob" style={{ animationDelay: "4s" }} />
        </div>

        {/* Floating Leaf Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <Leaf className="absolute top-[15%] left-[5%] w-8 h-8 text-cream-white/10 animate-float" style={{ animationDelay: "0s" }} />
          <Leaf className="absolute top-[25%] right-[8%] w-6 h-6 text-accent/20 animate-float-slow" style={{ animationDelay: "1s" }} />
          <Leaf className="absolute bottom-[30%] left-[12%] w-10 h-10 text-leaf-green/15 animate-float-reverse" style={{ animationDelay: "2s" }} />
          <Droplets className="absolute top-[60%] right-[15%] w-7 h-7 text-cream-white/10 animate-float" style={{ animationDelay: "3s" }} />
          <Leaf className="absolute bottom-[20%] right-[25%] w-5 h-5 text-accent/15 animate-float-slow" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center gap-2 bg-cream-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Leaf className="w-4 h-4 text-accent" />
                <span className="text-cream-white/90 text-sm">Trusted by 10,000+ Farmers</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream-white mb-6 leading-tight">
                Organic Solutions for Every Crop.{" "}
                <span className="text-accent">Naturally Effective.</span>
              </h1>
              <p className="text-lg md:text-xl text-cream-white/80 mb-8 max-w-2xl">
                Premium agricultural oils that protect your crops from pests, diseases, and stress—while keeping your farm 100% organic and eco-friendly.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link to="/products">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 hover:scale-105 transition-transform">
                    View Products <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button size="lg" variant="outline" className="border-cream-white/30 text-cream-white hover:bg-cream-white/10 rounded-full px-8 hover:scale-105 transition-transform">
                    How It Works
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
                    <div className="text-xs md:text-sm text-cream-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative hidden lg:block animate-slide-in-right">
              {/* Main Hero Image Placeholder */}
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border-2 border-cream-white/10 animate-pulse" />
                <div className="absolute inset-4 rounded-full border-2 border-accent/20 animate-pulse" style={{ animationDelay: "0.5s" }} />
                <div className="absolute inset-8 rounded-full border-2 border-leaf-green/20 animate-pulse" style={{ animationDelay: "1s" }} />
                
                {/* Central Image Container */}
                <div className="absolute inset-12 rounded-full bg-gradient-to-br from-cream-white/10 via-accent/5 to-leaf-green/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <Droplets className="w-20 h-20 text-accent mx-auto mb-4 animate-float" />
                    <p className="text-cream-white/80 font-medium">Pure Organic Oils</p>
                    <p className="text-cream-white/50 text-sm">For Healthy Crops</p>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -left-8 top-1/4 bg-cream-white/10 backdrop-blur-md rounded-2xl p-4 animate-float" style={{ animationDelay: "0.5s" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-cream-white text-sm font-medium">100% Safe</p>
                      <p className="text-cream-white/60 text-xs">Non-toxic</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-4 top-1/3 bg-cream-white/10 backdrop-blur-md rounded-2xl p-4 animate-float-slow" style={{ animationDelay: "1s" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-leaf-green/20 rounded-full flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-leaf-green" />
                    </div>
                    <div>
                      <p className="text-cream-white text-sm font-medium">Eco-Friendly</p>
                      <p className="text-cream-white/60 text-xs">Sustainable</p>
                    </div>
                  </div>
                </div>

                <div className="absolute left-1/4 -bottom-4 bg-cream-white/10 backdrop-blur-md rounded-2xl p-4 animate-float-reverse" style={{ animationDelay: "1.5s" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-golden-yellow/20 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-golden-yellow" />
                    </div>
                    <div>
                      <p className="text-cream-white text-sm font-medium">Certified</p>
                      <p className="text-cream-white/60 text-xs">Lab Tested</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Why Choose Us */}
      <section 
        ref={whySection.ref}
        className="section-padding bg-background"
      >
        <div className="container-custom">
          <div className={`text-center mb-12 ${whySection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose AgroOrganics?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Backed by science, powered by nature. Our products deliver results farmers trust.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {whyChooseUs.map((item, i) => (
              <div 
                key={i} 
                className={`card-organic p-5 text-center group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 ${whySection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crop Problem Solver */}
      <section 
        ref={solverSection.ref}
        className="section-padding bg-muted/50"
      >
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={solverSection.isVisible ? 'animate-slide-in-left' : 'opacity-0'}>
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Lightbulb className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">Interactive Tool</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Crop Problem Solver</h2>
              <p className="text-muted-foreground mb-6">
                Not sure which product is right for your crops? Use our interactive tool to find the perfect organic solution in just 3 simple steps.
              </p>
              <Link to="/crop-solver">
                <Button variant="outline" className="rounded-full hover:scale-105 transition-transform">
                  Open Full Tool <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className={solverSection.isVisible ? 'animate-slide-in-right' : 'opacity-0'}>
              <CropProblemSolver />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section 
        ref={productsSection.ref}
        className="section-padding bg-background"
      >
        <div className="container-custom">
          <div className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 ${productsSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Our Products</h2>
              <p className="text-muted-foreground">Organic solutions for every crop problem</p>
            </div>
            <Link to="/products">
              <Button variant="outline" className="rounded-full hover:scale-105 transition-transform">View All Products <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <div 
                key={product.id}
                className={productsSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}
                style={productsSection.getStaggerDelay(i)}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section 
        ref={stepsSection.ref}
        className="section-padding bg-muted/50"
      >
        <div className="container-custom">
          <div className={`text-center mb-12 ${stepsSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How Our Oils Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Simple 4-step process to healthier crops</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className={`relative ${stepsSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={stepsSection.getStaggerDelay(i)}
              >
                <div className="card-organic p-6 text-center h-full hover:shadow-hover transition-all duration-300 hover:-translate-y-1 group">
                  <div className="text-4xl font-bold text-primary/20 mb-3 group-hover:text-primary/40 transition-colors">{step.num}</div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
                {i < 3 && <ArrowRight className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 text-primary/30" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crop Issues */}
      <section 
        ref={issuesSection.ref}
        className="section-padding bg-background"
      >
        <div className="container-custom">
          <div className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 ${issuesSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Common Crop Issues</h2>
              <p className="text-muted-foreground">Learn about problems and find organic solutions</p>
            </div>
            <Link to="/crop-issues">
              <Button variant="outline" className="rounded-full hover:scale-105 transition-transform">View All Issues <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {issues.map((issue, i) => (
              <div 
                key={issue.id}
                className={issuesSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}
                style={issuesSection.getStaggerDelay(i)}
              >
                <IssueCard issue={issue} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        ref={testimonialSection.ref}
        className="section-padding bg-primary text-primary-foreground"
      >
        <div className="container-custom">
          <div className={`text-center mb-12 ${testimonialSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Farmers Say</h2>
            <p className="text-primary-foreground/70">Real results from real farmers across India</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div 
                key={t.id}
                className={testimonialSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}
                style={testimonialSection.getStaggerDelay(i)}
              >
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
          <div className={`text-center mt-10 ${testimonialSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.4s" }}>
            <Link to="/testimonials">
              <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full hover:scale-105 transition-transform">
                Read More Stories <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4 animate-fade-in">Ready to Go Organic?</h2>
          <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">Get personalized recommendations for your crops. Contact our experts today.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-forest-dark text-cream-white hover:bg-forest-dark/90 rounded-full px-8 hover:scale-105 transition-transform">
              Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
