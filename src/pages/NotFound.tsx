import { Link } from "react-router-dom";
import { Leaf, Home, Search, ArrowRight, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const quickLinks = [
  { name: "Browse Products", path: "/products", icon: Sprout },
  { name: "Crop Problem Solver", path: "/crop-solver", icon: Search },
  { name: "Contact Support", path: "/contact", icon: ArrowRight }
];

const NotFound = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Floating Leaves Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Leaf className="absolute top-[10%] left-[10%] w-12 h-12 text-primary/10 animate-float" />
        <Leaf className="absolute top-[20%] right-[15%] w-8 h-8 text-accent/20 animate-float" style={{ animationDelay: '1s' }} />
        <Leaf className="absolute bottom-[30%] left-[20%] w-10 h-10 text-primary/15 animate-float" style={{ animationDelay: '2s' }} />
        <Leaf className="absolute bottom-[20%] right-[25%] w-14 h-14 text-secondary/10 animate-float" style={{ animationDelay: '1.5s' }} />
        <Leaf className="absolute top-[40%] left-[5%] w-6 h-6 text-accent/15 animate-float" style={{ animationDelay: '0.5s' }} />
        <Leaf className="absolute top-[60%] right-[10%] w-8 h-8 text-primary/10 animate-float" style={{ animationDelay: '2.5s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="text-[150px] md:text-[200px] font-bold text-primary/10 leading-none">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full flex items-center justify-center">
                  <Leaf className="w-12 h-12 md:w-16 md:h-16 text-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Looks like this page has wilted away. Let's help you find what you're looking for.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex gap-2 max-w-md mx-auto mb-10">
            <Input 
              placeholder="Search for products or solutions..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" className="rounded-full px-6">
              <Search className="w-4 h-4" />
            </Button>
          </form>

          {/* Quick Links */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {quickLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className="card-organic p-4 text-center hover:bg-primary/5 transition-colors"
              >
                <link.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="font-medium text-sm">{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Home Button */}
          <Link to="/">
            <Button size="lg" className="rounded-full px-8">
              <Home className="w-4 h-4 mr-2" /> Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
