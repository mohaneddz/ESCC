import Image from "next/image";

export default function CarousalNavigation({scrollPrev, scrollNext, scrollTo, current, count}: {scrollPrev: () => void, scrollNext: () => void, scrollTo: (index: number) => void, current: number, count: number}) {
    return (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center space-x-6 z-10">
            {/* Left Arrow */}
            <button
                onClick={scrollPrev}
                className="click "
                aria-label="Previous slide"
            >
                <Image
                    src="/svg/misc/arrow.svg"
                    alt="Previous"
                    width={32}
                    height={32}
                    className="transform transition-transform rotate-180"
                />
            </button>

            {/* Dot Indicators */}
            <div className="flex items-center space-x-2">
                {Array.from({ length: count }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`h-3 rounded-full transition-all duration-300 ease-in-out ${index === current ? "w-6 bg-cyan-400" : "w-3 bg-gray-300"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Right Arrow */}
            <button
                onClick={scrollNext}
                className="click"
                aria-label="Next slide"
            >
                <Image
                    src="/svg/misc/arrow.svg"
                    alt="Next"
                    width={32}
                    height={32}
                    className="transform transition-transform"
                />
            </button>
        </div>
    );
};
