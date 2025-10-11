import ESCC from "@/components/ESCC";
import AboutUsCards from "@/components/AboutUsCards";
import AOS from "@/components/AOS";

export default function AboutUs() {
  return (
    <AOS
      as="section"
      className="w-screen h-full md:h-full overflow-hidden relative py-20"
      id="about"
      animation="fade-up"
      offset={180}
    >
      <div
        className="h-[120vh] mx-auto w-screen grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16 md:px-20 md:py-32 items-center justify-center"
        id="aboutus"
      >
        <ESCC />

        <AOS
          as="div"
          animation="fade-right"
          delay={120}
          className="container relative center flex-col md:ml-20 gap-8 mx-auto"
        >
          <h2>About Us</h2>
          <p className="w-80 font-lexend text-xl text-center md:text-left">
            ESCC creates a space where students can learn, connect, and grow
            beyond the classroom through sports, culture, and community spirit.
            Our mission is to inspire creativity, teamwork, and personal
            development by encouraging students to explore their talents and
            passions through a variety of cultural events, scientific
            initiatives, and athletic activities.
          </p>
        </AOS>

        <AOS as="div" animation="fade-left" delay={180}>
          <AboutUsCards />
        </AOS>
      </div>
    </AOS>
  );
}
