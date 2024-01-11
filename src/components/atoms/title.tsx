import React from "react";

export default function Title({ title }: { title: string }) {
  return <h2 className="text-4xl font-bold">{title}</h2>;
}
