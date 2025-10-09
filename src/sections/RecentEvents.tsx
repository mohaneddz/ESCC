import RecentCarousel from "@/components/RecentCarousel";
import ESCC from "@/components/ESCC";

export default function RecentEvents() {

  return (
    <section className="relative overflow-hidden h-[80vh] w-screen md:h-[100vh] center col text-white lg:py-32 lg:px-20 md:mb-20" id="recentevents">

      <ESCC />

      <h2 className="z-20">OUR RECENT EVENTS</h2>

      <div className="container mx-auto lg:h-[70vh] w-full">
        <RecentCarousel />
      </div>

    </section>
  );
};
