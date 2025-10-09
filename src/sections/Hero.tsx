import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <main className="relative w-screen h-[85vh] md:h-screen ">

      <Image
        src="/image/misc/hero.png" alt="Hero Image" width={1920} height={1080}
        className="object-cover absolute inset-0 blur-xs overflow-hidden h-[96%] w-full"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-40"></div>

      <div className="relative container mx-8 md:mx-24 mt-20 flex col gap-6 sm:gap-10 md:gap-16">

        <h1 className="text-4xl md:text-7xl lg:text-9xl font-extrabold text-left text-white pt-20 md:pt-40">
          Ensia Sport <br />
          & Culture Club
        </h1>

        <p className=" text-white text-md lg:text-3xl font-lexend w-[20ch] md:w-[35ch]">Inspiring minds, moving bodies, shaping culture. We bring together passion, knowledge, and creativity.</p>

        <div className="grid grid-cols-2 w-max gap-6 z-30 mx-auto">
          <Button className="md:w-40" variant="primary">About us</Button>
          <Button className="md:w-40" variant="outline">Explore</Button>
        </div>

      </div>

      <Image src="/svg/misc/logo.svg" alt="Scroll Down" width={20} height={20} className="lg:w-[25vw] w-30 sm:w-40 absolute bottom-0 md:right-50 z-10" />

      <Image src="/svg/misc/hero-wave.svg" alt="Scroll Down" width={1920} height={1080} className="w-full absolute bottom-0 z-20" />

    </main>
  );
};
