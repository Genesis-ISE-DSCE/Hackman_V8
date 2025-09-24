import { Poppins, Jolly_Lodger } from "next/font/google";
import Image from "next/image";

const jolly = Jolly_Lodger({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Navigation() {
  return (
    <>
      <div
        className={`${jolly.className} top-0 left-0 w-full bg-[#FF6600] text-white h-[45px] flex items-center justify-center text-[22px] tracking-[0.05em] capitalize`}
      >
        <p className="leading-[140%]">
          Registrations are now open for Hackman… if you dare to enter.
        </p>
      </div>
      <nav
        className={`bg-black text-white w-full h-[95px] ${poppins.className}`}
      >
        <div className="container mx-auto flex justify-between items-center h-full px-12">
          <ul className="flex space-x-10 text-[18px] font-medium">
            <li>
              <a href="#hero" className="hover:text-blue-200 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-hackman"
                className="hover:text-blue-200 transition-colors"
              >
                About Hackman
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-200 transition-colors"
              >
                About Genesis
              </a>
            </li>
            <li>
              <a
                href="#sponsors"
                className="hover:text-blue-200 transition-colors"
              >
                Sponsors
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="hover:text-blue-200 transition-colors"
              >
                Gallery
              </a>
            </li>
          </ul>
          <Image
            src="/genesis-2k25-logo.png"
            alt="Genesis 2025 Logo"
            width={64}
            height={64}
            className="h-16 w-auto"
          />
        </div>
      </nav>
    </>
  );
}