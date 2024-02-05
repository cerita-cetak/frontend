"use client";

import { useRouter } from "next/navigation";
import cn from "classnames";
import { tButton } from "@/types/button";

export default function Button({
  variant = "contained",
  navigate = "#",
  size = "M",
  color = "primary",
  roundedfull,
  width = "fit",
  className,
  shadow,
  ...props
}: tButton) {
  const { push } = useRouter();

  const variants = cn({
    /* ------------------------------- CONTAINEED ------------------------------- */

    "dark:bg-primary-10 dark:active:bg-primary-9 dark:text-black":
      variant == "contained" && color == "success", // success
    "bg-amber-500 text-white active:bg-amber-600":
      variant == "contained" && color == "warning", // warning
    "bg-rose-500 text-white active:bg-rose-600":
      variant == "contained" && color == "danger", // danger
    "bg-accent-800 text-white dark:bg-accent-600":
      variant == "contained" && color == "info", // info
    "bg-primary-500 text-black shadow-lg hover:shadow-primary-300 active:bg-primary-600":
      variant == "contained" && color == "primary", //primary
    "bg-secondary-100 shadow-lg hover:shadow-secondary-100 active:bg-secondary-200 dark:bg-secondary-800 dark:hover:shadow-secondary-800":
      variant == "contained" && color == "secondary", //secondary
    "bg-black shadow-lg hover:shadow-black active:bg-secondary-200 ":
      variant == "contained" && color == "black", //black

    /* -------------------------------- OUTLINED -------------------------------- */

    "border border-neutral-500 text-black hover:border-neutral-600 active:scale-95":
      variant == "outlined" && !color, // default
    "border border-emerald-500 text-emerald-500 hover:border-emerald-600 hover:text-emerald-600 active:scale-95":
      variant == "outlined" && color == "success", // success
    "border border-amber-500 text-amber-500 hover:border-amber-600 hover:text-amber-600 active:scale-95":
      variant == "outlined" && color == "warning", // warning
    "border border-rose-500 text-rose-500 hover:border-rose-600 hover:text-rose-600 active:scale-95":
      variant == "outlined" && color == "danger", // danger

    "border border-teal-500 text-teal-500 hover:border-teal-600 hover:text-teal-600 active:scale-95":
      variant == "outlined" && color == "info", // info

    /* ---------------------------------- TEXT ---------------------------------- */
    "bg-none text-emerald-500 hover:text-emerald-600 active:scale-95":
      variant == "text" && color == "success", // success
    "bg-none text-amber-500 hover:text-amber-600 active:scale-95":
      variant == "text" && color == "warning", // warning
    "bg-none text-rose-500 hover:text-rose-600 active:scale-95":
      variant == "text" && color == "danger", // danger
    "bg-none text-teal-500 hover:text-teal-600 active:scale-95":
      variant == "text" && color == "info", // info
    "bg-none text-black hover:text-black active:scale-95":
      variant == "text" && !color, // black

    /* -------------------------------- TEXT ONLY ------------------------------- */
    "bg-none text-black": variant == "text-only",
  });

  const sizes = cn({
    "p-0": variant == "text-only",
    "px-4 py-2": size == "M",
  });

  const shadows = cn({
    "shadow-md": shadow == "M",
    "shadow-sm": shadow == "S",
    "shadow-lg": shadow == "L",
    "shadow-xl": shadow == "XL",
  });

  return (
    <button
      {...props}
      onClick={() => push(navigate)}
      className={cn(
        "transition-all duration-300 hover:scale-105 active:scale-100",
        roundedfull ? "rounded-full" : "rounded-md",
        width == "fit" ? "w-fit" : "w-full",
        variants,
        sizes,
        className,
        shadows,
      )}
    >
      {props.children}
    </button>
  );
}
