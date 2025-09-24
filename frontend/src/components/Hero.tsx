import { Nosifer, Jolly_Lodger, Poppins } from "next/font/google";
import Image from "next/image";

const nosifer = Nosifer({ weight: "400", subsets: ["latin"] });
const jolly = Jolly_Lodger({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center text-white h-[1000px] bg-black"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundPosition: "center 175%",
      }}
    >
      <Image
        src="/hero-moon.svg"
        alt="hero-moon illustration"
        width={185}
        height={192}
        className="absolute w-[185px] h-[192px] top-[-50px] right-[180px]"
      />
      <h1
        className={`${nosifer.className} text-[#FF0700] text-[110px] absolute right-[150px] top-[200px]`}
      >
        Hackman
      </h1>

      <h1
        className={`${nosifer.className} absolute right-[150px] top-[325px] text-[89px]`}
      >
        v8.o
      </h1>

      <a
        href="/registration"
        className={`${jolly.className} absolute w-[264px] h-[67px] top-[460px] right-[150px] bg-[#FE772D] text-black font-bold rounded-[17.64px] text-[40px] flex items-center justify-center`}
      >
        Register Now
      </a>

      <p
        className={`${poppins.className} absolute bottom-70 left-58 text-[20px]`}
      >
        Where creativity meets technology. A community of thinkers, builders,
        and leaders shaping the future.
      </p>
    </section>
  );
}
