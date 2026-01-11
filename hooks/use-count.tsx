"use client";
import { useEffect, useState } from "react";

interface UseCountProps {
  count: number;
  speed: number;
}

export const useCount = ({ count, speed }: UseCountProps) => {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    if (currentCount >= count) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentCount((prev) => {
        if (prev >= count) {
          return count;
        }
        
        // Dynamic step: increment by 10 if count is > 500, otherwise by 1
        const step = count > 500 ? 10 : 1;
        const nextValue = prev + step;
        
        // Don't overshoot the target
        return nextValue > count ? count : nextValue;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [currentCount, count, speed]);

  return currentCount;
};
