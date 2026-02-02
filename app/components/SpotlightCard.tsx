"use client";
import { useRef, useState } from "react";

export default function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition opacity-0 duration-300"
        style={{
          opacity,
          // UPDATED GRADIENT: A mix of blue, purple and teal
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}