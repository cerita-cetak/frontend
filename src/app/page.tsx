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

      {/* services */}
      <section
        id="services"
        className="container grid grid-cols-1 gap-4 md:h-[500px] md:grid-cols-2"
      >
        <div className="space-y-8 self-center">
          <Title
            title="Create stunning online invitations with Cerita Cetak&lsquo;s
            customizable themes."
          />
          <Tagline
            tagline="Cerita Cetak offers a unique value proposition for creating and
            sending personalized online invitations. With a wide range of free
            themes and attractive event packages, you can easily create stunning
            invitations for any occasion."
          />

          <ul className="text-sm">
            <li>Choose from numerous free themes for your invitations.</li>
            <li>
              Explore our attractive event packages for added convenience.
            </li>
            <li>Create engaging and memorable online invitations with ease.</li>
          </ul>
        </div>
        <Image
          src={faker.image.urlLoremFlickr()}
          alt="service"
          width={1000}
          height={1000}
          className="h-full"
        />
      </section>

      {/* Feature list */}
      <section className="container flex flex-col gap-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p>Discover</p>
            <Title title="Unleash Your Creativity with Cerita Cetak" />
          </div>
          <Tagline
            tagline="Cerita Cetak offers a wide range of diverse free themes, attractive
            event packages, and user-friendly design tools. Create stunning
            invitations for your special events with ease and convenience.
            Whether it's a wedding, birthday party, or corporate event,
            Cerita Cetak has everything you need to make your invitations stand
            out."
          />
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-3">
            <i className="text-3xl">
              <BiSolidParty />
            </i>
            <p className="font-bold">Diverse Free Themes</p>
            <p>
              Choose from a wide variety of stunning themes to match the style
              and tone of your event.
            </p>
          </div>
          <div className="space-y-3">
            <i className="text-3xl">
              <BiSolidParty />
            </i>
            <p className="font-bold">Attractive Event Packages</p>
            <p>
              Explore our attractive event packages to add an extra touch of
              elegance to your invitations.
            </p>
          </div>
          <div className="space-y-3">
            <i className="text-3xl">
              <BiSolidParty />
            </i>
            <p className="font-bold">User-Friendly Design Tools</p>
            <p>
              Easily customize and personalize your invitations with our
              intuitive design tools.
            </p>
          </div>
          <div className="space-y-3">
            <i className="text-3xl">
              <BiSolidParty />
            </i>
            <p className="font-bold">Create Memorable Invitations</p>
            <p>
              Make your event unforgettable with beautifully designed
              invitations.
            </p>
          </div>
        </div>
        <Button variant="outlined">Get Started</Button>
      </section>

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
