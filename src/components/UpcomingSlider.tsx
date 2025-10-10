import UpcomingCard from "@/components/UpcomingCard";
import { upcomingEvents } from "@/data/upcoming";

export default function UpcomingSlider() {
    return (
        <div className="flex flex-row items-center justify-center gap-12 overflow-visible w-screen px-8 snap-x snap-mandatory scroll-smooth">
            {upcomingEvents.map((event, index) => (
                <UpcomingCard
                    key={index}
                    show={event.show}
                    image={event.image}
                    title={event.title}
                    date={event.date}
                    description={event.description}
                />
            ))}
        </div>
    );
}
