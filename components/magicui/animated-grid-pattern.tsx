"use client";

import { motion } from "motion/react";
import {
  ComponentPropsWithoutRef,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

export interface AnimatedGridPatternProps
  extends ComponentPropsWithoutRef<"svg"> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: string | number; // Fix: Replace 'any' with specific types
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
}

interface Square {
  id: number;
  pos: [number, number];
}

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5, // This is now used in the component
  ...props
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement>(null); // Fix: Add proper type
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Fix: Move getPos inside useCallback to include it in dependencies
  const getPos = useCallback((): [number, number] => {
    return [
      Math.floor((Math.random() * dimensions.width) / width),
      Math.floor((Math.random() * dimensions.height) / height),
    ];
  }, [dimensions.width, dimensions.height, width, height]);

  // Fix: Move generateSquares inside useCallback
  const generateSquares = useCallback((count: number): Square[] => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: getPos(),
    }));
  }, [getPos]);

  const [squares, setSquares] = useState<Square[]>(() => []);

  // Function to update a single square's position
  const updateSquarePosition = useCallback((id: number) => {
    setSquares((currentSquares) =>
      currentSquares.map((sq) =>
        sq.id === id
          ? {
              ...sq,
              pos: getPos(),
            }
          : sq,
      ),
    );
  }, [getPos]);

  // Update squares to animate in
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares));
    }
  }, [dimensions, numSquares, generateSquares]); // Fix: Add generateSquares to dependencies

  // Resize observer to update container dimensions
  useEffect(() => {
    const currentContainer = containerRef.current; // Fix: Store ref value to avoid stale closure
    
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) { // Fix: Use 'const' instead of 'let'
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (currentContainer) {
      resizeObserver.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        resizeObserver.unobserve(currentContainer);
      }
    };
  }, []); // Fix: Remove containerRef from dependencies

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos: [x, y], id }, index) => (
          <motion.rect
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              repeat: 1,
              delay: index * repeatDelay, // Fix: Now using repeatDelay
              repeatType: "reverse",
            }}
            onAnimationComplete={() => updateSquarePosition(id)}
            key={`${x}-${y}-${index}`}
            width={width - 1}
            height={height - 1}
            x={x * width + 1}
            y={y * height + 1}
            fill="currentColor"
            strokeWidth="0"
          />
        ))}
      </svg>
    </svg>
  );
}