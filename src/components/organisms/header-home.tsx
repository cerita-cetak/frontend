import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Title from "../atoms/title";
import Tagline from "../atoms/tag-line";
import Button from "../atoms/button/button";
import { fakerID_ID as faker } from "@faker-js/faker";
import Image from "next/image";

export default function HeaderHome() {
  return (
    <section
      id="header"
      className="container grid grid-cols-1 gap-8 bg-[url('/images/header-bg.jpg')] bg-no-repeat object-cover md:h-screen md:grid-cols-2"
    >
      {/* <div className="absolute left-8 top-5 flex items-center gap-3">
        <Image
          alt="logo"
          src={"/logo.png"}
          width={50}
          height={50}
          className="rounded-full shadow dark:bg-white"
        />
        <p>Cerita cetak</p>
      </div> */}
      <div className="space-y-4 self-center md:space-y-8 md:px-8">
        <Title title="Discover Beautiful Invitation Themes for Every Occasion" />
        <Tagline tagline="Create personalized invitations effortlessly with our wide range of free themes and event packages." />
        <Button>Get Started</Button>
      </div>
      <div className="columns-3 space-x-6 overflow-hidden bg-slate-200 md:columns-2">
        <picture>
          <img
            src={faker.image.urlLoremFlickr({ category: "party" })}
            alt=""
            className="aspect-video h-28 w-full"
          />
        </picture>
        <picture>
          <img
            src={faker.image.urlLoremFlickr({ category: "party" })}
            alt=""
            className="aspect-video h-64"
          />
        </picture>
        <picture>
          <img
            src={faker.image.urlLoremFlickr({ category: "party" })}
            alt=""
            className="aspect-video h-64"
          />
        </picture>
        <picture>
          <img
            src={faker.image.urlLoremFlickr({ category: "party" })}
            alt=""
            className="aspect-video h-28 w-full"
          />
        </picture>
        <picture>
          <img
            src={faker.image.urlLoremFlickr({ category: "party" })}
            alt=""
            className="aspect-video h-28 w-full"
          />
        </picture>
        <picture>
          <img
            src={faker.image.urlLoremFlickr({ category: "party" })}
            alt=""
            className="aspect-video h-64"
          />
        </picture>
      </div>
    </section>
  );
}
