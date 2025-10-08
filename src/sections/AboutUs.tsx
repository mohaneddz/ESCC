import Image from "next/image";
import ESCC from "@/components/ESCC";
import { Float } from "@/utils/animate";

export default function AboutUs() {
  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-20 py-32 items-center justify-center" id="aboutus">

      <ESCC />
      
      <div className="container relative flex flex-col md:ml-20 gap-8">
        <h2 >About Us</h2>
        <p className="w-80 font-lexend text-lg">ESCC creates a space where students can learn, connect, and grow beyond the classroom through sports, culture, and community spirit. Our mission is to inspire creativity, teamwork, and personal development by encouraging students to explore their talents and passions through a variety of cultural events, scientific initiatives, and athletic activities.</p>
      </div>

      <div className="container relative">
        <Float delay={0} speed={6}>
          <Image src="/image/misc/card1.svg" alt="About Us Image" width={400} height={400} className="rounded-xl absolute left-0 bottom-0 z-3" />
        </Float>
        <Float delay={1} speed={6}>
          <Image src="/image/misc/card2.svg" alt="About Us Image" width={400} height={400} className="rounded-xl absolute -right-4 top-0 -translate-y-1/2 z-2" />
        </Float>
        <Float delay={2} speed={6}>
          <Image src="/image/misc/card3.svg" alt="About Us Image" width={400} height={400} className="rounded-xl absolute left-0 top-0 z-1" />
        </Float>
      </div>

    </section>
  );
};
