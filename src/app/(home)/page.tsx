import AboutUs from "@/sections/AboutUs";
import Hero from "@/sections/Hero";
import MeetOurTeam from "@/sections/MeetOurTeam";
import OurDepartments from "@/sections/OurDepartments";
import RecentEvents from "@/sections/RecentEvents";
import UpcomingEvents from "@/sections/UpcomingEvents";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <AboutUs />
      <RecentEvents />
      <UpcomingEvents />
      <OurDepartments />
      <MeetOurTeam />
    </main>
  );
}
