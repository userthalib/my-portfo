"use client";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * ProgressBar Component
 * 
 * Renders a thin, responsive, and animated indicator line at the top edge of the browser tab,
 * demonstrating vertical scroll progression across the page layout.
 *
 * Performance Features:
 * - Uses Framer Motion's `useScroll` hook to read device scrolling values without triggering React render cycles on every scroll event.
 * - Utilizes `useSpring` to smooth out acceleration and decelerations of browser mouse scrolls, mitigating jumpy layout jumps.
 */
export default function ProgressBar() {
  // Capture scroll progress as a motion value decimal between 0 and 1.
  const { scrollYProgress } = useScroll();
  
  // Apply spring physics configurations to make changes to progress bar width feel elastic and fluid.
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 origin-left z-[100]"
      style={{ scaleX }}
    />
  );
}