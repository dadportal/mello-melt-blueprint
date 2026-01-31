import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, X, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const { user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="h-10 w-10 rounded-full bg-gradient-golden flex items-center justify-center shadow-golden group-hover:scale-110 transition-transform duration-300">
              <span className="text-xl">🍬</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold text-foreground tracking-tight">
              Mello Melt
            </span>
            <span className="text-[10px] text-muted-foreground -mt-1 tracking-widest uppercase">
              A Sweet Treat
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          
          <ThemeToggle />
          
          <Link to="/wishlist">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
          </Link>
          
          <Link to={user ? "/profile" : "/auth"}>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
          </Link>

          <Button
            variant="cart"
            size="icon"
            className="relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center animate-scale-in">
                {totalItems}
              </span>
            )}
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="container py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to={user ? "/profile" : "/auth"}
            className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {user ? "My Account" : "Sign In"}
          </Link>
        </nav>
      </div>
    </header>
  );
};
