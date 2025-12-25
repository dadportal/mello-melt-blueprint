import { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Heart, Star, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-card border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.discountPercent > 0 && (
              <span className="px-2 py-1 text-xs font-bold bg-destructive text-destructive-foreground rounded-full">
                -{product.discountPercent}%
              </span>
            )}
            {product.trending && (
              <span className="px-2 py-1 text-xs font-bold bg-secondary text-secondary-foreground rounded-full">
                Trending
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className={cn(
              "absolute top-3 right-3 h-9 w-9 rounded-full flex items-center justify-center transition-all duration-300",
              isLiked
                ? "bg-destructive text-destructive-foreground"
                : "bg-background/80 backdrop-blur text-muted-foreground hover:text-destructive"
            )}
          >
            <Heart className={cn("h-4 w-4", isLiked && "fill-current")} />
          </button>

          {/* Quick Add Button */}
          <div className="absolute bottom-3 left-3 right-3 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <Button
              variant={isAdded ? "secondary" : "golden"}
              className="w-full"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              {isAdded ? (
                <>
                  <Check className="h-4 w-4" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviewsCount})</span>
          </div>

          <h3 className="font-medium text-foreground mb-1 truncate group-hover:text-secondary transition-colors">
            {product.name}
          </h3>
          
          <p className="text-xs text-muted-foreground mb-3">{product.weight}</p>

          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-foreground">₹{product.price}</span>
            {product.discountPercent > 0 && (
              <span className="text-sm text-muted-foreground line-through">₹{product.mrp}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
