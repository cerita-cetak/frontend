import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="h-screen justify-between lg:flex">
      <section
        className="hidden w-4/12 shrink-0 bg-main-100 bg-cover bg-no-repeat lg:block"
        style={{
          backgroundImage: `url(https://picsum.photos/200)`,
        }}
      ></section>
      <section className="relative mx-auto grid h-screen flex-1 grid-cols-1 content-center">
        <Link href={"/"} className="mx-auto mb-8 mt-8 md:mt-0 ">
          <Image
            alt="logo cerita cetak"
            src={"/logo-light.svg"}
            width={90}
            height={90}
            className="hidden aspect-square rounded-xl border dark:block"
          />
          <Image
            alt="logo cerita cetak"
            src={"/logo-dark.svg"}
            width={90}
            height={90}
            className="aspect-square rounded-xl border border-black dark:hidden"
          />
        </Link>

        <div className="mx-auto w-11/12 md:w-5/12">{children}</div>
        <div className="inset-x-0 bottom-0 flex flex-col items-center justify-center gap-1 py-4 md:absolute md:bottom-5 md:flex-row md:gap-3">
          <small>© 2023 Cerita Cetak. All rights reserved.</small>
          <small>Privacy Policy</small>
          <small>Terms of Service</small>
        </div>
      </section>
    </main>
  );
}
