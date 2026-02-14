import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Loader2,
  MessageSquare,
  Building2,
  Truck
} from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Hyderabad, Telangana", "India - 500001"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 88841 62999", "Mon-Sat: 9AM - 6PM"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["support@mellomelt.com", "orders@mellomelt.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Saturday", "9:00 AM - 6:00 PM IST"],
  },
];

const inquiryTypes = [
  { icon: MessageSquare, title: "General Inquiry", description: "Questions about our products or services" },
  { icon: Building2, title: "Wholesale", description: "Bulk orders and business partnerships" },
  { icon: Truck, title: "Order Support", description: "Help with existing orders or deliveries" },
];

export default function Contact() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);

    try {
      // Save to database
      const { error } = await supabase.from("contact_messages").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        subject: formData.subject,
        message: formData.message,
      });

      if (error) throw error;

      // Also trigger edge function for email notification (fire-and-forget)
      supabase.functions.invoke("send-contact-email", {
        body: formData,
      }).catch(() => {});

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24-48 hours.",
      });

      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to send",
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-hero overflow-hidden">
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <Badge variant="secondary" className="mb-4">Get in Touch</Badge>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                We'd Love to Hear From You
              </h1>
              <p className="text-lg text-muted-foreground">
                Have questions, feedback, or want to partner with us? 
                Reach out and we'll respond as soon as possible.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Inquiry Types */}
        <section className="py-12 -mt-8">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {inquiryTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <type.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-1">{type.title}</h3>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-4">
                <h2 className="font-display text-2xl font-bold mb-6">Contact Information</h2>
                {contactInfo.map((info) => (
                  <Card key={info.title}>
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Map Embed */}
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160tried66786!2d78.24323099999999!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mello Melt Location"
                    />
                  </div>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-display">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                          />
                          {errors.name && (
                            <p className="text-sm text-destructive">{errors.name}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          {errors.email && (
                            <p className="text-sm text-destructive">{errors.email}</p>
                          )}
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone (Optional)</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="How can we help?"
                            value={formData.subject}
                            onChange={handleChange}
                          />
                          {errors.subject && (
                            <p className="text-sm text-destructive">{errors.subject}</p>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us more about your inquiry..."
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                        />
                        {errors.message && (
                          <p className="text-sm text-destructive">{errors.message}</p>
                        )}
                      </div>
                      <Button type="submit" size="lg" disabled={isLoading}>
                        {isLoading ? (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                          <Send className="mr-2 h-4 w-4" />
                        )}
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
