import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/lib/products";
import { Search, X } from "lucide-react";

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => {
    if (!initialQuery.trim()) return [];
    const q = initialQuery.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.ingredients.toLowerCase().includes(q)
    );
  }, [initialQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: query });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-8">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-10">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search candies, chocolates, cakes..."
                  className="pl-12 pr-12 h-14 text-lg rounded-2xl"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => { setQuery(""); setSearchParams({}); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </form>

            {/* Results */}
            {initialQuery ? (
              <>
                <h1 className="font-display text-2xl font-bold mb-2">
                  {results.length} result{results.length !== 1 ? "s" : ""} for "{initialQuery}"
                </h1>
                <p className="text-muted-foreground mb-8">
                  {results.length === 0
                    ? "Try a different search term or browse our categories."
                    : "Here's what we found for you."}
                </p>

                {results.length > 0 ? (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {results.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Link to="/products">
                      <Button>Browse All Products</Button>
                    </Link>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h2 className="font-display text-xl font-semibold mb-2">Search our store</h2>
                <p className="text-muted-foreground">
                  Find your favorite candies, chocolates, and treats
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
