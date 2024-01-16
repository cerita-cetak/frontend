"use client";

import { useEffect, useState } from "react";

export default function useIntersectionObserver(
  id: string,
  options: IntersectionObserverInit | undefined,
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options,
    );

    const element = document.querySelector(id);

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [id, options]);

  return inView;
}
