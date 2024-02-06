import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import cn from "classnames";

type tNavBtn = {
  onHover: () => void;
  onLeft: () => void;
};

export default function NavBtn({ onHover, onLeft }: tNavBtn) {
  const [show, setShow] = useState(false);
  const className = cn(
    "text-text-950 hover:text-text-500 dark:text-text-50 dark:hover:text-text-500",
  );
  return (
    <ul className="hidden items-center gap-4 font-medium md:flex">
      <li>
        <Link href={"#"} className={className}>
          Home
        </Link>
      </li>
      <li>
        <Link href={"#service"} className={className}>
          Services
        </Link>
      </li>
      <li>
        <Link href={"#pricing"} className={className}>
          Pricing
        </Link>
      </li>
      <li>
        <button
          className={cn(className, "group/event flex items-center gap-3")}
          onMouseOver={() => onHover()}
          onMouseLeave={() => onLeft()}
        >
          <p>Events</p>
          <i className="transition-all duration-300 group-hover/event:rotate-180">
            <IoIosArrowDown />
          </i>
        </button>
      </li>
    </ul>
  );
}
