import Button from "@/components/atoms/button/button";
import React from "react";

export default function Page() {
  return (
    <main className="container space-y-8">
      <section className="h-52 w-full bg-neutral-400">Ads card</section>
      <section className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <EventOptions />
          <div>colors</div>
        </div>
        <div>Search field</div>
      </section>
    </main>
  );
}

function EventOptions() {
  return (
    <div className="relative">
      <Button variant="outlined">Events</Button>
    </div>
  );
}
