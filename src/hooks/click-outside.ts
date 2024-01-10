"use client";

import { useEffect, useRef } from "react";

export default function useClickOutside(cb: () => void) {
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        cb();
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [cb]);

  return ref;
}
