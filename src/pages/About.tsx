import { Leaf, Target, Eye, Award, Users, Beaker, Truck, CheckCircle, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const timeline = [
    { year: "2010", title: "The Beginning", desc: "Founded with a vision to bring organic solutions to farmers" },
    { year: "2013", title: "First Products", desc: "Launched our flagship Neem Supreme Oil" },
    { year: "2016", title: "Expansion", desc: "Reached 5,000+ farmers across 10 states" },
    { year: "2018", title: "Research Lab", desc: "Established in-house R&D facility" },
    { year: "2021", title: "Certification", desc: "Received USDA Organic & India Organic certifications" },
    { year: "2024", title: "Today", desc: "Serving 50,000+ farmers with 15+ products" },
  ];

  const values = [
    { icon: Leaf, title: "100% Organic", desc: "Pure natural ingredients, no synthetic chemicals" },
    { icon: Users, title: "Farmer First", desc: "Every decision made with farmers in mind" },
    { icon: Beaker, title: "Science-Backed", desc: "Research-driven product development" },
    { icon: Award, title: "Quality Assured", desc: "Rigorous testing for every batch" },
  ];

  const process = [
    { num: "01", title: "Sourcing", desc: "Ethically sourced raw materials from certified organic farms", icon: Leaf },
    { num: "02", title: "Extraction", desc: "Cold-press extraction to preserve natural compounds", icon: Beaker },
    { num: "03", title: "Testing", desc: "Multi-stage quality testing in our advanced laboratory", icon: CheckCircle },
    { num: "04", title: "Delivery", desc: "Safe packaging and timely delivery to your doorstep", icon: Truck },
  ];

  const certifications = [
    { name: "USDA Organic", color: "bg-leaf-green" },
    { name: "India Organic", color: "bg-primary" },
    { name: "ISO 9001:2015", color: "bg-accent" },
    { name: "FSSAI Certified", color: "bg-golden-yellow" },
    { name: "Eco-Friendly", color: "bg-forest-dark" },
  ];

  // Animation hooks
  const storySection = useScrollAnimation();
  const missionSection = useScrollAnimation();
  const timelineSection = useStaggerAnimation(timeline.length);
  const valuesSection = useStaggerAnimation(values.length);
  const processSection = useStaggerAnimation(process.length);
  const certSection = useScrollAnimation();
  const founderSection = useScrollAnimation();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-forest-dark overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-leaf-green/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        </div>
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-cream-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Leaf className="w-4 h-4 text-accent" />
            <span className="text-cream-white/90 text-sm">Our Story</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream-white mb-6 animate-slide-in-left">
            Empowering Farmers with <span className="text-accent">Nature's Best</span>
          </h1>
          <p className="text-lg md:text-xl text-cream-white/80 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            For over a decade, we've been committed to providing farmers with safe, effective, and sustainable organic solutions that protect crops while preserving our planet.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section ref={storySection.ref} className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={storySection.isVisible ? 'animate-slide-in-left' : 'opacity-0'}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Journey</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  AgroOrganics was born from a simple observation: farmers needed better alternatives to harmful chemical pesticides. In 2010, our founder, a third-generation farmer himself, began experimenting with traditional organic remedies passed down through generations.
                </p>
                <p>
                  What started as a small operation in rural Maharashtra has grown into a trusted name across India. We combine traditional knowledge with modern science to create products that are effective, safe, and sustainable.
                </p>
                <p>
                  Today, we're proud to serve over 50,000 farmers, helping them grow healthier crops while protecting their families and the environment.
                </p>
              </div>
            </div>
            <div className={`relative ${storySection.isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-leaf-green/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-8xl">🌱</span>
                  <p className="text-lg font-semibold text-foreground mt-4">Growing Together Since 2010</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionSection.ref} className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`card-organic p-8 group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 ${missionSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                <Target className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To revolutionize Indian agriculture by providing farmers with premium organic solutions that enhance crop health, increase yields, and protect the environment—all while being affordable and accessible to every farmer.
              </p>
            </div>
            <div className={`card-organic p-8 group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 ${missionSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all">
                <Eye className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                A future where every farm in India is chemical-free, every farmer is prosperous, and every consumer has access to safe, organic produce. We envision an agricultural ecosystem in harmony with nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineSection.ref} className="section-padding bg-background">
        <div className="container-custom">
          <div className={`text-center mb-12 ${timelineSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey Through Time</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Key milestones that shaped who we are today</p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
            
            <div className="space-y-8 md:space-y-0">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative md:flex items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} ${timelineSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={timelineSection.getStaggerDelay(i)}
                >
                  <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="card-organic p-6 inline-block hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
                      <span className="text-3xl font-bold text-primary">{item.year}</span>
                      <h3 className="text-lg font-semibold text-foreground mt-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                  {/* Center dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesSection.ref} className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className={`text-center mb-12 ${valuesSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-primary-foreground/70">Principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div 
                key={i} 
                className={`text-center p-6 rounded-2xl bg-cream-white/5 backdrop-blur-sm hover:bg-cream-white/10 transition-all duration-300 hover:-translate-y-1 ${valuesSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={valuesSection.getStaggerDelay(i)}
              >
                <div className="w-14 h-14 mx-auto bg-cream-white/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-primary-foreground/70">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section ref={processSection.ref} className="section-padding bg-background">
        <div className="container-custom">
          <div className={`text-center mb-12 ${processSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Manufacturing Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">From farm to bottle, every step ensures premium quality</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <div 
                key={i} 
                className={`relative ${processSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={processSection.getStaggerDelay(i)}
              >
                <div className="card-organic p-6 text-center h-full hover:shadow-hover transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <step.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <span className="text-4xl font-bold text-primary/20">{step.num}</span>
                  <h3 className="font-semibold text-lg mt-2 mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
                {i < 3 && <ArrowRight className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 text-primary/30" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section ref={certSection.ref} className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className={`text-center mb-12 ${certSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Certifications & Awards</h2>
            <p className="text-muted-foreground">Recognized for quality and commitment to organic standards</p>
          </div>
          <div className={`flex flex-wrap justify-center gap-4 ${certSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            {certifications.map((cert, i) => (
              <div 
                key={i} 
                className={`${cert.color} text-cream-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform cursor-default`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {cert.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section ref={founderSection.ref} className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className={`card-organic p-8 md:p-12 text-center relative ${founderSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <Quote className="w-12 h-12 text-primary/20 absolute top-6 left-6" />
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/30 to-leaf-green/30 rounded-full flex items-center justify-center mb-6">
              <span className="text-4xl">👨‍🌾</span>
            </div>
            <blockquote className="text-xl md:text-2xl text-foreground italic mb-6">
              "My grandfather taught me that the earth gives back what we give it. If we poison it with chemicals, we poison ourselves. That's why every product we create honors the wisdom of traditional farming while embracing modern innovation."
            </blockquote>
            <div>
              <p className="font-semibold text-foreground">Rajesh Patel</p>
              <p className="text-sm text-muted-foreground">Founder & CEO, AgroOrganics</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">Join Our Mission</h2>
          <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">Be part of the organic revolution. Explore our products and discover the difference.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products">
              <Button size="lg" className="bg-forest-dark text-cream-white hover:bg-forest-dark/90 rounded-full px-8 hover:scale-105 transition-transform">
                Explore Products <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-forest-dark text-forest-dark hover:bg-forest-dark/10 rounded-full px-8 hover:scale-105 transition-transform">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
