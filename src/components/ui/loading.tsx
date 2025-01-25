import { motion } from "framer-motion";

export function Loading() {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-black/80 p-8 rounded-lg flex flex-col items-center gap-4"
      >
        <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-white font-medium">Loading...</p>
      </motion.div>
    </div>
  );
} 