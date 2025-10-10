"use client";

import Image from "next/image";
import Link from "next/link";

export default function ThankYou() {
    return (
        <div className="center col p-8 md:p-20 pb-10 mx-auto gap-2 overflow-y-hidden">
            
            <h1 className="text-4xl md:text-7xl font-bold colored mb-8">Thank You</h1>
            
            <div className="center col">
                <p className="text-lg md:text-xl text-center font-semibold">Your submission will be reviewed soon!</p>
                <Link href="/" className="mt-2 text-sm md:text-md text-secondary font-semibold underline hover:underline">Go back to Home</Link>
            </div>

            <Image src="svg/misc/check.svg" alt="Thank You" width={100} height={100} className="mt-4" />
            <h3 className="text-4xl md:text-6xl font-permanent text-secondary-light mt-4">Stay Tuned :)</h3>

        </div>
    );
};
