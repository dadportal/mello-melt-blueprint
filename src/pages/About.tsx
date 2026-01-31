import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Award, Users, Leaf, Factory, Globe } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every product is crafted with passion and care, ensuring the highest quality treats for our customers.",
  },
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "We prioritize natural flavors and ingredients, minimizing artificial additives in all our products.",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "FSSAI certified with strict quality control measures at every step of production.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We listen, adapt, and continuously improve.",
  },
];

const milestones = [
  { year: "2018", event: "Founded Crave Craft Food & Beverages Pvt. Ltd." },
  { year: "2019", event: "Launched Mello Melt brand with 10 products" },
  { year: "2020", event: "Expanded to 4 product categories" },
  { year: "2021", event: "Reached 5,000+ happy customers" },
  { year: "2022", event: "FSSAI certification achieved" },
  { year: "2023", event: "Launched e-commerce platform" },
  { year: "2024", event: "Expanding to 50+ products nationwide" },
];

const team = [
  {
    name: "Praneeth M",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
  },
  {
    name: "Production Team",
    role: "Quality Excellence",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=300&fit=crop",
  },
  {
    name: "R&D Team",
    role: "Innovation Hub",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=300&fit=crop",
  },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 text-8xl opacity-10 animate-float">🍬</div>
            <div className="absolute bottom-10 right-10 text-8xl opacity-10 animate-float-delayed">🍫</div>
          </div>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <Badge variant="secondary" className="mb-4">Our Story</Badge>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Crafting Sweet Memories Since 2018
              </h1>
              <p className="text-lg text-muted-foreground">
                Mello Melt is a brand by Crave Craft Food & Beverages Pvt. Ltd., dedicated to 
                bringing you the finest confections that blend traditional flavors with modern techniques.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                  <CardContent className="p-8">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="text-muted-foreground">
                      To bring joy to every household through delicious, high-quality confections 
                      that celebrate both traditional recipes and innovative flavors. We aim to be 
                      India's most loved confectionery brand.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
                  <CardContent className="p-8">
                    <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                      <Factory className="h-6 w-6 text-secondary" />
                    </div>
                    <h2 className="font-display text-2xl font-bold mb-4">Our Vision</h2>
                    <p className="text-muted-foreground">
                      To create a world where every sweet moment is made special with Mello Melt. 
                      We envision reaching every corner of India and beyond, spreading happiness 
                      through our delicious treats.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">What We Stand For</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Our Core Values</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Our Journey</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Milestones</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center mb-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10" />
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <Card>
                        <CardContent className="p-4">
                          <span className="text-primary font-bold">{milestone.year}</span>
                          <p className="text-sm text-muted-foreground mt-1">{milestone.event}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">The People Behind</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Our Team</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-4 border-primary/20"
                    />
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
