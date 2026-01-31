import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";

export default function TermsConditions() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge variant="secondary" className="mb-4">Legal</Badge>
            <h1 className="font-display text-4xl font-bold mb-8">Terms & Conditions</h1>
            
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Last updated: January 2024
              </p>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using the Mello Melt website (mellomelt.com) and services, you accept 
                  and agree to be bound by these Terms and Conditions. If you do not agree to these terms, 
                  please do not use our website or services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">2. Products & Pricing</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>All prices are listed in Indian Rupees (INR) and include applicable taxes unless stated otherwise</li>
                  <li>We reserve the right to modify prices without prior notice</li>
                  <li>Product images are for illustration purposes and may vary slightly from actual products</li>
                  <li>Product availability is subject to stock levels</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">3. Orders & Payment</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Orders are confirmed only upon successful payment or COD confirmation</li>
                  <li>We accept UPI payments and Cash on Delivery</li>
                  <li>Order cancellation is permitted within 1 hour of placement</li>
                  <li>We reserve the right to cancel orders in case of pricing errors or stock issues</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">4. Shipping & Delivery</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Delivery timelines are estimates and may vary based on location and external factors</li>
                  <li>Free delivery on orders above ₹500; ₹49 delivery charge for smaller orders</li>
                  <li>Risk of loss passes to you upon delivery</li>
                  <li>Delivery to incorrect addresses provided by customers is not our responsibility</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">5. Returns & Refunds</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Due to the nature of food products, returns are not accepted</li>
                  <li>Replacements are provided for damaged or defective items</li>
                  <li>Claims must be made within 24 hours of delivery with photographic evidence</li>
                  <li>Refunds are processed within 5-7 business days to the original payment method</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">6. User Accounts</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>You are responsible for maintaining the confidentiality of your account</li>
                  <li>You agree to provide accurate and complete information</li>
                  <li>We reserve the right to suspend accounts for violations of these terms</li>
                  <li>You must be at least 18 years old to create an account</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">7. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content on this website, including text, graphics, logos, images, and software, 
                  is the property of Crave Craft Food & Beverages Pvt. Ltd. and is protected by 
                  intellectual property laws. Unauthorized use is prohibited.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">8. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, Mello Melt shall not be liable for any 
                  indirect, incidental, special, or consequential damages arising from your use of 
                  our website or products.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">9. Food Safety Disclaimer</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Check product labels for allergen information</li>
                  <li>Store products as per instructions on packaging</li>
                  <li>Consume before the expiry date</li>
                  <li>Consult a doctor if you have food allergies or medical conditions</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">10. Governing Law</h2>
                <p className="text-muted-foreground">
                  These terms shall be governed by and construed in accordance with the laws of India. 
                  Any disputes shall be subject to the exclusive jurisdiction of courts in Hyderabad, Telangana.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">11. Contact</h2>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-semibold">Crave Craft Food & Beverages Pvt. Ltd.</p>
                  <p className="text-muted-foreground">Email: legal@mellomelt.com</p>
                  <p className="text-muted-foreground">Phone: +91 88841 62999</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
