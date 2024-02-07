import React from "react";
import Title from "../../atoms/title";
import Tagline from "../../atoms/tag-line";
import Button from "../../atoms/button/button";
import Portfolio from "@/components/atoms/card/portfolio";

export default function HeaderHome() {
  return (
    <section
      id="header"
      className="grid h-[800px] grid-cols-1 gap-8 overflow-hidden md:grid-cols-2"
    >
      <div className="space-y-4 py-64  md:space-y-8 md:px-8">
        <Title
          resetStyle
          className="text-6xl font-bold"
          title="Discover Beautiful Invitation Themes for Every Occasion"
        />
        <Tagline
          className="text-xl"
          tagline="Create personalized invitations effortlessly with our wide range of free themes and event packages."
        />
        <div className="space-x-3">
          <Button size="L">Get Started</Button>
          <Button size="L" color="secondary">
            Learn more
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div id="left-header" className="space-y-3">
          <Portfolio />
          <Portfolio />
          <Portfolio />
          <Portfolio />
        </div>
        <div id="right-header" className="space-y-3">
          <Portfolio />
          <Portfolio />
          <Portfolio />
          <Portfolio />
        </div>
      </div>
    </section>
  );
}
