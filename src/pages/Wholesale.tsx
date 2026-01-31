import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Building2,
  Users,
  TrendingUp,
  Gift,
  Truck,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Phone
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Competitive Margins",
    description: "Attractive wholesale pricing with volume-based discounts up to 30% off MRP",
  },
  {
    icon: Gift,
    title: "Custom Branding",
    description: "White-label options and custom packaging for your business",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "Pan-India logistics with dedicated B2B delivery network",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal account manager for all your wholesale needs",
  },
];

const products = [
  { name: "Candies & Jellies", moq: "100 jars", image: "🍬" },
  { name: "Chocolate Truffles", moq: "50 boxes", image: "🍫" },
  { name: "Bakery Items", moq: "25 units", image: "🎂" },
  { name: "Wafers & Snacks", moq: "100 packs", image: "🧇" },
];

const partners = [
  "Retail Stores",
  "Supermarkets",
  "Hotels & Restaurants",
  "Corporate Gifting",
  "Event Planners",
  "E-commerce Sellers",
];

export default function Wholesale() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 text-9xl opacity-10">🏭</div>
          </div>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <Badge variant="secondary" className="mb-4">
                <Building2 className="mr-1 h-3 w-3" />
                B2B Partnership
              </Badge>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Partner With <span className="text-gradient-golden">Mello Melt</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Grow your business with India's premium confectionery brand. 
                Wholesale pricing, custom branding, and dedicated support for retailers, 
                distributors, and corporate partners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking">
                  <Button size="lg" className="w-full sm:w-auto">
                    Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone className="mr-2 h-4 w-4" />
                  Call: +91 88841 62999
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Why Partner With Us</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Benefits of Wholesale Partnership
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Product Categories</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Available for Wholesale
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-5xl mb-4">{product.image}</div>
                      <h3 className="font-semibold mb-1">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">MOQ: {product.moq}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-16">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4">Who Can Partner</Badge>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Perfect For All Business Types
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {partners.map((partner) => (
                    <div key={partner} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>{partner}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="bg-gradient-to-br from-primary/20 to-primary/5">
                <CardContent className="p-8">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-display text-2xl font-bold mb-4">
                    Join 500+ Partners
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Retailers and distributors across India trust Mello Melt 
                    for quality products and reliable partnership.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Partner Satisfaction</span>
                      <span className="font-bold">98%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Average Margin</span>
                      <span className="font-bold">25-30%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Delivery Success</span>
                      <span className="font-bold">99.5%</span>
                    </div>
                  </div>
                  <Link to="/booking">
                    <Button className="w-full">Apply for Partnership</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Partner?
            </h2>
            <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
              Schedule a call with our wholesale team to discuss pricing, 
              MOQ, and customization options for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button variant="secondary" size="lg">
                  Schedule a Call
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-accent-foreground/20 hover:bg-accent-foreground/10">
                  Send Inquiry
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
