import RecentCarousel from "@/components/RecentCarousel";
import ESCC from "@/components/ESCC";

export default function RecentEvents() {

  return (
    <section className="center col text-white py-32 px-20" id="recentevents">

      <ESCC />

      <h2 className="z-20">OUR RECENT EVENTS</h2>

      <div className="container mx-auto h-[70vh] w-full">
        <RecentCarousel />
      </div>

    </section>
  );
};
