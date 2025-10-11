"use client";

import * as React from "react";
import TeamCarousel from "@/components/TeamCarousel";
import ESCC from "@/components/ESCC";

export default function MeetOurTeam() {
  return (
    <section className="w-screen h-screen md:h-[140vh] relative center py-12 col gap-12 ">
      <ESCC variant="secondary" rotate={-15}/>
      <h2>Meet Our Team</h2>
      <TeamCarousel />
    </section>
  );
}