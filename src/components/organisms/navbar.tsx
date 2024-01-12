"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SubNavbar from "./sub-navbar";
import useClickOutside from "@/hooks/click-outside";
import Button from "../atoms/button";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const ref = useClickOutside(() => setShow(false));

  return (
    <header className="container relative flex items-center justify-between py-4">
      {/* tablet above */}
      <div className="hidden items-center gap-8 md:flex">
        <Link href={"/"} className="text-2xl font-bold">
          Logo
        </Link>
        <ul className="flex items-center gap-4">
          <li>
            <Link href={"#"}>Home</Link>
          </li>
          <li>
            <Link href={"#service"}>Services</Link>
          </li>
          <li>
            <Link href={"#pricing"}>Pricing</Link>
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
      <div className="hidden md:block">
        <Button>Login</Button>
      </div>

      {/* mobile */}
      <nav className="container fixed inset-x-0 bottom-3 md:hidden">
        <div className="rounded-md bg-slate-200 p-3 shadow-sm">
          <ul className="flex items-center justify-between gap-2 ">
            <li>Home</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Events</li>
          </ul>
        </div>
      </nav>
      <SubNavbar show={show} />
    </header>
  );
}
