import React from "react";
import Button from "../button/button";

type tPricingCard = {
  id: string;
  label: string;
  slogan: string;
  price: number;
  features: {
    feature: string;
  }[];
};

export default function Pricing({
  label,
  features,
  id,
  price,
  slogan,
}: tPricingCard) {
  return (
    <div className="space-y-10 rounded-md border border-black p-8">
      <div>
        <p className="text-2xl font-semibold">{label}</p>
        <small>{slogan}</small>
      </div>
      <div className="space-y-4">
        <p className="text-2xl font-bold">{price}</p>
        <Button width="full">Get Started</Button>
      </div>
      <ul className="list list-disc">
        {features.map(({ feature }, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}
