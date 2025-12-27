import { Link } from "react-router-dom";
import { Leaf, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Contact", path: "/contact" },
  ];

  const productLinks = [
    { name: "Pest Control", path: "/products?category=pest-control" },
    { name: "Fungus Control", path: "/products?category=fungus-control" },
    { name: "Growth Boosters", path: "/products?category=growth" },
    { name: "Leaf Treatment", path: "/products?category=leaf-treatment" },
    { name: "Fruit Care", path: "/products?category=fruit-care" },
  ];

  const supportLinks = [
    { name: "Crop Issues Guide", path: "/crop-issues" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Gallery", path: "/gallery" },
    { name: "FAQs", path: "/contact#faq" },
  ];

  return (
    <footer className="bg-forest-dark text-cream-white">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-forest-dark" />
              </div>
              <span className="text-xl font-bold">
                Agro<span className="text-accent">Organics</span>
              </span>
            </Link>
            <p className="text-cream-white/70 text-sm mb-6 leading-relaxed">
              Empowering farmers with 100% organic solutions for healthier crops 
              and sustainable agriculture. Nature's power, scientifically refined.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 bg-cream-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-forest-dark transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-cream-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-cream-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-cream-white/70 text-sm">
                  123 Green Valley Road,<br />
                  Agricultural Zone, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+919876543210" className="text-cream-white/70 hover:text-accent transition-colors text-sm">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:info@agroorganics.com" className="text-cream-white/70 hover:text-accent transition-colors text-sm">
                  info@agroorganics.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-cream-white/10">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {["100% Organic Certified", "Lab Tested", "Eco-Friendly", "Farmer Trusted", "ISO Certified"].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-cream-white/60 text-sm">
                <div className="w-2 h-2 bg-accent rounded-full" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-cream-white/10">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-cream-white/50">
            <p>© {currentYear} AgroOrganics. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
