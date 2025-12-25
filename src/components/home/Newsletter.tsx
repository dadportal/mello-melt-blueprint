import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail, Sparkles } from "lucide-react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome to the Mello Melt family! 🎉", {
        description: "You'll receive exclusive offers and sweet updates soon.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-gradient-chocolate text-accent-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 text-6xl opacity-10 animate-float">🍬</div>
        <div className="absolute bottom-10 right-1/4 text-6xl opacity-10 animate-float-delayed">🍫</div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-foreground/10 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Get 10% off your first order</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Join Our Sweet Community
          </h2>
          
          <p className="text-accent-foreground/80 mb-8 text-lg">
            Subscribe for exclusive offers, new product launches, and delicious recipes delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-12 h-12 bg-background/10 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/50 focus:bg-background/20"
                required
              />
            </div>
            <Button variant="golden" size="lg" type="submit">
              Subscribe
            </Button>
          </form>

          <p className="text-xs text-accent-foreground/60 mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};
