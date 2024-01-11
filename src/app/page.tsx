import { fakerID_ID as faker } from "@faker-js/faker";
import { BiSolidParty } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

export default function Page() {
  return (
    <main className="mb-20 space-y-20">
      {/* header */}
      <section className="grid h-[500px] grid-cols-2">
        <div className="space-y-8 self-center px-8">
          <h2 className="text-4xl font-bold">
            Discover Beautiful Invitation Themes for Every Occasion
          </h2>
          <p>
            Create personalized invitations effortlessly with our wide range of
            free themes and event packages.
          </p>
          <button className="bg-black px-4 py-2 text-white">Get Started</button>
        </div>
        <div className="columns-2 space-x-6 overflow-hidden bg-slate-200">
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

      {/* Feature */}
      <section className="grid h-[500px] grid-cols-2">
        <div className="space-y-8 self-center">
          <h2 className="text-4xl font-bold">
            Create stunning online invitations with Cerita Cetak&lsquo;s
            customizable themes.
          </h2>
          <p>
            Cerita Cetak offers a unique value proposition for creating and
            sending personalized online invitations. With a wide range of free
            themes and attractive event packages, you can easily create stunning
            invitations for any occasion.
          </p>
          <ul className="text-sm">
            <li>Choose from numerous free themes for your invitations.</li>
            <li>
              Explore our attractive event packages for added convenience.
            </li>
            <li>Create engaging and memorable online invitations with ease.</li>
          </ul>
        </div>
        <picture>
          <img src={faker.image.urlLoremFlickr()} alt="" className="h-full" />
        </picture>
      </section>

      {/* Feature list */}
      <section className="flex flex-col gap-14">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <p>Discover</p>
            <h2 className="text-4xl font-bold">
              Unleash Your Creativity with Cerita Cetak
            </h2>
          </div>
          <div>
            Cerita Cetak offers a wide range of diverse free themes, attractive
            event packages, and user-friendly design tools. Create stunning
            invitations for your special events with ease and convenience.
            Whether it&apos;s a wedding, birthday party, or corporate event,
            Cerita Cetak has everything you need to make your invitations stand
            out.
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
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
        <button className="w-fit rounded-md border border-black px-4 py-2">
          Get Started
        </button>
      </section>

      {/* about */}
      <section className="grid grid-cols-2 gap-8">
        <div className="space-y-4 self-center">
          <h2 className="text-4xl font-bold">
            Transforming events into unforgettable experiences with our online
            invitation services.
          </h2>
          <p>
            At Cerita Cetak, we believe in the power of beautifully designed
            invitations to set the tone for any event. Our team of talented
            designers and developers work tirelessly to create a wide range of
            free themes and attractive event packages, ensuring that every user
            can find the perfect fit for their special occasion. Join us and let
            us help you make your event truly memorable.
          </p>
        </div>
        <picture>
          <img src={faker.image.avatar()} alt="" className="h-full w-full" />
        </picture>
      </section>

      {/* product list */}
      <section className="space-y-10">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-4xl font-bold">Products</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
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
            <button className="w-full rounded-md border border-black py-2">
              Add to cart
            </button>
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
            <button className="w-full rounded-md border border-black py-2">
              Add to cart
            </button>
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
            <button className="w-full rounded-md border border-black py-2">
              Add to cart
            </button>
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
            <button className="w-full rounded-md border border-black py-2">
              Add to cart
            </button>
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
            <button className="w-full rounded-md border border-black py-2">
              Add to cart
            </button>
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
            <button className="w-full rounded-md border border-black py-2">
              Add to cart
            </button>
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
            <button className="w-full rounded-md border border-black py-2">
              Add to cart
            </button>
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
            <button className="w-full rounded-md border border-black py-2">
              Add to cart
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="mx-auto rounded-md border border-black px-4 py-2">
            View all
          </button>
        </div>
      </section>

      {/* pricing */}
      <section className="space-y-10">
        <div className="flex flex-col items-center gap-4">
          <p className="font-medium">Affordable</p>
          <h2 className="text-4xl font-bold">Pricing package</h2>
          <p>Choose the plan that suits your needs</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="divide-y divide-neutral-500 rounded-md border border-black p-8">
            <div className="pb-4">
              <p className="font-medium">Basic Plan</p>
              <small>Perfect for small events and gatherings</small>
            </div>
            <div className="space-y-4 py-4">
              <p className="text-2xl font-bold">
                {faker.commerce.price({ symbol: "Rp", min: 999 })}
              </p>
              <button className="w-full bg-black px-4 py-2 text-white">
                Get Started
              </button>
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
              <button className="w-full bg-black px-4 py-2 text-white">
                Get Started
              </button>
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
              <button className="w-full bg-black px-4 py-2 text-white">
                Get Started
              </button>
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

      {/* CTA */}
      <section
        style={{ backgroundImage: `url(${faker.image.urlLoremFlickr()})` }}
        className="relative space-y-8 bg-cover bg-fixed bg-no-repeat p-8 text-white"
      >
        <h2 className="text-4xl font-bold">Design your perfect invitation</h2>
        <p className="">
          Choose from our most popular themes and event packages to create a
          stunning invitation.
        </p>
        <div className="flex items-center gap-3">
          <button className="bg-black px-4 py-2">Start</button>
          <button className="border border-white px-4 py-2">Explore</button>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-10 py-10">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-4xl font-bold">FAQs</h2>
          <p>
            Find answers to common questions about invitation customization and
            the order process.
          </p>
        </div>
        <ul>
          <li className="space-y-3 border-y border-black py-3">
            <div className="peer flex items-center justify-between">
              <p className="font-medium">How to customize invitations?</p>
              <i>
                <IoIosArrowDown />
              </i>
            </div>
            <div>
              To customize invitations, simply select a theme, add your event
              details, and choose any additional customization options
              available. Once you&apos;re satisfied with the design, you can
              proceed to place your order.
            </div>
          </li>
          <li className="space-y-3 border-b border-black py-3">
            <div className="peer flex items-center justify-between">
              <p className="font-medium">
                Can I preview my design before ordering?
              </p>
              <i>
                <IoIosArrowDown />
              </i>
            </div>
            <div>
              To customize invitations, simply select a theme, add your event
              details, and choose any additional customization options
              available. Once you&apos;re satisfied with the design, you can
              proceed to place your order.
            </div>
          </li>
          <li className="space-y-3 border-b border-black py-3">
            <div className="peer flex items-center justify-between">
              <p className="font-medium">How long does shipping take?</p>
              <i>
                <IoIosArrowDown />
              </i>
            </div>
            <div>
              To customize invitations, simply select a theme, add your event
              details, and choose any additional customization options
              available. Once you&apos;re satisfied with the design, you can
              proceed to place your order.
            </div>
          </li>
          <li className="space-y-3 border-b border-black py-3">
            <div className="peer flex items-center justify-between">
              <p className="font-medium">Can I cancel my order?</p>
              <i>
                <IoIosArrowDown />
              </i>
            </div>
            <div>
              To customize invitations, simply select a theme, add your event
              details, and choose any additional customization options
              available. Once you&apos;re satisfied with the design, you can
              proceed to place your order.
            </div>
          </li>
          <li className="space-y-3 border-b border-black py-3">
            <div className="peer flex items-center justify-between">
              <p className="font-medium">What payment methods are accepted?</p>
              <i>
                <IoIosArrowDown />
              </i>
            </div>
            <div>
              To customize invitations, simply select a theme, add your event
              details, and choose any additional customization options
              available. Once you&apos;re satisfied with the design, you can
              proceed to place your order.
            </div>
          </li>
        </ul>
        <div className="flex flex-col items-center gap-4 pt-10">
          <h2 className="text-2xl font-bold">Still have questions?</h2>
          <p>Contact our support team for further assistance.</p>
          <button className="border border-black px-4 py-2">Contact</button>
        </div>
      </section>
    </main>
  );
}
