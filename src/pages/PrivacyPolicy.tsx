import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";

export default function PrivacyPolicy() {
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
            <h1 className="font-display text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Last updated: January 2024
              </p>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground">
                  Crave Craft Food & Beverages Pvt. Ltd. ("Mello Melt", "we", "us", or "our") 
                  is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                  use, disclose, and safeguard your information when you visit our website mellomelt.com 
                  or make purchases from us.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">2. Information We Collect</h2>
                <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
                <p className="text-muted-foreground mb-4">
                  We may collect personally identifiable information that you voluntarily provide:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Name, email address, and phone number</li>
                  <li>Billing and shipping addresses</li>
                  <li>Payment information (processed securely by our payment partners)</li>
                  <li>Order history and preferences</li>
                  <li>Communications with our support team</li>
                </ul>
                
                <h3 className="font-semibold text-lg mb-2">Automatically Collected Information</h3>
                <p className="text-muted-foreground">
                  When you visit our website, we automatically collect certain information including 
                  IP address, browser type, device information, pages visited, and time spent on pages.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Send order confirmations and shipping updates</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Prevent fraudulent transactions</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">4. Information Sharing</h2>
                <p className="text-muted-foreground">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>Payment processors to complete transactions</li>
                  <li>Shipping partners to deliver your orders</li>
                  <li>Analytics providers to improve our services</li>
                  <li>Law enforcement when required by law</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">5. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement industry-standard security measures to protect your information. 
                  However, no method of transmission over the Internet is 100% secure. We cannot 
                  guarantee absolute security but strive to use commercially acceptable means to protect your data.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">7. Cookies</h2>
                <p className="text-muted-foreground">
                  We use cookies and similar technologies to enhance your browsing experience, 
                  remember your preferences, and analyze website traffic. You can control cookies 
                  through your browser settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">8. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="font-semibold">Crave Craft Food & Beverages Pvt. Ltd.</p>
                  <p className="text-muted-foreground">Email: privacy@mellomelt.com</p>
                  <p className="text-muted-foreground">Phone: +91 88841 62999</p>
                  <p className="text-muted-foreground">Address: Hyderabad, Telangana, India</p>
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
