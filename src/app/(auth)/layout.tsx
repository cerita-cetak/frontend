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
      {children}
    </main>
  );
}
