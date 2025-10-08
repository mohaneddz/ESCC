import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative">

      <Image
        src="/image/misc/hero.png" alt="Hero Image" style={{ width: '100vw', height: '98vh' }} width={1920} height={1080}
        className="object-cover absolute inset-0 blur-xs overflow-hidden"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-40"></div>

      <div className="relative container mx-24 mt-20 flex col gap-16">

        <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-left text-white pt-40">
          Ensia Sport <br />
          & Culture Club
        </h1>

        <p className=" text-white text-3xl font-lexend">Inspiring minds, moving bodies, shaping culture. <br /> We bring together passion, knowledge, and <br /> creativity.</p>

        <div className="grid grid-cols-2 w-max gap-6 z-40">
          <Button className="w-40" variant="primary">About us</Button>
          <Button className="w-40" variant="outline">Explore</Button>
        </div>

      </div>

      <Image src="/svg/misc/logo.svg" alt="Scroll Down" width={20} height={20} className="w-140 absolute bottom-0 right-60 z-10" />

      <Image src="/svg/misc/hero-wave.svg" alt="Scroll Down" width={1920} height={1080} className="w-full absolute bottom-0 z-20" />

    </section>
  );
};
