import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function UpcomingCard({ image, title, date, description, show }: { image?: string, title?: string, date?: string, description?: string, show?: boolean }) {
    return (
        <div className="snap-center shrink-0 relative aspect-[3/4] rounded-xl shadow-lg w-60 md:w-80 z-30 overflow-hidden flex flex-col bg-white/10 md:hover:scale-105 hover:shadow-lg transition-all md:hover:-translate-y-2">

            {
                show && (
                    <div className="bg-white full">
                        <Image src={image || "/images/event1.jpg"} alt={title || "Event Image"} width={400} height={300} className="object-cover w-full h-30 md:h-48" />

                        <div className="flex-grow p-4 flex flex-col justify-between gap-2">

                            <h3 className="md:text-2xl text-lg font-bold">{title || "Event Title"}</h3>

                            <p className="text-gray-800 text-xs font-medium px-1 line-clamp-2 min-h-[3rem]">{description || "This is a brief description of the upcoming event. It provides an overview of what to expect."}</p>

                            <p className="text-gray-600 mb-4 md:text-[0.5rem] text-xs flex items-center">
                                <Image src="/svg/misc/calendar.svg" alt="Calendar Icon" width={16} height={16} className="inline mr-2" />
                                {date || "Event Date"}</p>

                            <Button variant="card_white" className="md:mt-4 font-lexend flex justify-between gap-2 w-full text-xl">
                                Register
                                <Image src="/svg/misc/button-arrows.svg" alt="" width={16} height={16} />
                            </Button>

                        </div>
                    </div>
                )}

        </div>
    );
};