import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Categories } from "@/components/home/Categories";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { TrustBadges } from "@/components/home/TrustBadges";
import { Testimonials } from "@/components/home/Testimonials";
import { Newsletter } from "@/components/home/Newsletter";
import { SEOHead } from "@/components/seo/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Mello Melt - Handcrafted Candies & Confections"
        description="Discover handcrafted candies, chocolates, cakes & wafers. Traditional flavors with modern techniques by Crave Craft Food & Beverages."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Mello Melt",
          url: window.location.origin,
          logo: `${window.location.origin}/favicon.ico`,
          description: "Premium handcrafted confections by Crave Craft Food & Beverages Pvt. Ltd.",
          contactPoint: { "@type": "ContactPoint", telephone: "+91-88841-62999", contactType: "customer service" },
        }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBadges />
        <Categories />
        <FeaturedProducts />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
