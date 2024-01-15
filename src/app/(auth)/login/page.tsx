import React from "react";
import { fakerID_ID as faker } from "@faker-js/faker";
import FormLogin from "@/components/organisms/form/form-login";

export default function Page() {
  return (
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
      <div className="flex flex-col gap-3 p-8">
        <div>
          <p className="text-2xl font-medium"> Login</p>
          <small>Wellcome to Cerita Cetak</small>
        </div>
        <FormLogin />
      </div>
    </section>
  );
}
