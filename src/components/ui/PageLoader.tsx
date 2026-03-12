import { motion } from "framer-motion";

export const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background/80 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-6"
      >
        {/* Glassy loader card */}
        <div className="relative p-8 rounded-3xl bg-card/40 backdrop-blur-2xl border border-border/30 shadow-lg">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="h-12 w-12 rounded-full border-4 border-muted border-t-primary"
          />
        </div>
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-sm text-muted-foreground font-medium"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
};
