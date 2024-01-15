import React, { ReactNode } from "react";
import { fakerID_ID as faker } from "@faker-js/faker";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="h-screen justify-between lg:flex">
      <section
        className="hidden w-4/12 shrink-0 bg-cover bg-no-repeat lg:block"
        style={{
          backgroundImage: `url(${faker.image.urlLoremFlickr({
            category: "flora",
          })})`,
        }}
      ></section>
      <section className="relative mx-auto grid h-screen flex-1 grid-cols-1 content-center bg-gray-200">
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
        <div className="mx-auto w-11/12 md:w-5/12">{children}</div>
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center gap-1 py-4 md:bottom-5 md:flex-row md:gap-3">
          <small>© 2023 Cerita Cetak. All rights reserved.</small>
          <small>Privacy Policy</small>
          <small>Terms of Service</small>
        </div>
      </section>
    </main>
  );
}
