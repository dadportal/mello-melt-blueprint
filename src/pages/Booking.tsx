import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { 
  CalendarIcon, 
  Clock, 
  Users, 
  Building2,
  Loader2,
  CheckCircle2,
  Gift,
  Briefcase,
  PartyPopper
} from "lucide-react";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(255),
  phone: z.string().min(10).max(15),
  date: z.date(),
  time: z.string(),
  guests: z.string(),
  eventType: z.string(),
  message: z.string().max(1000).optional(),
});

const timeSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

const guestOptions = ["1-10", "11-25", "26-50", "51-100", "100+"];

const eventTypes = [
  { value: "corporate", label: "Corporate Event", icon: Briefcase },
  { value: "birthday", label: "Birthday Party", icon: PartyPopper },
  { value: "wedding", label: "Wedding/Reception", icon: Gift },
  { value: "wholesale", label: "Wholesale Inquiry", icon: Building2 },
  { value: "other", label: "Other", icon: Users },
];

const features = [
  { title: "Custom Packaging", description: "Personalized boxes with your branding" },
  { title: "Bulk Discounts", description: "Special prices for large orders" },
  { title: "Delivery Included", description: "Free delivery for orders above ₹5000" },
  { title: "Flexible Scheduling", description: "Choose your preferred date and time" },
];

export default function Booking() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    guests: "",
    eventType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!date) {
      setErrors({ date: "Please select a date" });
      return;
    }

    const result = bookingSchema.safeParse({ ...formData, date });
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
      // Save booking to contact_messages with booking context
      const { error } = await supabase.from("contact_messages").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: `Booking Request: ${formData.eventType} on ${format(date, "PPP")}`,
        message: `Event Type: ${formData.eventType}\nDate: ${format(date, "PPP")}\nTime: ${formData.time}\nGuests: ${formData.guests}\n\nAdditional Notes: ${formData.message || "None"}`,
      });

      if (error) throw error;

      setIsSuccess(true);
      toast({
        title: "Booking submitted!",
        description: "We'll confirm your appointment within 24 hours.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Booking failed",
        description: "Please try again or contact us directly.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="h-20 w-20 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="font-display text-3xl font-bold mb-4">Booking Confirmed!</h1>
            <p className="text-muted-foreground mb-8 max-w-md">
              Thank you for your booking request. Our team will review and confirm 
              your appointment within 24 hours via email.
            </p>
            <Button onClick={() => setIsSuccess(false)}>Book Another</Button>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

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
              <Badge variant="secondary" className="mb-4">Book an Appointment</Badge>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Schedule Your Sweet Experience
              </h1>
              <p className="text-lg text-muted-foreground">
                Planning an event? Need bulk orders? Book a consultation with our team 
                and let us create the perfect confectionery experience for you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 -mt-8">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-full">
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="font-display">Book Your Appointment</CardTitle>
                  <CardDescription>
                    Fill in the details below and our team will get back to you shortly.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Info */}
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
                        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
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
                        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label>Event Type *</Label>
                        <Select
                          value={formData.eventType}
                          onValueChange={(value) => setFormData((prev) => ({ ...prev, eventType: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                          <SelectContent>
                            {eventTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                <span className="flex items-center gap-2">
                                  <type.icon className="h-4 w-4" />
                                  {type.label}
                                </span>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.eventType && <p className="text-sm text-destructive">{errors.eventType}</p>}
                      </div>
                    </div>

                    {/* Date & Time */}
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label>Preferred Date *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : "Pick a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              disabled={(date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        {errors.date && <p className="text-sm text-destructive">{errors.date}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label>Preferred Time *</Label>
                        <Select
                          value={formData.time}
                          onValueChange={(value) => setFormData((prev) => ({ ...prev, time: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot} value={slot}>
                                <span className="flex items-center gap-2">
                                  <Clock className="h-4 w-4" />
                                  {slot}
                                </span>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.time && <p className="text-sm text-destructive">{errors.time}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label>Expected Guests *</Label>
                        <Select
                          value={formData.guests}
                          onValueChange={(value) => setFormData((prev) => ({ ...prev, guests: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            {guestOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                <span className="flex items-center gap-2">
                                  <Users className="h-4 w-4" />
                                  {option} people
                                </span>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.guests && <p className="text-sm text-destructive">{errors.guests}</p>}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Notes (Optional)</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your event or specific requirements..."
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                      {isLoading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <CalendarIcon className="mr-2 h-4 w-4" />
                      )}
                      Confirm Booking
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
