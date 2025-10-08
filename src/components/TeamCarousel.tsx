"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { managers } from "@/data/managers";
import { useCarouselScale } from "@/hooks/useCarouselScale";
import TeamCard from "@/components/TeamCard";

export default function TeamCarousel() {
  const { api, setApi, scaleValues } = useCarouselScale();

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full max-w-6xl"
    >
      <CarouselContent className="-ml-4">
        {managers.map((manager, index) => (
          <CarouselItem
            key={index}
            className="pl-4 md:basis-1/2 lg:basis-1/3"
          >
            <div
              className="p-1 transition-transform duration-300 ease-out"
              style={{
                transform: `scale(${scaleValues[index] || 0.75})`,
              }}
            >
              <TeamCard
                name={manager.name}
                title={manager.title}
                image={manager.image}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <button
        onClick={() => api?.scrollPrev()}
        className="absolute top-1/2 -translate-y-1/2 -left-4 bg-transparent border-none click"
      >
        <Image
          src="/svg/misc/arrow.svg"
          alt="Previous"
          width={24}
          height={24}
          className="transform rotate-180"
        />
      </button>
      <button
        onClick={() => api?.scrollNext()}
        className="absolute top-1/2 -translate-y-1/2 -right-4 bg-transparent border-none click"
      >
        <Image
          src="/svg/misc/arrow.svg"
          alt="Next"
          width={24}
          height={24}
        />
      </button>
    </Carousel>
  );
}
