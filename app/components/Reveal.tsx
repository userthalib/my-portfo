"use client";
import { motion } from "framer-motion";

/**
 * Reveal Component
 * 
 * A reusable container component that uses framer-motion to create an elegant fade-in 
 * and slide-up transition when elements enter the user's viewport.
 * 
 * Features:
 * - `whileInView`: Triggers transition automatically as the user scrolls.
 * - `viewport: { once: true }`: Ensures animations run only once during page session.
 * 
 * @param children - Child components or DOM elements to animate.
 */
export default function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}