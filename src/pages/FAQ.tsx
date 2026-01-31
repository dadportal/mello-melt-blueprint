import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  ShoppingCart, 
  Truck, 
  CreditCard, 
  RefreshCcw, 
  Package, 
  Shield,
  HelpCircle,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqCategories = [
  {
    icon: ShoppingCart,
    title: "Ordering",
    faqs: [
      {
        question: "How do I place an order?",
        answer: "Simply browse our products, add items to your cart, and proceed to checkout. You can pay via UPI or Cash on Delivery."
      },
      {
        question: "Can I modify my order after placing it?",
        answer: "Orders can be modified within 1 hour of placing. Please contact our support team immediately if you need changes."
      },
      {
        question: "Is there a minimum order value?",
        answer: "There's no minimum order value. However, orders below ₹500 will have a delivery charge of ₹49."
      },
      {
        question: "Do you offer bulk orders for events?",
        answer: "Yes! We offer special bulk pricing for events. Use our booking page or contact us for custom quotes."
      },
    ]
  },
  {
    icon: Truck,
    title: "Shipping & Delivery",
    faqs: [
      {
        question: "What are the delivery timelines?",
        answer: "Standard delivery takes 3-5 business days. Express delivery (available in select cities) takes 1-2 days."
      },
      {
        question: "Do you deliver pan-India?",
        answer: "Yes, we deliver across India. Some remote areas may have extended delivery times."
      },
      {
        question: "How can I track my order?",
        answer: "Once shipped, you'll receive a tracking link via SMS and email. You can also check status in your account dashboard."
      },
      {
        question: "What if I'm not available to receive the order?",
        answer: "Our delivery partner will attempt delivery twice. You can also reschedule via the tracking link."
      },
    ]
  },
  {
    icon: CreditCard,
    title: "Payments",
    faqs: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept UPI (PhonePe, Google Pay, Paytm, etc.), and Cash on Delivery. Card payments coming soon!"
      },
      {
        question: "Is online payment secure?",
        answer: "Yes, all payments are processed through secure payment gateways. We never store your payment details."
      },
      {
        question: "Can I pay with Cash on Delivery?",
        answer: "Yes, COD is available for orders up to ₹5000. A small COD fee of ₹29 applies."
      },
      {
        question: "Do you offer EMI options?",
        answer: "Currently, we don't offer EMI. This feature is coming soon for orders above ₹2000."
      },
    ]
  },
  {
    icon: RefreshCcw,
    title: "Returns & Refunds",
    faqs: [
      {
        question: "What is your return policy?",
        answer: "Due to the nature of food products, we don't accept returns. However, we offer replacements for damaged/defective items."
      },
      {
        question: "What if I receive a damaged product?",
        answer: "Please contact us within 24 hours with photos of the damage. We'll arrange a replacement immediately."
      },
      {
        question: "How long do refunds take?",
        answer: "Refunds are processed within 5-7 business days and credited to the original payment method."
      },
      {
        question: "Can I cancel my order?",
        answer: "Orders can be cancelled within 1 hour of placement. After that, cancellation charges may apply."
      },
    ]
  },
  {
    icon: Package,
    title: "Products",
    faqs: [
      {
        question: "Are your products vegetarian?",
        answer: "Most of our products are vegetarian. Products containing gelatin are clearly marked. Check product descriptions for details."
      },
      {
        question: "What is the shelf life of your products?",
        answer: "Shelf life varies by product. Generally, candies last 6-12 months, bakery items 7-14 days. Check packaging for exact dates."
      },
      {
        question: "Are your products FSSAI certified?",
        answer: "Yes, all Mello Melt products are FSSAI certified and manufactured in hygienic conditions."
      },
      {
        question: "Do you use artificial colors or preservatives?",
        answer: "We minimize artificial additives. Some products may contain permitted food colors. Check ingredients for specifics."
      },
    ]
  },
  {
    icon: Shield,
    title: "Account & Privacy",
    faqs: [
      {
        question: "How do I create an account?",
        answer: "Click 'Sign Up' and register with your email or Google account. You can also checkout as a guest."
      },
      {
        question: "Is my personal data secure?",
        answer: "Yes, we follow industry-standard security practices. Your data is encrypted and never shared with third parties."
      },
      {
        question: "How can I delete my account?",
        answer: "Contact our support team to request account deletion. We'll process it within 7 business days."
      },
      {
        question: "Can I update my delivery address?",
        answer: "Yes, you can manage multiple addresses in your account settings or update during checkout."
      },
    ]
  },
];

export default function FAQ() {
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
                <HelpCircle className="mr-1 h-3 w-3" />
                Help Center
              </Badge>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about orders, shipping, payments, and more.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <div className="space-y-8">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="font-display text-xl font-bold">{category.title}</h2>
                  </div>
                  <Accordion type="single" collapsible className="bg-card rounded-lg border">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`${category.title}-${faqIndex}`}>
                        <AccordionTrigger className="px-4 hover:no-underline">
                          <span className="text-left">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              ))}
            </div>

            {/* Still Need Help */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 text-center p-8 bg-muted/50 rounded-2xl"
            >
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold mb-2">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Our support team is here to help!
              </p>
              <Link to="/contact">
                <Button size="lg">Contact Support</Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
