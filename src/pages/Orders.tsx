import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Package, Loader2, ShoppingBag, ChevronRight, Truck, CheckCircle2, Clock, XCircle } from "lucide-react";

interface Order {
  id: string;
  order_number: string;
  status: string;
  total: number;
  subtotal: number;
  created_at: string;
  payment_method: string | null;
  payment_status: string | null;
  shipping_fee: number | null;
  tracking_number: string | null;
}

const statusConfig: Record<string, { icon: React.ElementType; color: string; label: string }> = {
  pending: { icon: Clock, color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300", label: "Pending" },
  processing: { icon: Package, color: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300", label: "Processing" },
  shipped: { icon: Truck, color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300", label: "Shipped" },
  delivered: { icon: CheckCircle2, color: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300", label: "Delivered" },
  cancelled: { icon: XCircle, color: "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300", label: "Cancelled" },
};

export default function Orders() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) navigate("/auth");
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) fetchOrders();
  }, [user]);

  const fetchOrders = async () => {
    const { data } = await supabase
      .from("orders")
      .select("id, order_number, status, total, subtotal, created_at, payment_method, payment_status, shipping_fee, tracking_number")
      .eq("user_id", user!.id)
      .order("created_at", { ascending: false });
    setOrders(data || []);
    setIsLoading(false);
  };

  if (loading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-8">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-3xl font-bold mb-8">My Orders</h1>

            {orders.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h2 className="font-display text-xl font-semibold mb-2">No orders yet</h2>
                <p className="text-muted-foreground mb-6">Start shopping to see your orders here</p>
                <Link to="/products">
                  <Button>Browse Products</Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => {
                  const config = statusConfig[order.status || "pending"] || statusConfig.pending;
                  const StatusIcon = config.icon;
                  return (
                    <Card key={order.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-3">
                              <p className="font-mono font-semibold">{order.order_number}</p>
                              <Badge className={config.color}>
                                <StatusIcon className="mr-1 h-3 w-3" />
                                {config.label}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Placed on {new Date(order.created_at).toLocaleDateString("en-IN", {
                                day: "numeric", month: "long", year: "numeric"
                              })}
                            </p>
                            {order.tracking_number && (
                              <p className="text-sm text-muted-foreground">
                                Tracking: <span className="font-mono">{order.tracking_number}</span>
                              </p>
                            )}
                          </div>
                          <div className="text-right">
                            <p className="font-display text-xl font-bold">₹{order.total}</p>
                            <p className="text-sm text-muted-foreground capitalize">
                              {order.payment_method || "UPI"} • {order.payment_status || "pending"}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
