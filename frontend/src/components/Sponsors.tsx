"use client";
import React, { useEffect, useRef } from "react";
import { Jolly_Lodger } from "next/font/google";
import Image from "next/image";

const jolly = Jolly_Lodger({ weight: "400", subsets: ["latin"] });

const sponsors = [
  { id: 1, src: "/sponsor1.png", alt: "Sponsor 1" },
  { id: 3, src: "/sponsor3.jpeg", alt: "Sponsor 3" },
  { id: 4, src: "/sponsor4.jpg", alt: "Sponsor 4" },
  { id: 5, src: "/sponsor5.png", alt: "Sponsor 5" },
  { id: 6, src: "/sponsor6.jpg", alt: "Sponsor 6" },
  { id: 7, src: "/sponsor7.jpg", alt: "Sponsor 7" },
  { id: 8, src: "/sponsor8.png", alt: "Sponsor 8" },
  { id: 9, src: "/sponsor9.png", alt: "Sponsor 9" },
  { id: 10, src: "/sponsor10.png", alt: "Sponsor 10" },
  { id: 11, src: "/sponsor11.png", alt: "Sponsor 11" },
  { id: 12, src: "/sponsor12.jpg", alt: "Sponsor 12" },
  { id: 13, src: "/sponsor13.png", alt: "Sponsor 13" },
  { id: 14, src: "/sponsor14.jpg", alt: "Sponsor 14" },
];

export default function Sponsors() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);

  const hoverShadowColors = [
    "rgba(173, 216, 230, 1)",
    "rgba(255, 255, 255, 0.9)",
    "rgba(255, 0, 0, 1)",
    "rgba(255, 215, 0, 1)",
    "rgba(0, 0, 139, 1)",
    "rgba(128, 0, 128, 1)",
    "rgba(0, 100, 0, 1)",
    "rgba(0, 119, 190, 1)",
    "rgba(135, 206, 235, 1)",
    "rgba(144, 238, 144, 1)",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            imagesRef.current.forEach((img, index) => {
              if (img) img.style.animationDelay = `${0.3 + index * 0.15}s`;
            });
          } else {
            entry.target.classList.remove("animate-in");  
            imagesRef.current.forEach((img) => {
              if (img) img.style.animationDelay = "0s";
            });
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
    <section ref={sectionRef} className="py-16 bg-black relative overflow-hidden">
      <style jsx global>{`
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

        @keyframes glowPulse {
          0%,
          100% {
            filter: drop-shadow(0 0 5px rgba(255, 7, 0, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(255, 7, 0, 0.8));
          }
        }

        .animate-in .sponsors-title {
          animation: slideInFromTop 0.8s ease-out forwards,
            glowPulse 2s ease-in-out infinite 1s;
        }

        .animate-in .sponsor-item {
          opacity: 0;
          animation: slideInFromBottom 0.8s ease-out forwards;
        }

        .sponsors-title,
        .sponsor-item {
          opacity: 0;
        }

        .marquee-inner-left,
        .marquee-inner-right {
          will-change: transform;
          width: max-content;
        }

        .marquee-inner-left {
          animation: marquee-scroll-left 36s linear infinite;
        }

        .marquee-inner-right {
          animation: marquee-scroll-right 36s linear infinite;
        }

        @keyframes marquee-scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-in .sponsor-item:nth-child(1) { animation-delay: 0.3s; }
        .animate-in .sponsor-item:nth-child(2) { animation-delay: 0.45s; }
        .animate-in .sponsor-item:nth-child(3) { animation-delay: 0.6s; }
        .animate-in .sponsor-item:nth-child(4) { animation-delay: 0.75s; }
        .animate-in .sponsor-item:nth-child(5) { animation-delay: 0.9s; }
        .animate-in .sponsor-item:nth-child(6) { animation-delay: 1.05s; }
        .animate-in .sponsor-item:nth-child(7) { animation-delay: 1.2s; }
        .animate-in .sponsor-item:nth-child(8) { animation-delay: 1.35s; }
        .animate-in .sponsor-item:nth-child(9) { animation-delay: 1.5s; }
        .animate-in .sponsor-item:nth-child(10) { animation-delay: 1.65s; }
        .animate-in .sponsor-item:nth-child(11) { animation-delay: 1.8s; }
        .animate-in .sponsor-item:nth-child(12) { animation-delay: 1.95s; }
        .animate-in .sponsor-item:nth-child(13) { animation-delay: 2.1s; }
        .animate-in .sponsor-item:nth-child(14) { animation-delay: 2.25s; }
        .item:hover img {
          filter: drop-shadow(0 0 12px var(--shadow-color));
        }
      `}</style>

      <div className="container mx-auto px-4">
        <h2
          className={`${jolly.className} sponsors-title text-[#FF0700] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mb-12`}
        >
          Previous Year Sponsors
        </h2>

        <div className="relative">
          <div className="marquee mb-6">
            <div className="marquee-inner-left flex flex-nowrap items-center gap-8">
              {sponsors.concat(sponsors).map((sponsor, index) => (
                <div
                  key={`top-${sponsor.id}-${index}`}
                  ref={addToImagesRef}
                  className="sponsor-item item h-36 md:h-60 flex-shrink-0 flex items-center justify-center"
                  style={{
                    "--shadow-color": hoverShadowColors[index % hoverShadowColors.length],
                  } as React.CSSProperties}
                >
                  <Image
                    src={sponsor.src}
                    alt={sponsor.alt}
                    width={200}
                    height={160}
                    className="w-auto h-28 md:h-40 object-contain rounded-lg transform transition-transform duration-300 hover:scale-110"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
