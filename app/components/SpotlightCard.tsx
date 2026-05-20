"use client";
import { useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

/**
 * SpotlightCard Component
 * 
 * Implements a card element with a mouse-tracking radial gradient "spotlight" highlight effect.
 * The spotlight follows the user's cursor while it hovers over the card, mimicking modern dashboard interfaces.
 * 
 * Mechanics:
 * 1. Uses a `useRef` to target the card's outer DOM element.
 * 2. Monitors mouse movements via `onMouseMove` handler.
 * 3. Computes the cursor's relative coordinates `(x, y)` inside the card boundaries using `getBoundingClientRect()`.
 * 4. Animates spotlight visibility dynamically with `onMouseEnter` (fade in) and `onMouseLeave` (fade out).
 */
export default function SpotlightCard({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track cursor position inside the card coordinate frame
  const [pos, setPos] = useState({ x: 0, y: 0 });
  
  // Opacity controls spotlight visibility (fade-in/out on hover)
  const [opacity, setOpacity] = useState(0);

  /**
   * Calculates local cursor coordinates relative to the card's top-left corner.
   */
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-3xl card-base ${className}`}
    >
      {/* Spotlight overlay layer
          Radial gradient centered at {pos.x} and {pos.y} using purple, violet, and cyan tint combinations. */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(700px circle at ${pos.x}px ${pos.y}px,
            rgba(168, 85, 247, 0.12),
            rgba(124, 58, 237, 0.08),
            rgba(6, 182, 212, 0.05),
            transparent 55%)`,
        }}
      />
      {children}
    </div>
  );
}