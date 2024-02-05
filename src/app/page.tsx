import Button from "@/components/atoms/button/button";
import Tagline from "@/components/atoms/tag-line";
import Title from "@/components/atoms/title";
import HeaderHome from "@/components/organisms/home/header";
import { fakerID_ID as faker } from "@faker-js/faker";
import { BiSolidParty } from "react-icons/bi";

export default function Page() {
  return (
    <main className="space-y-20 md:space-y-28 lg:space-y-36">
      {/* header */}
      <HeaderHome />

      {/* Feature */}
      <section className="container grid grid-cols-1 gap-4 md:h-[500px] md:grid-cols-2">
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
        <picture>
          <img src={faker.image.urlLoremFlickr()} alt="" className="h-full" />
        </picture>
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

      {/* about */}
      {/* <section className="container grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-4 self-center">
          <Title title="Transforming events into unforgettable experiences with our online invitation services." />
          <Tagline
            tagline="At Cerita Cetak, we believe in the power of beautifully designed
            invitations to set the tone for any event. Our team of talented
            designers and developers work tirelessly to create a wide range of
            free themes and attractive event packages, ensuring that every user
            can find the perfect fit for their special occasion. Join us and let
            us help you make your event truly memorable."
          />
        </div>
        <picture>
          <img src={faker.image.avatar()} alt="" className="h-full w-full" />
        </picture>
      </section> */}

      {/* product list */}
      <section className="container space-y-10">
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
      <section className="container space-y-10">
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

      {/* CTA */}
      {/* <section
        style={{ backgroundImage: `url(${faker.image.urlLoremFlickr()})` }}
        className="relative bg-cover bg-fixed bg-no-repeat p-8 text-white"
      >
        <div className="container space-y-8">
          <Title title="Design your perfect invitation" />
          <Tagline tagline="Choose from our most popular themes and event packages to create a stunning invitation." />

          <div className="flex items-center gap-3">
            <Button>Start</Button>
            <Button variant="outlined" color="white">
              Explore
            </Button>
          </div>
        </div>
      </section> */}

      {/* FAQ */}
      {/* <section className="container space-y-10 py-10">
        <div className="flex flex-col items-center gap-4">
          <Title title="FAQs" />
          <Tagline tagline="Find answers to common questions about invitation customization and the order process." />
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
          <Tagline tagline="Contact our support team for further assistance." />
          <Button variant="outlined">Contact</Button>
        </div>
      </section> */}
    </main>
  );
}
