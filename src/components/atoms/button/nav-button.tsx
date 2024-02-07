"use client";

import { tButtonNav } from "@/types/button";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import cn from "classnames";
import Link from "next/link";

export default function NavButton({
  navigate = "#",
  name,
  ...props
}: tButtonNav) {
  const { push } = useRouter();
  const pathname = usePathname();
  return (
    <Link
      href={"#"}
      className={cn(
        " hover:text-text-500 dark:text-text-50 dark:hover:text-text-500",
        pathname == "/" ? "text-text-500" : "text-text-950",
      )}
    >
      Home
    </Link>
  );
}
