"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function DepartmentCard({ 
    title, 
    description, 
    image 
}: { 
    title?: string, 
    description?: string, 
    image?: string 
}) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div 
            className={`grouprelative w-full aspect-[4/3] rounded-lg transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''} hover:scale-105 hover:-translate-y-2`}
        >
            
            {/* Front of the card */}
            <div className="absolute p-2 w-full h-full rounded-lg bg-gradient-to-r from-[#3225a1] via-[#1e74b8] to-[#3225a1] [backface-visibility:hidden] flex flex-col items-center justify-center">

                <Image src={image || "/images/event1.jpg"} alt={title || "Department Image"} width={100} height={100} className="h-24 md:h-8 rounded-t-lg" />

                <h4 className="text-white text-center text-3xl md:text-base font-bold mt-4 text-nowrap truncate w-full">{title}</h4>

                <div className="flex items-center justify-center">
                    <Button variant="card_blue" className="mt-4 font-lexend flex justify-between gap-2 w-40 text-xl" onClick={handleClick}>
                        Discover
                        <Image src="/svg/misc/button-arrows-white.svg" alt="" width={16} height={16} />
                    </Button>
                </div>
            </div>

            {/* Back of the card */}
            <div className="absolute w-full h-full rounded-lg bg-gradient-to-r from-[#3225a1] via-[#1e74b8] to-[#3225a1] [backface-visibility:hidden] [transform:rotateY(180deg)] p-4 text-white flex flex-col items-center justify-center shadow-2xl shadow-blue-500/50">
                <div className="flex items-start gap-2 mb-4">
                    <p className="text-center text-3xl px-4 sm:text-sm italic">{description || "No description available."}</p>
                </div>
                <div className="flex items-center justify-center">
                    <Button variant="card_blue" className="mt-4 font-lexend flex justify-between gap-2 w-40 text-xl" onClick={handleClick}>
                        Go Back
                        <Image src="/svg/misc/button-arrows-white.svg" alt="" width={16} height={16} />
                    </Button>
                </div>
            </div>
        </div>
    );
};