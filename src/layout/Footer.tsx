import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-screen h-[calc(40vh)] relative p-4 bg-gradient-to-r from-primary via-secondary to-primary text-white text-center pt-4 md:pt-40 md:px-40 mx-auto center overflow-hidden">

      <Image src="/svg/misc/footer-wave.svg" alt="Scroll Down" width={1920} height={1080} className="w-full absolute md:-top-10 -top-2 z-20" />

      <div className="container mx-auto grid md:gap-0 md:grid-cols-2 h-full z-30 ">

        <div className="center col md:pl-10">
          <p className="md:text-2xl md:visible hidden font-bold text-nowrap">Developed by</p>

          <div className="center md:gap-8 my-4 font-black md:text-5xl text-xl  text-nowrap">
            <Image src="/svg/misc/logo.svg" alt="ESC CLUB" width={50} height={50} className="mb-4" />
            <h4 className="colored font-bold">ESC CLUB</h4>
          </div>
          <p className="md:text-xl text-md text-nowrap">&copy; 2025 &nbsp;| &nbsp;
            <Link href={'https://github.com/mohaneddz'} className="underline md:text-secondary-light text-white/80 font-bold" target="_blank" rel="noopener noreferrer">
              MANAA Mohaned
            </Link>
          </p>

        </div>

        <ul className="center md:pr-10 md:gap-12 gap-8">
          <li className="w-max h-max"><Image className="click w-8" src="/svg/icon/social/facebook.svg" alt="facebook" width={40} height={40} /></li>
          <li className="w-max h-max"><Image className="click w-8" src="/svg/icon/social/gmail.svg" alt="gmail" width={40} height={40} /></li>
          <li className="w-max h-max"><Image className="click w-8" src="/svg/icon/social/instagram.svg" alt="instagram" width={40} height={40} /></li>
          <li className="w-max h-max"><Image className="click w-8" src="/svg/icon/social/linkedin.svg" alt="linkedin" width={40} height={40} /></li>
        </ul>

      </div>

    </footer>
  );
};
