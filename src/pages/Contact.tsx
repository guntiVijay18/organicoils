import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, HelpCircle, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";

const cropOptions = ["Rice", "Cotton", "Maize", "Vegetables", "Fruits", "Cereals", "Pulses", "Ornamentals", "Other"];
const issueOptions = ["Pest Infestation", "Fungal Disease", "Leaf Problems", "Growth Issues", "Fruit Problems", "Root Issues", "General Enquiry", "Bulk Order", "Dealership"];

const faqs = [
  { q: "What areas do you deliver to?", a: "We deliver across all states in India. For remote areas, delivery may take 5-7 additional days." },
  { q: "Do you offer bulk discounts?", a: "Yes! We offer attractive discounts for orders above 50 liters. Contact us for a custom quote." },
  { q: "Can I become a dealer?", a: "We're always looking for passionate dealers. Fill the enquiry form with 'Dealership' as your issue type." },
  { q: "Do you provide technical support?", a: "Absolutely! Our agronomists provide free technical support via phone and WhatsApp." },
  { q: "What's the minimum order quantity?", a: "Minimum order is 1 liter for individual farmers. For dealers, minimum is 20 liters." }
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    crop: "",
    issue: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.crop) newErrors.crop = "Please select a crop";
    if (!formData.issue) newErrors.issue = "Please select an issue type";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    
    toast({
      title: "Enquiry Submitted!",
      description: "Thank you for reaching out. Our team will contact you within 24 hours.",
    });
    
    setFormData({ name: "", phone: "", location: "", crop: "", issue: "", message: "" });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary/80" />
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Get In Touch</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Have questions about our organic oils? Our team is here to help you find the right solution.
          </p>
        </div>
      </section>

      <div className="section-padding container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                  <p className="text-muted-foreground">+91 98765 43211</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">info@agroorganics.com</p>
                  <p className="text-muted-foreground">support@agroorganics.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-muted-foreground">
                    123 Green Valley Road,<br />
                    Agricultural Zone, Pune - 411001,<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Office Hours</p>
                  <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="block mb-8">
              <Button className="w-full bg-green-600 hover:bg-green-700 rounded-full text-lg py-6">
                <MessageCircle className="w-5 h-5 mr-2" /> Chat on WhatsApp
              </Button>
            </a>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden border border-border">
              <div className="bg-gradient-to-br from-primary/10 to-muted h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">Pune, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-organic p-8">
            <h2 className="text-2xl font-bold mb-2">Send Enquiry</h2>
            <p className="text-muted-foreground mb-6">Fill the form and we'll get back within 24 hours.</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input 
                  placeholder="Your Name *" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <Input 
                  placeholder="Phone Number *" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
              </div>
              
              <div>
                <Input 
                  placeholder="Location (City/District) *" 
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className={errors.location ? "border-destructive" : ""}
                />
                {errors.location && <p className="text-destructive text-sm mt-1">{errors.location}</p>}
              </div>
              
              <div>
                <Select value={formData.crop} onValueChange={(v) => setFormData({...formData, crop: v})}>
                  <SelectTrigger className={errors.crop ? "border-destructive" : ""}>
                    <SelectValue placeholder="Select Crop Type *" />
                  </SelectTrigger>
                  <SelectContent>
                    {cropOptions.map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.crop && <p className="text-destructive text-sm mt-1">{errors.crop}</p>}
              </div>
              
              <div>
                <Select value={formData.issue} onValueChange={(v) => setFormData({...formData, issue: v})}>
                  <SelectTrigger className={errors.issue ? "border-destructive" : ""}>
                    <SelectValue placeholder="Select Issue Type *" />
                  </SelectTrigger>
                  <SelectContent>
                    {issueOptions.map((i) => (
                      <SelectItem key={i} value={i}>{i}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.issue && <p className="text-destructive text-sm mt-1">{errors.issue}</p>}
              </div>
              
              <Textarea 
                placeholder="Describe your issue or enquiry (optional)" 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
              
              <Button type="submit" className="w-full rounded-full py-6" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>Submitting...</>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" /> Submit Enquiry
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-primary" /> Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="hover:no-underline text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Contact;
