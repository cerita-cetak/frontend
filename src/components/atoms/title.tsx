import React from "react";

export default function Title({ title }: { title: string }) {
  return (
    <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">{title}</h2>
  );
}
