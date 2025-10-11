import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Image src="/svg/misc/upcoming-light-2.svg" alt="Upcoming Events" fill className="full z-1 absolute right-0" />
      <Image src="/svg/misc/upcoming-light-1.svg" alt="Upcoming Events" fill className="full z-1 absolute left-0" />
      <Image src="/svg/misc/upcoming-background.svg" alt="Upcoming Events" fill className="full z-0" style={{ objectFit: "cover" }}  />

      <main className="z-10">
        {children}
      </main>

    </>
  );
}
