"use client";

import * as React from "react";
import TeamCarousel from "@/components/TeamCarousel";
import ESCC from "@/components/ESCC";

export default function MeetOurTeam() {
  return (
    <section className="relative center py-12 col gap-12 my-60">
      <ESCC variant="secondary" rotate={-30}/>
      <h2 className="text-7xl font-permanent">Meet Our Team</h2>
      <TeamCarousel />
    </section>
  );
}