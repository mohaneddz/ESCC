"use client";

import React from "react";
import Image from "next/image";
import RecentEvent from "@/components/RecentEvent";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import CarousalNavigation from "./CarousalNavigation";

export default function RecentCarousel() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap());
        };

        api.on("select", onSelect);

        // Clean up the event listener when the component unmounts
        return () => {
            api.off("select", onSelect);
        };
    }, [api]);

    const scrollPrev = React.useCallback(() => {
        api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
        api?.scrollNext();
    }, [api]);

    const scrollTo = React.useCallback(
        (index: number) => {
            api?.scrollTo(index);
        },
        [api],
    );

    return (
        <div className="relative w-full max-w-9xl mx-auto py-12">

            <Carousel className="center" opts={{ align: "center", loop: true }} setApi={setApi}>
                <CarouselContent>

                    <CarouselItem>
                        <RecentEvent image="/image/events/olympole.png" title="OLYMPOLE" date="January 2025" />
                    </CarouselItem>

                    <CarouselItem>
                        <RecentEvent image="/image/events/olympole.png" title="OLYMPOLE" date="January 2025" />
                    </CarouselItem>

                    <CarouselItem>
                        <RecentEvent image="/image/events/olympole.png" title="OLYMPOLE" date="January 2025" />
                    </CarouselItem>

                    <CarouselItem>
                        <RecentEvent image="/image/events/olympole.png" title="OLYMPOLE" date="January 2025" />
                    </CarouselItem>
                    
                </CarouselContent>
            </Carousel>

            {/* Navigation Controls */}
            <CarousalNavigation
                scrollPrev={scrollPrev}
                scrollNext={scrollNext}
                scrollTo={scrollTo}
                current={current}
                count={count}
            />

        </div>
    );
}