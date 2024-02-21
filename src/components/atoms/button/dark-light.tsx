"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import cn from "classnames";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

export default function DarkLight() {
  const { setTheme, theme } = useTheme();
  const [myTheme, setMyTheme] = useState<string>();

  useEffect(() => {
    setMyTheme(theme == "system" ? "dark" : theme);

    // console.log("needs ", theme);
  }, [theme]);

  return (
    <div
      className={cn(
        "relative w-[50px] rounded-full p-1  transition-all duration-500",
        myTheme == "dark" ? "bg-black" : "bg-neutral-700",
      )}
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
    >
      <div
        className={cn(
          "absolute top-[2px] aspect-square w-[40%] rounded-full border-2 bg-white transition-all duration-300 dark:bg-white",
          myTheme == "dark" ? "translate-x-6" : "-translate-x-[2px]",
        )}
      />
      <div className="flex w-full items-center justify-between">
        <i className="text-yellow-500">
          <RiMoonClearFill />
        </i>

        <i className="text-yellow-500">
          <RiSunFill />
        </i>
      </div>
    </div>
  );
}
