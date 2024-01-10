"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SubNavbar from "./sub-navbar";
import useClickOutside from "@/hooks/click-outside";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const ref = useClickOutside(() => setShow(false));

  return (
    <header className="relative flex items-center justify-between py-4">
      <div className="flex items-center gap-8">
        <Link href={"/"} className="text-2xl font-bold">
          Logo
        </Link>
        <ul className="flex items-center gap-4">
          <li>
            <Link href={"#"}>Home</Link>
          </li>
          <li>
            <Link href={"#"}>About us</Link>
          </li>
          <li>
            <Link href={"#"}>Services</Link>
          </li>
          <li>
            <button
              ref={ref}
              className="group/event flex items-center gap-3"
              onClick={() => setShow(!show)}
            >
              <p>Events</p>
              <i>
                <IoIosArrowDown />
              </i>
            </button>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <button className="rounded-sm border border-black px-4 py-1">
          Sign Up
        </button>
        <button className="rounded-sm bg-black px-4 py-1 text-white">
          Login
        </button>
      </div>
      <SubNavbar show={show} />
    </header>
  );
}
