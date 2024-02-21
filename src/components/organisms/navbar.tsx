"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import SubNavbar from "./sub-navbar";
import Button from "../atoms/button/button";
import { usePathname, useParams } from "next/navigation";
import cn from "classnames";
import { blocklist, conditionPathname } from "@/libs/list-pathname";
import NavMobile from "../mollecules/button/nav-mobile";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import DarkLight from "../atoms/button/dark-light";
import NavManus from "../mollecules/button/nav-menus";

export default function Navbar({ pathname }: { pathname: string }) {
  const [show, setShow] = useState(false);
  const [showNavMobile, setShowNavMobile] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const pn = usePathname();
  const params = useParams();

  // console.log(
  //   "needs pathname",
  //   conditionPathname.includes(pn),
  //   isScroll,
  //   pn
  // );

  useEffect(() => {
    if (conditionPathname.includes(pn)) {
      setIsScroll(true);
      return;
    }
    const handleScroll = () => {
      setIsScroll(document.documentElement.scrollTop > 800);
    };
    setIsScroll(document.documentElement.scrollTop > 800);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pn]);

  return (
    <header
      className={cn(
        !isScroll ? "fixed" : "sticky",
        "top-0 z-10 select-none bg-main-50 dark:bg-main-950",
        blocklist.includes(pn) && "hidden",
        !isScroll ? "w-6/12 " : "inset-x-0 ",
      )}
    >
      {/* tablet above */}
      <nav className="container flex items-center justify-between gap-8 py-4">
        <div className="flex items-center gap-5">
          <Link
            href={"/"}
            className={cn(
              "bg-[url('/logo-dark.svg')] bg-contain bg-no-repeat transition-all duration-300 dark:bg-[url('/logo-light.svg')]",
              isScroll ? "h-10 w-10" : "h-14 w-14",
            )}
            title="Cerita cetak"
          ></Link>
          <NavManus
            menus={[
              { href: "/", menu: "Home" },
              { href: "/#event", menu: "Events" },
              { href: "/template-theme", menu: "Tamplates" },
              { href: "/#pricing", menu: "Pricing" },
              { href: "/blog", menu: "Blog" },
            ]}
          />
        </div>

        <div className="flex items-center gap-3">
          <DarkLight />
          <Button
            navigate="/login"
            color="secondary"
            className="hidden md:block"
          >
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
        <SubNavbar
          show={show}
          onHover={() => setShow(true)}
          onLeft={() => setShow(false)}
        />
      </div>
    </header>
  );
}
