import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Title from "../atoms/title";
import Tagline from "../atoms/tag-line";
import Button from "../atoms/button/button";
import { fakerID_ID as faker } from "@faker-js/faker";

export default function HeaderHome() {
  return (
    <section
      id="header"
      className="container grid grid-cols-1 gap-8 md:h-[80vh] md:grid-cols-2"
    >
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
