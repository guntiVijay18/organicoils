import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingEnquiry = () => {
  return (
    <Link
      to="/contact"
      className="fixed bottom-6 right-6 z-40 bg-accent text-accent-foreground p-4 rounded-full shadow-hover hover:scale-110 transition-transform duration-300 group"
      aria-label="Contact us"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card text-foreground px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-card">
        Get Enquiry
      </span>
    </Link>
  );
};

export default FloatingEnquiry;
