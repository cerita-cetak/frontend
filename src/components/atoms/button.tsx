"use client";

import { useRouter } from "next/navigation";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import cn from "classnames";

interface tButton
  extends Pick<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "children" | "id" | "disabled" | "type" | "hidden" | "style"
  > {
  variant?: "contained" | "text" | "outlined" | "text-only";
  navigate?: string;
  size?: "S" | "M" | "L" | "XL";
  width?: "full" | "fit";
  color?:
    | "success"
    | "warning"
    | "danger"
    | "disabled"
    | "info"
    | "white"
    | "black";
  roundedfull?: boolean;
}

export default function Button({
  variant = "contained",
  navigate = "#",
  size = "M",
  color = "black",
  roundedfull,
  width = "fit",
  ...props
}: tButton) {
  const { push } = useRouter();

  const variants = cn({
    /* ------------------------------- CONTAINEED ------------------------------- */
    // success
    // warning
    // danger
    // disabled
    // info
    "bg-black text-white active:bg-black/80": variant == "contained", //black
    // white

    /* -------------------------------- OUTLINED -------------------------------- */

    // success
    // warning
    // danger
    // disabled
    // info
    "text-black border border-black hover:bg-black hover:text-white active:bg-black/80":
      variant == "outlined" && color == "black", //black

    "text-white border border-white hover:bg-white hover:text-black active:bg-white/80":
      variant == "outlined" && color == "white", //white

    /* ---------------------------------- TEXT ---------------------------------- */
    // success
    // warning
    // danger
    // disabled
    // info
    // black
    // white
  });

  const sizes = cn({
    "p-0": variant == "text-only",
    "px-4 py-2": size == "M",
  });

  return (
    <button
      {...props}
      onClick={() => push(navigate)}
      className={cn(
        "transition-all duration-300",
        roundedfull ? "rounded-full" : "rounded-md",
        width == "fit" ? "w-fit" : "w-full",
        variants,
        sizes,
      )}
    >
      {props.children}
    </button>
  );
}
