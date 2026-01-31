import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Rss,
  Clock,
  ArrowRight,
  Tag,
  Search,
  TrendingUp
} from "lucide-react";
import { Input } from "@/components/ui/input";

const blogPosts = [
  {
    id: "1",
    title: "The Art of Making Traditional Indian Candies",
    excerpt: "Discover the centuries-old techniques that make our candies special. From sugar syrup temperatures to natural flavoring...",
    image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=800&h=400&fit=crop",
    category: "Behind the Scenes",
    author: "Praneeth M",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: "2",
    title: "5 Health Benefits of Dark Chocolate",
    excerpt: "Dark chocolate isn't just delicious—it's packed with antioxidants and can boost your mood. Learn about the science...",
    image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=800&h=400&fit=crop",
    category: "Wellness",
    author: "Nutrition Team",
    date: "Jan 10, 2024",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: "3",
    title: "Perfect Pairings: Chocolates & Tea",
    excerpt: "Elevate your tea time with the perfect chocolate pairing. We explore flavor profiles and combinations...",
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=800&h=400&fit=crop",
    category: "Recipes",
    author: "Chef Maya",
    date: "Jan 5, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: "4",
    title: "Festive Gift Guide: Diwali 2024",
    excerpt: "Make your Diwali celebrations sweeter with our curated gift boxes. Perfect for family, friends, and corporate gifting...",
    image: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?w=800&h=400&fit=crop",
    category: "Seasonal",
    author: "Marketing Team",
    date: "Dec 28, 2023",
    readTime: "3 min read",
    featured: false,
  },
  {
    id: "5",
    title: "From Bean to Bar: Our Chocolate Journey",
    excerpt: "Follow the journey of cocoa beans from sustainable farms to your favorite Mello Melt chocolate bars...",
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=800&h=400&fit=crop",
    category: "Behind the Scenes",
    author: "Praneeth M",
    date: "Dec 20, 2023",
    readTime: "7 min read",
    featured: false,
  },
];

const categories = [
  { name: "All Posts", count: 12 },
  { name: "Recipes", count: 4 },
  { name: "Wellness", count: 3 },
  { name: "Behind the Scenes", count: 3 },
  { name: "Seasonal", count: 2 },
];

const popularTags = ["Chocolate", "Recipes", "Healthy Eating", "Gifts", "Festivals", "Baking"];

export default function Blog() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-16 bg-gradient-hero">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <Badge variant="secondary" className="mb-4">
                <Rss className="mr-1 h-3 w-3" />
                Sweet Stories
              </Badge>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                The Mello Melt Blog
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Recipes, wellness tips, behind-the-scenes stories, and everything sweet.
              </p>
              <div className="flex max-w-md mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search articles..." className="pl-10" />
                </div>
                <Button className="ml-2">Search</Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12 -mt-8">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="aspect-video md:aspect-auto">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <Badge variant="secondary" className="w-fit mb-4">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        Featured
                      </Badge>
                      <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                        {featuredPost.title}
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                        <span>{featuredPost.author}</span>
                        <span>•</span>
                        <span>{featuredPost.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <Button className="w-fit">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <aside className="lg:col-span-1 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-muted transition-colors text-left"
                      >
                        <span>{category.name}</span>
                        <Badge variant="outline">{category.count}</Badge>
                      </button>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Popular Tags</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="cursor-pointer">
                        <Tag className="mr-1 h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/20 to-primary/5">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-display text-xl font-bold mb-2">
                      Get Sweet Updates
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Subscribe to our newsletter for recipes and offers.
                    </p>
                    <Input placeholder="Your email" className="mb-3" />
                    <Button className="w-full">Subscribe</Button>
                  </CardContent>
                </Card>
              </aside>

              {/* Posts Grid */}
              <div className="lg:col-span-3">
                <div className="grid sm:grid-cols-2 gap-6">
                  {regularPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                        <div className="aspect-video">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-5">
                          <Badge variant="outline" className="mb-3">
                            {post.category}
                          </Badge>
                          <h3 className="font-display text-lg font-bold mb-2 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>{post.date}</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {post.readTime}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Button variant="outline" size="lg">
                    Load More Articles
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
