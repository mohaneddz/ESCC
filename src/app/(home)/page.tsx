import AboutUs from "@/sections/AboutUs";
import Hero from "@/sections/Hero";
import MeetOurTeam from "@/sections/MeetOurTeam";
import OurDepartments from "@/sections/OurDepartments";
import RecentEvents from "@/sections/RecentEvents";
import UpcomingEvents from "@/sections/UpcomingEvents";

import { recentEvents } from "@/data/events";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {recentEvents.map((event) => (
          <link
            key={event.image}
            rel="preload"
            as="image"
            href={event.image}
          />
        ))}
      </Head>

      <main>
        <Hero />
        <AboutUs />
        <RecentEvents />
        <UpcomingEvents />
        <OurDepartments />
        <MeetOurTeam />
      </main>
    </>
  );
}
