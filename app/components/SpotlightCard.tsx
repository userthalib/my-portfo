"use client";
import { useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function SpotlightCard({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

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
      {/* Spotlight — purple / violet / cyan gradient */}
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