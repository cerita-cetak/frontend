"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SubNavbar from "./sub-navbar";
import useClickOutside from "@/hooks/click-outside";
import Button from "../atoms/button";
import { usePathname } from "next/navigation";
import cn from "classnames";
import { blocklist } from "@/libs/block-list-pathname";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const clickOutside = useClickOutside(() => setShow(false));
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(document.documentElement.scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "container sticky top-0 transition-all duration-300",
        blocklist.includes(pathname) && "hidden",
        isScroll && "bg-white shadow-md shadow-neutral-200",
      )}
    >
      {/* tablet above */}
      <nav className="hidden items-center justify-between gap-8 py-4 md:flex">
        <div className="flex items-center gap-5">
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
                ref={clickOutside}
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
        <Button navigate="/login" color="info" className="hidden md:block">
          Login
        </Button>
      </nav>

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
      <div className="relative">
        <SubNavbar show={show} />
      </div>
    </header>
  );
}
