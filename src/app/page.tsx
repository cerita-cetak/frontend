import Button from "@/components/atoms/button/button";
import Tagline from "@/components/atoms/tag-line";
import Title from "@/components/atoms/title";
import HeaderHome from "@/components/organisms/home/header";
import { fakerID_ID as faker } from "@faker-js/faker";
import Image from "next/image";
import { BiSolidParty } from "react-icons/bi";

export default function Page() {
  return (
    <main className="space-y-20 md:space-y-28 lg:space-y-36">
      {/* header */}
      <HeaderHome />

      {/* Event list */}
      <section>event list</section>

      {/* product list */}
      <section className="container space-y-10" id="templates">
        <div className="flex flex-col items-center gap-4 text-center">
          <Title title="Products" />
          <Tagline tagline="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-3">
            <picture>
              <img
                src={faker.image.urlLoremFlickr({ category: "paper" })}
                alt=""
                className="aspect-video h-[200px]"
              />
            </picture>
            <div className="text-center">
              <p className="font-medium">{faker.commerce.productName()}</p>
              <small>{faker.commerce.product()}</small>
              <p>{faker.commerce.price()}</p>
            </div>
            <Button variant="outlined" width="full">
              Add to cart
            </Button>
          </div>
          <div className="flex flex-col items-center gap-3">
            <picture>
              <img
                src={faker.image.urlLoremFlickr({ category: "paper" })}
                alt=""
                className="aspect-video h-[200px]"
              />
            </picture>
            <div className="text-center">
              <p className="font-medium">{faker.commerce.productName()}</p>
              <small>{faker.commerce.product()}</small>
              <p>{faker.commerce.price()}</p>
            </div>
            <Button variant="outlined" width="full">
              Add to cart
            </Button>
          </div>
          <div className="flex flex-col items-center gap-3">
            <picture>
              <img
                src={faker.image.urlLoremFlickr({ category: "paper" })}
                alt=""
                className="aspect-video h-[200px]"
              />
            </picture>
            <div className="text-center">
              <p className="font-medium">{faker.commerce.productName()}</p>
              <small>{faker.commerce.product()}</small>
              <p>{faker.commerce.price()}</p>
            </div>
            <Button variant="outlined" width="full">
              Add to cart
            </Button>
          </div>
          <div className="flex flex-col items-center gap-3">
            <picture>
              <img
                src={faker.image.urlLoremFlickr({ category: "paper" })}
                alt=""
                className="aspect-video h-[200px]"
              />
            </picture>
            <div className="text-center">
              <p className="font-medium">{faker.commerce.productName()}</p>
              <small>{faker.commerce.product()}</small>
              <p>{faker.commerce.price()}</p>
            </div>
            <Button variant="outlined" width="full">
              Add to cart
            </Button>
          </div>
          <div className="flex flex-col items-center gap-3">
            <picture>
              <img
                src={faker.image.urlLoremFlickr({ category: "paper" })}
                alt=""
                className="aspect-video h-[200px]"
              />
            </picture>
            <div className="text-center">
              <p className="font-medium">{faker.commerce.productName()}</p>
              <small>{faker.commerce.product()}</small>
              <p>{faker.commerce.price()}</p>
            </div>
            <Button variant="outlined" width="full">
              Add to cart
            </Button>
          </div>
          <div className="flex flex-col items-center gap-3">
            <picture>
              <img
                src={faker.image.urlLoremFlickr({ category: "paper" })}
                alt=""
                className="aspect-video h-[200px]"
              />
            </picture>
            <div className="text-center">
              <p className="font-medium">{faker.commerce.productName()}</p>
              <small>{faker.commerce.product()}</small>
              <p>{faker.commerce.price()}</p>
            </div>
            <Button variant="outlined" width="full">
              Add to cart
            </Button>
          </div>
          <div className="flex flex-col items-center gap-3">
            <picture>
              <img
                src={faker.image.urlLoremFlickr({ category: "paper" })}
                alt=""
                className="aspect-video h-[200px]"
              />
            </picture>
            <div className="text-center">
              <p className="font-medium">{faker.commerce.productName()}</p>
              <small>{faker.commerce.product()}</small>
              <p>{faker.commerce.price()}</p>
            </div>
            <Button variant="outlined" width="full">
              Add to cart
            </Button>
          </div>
          <div className="flex flex-col items-center gap-3">
            <picture>
              <img
                src={faker.image.urlLoremFlickr({ category: "paper" })}
                alt=""
                className="aspect-video h-[200px]"
              />
            </picture>
            <div className="text-center">
              <p className="font-medium">{faker.commerce.productName()}</p>
              <small>{faker.commerce.product()}</small>
              <p>{faker.commerce.price()}</p>
            </div>
            <Button variant="outlined" width="full">
              Add to cart
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Button>View all</Button>
        </div>
      </section>

      {/* pricing */}
      <section className="container space-y-10" id="pricing">
        <div className="flex flex-col items-center gap-4">
          <p className="font-medium">Affordable</p>
          <Title title="Pricing package" />
          <Tagline tagline="Choose the plan that suits your needs" />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="divide-y divide-neutral-500 rounded-md border border-black p-8">
            <div className="pb-4">
              <p className="font-medium">Basic Plan</p>
              <small>Perfect for small events and gatherings</small>
            </div>
            <div className="space-y-4 py-4">
              <p className="text-2xl font-bold">
                {faker.commerce.price({ symbol: "Rp", min: 999 })}
              </p>
              <Button width="full">Get Started</Button>
            </div>
            <div className="pt-4">
              <ul>
                <li>package </li>
                <li>package </li>
                <li>package </li>
                <li>package </li>
              </ul>
            </div>
          </div>
          <div className="divide-y divide-neutral-500 rounded-md border border-black p-8">
            <div className="pb-4">
              <p className="font-medium">Basic Plan</p>
              <small>Perfect for small events and gatherings</small>
            </div>
            <div className="space-y-4 py-4">
              <p className="text-2xl font-bold">
                {faker.commerce.price({ symbol: "Rp", min: 999 })}
              </p>
              <Button width="full">Get Started</Button>
            </div>
            <div className="pt-4">
              <ul>
                <li>package </li>
                <li>package </li>
                <li>package </li>
                <li>package </li>
              </ul>
            </div>
          </div>
          <div className="divide-y divide-neutral-500 rounded-md border border-black p-8">
            <div className="pb-4">
              <p className="font-medium">Basic Plan</p>
              <small>Perfect for small events and gatherings</small>
            </div>
            <div className="space-y-4 py-4">
              <p className="text-2xl font-bold">
                {faker.commerce.price({ symbol: "Rp", min: 999 })}
              </p>
              <Button width="full">Get Started</Button>
            </div>
            <div className="pt-4">
              <ul>
                <li>package </li>
                <li>package </li>
                <li>package </li>
                <li>package </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
