import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-screen h-[calc(40vh)] relative p-4 bg-gradient-to-r from-primary via-secondary to-primary text-white text-center pt-40 px-40 center overflow-hidden">
      <Image src="/svg/misc/footer-wave.svg" alt="Scroll Down" width={1920} height={1080} className="w-full absolute -top-10 z-20" />

      <div className="container mx-auto grid grid-cols-2 h-full z-30 ">

        <div className="center col pl-10">
          <p className="text-2xl font-bold">Developed by</p>

          <div className="center gap-8 my-4 font-black text-5xl">
            <Image src="/svg/misc/logo.svg" alt="ESC CLUB" width={50} height={50} className="mb-4" />
            <h4 className="colored  font-bold">ESC CLUB</h4>
          </div>
          <p className="text-xl">&copy; 2025 &nbsp;| &nbsp;
            <Link href={'https://github.com/mohaneddz'} className="underline text-secondary-light font-bold" target="_blank" rel="noopener noreferrer">
              MANAA Mohaned
            </Link>
          </p>

        </div>

        <ul className="center pr-10 gap-12">
          <li><Image className="click" src="/svg/icon/social/facebook.svg" alt="facebook" width={40} height={40} /></li>
          <li><Image className="click" src="/svg/icon/social/gmail.svg" alt="gmail" width={40} height={40} /></li>
          <li><Image className="click" src="/svg/icon/social/instagram.svg" alt="instagram" width={40} height={40} /></li>
          <li><Image className="click" src="/svg/icon/social/linkedin.svg" alt="linkedin" width={40} height={40} /></li>
        </ul>

      </div>

    </footer>
  );
};
