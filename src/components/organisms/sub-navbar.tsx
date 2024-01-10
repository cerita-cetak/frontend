"use client";

import React from "react";
import cn from "classnames";
import { BiSolidParty } from "react-icons/bi";
import Link from "next/link";
// import { fakerID_ID as faker } from "@faker-js/faker";

export default function SubNavbar({ show }: { show?: boolean }) {
  return (
    <div
      className={cn(
        "absolute inset-x-0 left-0 top-0 flex translate-y-16 justify-between overflow-hidden rounded-b-md bg-white shadow-md transition-all duration-500",
        show ? "max-h-[1000px]" : "max-h-0",
      )}
      id="sub-navbar"
    >
      <div className="flex-1">
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
      </div>
      <div className="w-6/12 shrink-0 space-y-3 bg-slate-100 p-4">
        <p className="font-medium">Get Inspired from Blog</p>
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
              soluta iusto inventore nesciunt laudantium fugiat rerum impedit.
              Odit delectus laboriosam nulla? Placeat ea illo molestiae? Enim,
              ad facere! Quisquam, perspiciatis.
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
              soluta iusto inventore nesciunt laudantium fugiat rerum impedit.
              Odit delectus laboriosam nulla? Placeat ea illo molestiae? Enim,
              ad facere! Quisquam, perspiciatis.
            </small>
          </div>
        </div>

        <Link href={"#"} className="block text-sm underline underline-offset-4">
          Explore All Article
        </Link>
      </div>
    </div>
  );
}
