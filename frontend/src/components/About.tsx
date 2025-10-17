"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            const content = contentRef.current;
            if (content) {
              const paragraphs = content.querySelectorAll("p");
              paragraphs.forEach((p, index) => {
                (p as HTMLElement).style.animationDelay = `${0.3 + index * 0.2}s`;
              });
            }
            imagesRef.current.forEach((img, index) => {
              if (img) (img as HTMLElement).style.animationDelay = `${0.2 + index * 0.15}s`;
            });
          } else {
            entry.target.classList.remove("animate-in");
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  const addToImagesRef = (el: HTMLDivElement | null) => {
    if (el && !imagesRef.current.includes(el)) imagesRef.current.push(el);
  };
  return (
    <>
      <style jsx global>{`
        @keyframes slideInFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px) rotate(-10deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotate(0);
          }
        }
        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(100px) rotate(10deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotate(0);
          }
        }
        @keyframes slideInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-50px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes slideInFromBottom {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-in .about-title {
          animation: slideInFromTop 0.8s ease-out forwards,
            glowPulse 2s ease-in-out infinite 1s;
        }
        .animate-in .about-image-left {
          animation: slideInFromLeft 1s ease-out forwards;
        }
        .animate-in .about-image-right {
          animation: slideInFromRight 1s ease-out forwards, floatUpDown 3s ease-in-out infinite;
        }
        .animate-in .about-image-top {
          animation: slideInFromTop 0.8s ease-out forwards;
        }
        .animate-in .about-content p {
          opacity: 0;
          animation: slideInFromBottom 0.6s ease-out forwards;
        }
        .animate-in .spider-net {
          opacity: 0;
          animation: fadeInScale 0.8s ease-out forwards, floatSpiderNet 4s ease-in-out infinite;
        }
        .animate-in .three-icons span {
          opacity: 0;
          animation: slideInFromBottom 0.5s ease-out forwards;
        }
        .animate-in .three-icons span:nth-child(1) {
          animation-delay: 0.3s;
        }
        .animate-in .three-icons span:nth-child(2) {
          animation-delay: 0.5s;
        }
        .animate-in .three-icons span:nth-child(3) {
          animation-delay: 0.7s;
        }
        .animate-in .hackman-card {
          opacity: 0;
          animation: slideInFromBottom 0.8s ease-out forwards;
          animation-delay: 0.3s;
        }
        .about-title,
        .about-image-left,
        .about-image-right,
        .about-image-top,
        .about-content p,
        .spider-net,
        .three-icons span,
        .hackman-card {
          opacity: 0;
        }
        @keyframes floatUpDown {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes floatSpiderNet {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        } 
      `}</style>
      <section ref={sectionRef} className="relative -mb-32 bg-black text-white" id="about">
        <div
          ref={addToImagesRef}
          className="about-image-left absolute left-0 top-4 block"
        >
          <Image
            src="/images/net.jpg"
            alt="Spiderweb"
            width={240}
            height={280}
            className="opacity-60 w-28 sm:w-40 md:w-52 lg:w-60 h-auto object-contain"
          />
        </div>
        <div
          ref={addToImagesRef}
          className="about-image-top absolute left-1/2 -translate-x-1/2 top-0 block"
        >
          <Image
            src="/images/Vector.png"
            alt="Vector"
            width={520}
            height={120}
            className="w-40 sm:w-64 md:w-80 lg:w-[520px] h-auto object-contain"
          />
        </div>
        <div
          ref={addToImagesRef}
          className="about-image-right absolute right-0 top-60 sm:top-72 md:top-80 transform block"
        >
          <Image
            src="/images/skeleton.png"
            alt="Skeleton"
            width={296}
            height={600}
            className="opacity-80 mt-20 w-28 sm:w-40 md:w-52 lg:w-[296px] h-auto object-contain"
          />
        </div>
       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-20 md:py-28 lg:py-40">
          <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-32">
            <h2 
            className="font-jolly about-title text-center text-[#ff0500] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6">
              About Genesis
            </h2>
            <div ref={contentRef} className="about-content max-w-4xl sm:max-w-5xl md:max-w-6xl mx-auto text-center px-2 sm:px-4">
              <p className="font-poppins text-white mb-4 text-xs sm:text-sm md:text-base lg:text-lg">
                GENESIS is much more than just a team, it&apos;s a close-knit family. With a diverse group of 50 individuals,
                each bringing their own set of skills and experiences, the connections they share go far beyond the
                typical work relationship. From managers to supervisors to executives, everyone comes together with a
                shared vision and a collective purpose. GENESIS is built on four major pillars: technical, sports,
                cultural, and social. But these aren&apos;t just categories or labels, but also &mdash; they&apos;re a reflection of the
                unique passions and interests that each team member brings.
              </p>
              <p className="font-poppins text-white text-xs sm:text-sm md:text-base lg:text-lg">
                Some are creative minds with a knack for design, others are passionate athletes, and some are tech
                experts. There are also those who are deeply committed to making a social impact. What truly makes GENESIS
                stand out, however, is the emotional connection they create with the people they serve. Through events
                like cultural festivals that unite different groups and sports activities that promote camaraderie and
                healthy competition, GENESIS fosters a strong sense of community among students, faculty, and beyond.
              </p>
            </div>
          </div>
          <div className="mb-16 lg:mb-32">
            <div className="relative mx-auto max-w-4xl">
              <Image
                ref={addToImagesRef}
                src="/images/spider_net.png"
                alt="Awakening Innovation, Meaning Connections, Forging Future Leaders"
                width={800}
                height={200}
                className="spider-net w-full h-auto mx-auto mb-6"
              />
              <div className="three-icons grid grid-cols-3 gap-10 text-center text-white text-sm sm:text-base">
                <span className="font-poppins">Awakening Innovation</span>
                <span className="font-poppins">Meaning Connections</span>
                <span className="font-poppins">Forging Future Leaders</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export function AboutHackman() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            const content = contentRef.current;
            if (content) {
              const paragraphs = content.querySelectorAll("p, h1, h2");
              paragraphs.forEach((el, index) => {
                (el as HTMLElement).style.animationDelay = `${0.3 + index * 0.2}s`;
              });
            }
            imagesRef.current.forEach((img, index) => {
              if (img) (img as HTMLElement).style.animationDelay = `${0.2 + index * 0.15}s`;
            });
          } else {
            entry.target.classList.remove("animate-in");
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  const addToImagesRef = (el: HTMLDivElement | null) => {
    if (el && !imagesRef.current.includes(el)) imagesRef.current.push(el);
  };
  return (
    <>
      <style jsx global>{`
        @keyframes floatBat {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-in .left-bat {
          animation: floatBat 3s ease-in-out infinite;
        }
        .animate-in .right-bat {
          animation: floatBat 5s ease-in-out infinite 0.5s;
        }
      `}</style>
      <section ref={sectionRef} className="relative bg-black text-white mb-24" id="about-hackman">
        <div className="relative py-10 sm:py-12 lg:py-16">
          <div
            ref={addToImagesRef}
            className="absolute top-1/2 left-0 -translate-y-1/2 transform left-bat"
          >
            <Image src="/images/left_bat.png" alt="Bats" width={400} height={200} />
          </div>
          <div
            ref={addToImagesRef}
            className="absolute top-1/2 right-0 -translate-y-1/2 transform right-bat"
          >
            <Image src="/images/right_bat.png" alt="Bats" width={400} height={200} />
          </div>
          <div className="container mx-auto px-4 text-center" ref={contentRef}>
            <h2 className="font-jolly about-title text-[#ff0500] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-10">
              About Hackman V8
            </h2>
            <div
              ref={addToImagesRef}
              className="hackman-card max-w-5xl mx-auto rounded-[2rem] sm:rounded-[3rem] bg-[#151515] p-6 sm:p-10 lg:p-12 shadow-lg"
            >
              <p className="font-poppins text-white text-base sm:text-lg mb-2">
                Code. Create. Conquer The Dark.
              </p>
              <h1 className="font-nosifer tracking-tight text-4xl sm:text-5xl lg:text-[60px] xl:text-[64px] mb-4 leading-tight">
                HACKMAN 2025
              </h1>
              <p className="font-poppins text-[#747474] text-sm sm:text-base mb-6 leading-relaxed">
                Our Grand Ritual, Hackman 2025, rises from the shadows as a 24-Hour Haunted Hackathon, where
                restless minds gather to code, create, and conquer the dark. Guided by the wisdom of the
                masters of the craft, participants will battle sleepless nights, conjure groundbreaking
                ideas, and fight for wicked prizes, swag, and eerie goodies &mdash; only the brave will survive!
              </p>
              <a href="/HACKMAN-Brochure.pdf" download className="bg-[#fe772d] hover:bg-orange-600 text-xl sm:text-2xl lg:text-3xl text-gray-900 font-jolly font-bold py-2 sm:py-3 px-8 sm:px-12 lg:px-[4rem] rounded-[1rem] sm:rounded-[1.5rem] transition-colors duration-300">
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
