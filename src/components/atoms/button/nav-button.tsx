"use client";

import { tButtonNav } from "@/types/button";
import { useRouter } from "next/navigation";
import React from "react";
import { CiHome } from "react-icons/ci";
import cn from "classnames";

export default function NavButton({
  navigate = "#",
  name,
  ...props
}: tButtonNav) {
  const { push } = useRouter();
  return (
    <button
      {...props}
      onClick={() => push(navigate)}
      className={cn("flex flex-col items-center text-white", props.className)}
    >
      <i className="rounded-full bg-white p-1 text-2xl text-purple-800">
        <CiHome />
      </i>
      <small>{name}</small>
    </button>
  );
}
