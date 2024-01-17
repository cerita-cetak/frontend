"use client";

import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import cn from "classnames";
import useClickOutside from "@/hooks/click-outside";

type tNavMobile = { open?: boolean; onClickOutSide: () => void };

export default function NavMobile({ open, onClickOutSide }: tNavMobile) {
  const element = useClickOutside(onClickOutSide);
  return (
    <nav
      className={cn(
        "md:black fixed inset-0 flex justify-end overflow-hidden bg-black/50 transition-all duration-300",
        !open && "hidden",
      )}
    >
      <div className="relative h-full w-10/12 bg-white p-8" ref={element}>
        <button className="absolute right-3 top-3" onClick={onClickOutSide}>
          <i>
            <IoClose />
          </i>
        </button>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
        quisquam repellendus porro maxime. Sapiente, cupiditate non tempora
        necessitatibus excepturi laborum a? Quidem omnis ipsam fugiat eligendi
        culpa! Dignissimos, expedita quasi.
      </div>
    </nav>
  );
}
