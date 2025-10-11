"use client";

import Image from "next/image";
import Link from "next/link";

export default function ThankYou() {
    return (
        <section className="screen center">

            <div className="center col p-8 md:p-20 pb-10 mx-auto gap-2 overflow-y-hidden bg-white z-50 rounded-xl">

                <h1 className="text-4xl md:text-7xl font-bold colored mb-8">Thank You</h1>

                <div className="center col">
                    <p className="text-lg md:text-xl text-center font-semibold">Your submission will be reviewed soon!</p>
                    <Link href="/" className="mt-2 text-sm text-secondary font-semibold underline hover:underline click">Go back to Home</Link>
                </div>

                <Image src="svg/misc/check.svg" alt="Thank You" width={50} height={50} className="mt-4" />
                <h3 className="text-4xl md:text-6xl font-permanent text-secondary-light mt-4">Stay Tuned :)</h3>

            </div>
        </section>
    );
};
