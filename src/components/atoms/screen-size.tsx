"use client";

import React, { useEffect, useState } from "react";

export default function ScreenSize() {
  const [screen, setScreen] = useState(0);

  useEffect(() => {
    setScreen(window.innerWidth);
    window.addEventListener("resize", () => setScreen(window.innerWidth));

    return () =>
      window.removeEventListener("resize", () => setScreen(window.innerWidth));
  }, []);

  return (
    <div className="fixed bottom-5 right-5 rounded-full bg-green-500 px-3 py-1 text-white">
      {screen}
    </div>
  );
}
