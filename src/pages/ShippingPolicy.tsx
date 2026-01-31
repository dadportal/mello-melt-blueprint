import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Clock, MapPin, Package, AlertCircle, Phone } from "lucide-react";

const deliveryZones = [
  { zone: "Metro Cities", cities: "Hyderabad, Bangalore, Mumbai, Delhi, Chennai", time: "2-3 days" },
  { zone: "Tier 1 Cities", cities: "Pune, Ahmedabad, Kolkata, Jaipur", time: "3-4 days" },
  { zone: "Tier 2 Cities", cities: "Vizag, Vijayawada, Nagpur, Lucknow", time: "4-5 days" },
  { zone: "Other Areas", cities: "All other serviceable pincodes", time: "5-7 days" },
];

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge variant="secondary" className="mb-4">
              <Truck className="mr-1 h-3 w-3" />
              Shipping
            </Badge>
            <h1 className="font-display text-4xl font-bold mb-8">Shipping & Delivery Policy</h1>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              <Card>
                <CardContent className="p-4 text-center">
                  <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">Free Delivery</p>
                  <p className="text-sm text-muted-foreground">On orders above ₹500</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">Fast Shipping</p>
                  <p className="text-sm text-muted-foreground">2-7 business days</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">Pan-India</p>
                  <p className="text-sm text-muted-foreground">Delivery everywhere</p>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">Shipping Charges</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Orders above ₹500:</strong> FREE delivery</li>
                  <li><strong>Orders below ₹500:</strong> ₹49 flat delivery charge</li>
                  <li><strong>Express Delivery:</strong> ₹99 (available in select cities)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">Delivery Timelines</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="p-3 text-left font-semibold">Zone</th>
                        <th className="p-3 text-left font-semibold">Coverage</th>
                        <th className="p-3 text-left font-semibold">Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      {deliveryZones.map((zone) => (
                        <tr key={zone.zone} className="border-b">
                          <td className="p-3 font-medium">{zone.zone}</td>
                          <td className="p-3 text-muted-foreground">{zone.cities}</td>
                          <td className="p-3">{zone.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  * Timelines are estimates and may vary during peak seasons or due to external factors.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">Order Processing</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Orders are processed within 24-48 hours on business days</li>
                  <li>Orders placed after 4 PM may be processed the next business day</li>
                  <li>Weekends and holidays may result in delayed processing</li>
                  <li>You'll receive a tracking link once your order is shipped</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">Delivery Process</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Our delivery partner will attempt delivery at the provided address</li>
                  <li>Up to 2 delivery attempts will be made</li>
                  <li>You can reschedule delivery using the tracking link</li>
                  <li>Signature/OTP may be required for certain orders</li>
                  <li>Someone must be available to receive the package</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">Special Handling</h2>
                <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg">
                  <Package className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Perishable Items</p>
                    <p className="text-sm text-muted-foreground">
                      Bakery items and chocolates are packed with care to maintain freshness. 
                      During summer months, we use insulated packaging for temperature-sensitive products.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">Delivery Issues</h2>
                <div className="flex items-start gap-3 p-4 bg-destructive/10 rounded-lg mb-4">
                  <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Report Issues Within 24 Hours</p>
                    <p className="text-sm text-muted-foreground">
                      If your package is damaged, missing, or incorrect, contact us within 24 hours 
                      of delivery with photos. We'll arrange a replacement or refund.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">Contact Support</h2>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Need Help?</p>
                    <p className="text-muted-foreground">
                      Call: +91 88841 62999 | Email: shipping@mellomelt.com
                    </p>
                  </div>
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
