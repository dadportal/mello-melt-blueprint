export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  mrp: number;
  discountPercent: number;
  description: string;
  benefits: string[];
  ingredients: string;
  weight: string;
  image: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  featured: boolean;
  trending: boolean;
}

export const categories = [
  { id: "candies", name: "Candies & Jellies", icon: "🍬", count: 24 },
  { id: "confectionery", name: "Confectionery", icon: "🍫", count: 18 },
  { id: "bakery", name: "Bakery & Cakes", icon: "🎂", count: 12 },
  { id: "snacks", name: "Snacks & Wafers", icon: "🧇", count: 16 },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Strawberry Bliss Candy",
    category: "candies",
    subcategory: "Fruit Candies",
    price: 149,
    mrp: 199,
    discountPercent: 25,
    description: "Indulge in the sweet essence of summer with our Strawberry Bliss Candies. Each piece bursts with authentic strawberry flavor.",
    benefits: ["Delicious fruity flavor", "Perfect snack size", "No artificial colors"],
    ingredients: "Sugar, glucose syrup, natural strawberry flavoring, citric acid, fruit extracts",
    weight: "200g (Jar of 50 pieces)",
    image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400&h=400&fit=crop",
    rating: 4.8,
    reviewsCount: 234,
    inStock: true,
    featured: true,
    trending: true,
  },
  {
    id: "2",
    name: "Kacha Aam Jelly",
    category: "candies",
    subcategory: "Center-filled Jellies",
    price: 179,
    mrp: 229,
    discountPercent: 22,
    description: "Experience the tangy delight of raw mango with our center-filled jellies. A nostalgic treat that brings back childhood memories.",
    benefits: ["Tangy center-filled", "Traditional flavor", "Soft texture"],
    ingredients: "Sugar, glucose syrup, mango pulp, gelatin, citric acid, natural flavors",
    weight: "180g (Jar of 40 pieces)",
    image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=400&h=400&fit=crop",
    rating: 4.6,
    reviewsCount: 189,
    inStock: true,
    featured: true,
    trending: false,
  },
  {
    id: "3",
    name: "Belgian Chocolate Truffle",
    category: "confectionery",
    subcategory: "Truffles",
    price: 499,
    mrp: 649,
    discountPercent: 23,
    description: "Luxurious Belgian chocolate truffles with a velvety ganache center. Perfect for gifting or self-indulgence.",
    benefits: ["Premium Belgian cocoa", "Smooth ganache center", "Elegant packaging"],
    ingredients: "Cocoa mass, cocoa butter, sugar, milk powder, vanilla extract",
    weight: "250g (Box of 12 pieces)",
    image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=400&h=400&fit=crop",
    rating: 4.9,
    reviewsCount: 312,
    inStock: true,
    featured: true,
    trending: true,
  },
  {
    id: "4",
    name: "Crispy Chocolate Wafer",
    category: "snacks",
    subcategory: "Wafers",
    price: 89,
    mrp: 110,
    discountPercent: 19,
    description: "Layers of crispy wafer coated in rich milk chocolate. The perfect tea-time companion.",
    benefits: ["Crispy layers", "Rich chocolate coating", "Individually wrapped"],
    ingredients: "Wheat flour, sugar, cocoa butter, milk chocolate, vegetable oil, vanilla",
    weight: "150g (Pack of 12)",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=400&fit=crop",
    rating: 4.5,
    reviewsCount: 456,
    inStock: true,
    featured: false,
    trending: true,
  },
  {
    id: "5",
    name: "Classic Butter Cake",
    category: "bakery",
    subcategory: "Cakes",
    price: 399,
    mrp: 499,
    discountPercent: 20,
    description: "Soft, moist butter cake made with premium ingredients. A timeless classic for every celebration.",
    benefits: ["Freshly baked", "Rich butter flavor", "Moist texture"],
    ingredients: "Flour, butter, eggs, sugar, vanilla essence, baking powder, milk",
    weight: "500g",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop",
    rating: 4.7,
    reviewsCount: 178,
    inStock: true,
    featured: true,
    trending: false,
  },
  {
    id: "6",
    name: "Orange Cream Lollipop",
    category: "candies",
    subcategory: "Lollipops",
    price: 59,
    mrp: 79,
    discountPercent: 25,
    description: "Swirled orange and cream lollipops with a delightful citrus burst. Fun for kids and adults alike!",
    benefits: ["Two-flavor swirl", "Long-lasting", "Natural orange flavor"],
    ingredients: "Sugar, glucose syrup, cream powder, orange extract, citric acid",
    weight: "120g (Pack of 10)",
    image: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?w=400&h=400&fit=crop",
    rating: 4.4,
    reviewsCount: 98,
    inStock: true,
    featured: false,
    trending: false,
  },
  {
    id: "7",
    name: "Almond Praline Bar",
    category: "confectionery",
    subcategory: "Bars",
    price: 199,
    mrp: 249,
    discountPercent: 20,
    description: "Crunchy roasted almonds embedded in smooth praline and covered with milk chocolate.",
    benefits: ["Whole almonds", "Caramelized praline", "Premium chocolate"],
    ingredients: "Almonds, sugar, cocoa butter, milk powder, vanilla, sea salt",
    weight: "100g",
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&h=400&fit=crop",
    rating: 4.8,
    reviewsCount: 267,
    inStock: true,
    featured: true,
    trending: true,
  },
  {
    id: "8",
    name: "Red Velvet Cupcakes",
    category: "bakery",
    subcategory: "Cupcakes",
    price: 299,
    mrp: 379,
    discountPercent: 21,
    description: "Gorgeous red velvet cupcakes topped with cream cheese frosting. A visual and tasteful delight!",
    benefits: ["Cream cheese frosting", "Moist crumb", "Perfect portion size"],
    ingredients: "Flour, cocoa, buttermilk, eggs, cream cheese, butter, red food color",
    weight: "Pack of 4",
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&h=400&fit=crop",
    rating: 4.9,
    reviewsCount: 145,
    inStock: true,
    featured: true,
    trending: true,
  },
];

export const getProductsByCategory = (categoryId: string) => {
  return products.filter((p) => p.category === categoryId);
};

export const getFeaturedProducts = () => {
  return products.filter((p) => p.featured);
};

export const getTrendingProducts = () => {
  return products.filter((p) => p.trending);
};

export const getProductById = (id: string) => {
  return products.find((p) => p.id === id);
};
