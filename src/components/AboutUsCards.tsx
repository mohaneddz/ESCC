"use client";

import Image from "next/image";
import { Float } from "@/utils/animate";
import { useState, useEffect } from "react";

export default function AboutUsCards() {
  const [imageSize, setImageSize] = useState({ width: 400, height: 400 });

  useEffect(() => {
    const updateSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setImageSize({ width: 400, height: 400 });
      } else if (screenWidth >= 768) {
        setImageSize({ width: 300, height: 300 });
      } else if (screenWidth >= 500) {
        setImageSize({ width: 200, height: 200 });
      } else {
        setImageSize({ width: 150, height: 150 });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="container relative w-[50vw] md:max-w-[30vw] mx-auto h-40 md:h-0">
      <Float delay={0} speed={6}>
        <Image src="/image/misc/card1.svg" alt="About Us Image" width={imageSize.width} height={imageSize.height} className="rounded-xl absolute left-0 bottom-0 z-3" />
      </Float>
      <Float delay={1} speed={6}>
        <Image src="/image/misc/card2.svg" alt="About Us Image" width={imageSize.width} height={imageSize.height} className="rounded-xl absolute -right-4 top-0 -translate-y-1/2 z-2" />
      </Float>
      <Float delay={2} speed={6}>
        <Image src="/image/misc/card3.svg" alt="About Us Image" width={imageSize.width} height={imageSize.height} className="rounded-xl absolute left-0 top-0 z-1" />
      </Float>
    </div>
  );
}
