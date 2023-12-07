import Keyframe from "@/components/sample-framer-motion/keyframe";
import React, { ReactNode } from "react";

export default function Page() {
  return (
    <main className="container grid grid-cols-5 gap-3 pt-8">
      <Card title="keyframe">
        <Keyframe />
      </Card>
    </main>
  );
}

function Card({ children, title }: { children: ReactNode; title: string }) {
  return (
    <div className="border shadow-md rounded-lg">
      <div className="bg-slate-500 py-2 rounded-t-lg text-center text-white uppercase">
        {title}
      </div>
      <div className="p-2">{children}</div>
    </div>
  );
}
