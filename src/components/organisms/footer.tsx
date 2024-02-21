"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import cn from "classnames";
import { blocklist } from "@/libs/list-pathname";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      id="footer"
      className={cn(
        "container py-20",
        blocklist.includes(pathname) && "hidden",
      )}
    >
      <div className="flex flex-col items-center justify-between gap-8 py-10 md:flex-row md:items-center">
        <div className="text-2xl font-semibold">Logo</div>
        <ul className="flex items-center gap-3">
          <li className="font-medium">
            <Link href={"/"}>About</Link>
          </li>
          <li className="font-medium">
            <Link href={"/"}>Contact us</Link>
          </li>
          <li className="font-medium">
            <Link href={"/"}>FAQs</Link>
          </li>
          <li className="font-medium">
            <Link href={"/"}>Support</Link>
          </li>
          <li className="font-medium">
            <Link href={"/"}>Blog</Link>
          </li>
        </ul>
        <ul className="flex items-center gap-3">
          <li>
            <i>
              <FaInstagram />
            </i>
          </li>
          <li>
            <i>
              <FaFacebook />
            </i>
          </li>
          <li>
            <i>
              <FaTiktok />
            </i>
          </li>
          <li>
            <i>
              <FaLinkedin />
            </i>
          </li>
          <li>
            <i>
              <FaYoutube />
            </i>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 border-t border-black py-4 md:flex-row">
        <small>© 2023 Cerita Cetak. All rights reserved.</small>
        <small>Privacy Policy</small>
        <small>Terms of Service</small>
      </div>
    </footer>
  );
}
