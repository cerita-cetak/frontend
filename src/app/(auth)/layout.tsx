import React, { ReactNode } from "react";
import { fakerID_ID as faker } from "@faker-js/faker";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-screen justify-between">
      <section
        className="w-4/12 shrink-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${faker.image.urlLoremFlickr({
            category: "flora",
          })})`,
        }}
      ></section>
      <section className="relative mx-auto grid flex-1 grid-cols-1 content-center bg-gray-200">
        <div className="absolute right-5 top-5 flex items-center gap-3">
          <p className="text-lg font-medium text-slate-500">
            {faker.company.name()}
          </p>
          <picture>
            <img
              src={faker.image.urlLoremFlickr({ category: "company" })}
              alt=""
              className="aspect-video w-10 rounded-md"
            />
          </picture>
        </div>
        <div className="mx-auto w-5/12">{children}</div>
      </section>
    </main>
  );
}
