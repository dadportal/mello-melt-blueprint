import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Heart, ShoppingCart, Trash2, Loader2 } from "lucide-react";
import { products as localProducts, Product } from "@/lib/products";

interface WishlistItem {
  id: string;
  product_id: string;
}

export default function Wishlist() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) navigate("/auth");
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) fetchWishlist();
  }, [user]);

  const fetchWishlist = async () => {
    const { data } = await supabase
      .from("wishlists")
      .select("id, product_id")
      .eq("user_id", user!.id);
    setWishlistItems(data || []);
    setIsLoading(false);
  };

  const removeFromWishlist = async (id: string) => {
    await supabase.from("wishlists").delete().eq("id", id);
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
    toast({ title: "Removed from wishlist" });
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast({ title: "Added to cart", description: product.name });
  };

  const getProduct = (productId: string) =>
    localProducts.find((p) => p.id === productId);

  if (loading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-8">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-3xl font-bold mb-8">My Wishlist</h1>

            {wishlistItems.length === 0 ? (
              <div className="text-center py-16">
                <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h2 className="font-display text-xl font-semibold mb-2">Your wishlist is empty</h2>
                <p className="text-muted-foreground mb-6">Save items you love to buy them later</p>
                <Link to="/products">
                  <Button>Browse Products</Button>
                </Link>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {wishlistItems.map((item) => {
                  const product = getProduct(item.product_id);
                  if (!product) return null;
                  return (
                    <Card key={item.id} className="overflow-hidden group">
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <button
                          onClick={() => removeFromWishlist(item.id)}
                          className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <CardContent className="p-4">
                        <Link to={`/product/${product.id}`}>
                          <h3 className="font-semibold hover:text-primary transition-colors line-clamp-1">
                            {product.name}
                          </h3>
                        </Link>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="font-bold text-lg">₹{product.price}</span>
                          {product.mrp > product.price && (
                            <span className="text-sm text-muted-foreground line-through">₹{product.mrp}</span>
                          )}
                        </div>
                        <Button
                          className="w-full mt-3"
                          size="sm"
                          onClick={() => handleAddToCart(product)}
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
