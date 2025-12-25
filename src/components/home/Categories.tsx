import { Link } from "react-router-dom";
import { categories } from "@/lib/products";
import { ArrowRight } from "lucide-react";

export const Categories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our delicious range of confections, from classic candies to gourmet treats
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group relative overflow-hidden rounded-2xl bg-gradient-card border border-border/50 p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              
              <span className="text-5xl md:text-6xl block mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </span>
              
              <h3 className="font-display text-lg md:text-xl font-semibold mb-1">
                {category.name}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                {category.count} Products
              </p>
              
              <div className="flex items-center text-sm font-medium text-secondary group-hover:text-royal transition-colors">
                Shop Now
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
