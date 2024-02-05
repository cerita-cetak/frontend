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

import NavMobile from "../mollecules/button/nav-mobile";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useTheme } from "next-themes";
import DarkLight from "../atoms/button/dark-light";
import Image from "next/image";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const { theme } = useTheme();
  const [showNavMobile, setShowNavMobile] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const clickOutside = useClickOutside(() => setShow(false));
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(document.documentElement.scrollTop > 800);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 select-none bg-main-50 transition-all duration-500 dark:bg-main-950",
        blocklist.includes(pathname) && "hidden",
        isScroll ? "inset-x-0  shadow-sm shadow-main-50 " : "w-6/12 ",
      )}
    >
      {/* tablet above */}
      <nav className="container flex items-center justify-between gap-8 py-4">
        <div className="flex items-center gap-5">
          <Link
            href={"/"}
            className={cn(
              " aspect-square transition-all duration-300 ",
              isScroll ? "w-10" : "w-14",
            )}
            title="Cerita cetak"
          >
            <Image
              alt="logo"
              src={"/logo.png"}
              width={1000}
              height={1000}
              className="rounded-full shadow dark:bg-main-50"
            />
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

        <div className="flex items-center gap-3">
          <DarkLight />
          <Button navigate="/login" color="info" className="hidden md:block">
            Login
          </Button>
        </div>
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

      <div className=" relative hidden  md:block">
        <SubNavbar show={show} />
      </div>
    </header>
  );
}
