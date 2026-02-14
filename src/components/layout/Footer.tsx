import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gradient-golden flex items-center justify-center">
                <span className="text-xl">🍬</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold">Mello Melt</span>
                <span className="text-[10px] opacity-70 -mt-1 tracking-widest uppercase">
                  A Sweet Treat
                </span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Traditional flavors crafted with modern techniques. Bringing sweetness to every moment since 2020.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Products", "About Us", "Contact", "Blog", "FAQs"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-3">
              {["Candies & Jellies", "Confectionery", "Bakery & Cakes", "Snacks & Wafers"].map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/products?category=${cat.toLowerCase()}`}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                <span className="text-sm opacity-80">
                  123 Sweet Street, Confectionery Lane,<br />
                  Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+919876543210" className="text-sm opacity-80 hover:opacity-100 hover:text-primary">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:hello@mellomelt.com" className="text-sm opacity-80 hover:opacity-100 hover:text-primary">
                  hello@mellomelt.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-accent-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Crave Craft Food & Beverages Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-sm opacity-60 hover:opacity-100">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm opacity-60 hover:opacity-100">
              Terms of Service
            </Link>
            <Link to="/shipping" className="text-sm opacity-60 hover:opacity-100">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
