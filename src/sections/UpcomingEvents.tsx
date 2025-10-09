import Image from "next/image";

import UpcomingCard from "@/components/UpcomingCard";

export default function UpcomingEvents() {
  return (
    <section className="relative bg-primary/10 md:h-screen w-screen h-full py-12 center col">

      <Image src="/svg/misc/upcoming-light-2.svg" alt="Upcoming Events" fill className="full z-10 absolute right-0" />
      <Image src="/svg/misc/upcoming-light-1.svg" alt="Upcoming Events" fill className="full z-10 absolute left-0" />
      <Image src="/svg/misc/upcoming-background.svg" alt="Upcoming Events" fill className="full z-0" objectFit="cover" />

      <h2 className="relative text-center text-7xl font-bold font-permanent z-30 white mb-12">Upcoming Events</h2>

      <div className="flex flex-row md:items-center md:justify-center gap-8 md:gap-12 overflow-x-auto md:overflow-x-visible overflow-y-visible w-screen px-8 snap-x snap-mandatory scroll-smooth">
        <UpcomingCard show image="/image/events/hunt.png" title="The Hunt" date="To be announced" description="One day event, a new version of treasure hunt" />
        <UpcomingCard image="/image/events/hunt.png" title="Event 2" date="March 2, 2026" description="Description for Event 2" />
        <UpcomingCard image="/image/events/hunt.png" title="Event 3" date="March 3, 2026" description="Description for Event 3" />
      </div>

    </section>
  );
};
