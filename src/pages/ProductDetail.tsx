import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Droplets, Leaf, CheckCircle, Clock, Beaker, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import productsData from "@/data/products.json";

const productFAQs: Record<string, { q: string; a: string }[]> = {
  "neem-supreme": [
    { q: "How often should I apply Neem Supreme Oil?", a: "Apply every 7-10 days for preventive treatment. During active pest infestation, you can apply every 5 days until controlled." },
    { q: "Is it safe to use on edible crops?", a: "Yes, Neem Supreme Oil is 100% organic and safe for all edible crops. There's no waiting period before harvest." },
    { q: "Can I mix it with other fertilizers?", a: "Yes, it can be mixed with most organic fertilizers. Avoid mixing with alkaline solutions like lime." },
    { q: "What time of day is best for application?", a: "Early morning or late evening is ideal. Avoid application during peak sunlight to prevent leaf burn." }
  ],
  "fungal-shield": [
    { q: "Can I use this preventively?", a: "Absolutely! Fungal Shield Plus works best when used preventively before disease symptoms appear." },
    { q: "Is it rain-resistant?", a: "Once dried (about 2 hours), it provides moderate rain resistance. Reapply after heavy rainfall." },
    { q: "Can it cure existing fungal infections?", a: "Yes, it has both preventive and curative action. For existing infections, apply every 5 days." }
  ],
  "growth-booster": [
    { q: "When should I start using Growth Booster?", a: "Start after the seedling stage, about 2-3 weeks after germination for best results." },
    { q: "Can I use it during flowering?", a: "Yes, but reduce frequency. Switch to Flower Bloom Special for flowering stage for optimal results." }
  ]
};

const defaultFAQs = [
  { q: "Is this product certified organic?", a: "Yes, all our products are certified organic and approved for use in organic farming systems." },
  { q: "What's the shelf life?", a: "Properly stored in a cool, dark place, our oils last 2-3 years from manufacturing date." },
  { q: "Can I use this in my home garden?", a: "Absolutely! Our products are safe for home gardens, kitchen gardens, and commercial farms alike." }
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="section-padding container-custom text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link to="/products">
          <Button>Back to Products</Button>
        </Link>
      </div>
    );
  }

  const faqs = productFAQs[product.id] || defaultFAQs;

  return (
    <div className="section-padding container-custom">
      <Link to="/products" className="inline-flex items-center text-primary mb-6 hover:underline">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
      </Link>

      {/* Main Product Info */}
      <div className="grid lg:grid-cols-2 gap-10 mb-16">
        <div className="bg-gradient-to-br ... px-16 py-12">

          {/* 🔴 LEFT: PRODUCT BACKGROUND (WIDER) */}
          <div className="
    bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10
    rounded-3xl
    flex items-end justify-center
    relative
    overflow-hidden
    py-12
  ">

            {/* 🟢 IMAGE CONTAINER */}
            <div className="w-full flex justify-center">

              {product?.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="
            h-[520px] lg:h-[450px]
            w-1000%
            max-w-[500%]
            object-contain
          "
                />
              ) : (
                <Droplets className="w-100 h-24 text-primary/30" />
              )}

            </div>
          </div>

          {/* RIGHT: PRODUCT CONTENT */}
          <div className="flex flex-col">
            {/* Title */}
            {/* Description */}
            {/* Problems */}
            {/* Crops */}
            {/* Application Details */}
          </div>

        </div>



        <div>
          <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-4">
            {product.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-muted-foreground mb-6 text-lg">{product.description}</p>

          <div className="mb-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" /> Problems Solved
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.problemsSolved.map((p) => (
                <span key={p} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">{p}</span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Leaf className="w-5 h-5 text-primary" /> Suitable Crops
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.suitableCrops.map((c) => (
                <span key={c} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">{c}</span>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-5 mb-6">
            <h3 className="font-semibold mb-3">Application Details</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <Beaker className="w-6 h-6 text-primary mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">Dosage</p>
                <p className="font-medium text-sm">{product.dosage}</p>
              </div>
              <div>
                <Clock className="w-6 h-6 text-primary mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">Frequency</p>
                <p className="font-medium text-sm">{product.frequency}</p>
              </div>
              <div>
                <Droplets className="w-6 h-6 text-primary mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">Application</p>
                <p className="font-medium text-sm capitalize">{product.applicationType}</p>
              </div>
            </div>
          </div>

          <Link to="/contact">
            <Button size="lg" className="rounded-full w-full sm:w-auto">Enquire Now</Button>
          </Link>
        </div>
      </div>

      {/* Ingredients & Benefits Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="card-organic p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Beaker className="w-5 h-5 text-primary" /> Natural Ingredients
          </h3>
          <ul className="space-y-3">
            {product.ingredients.map((ingredient, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Leaf className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{ingredient}</p>
                  <p className="text-sm text-muted-foreground">Naturally sourced, chemical-free</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-organic p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" /> Key Benefits
          </h3>
          <ul className="space-y-3">
            {product.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-accent" />
                </div>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Usage Instructions */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-6 text-center">How to Use</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { step: 1, title: "Measure", desc: `Add ${product.dosage} to your sprayer` },
            { step: 2, title: "Mix", desc: "Shake well until fully dissolved" },
            { step: 3, title: "Apply", desc: `Use as ${product.applicationType} application` },
            { step: 4, title: "Repeat", desc: product.frequency }
          ].map((item) => (
            <div key={item.step} className="text-center p-6 bg-card border border-border rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center mx-auto mb-3">
                {item.step}
              </div>
              <h4 className="font-semibold mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Before/After Results
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-6 text-center">Expected Results</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden border border-border">
            <div className="bg-destructive/10 p-4 text-center">
              <span className="font-semibold text-destructive">Before Treatment</span>
            </div>
            <div className="h-48 bg-gradient-to-br from-muted to-destructive/10 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <p className="text-sm">Affected crops showing</p>
                <p className="font-medium">{product.problemsSolved[0]}</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border">
            <div className="bg-primary/10 p-4 text-center">
              <span className="font-semibold text-primary">After Treatment</span>
            </div>
            <div className="h-48 bg-gradient-to-br from-muted to-primary/10 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <p className="text-sm">Healthy crops with</p>
                <p className="font-medium text-primary">Complete Recovery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
       */}

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
          <HelpCircle className="w-6 h-6 text-primary" /> Frequently Asked Questions
        </h3>
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
  );
};

export default ProductDetail;
