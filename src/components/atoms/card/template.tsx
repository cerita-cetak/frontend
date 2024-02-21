import React from "react";
import Image from "next/image";

type tTemplate = {
  id: string;
  image: string;
  name: string;
  event: string;
};

export default function Template({ event, id, image, name }: tTemplate) {
  return (
    <div className="group relative flex h-[420px] cursor-pointer flex-col items-center gap-3 overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
      {/* <div className="absolute h-full w-full bg-neutral-600/50 transition-colors delay-150 duration-300 group-hover:bg-neutral-600/0"></div> */}
      <Image
        alt="thumbnail template"
        src={image}
        width={1000}
        height={1000}
        className="h-full bg-cover"
      />

      <div className="absolute bottom-0 text-center text-white opacity-0 transition  delay-200 duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100">
        <p className="font-medium capitalize underline-offset-4 hover:underline">
          {name}
        </p>
        <small className="capitalize">{event}</small>
      </div>
    </div>
  );
}
