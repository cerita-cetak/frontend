// !halaman ini akan menggunakan invinite scroll

import Button from "@/components/atoms/button/button";
import Template from "@/components/atoms/card/template";
import Input from "@/components/atoms/form/input";
import React from "react";

export default function Page() {
  return (
    <main className="container space-y-8">
      <section className="h-52 w-full bg-neutral-400">Ads card</section>
      {/* navigations */}
      <section className="sticky top-[72px] z-10 flex items-center justify-between gap-3 bg-main-50 py-2 dark:bg-main-950">
        <div className="flex items-center gap-3">
          <EventOptions />
          <div>colors</div>
        </div>
        <Input placeholder="Search" type="search" />
      </section>

      {/* content */}
      <section className="grid grid-cols-4 gap-4">
        <Template
          event="event name"
          id=""
          image="https://picsum.photos/200"
          name="template name"
        />
        <Template
          event="event name"
          id=""
          image="https://picsum.photos/200"
          name="template name"
        />
        <Template
          event="event name"
          id=""
          image="https://picsum.photos/200"
          name="template name"
        />
        <Template
          event="event name"
          id=""
          image="https://picsum.photos/200"
          name="template name"
        />
        <Template
          event="event name"
          id=""
          image="https://picsum.photos/200"
          name="template name"
        />
        <Template
          event="event name"
          id=""
          image="https://picsum.photos/200"
          name="template name"
        />
        <Template
          event="event name"
          id=""
          image="https://picsum.photos/200"
          name="template name"
        />
        <Template
          event="event name"
          id=""
          image="https://picsum.photos/200"
          name="template name"
        />
        <Template
          event="event name"
          id=""
          image="https://picsum.photos/200"
          name="template name"
        />
        <Template
          event="event name"
          id=""
          image="https://picsum.photos/200"
          name="template name"
        />
        <Template
          event="event name"
          id=""
          image="https://picsum.photos/200"
          name="template name"
        />
        <Template
          event="event name"
          id=""
          image="https://picsum.photos/200"
          name="template name"
        />
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
