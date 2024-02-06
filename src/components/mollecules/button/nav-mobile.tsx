"use client";

import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import cn from "classnames";
import useClickOutside from "@/hooks/click-outside";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { BiSolidParty } from "react-icons/bi";

type tNavMobile = {
  open?: boolean;
  onClickOutSide: () => void;
  // onHover: () => void;
  // onLeft: () => void;
};

export default function NavMobile({
  open,
  onClickOutSide,
  // onHover,
  // onLeft,
}: tNavMobile) {
  const [show, setShow] = useState(true);
  const element = useClickOutside(onClickOutSide);

  return (
    <nav
      // onMouseLeave={() => onLeft()}
      // onMouseOver={() => onHover()}
      className={cn(
        "fixed inset-0 flex overflow-hidden bg-black/50 backdrop-blur-sm transition-all duration-300 dark:bg-main-900/50 md:hidden",
        open ? "max-w-[100%]" : "max-w-[0%]",
      )}
    >
      <div
        className="relative h-full w-10/12 bg-white p-8 dark:bg-main-950"
        ref={element}
      >
        {/* <button className="absolute right-8 top-3" onClick={onClickOutSide}>
          <i className="text-xl">
            <IoClose />
          </i>
        </button> */}
        <ul className="space-y-3 md:hidden">
          <li>
            <Link href={"#"} className="font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link href={"#service"} className="font-semibold">
              Services
            </Link>
          </li>
          <li>
            <Link href={"#pricing"} className="font-semibold">
              Pricing
            </Link>
          </li>
          <li>
            <button
              className="flex items-center gap-5"
              onClick={() => setShow(!show)}
            >
              <p className="font-semibold">Events</p>
              <i
                className={cn(
                  "transition-all duration-300",
                  !show && "-rotate-90",
                )}
              >
                <IoIosArrowDown />
              </i>
            </button>
          </li>
        </ul>
        <div
          className={cn(
            "my-3 overflow-hidden transition-all duration-300",
            show ? "max-h-[1000px]" : "max-h-[0px]",
          )}
        >
          <div className="grid grid-cols-2 gap-3 p-4">
            <div className="flex items-start gap-3">
              <i className="text-xl">
                <BiSolidParty />
              </i>
              <div className="flex flex-col">
                <Link href={"#"} className="font-medium">
                  Event name
                </Link>
                <small>some text here</small>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="text-xl">
                <BiSolidParty />
              </i>
              <div className="flex flex-col">
                <Link href={"#"} className="font-medium">
                  Event name
                </Link>
                <small>some text here</small>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="text-xl">
                <BiSolidParty />
              </i>
              <div className="flex flex-col">
                <Link href={"#"} className="font-medium">
                  Event name
                </Link>
                <small>some text here</small>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="text-xl">
                <BiSolidParty />
              </i>
              <div className="flex flex-col">
                <Link href={"#"} className="font-medium">
                  Event name
                </Link>
                <small>some text here</small>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Get Inspired from Blog</p>
            <div className="space-y-3">
              <div className="flex cursor-pointer gap-3 hover:bg-slate-200">
                <picture>
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="aspect-video w-28 shrink-0"
                  />
                </picture>
                <div className="flex-1">
                  <p className="font-medium capitalize">judul article</p>
                  <small className="line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    soluta iusto inventore nesciunt laudantium fugiat rerum
                    impedit. Odit delectus laboriosam nulla? Placeat ea illo
                    molestiae? Enim, ad facere! Quisquam, perspiciatis.
                  </small>
                </div>
              </div>
              <div className="flex cursor-pointer gap-3 hover:bg-slate-200">
                <picture>
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="aspect-video w-28 shrink-0"
                  />
                </picture>
                <div className="flex-1">
                  <p className="font-medium capitalize">judul article</p>
                  <small className="line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    soluta iusto inventore nesciunt laudantium fugiat rerum
                    impedit. Odit delectus laboriosam nulla? Placeat ea illo
                    molestiae? Enim, ad facere! Quisquam, perspiciatis.
                  </small>
                </div>
              </div>
              <div className="flex cursor-pointer gap-3 hover:bg-slate-200">
                <picture>
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="aspect-video w-28 shrink-0"
                  />
                </picture>
                <div className="flex-1">
                  <p className="font-medium capitalize">judul article</p>
                  <small className="line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    soluta iusto inventore nesciunt laudantium fugiat rerum
                    impedit. Odit delectus laboriosam nulla? Placeat ea illo
                    molestiae? Enim, ad facere! Quisquam, perspiciatis.
                  </small>
                </div>
              </div>
            </div>
            <Link
              href={"#"}
              className="block text-sm underline underline-offset-4"
            >
              Explore All Article
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
