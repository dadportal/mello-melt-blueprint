import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-hero">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-8xl animate-float opacity-20">🍬</div>
        <div className="absolute top-40 right-20 text-7xl animate-float-delayed opacity-20">🍫</div>
        <div className="absolute bottom-32 left-1/4 text-6xl animate-float opacity-20">🎂</div>
        <div className="absolute bottom-20 right-1/3 text-5xl animate-float-delayed opacity-20">🧇</div>
        <div className="absolute top-1/3 left-1/2 text-4xl animate-bounce-gentle opacity-15">✨</div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Traditional Flavors, Modern Techniques</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-foreground">Indulge in</span>
              <br />
              <span className="text-gradient-golden">Sweet Perfection</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Discover handcrafted confections made with love. From classic candies to artisanal chocolates, 
              every bite is a journey of pure bliss.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/products">
                <Button variant="hero" className="group w-full sm:w-auto">
                  Shop Now
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                Explore Categories
              </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8 pt-8">
              {[
                { value: "50+", label: "Products" },
                { value: "10K+", label: "Happy Customers" },
                { value: "4.9", label: "Average Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square">
              {/* Main Product Showcase */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-golden rounded-full blur-3xl opacity-30 scale-150" />
                  <img
                    src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600&h=600&fit=crop"
                    alt="Delicious candies and chocolates"
                    className="relative w-[400px] h-[400px] object-cover rounded-3xl shadow-lg animate-float"
                  />
                </div>
              </div>

              {/* Floating Product Cards */}
              <div className="absolute top-8 right-0 bg-card rounded-2xl p-4 shadow-lg animate-float-delayed">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🍬</span>
                  <div>
                    <p className="font-medium text-sm">Strawberry Candy</p>
                    <p className="text-xs text-muted-foreground">Best Seller</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-16 -left-8 bg-card rounded-2xl p-4 shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🍫</span>
                  <div>
                    <p className="font-medium text-sm">Chocolate Truffle</p>
                    <p className="text-xs text-primary font-semibold">25% OFF</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
