import TeamCarousel from "@/components/TeamCarousel";
import ESCC from "@/components/ESCC";
import AOS from "@/components/AOS";

export default function MeetOurTeam() {
  return (
    <AOS
      as="section"
      className="w-screen h-screen md:h-[140vh] relative center py-12 col gap-12"
      animation="fade-up"
      id="team"
      offset={150}
    >
      <ESCC variant="secondary" rotate={-15} />

      <AOS animation="fade-up" delay={100}>
        <h2>Meet Our Team</h2>
      </AOS>

      <AOS as="div" animation="fade-up" delay={180} className="w-full max-w-6xl">
        <TeamCarousel />
      </AOS>
    </AOS>
  );
}