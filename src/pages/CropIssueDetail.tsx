import { useParams, Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, Microscope, Droplets, Calendar, CheckCircle, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import issuesData from "@/data/cropIssues.json";
import productsData from "@/data/products.json";

const CropIssueDetail = () => {
  const { id } = useParams();
  const issue = issuesData.find((i) => i.id === id);
  
  if (!issue) {
    return (
      <div className="section-padding container-custom text-center">
        <h1 className="text-2xl font-bold mb-4">Issue not found</h1>
        <Link to="/crop-issues">
          <Button>Back to Crop Issues</Button>
        </Link>
      </div>
    );
  }

  const recommended = productsData.filter((p) => issue.recommendedProducts.includes(p.id));
  const relatedIssues = issuesData.filter((i) => i.id !== issue.id).slice(0, 3);

  return (
    <div className="section-padding container-custom">
      <Link to="/crop-issues" className="inline-flex items-center text-primary mb-6 hover:underline">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Crop Issues
      </Link>

      {/* Hero Header */}
      <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 rounded-3xl p-8 md:p-12 mb-12">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-8 h-8 text-destructive" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{issue.name}</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">{issue.description}</p>
          </div>
        </div>
      </div>

      {/* Symptoms Gallery */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-destructive" /> Visual Symptoms
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {issue.symptoms.slice(0, 4).map((symptom, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden border border-border">
              <div className="aspect-square bg-gradient-to-br from-destructive/5 to-muted flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-2">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <p className="text-sm font-medium">{symptom}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Symptoms & Causes Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="card-organic p-6">
          <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-destructive" /> All Symptoms
          </h3>
          <ul className="space-y-3">
            {issue.symptoms.map((s, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-destructive">{idx + 1}</span>
                </div>
                <span className="text-muted-foreground">{s}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="card-organic p-6">
          <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
            <Microscope className="w-5 h-5 text-primary" /> Common Causes
          </h3>
          <ul className="space-y-3">
            {issue.causes.map((c, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">{idx + 1}</span>
                </div>
                <span className="text-muted-foreground">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* How Organic Oils Help */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Leaf className="w-6 h-6 text-primary" /> How Organic Oils Help
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          <AccordionItem value="mechanism" className="bg-card border border-border rounded-xl px-6">
            <AccordionTrigger className="hover:no-underline">
              <span className="flex items-center gap-2">
                <Microscope className="w-5 h-5 text-primary" /> Mechanism of Action
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Our organic oils work through multiple mechanisms: they create a physical barrier on plant surfaces, 
              contain natural compounds that disrupt pest behavior, and strengthen plant immunity. This multi-action 
              approach provides comprehensive protection without the harmful effects of chemical pesticides.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="prevention" className="bg-card border border-border rounded-xl px-6">
            <AccordionTrigger className="hover:no-underline">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" /> Prevention Tips
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <ul className="list-disc list-inside space-y-1">
                <li>Apply preventive sprays before symptoms appear</li>
                <li>Maintain proper spacing between plants for air circulation</li>
                <li>Remove and destroy affected plant parts immediately</li>
                <li>Use crop rotation to break pest cycles</li>
                <li>Monitor crops regularly for early detection</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="recovery" className="bg-card border border-border rounded-xl px-6">
            <AccordionTrigger className="hover:no-underline">
              <span className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-primary" /> Recovery Timeline
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              With proper treatment using our organic oils, most crops show improvement within 7-14 days. 
              Complete recovery typically occurs in 3-4 weeks with consistent application. Severely affected 
              crops may require extended treatment periods.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Usage Guidance Table 
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Treatment Guide</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="text-left p-4 rounded-tl-xl font-semibold">Product</th>
                <th className="text-left p-4 font-semibold">Dosage</th>
                <th className="text-left p-4 font-semibold">Frequency</th>
                <th className="text-left p-4 rounded-tr-xl font-semibold">Application</th>
              </tr>
            </thead>
            <tbody>
              {recommended.map((product, idx) => (
                <tr key={product.id} className={idx % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                  <td className="p-4">
                    <Link to={`/products/${product.id}`} className="text-primary hover:underline font-medium">
                      {product.name}
                    </Link>
                  </td>
                  <td className="p-4 text-muted-foreground">{product.dosage}</td>
                  <td className="p-4 text-muted-foreground">{product.frequency}</td>
                  <td className="p-4 text-muted-foreground capitalize">{product.applicationType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      */}

      {/* Recommended Products */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Droplets className="w-6 h-6 text-primary" /> Recommended Products
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommended.map((p) => (
            <Link key={p.id} to={`/products/${p.id}`} className="card-organic p-5 flex flex-col">
              <div className="w-full aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Droplets className="w-12 h-12 text-primary/30" />
              </div>
              <h4 className="font-bold text-lg mb-1">{p.name}</h4>
              <p className="text-sm text-muted-foreground mb-3 flex-grow">{p.shortDescription}</p>
              <div className="flex items-center text-primary text-sm font-medium">
                View Details <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Related Issues */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Related Crop Issues</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {relatedIssues.map((ri) => (
            <Link key={ri.id} to={`/crop-issues/${ri.id}`} className="card-organic p-4 hover:bg-muted/50 transition-colors">
              <h4 className="font-semibold mb-1">{ri.name}</h4>
              <p className="text-sm text-muted-foreground line-clamp-2">{ri.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CropIssueDetail;
