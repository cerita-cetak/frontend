import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" container py-20">
      <div className="flex items-center justify-between py-10">
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

      <div className="flex items-center justify-center gap-3 border-t border-black py-4">
        <small>© 2023 Cerita Cetak. All rights reserved.</small>
        <small>Privacy Policy</small>
        <small>Terms of Service</small>
        <small>Cookie Settings</small>
      </div>
    </footer>
  );
}
