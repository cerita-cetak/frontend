import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Title from "../../atoms/title";
import Tagline from "../../atoms/tag-line";
import Button from "../../atoms/button/button";
import { fakerID_ID as faker } from "@faker-js/faker";
import Image from "next/image";

export default function HeaderHome() {
  return (
    <section
      id="header"
      className="grid h-[800px] grid-cols-1 gap-8 overflow-hidden md:grid-cols-2"
    >
      <div className="space-y-4 py-64  md:space-y-8 md:px-8">
        <Title title="Discover Beautiful Invitation Themes for Every Occasion" />
        <Tagline tagline="Create personalized invitations effortlessly with our wide range of free themes and event packages." />
        <Button>Get Started</Button>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div id="left-header" className="space-y-3">
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
        <div id="right-header" className="space-y-3">
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
      </div>
    </section>
  );
}

function PortfolioCard() {
  return (
    <div className="relative w-full bg-slate-300">
      <div className="absolute right-2 top-2 rounded-full bg-main-50 p-1 text-xs font-medium">
        Wedding
      </div>
      <Image
        src={"https://picsum.photos/200"}
        alt="image"
        width={1000}
        height={1000}
        className="rounded-md"
      />

      <div className="absolute inset-x-0 bottom-0 p-3 text-main-50">
        <p className="font-medium">Nama a dan Nama b</p>
        <small>Tanggal acara</small>
      </div>
    </div>
  );
}
