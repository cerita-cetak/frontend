"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SubNavbar from "./sub-navbar";
import useClickOutside from "@/hooks/click-outside";
import Button from "../atoms/button/button";
import { usePathname } from "next/navigation";
import cn from "classnames";
import { blocklist } from "@/libs/block-list-pathname";
import NavButton from "../atoms/button/nav-button";
import NavMobile from "../mollecules/button/nav-mobile";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [showNavMobile, setShowNavMobile] = useState(false);
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
      <nav className="flex items-center justify-between gap-8 py-4">
        <div className="flex items-center gap-5">
          <Link href={"/"} className="text-2xl font-bold">
            Logo
          </Link>
          <ul className="hidden items-center gap-4 md:flex">
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
        <button
          className={cn(
            "transition-all duration-300 md:hidden",
            showNavMobile && "z-10 text-white",
          )}
          onClick={() => {
            setShowNavMobile(true);
            document.body.classList.add("overflow-hidden");
          }}
        >
          <i
            className={cn(
              "transition-all duration-300",
              showNavMobile && "text-xl",
            )}
          >
            {showNavMobile ? <IoClose /> : <MdOutlineMenu />}
          </i>
        </button>
      </nav>

      {/* mobile */}
      <NavMobile
        open={showNavMobile}
        onClickOutSide={() => {
          setShowNavMobile(false);
          document.body.classList.remove("overflow-hidden");
        }}
      />
      {/* <nav className="container fixed inset-x-0 bottom-3 md:hidden">
        <div className="rounded-lg bg-slate-800 p-3 shadow-sm">
          <ul className="flex items-center justify-between gap-2 ">
            <li>
              <NavButton name="Home" />
            </li>
            <li>
              <NavButton name="Services" />
            </li>
            <li>
              <NavButton name="Pricing" />
            </li>
            <li>
              <NavButton name="Events" />
            </li>
          </ul>
        </div>
      </nav> */}
      <div className="relative hidden md:block">
        <SubNavbar show={show} />
      </div>
    </header>
  );
}
