"use client";
import React, { useEffect, useRef } from "react";
import { Jolly_Lodger } from "next/font/google";
import Image from "next/image";

const jolly = Jolly_Lodger({ weight: "400", subsets: ["latin"] });

const sponsors1 = [
  { id: 1, src: "/DSC1.JPG", alt: "img 1" },
  { id: 2, src: "/DSC2.JPG", alt: "img 2" },
  { id: 3, src: "/DSC3.JPG", alt: "img 3" },
  { id: 4, src: "/DSC4.JPG", alt: "img 4" },
  { id: 5, src: "/DSC5.JPG", alt: "img 5" },
  { id: 6, src: "/DSC6.JPG", alt: "img 6" },
  { id: 7, src: "/DSC7.JPG", alt: "img 7" },
  { id: 8, src: "/DSC8.JPG", alt: "img 8" },
  { id: 9, src: "/DSC9.JPG", alt: "img 9" },
  { id: 10, src: "/DSC10.JPG", alt: "img 10" },
];

const sponsors2 = [
  { id: 11, src: "/DSC11.JPG", alt: "img 11" },
  { id: 12, src: "/DSC12.JPG", alt: "img 12" },
  { id: 13, src: "/DSC13.JPG", alt: "img 13" },
  { id: 14, src: "/DSC14.JPG", alt: "img 14" },
  { id: 15, src: "/DSC15.JPG", alt: "img 15" },
  { id: 16, src: "/DSC16.JPG", alt: "img 16" },
  { id: 17, src: "/DSC17.JPG", alt: "img 17" },
  { id: 18, src: "/DSC18.JPG", alt: "img 18" },
  { id: 19, src: "/DSC19.JPG", alt: "img 19" },
  { id: 20, src: "/DSC20.JPG", alt: "img 20" },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);

  const hoverShadowColors = [
    // "rgba(173, 216, 230, 1)",
    // "rgba(255, 255, 255, 0.9)",
    "rgba(255, 98, 0, 1)",
    // "rgba(255, 215, 0, 1)",
    // "rgba(0, 0, 139, 1)",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            imagesRef.current.forEach((img, index) => {
              if (img) img.style.animationDelay = `${0.01 + index * 0.03}s`;
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
    <section ref={sectionRef} className="py-10 bg-black relative overflow-hidden">
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

        .animate-in .gallery-title {
          animation: slideInFromTop 0.8s ease-out forwards,
            glowPulse 2s ease-in-out infinite 1s;
        }

        .animate-in .gallery-item {
          opacity: 0;
          animation: slideInFromBottom 0.8s ease-out forwards;
        }

        .gallery-title,
        .gallery-item {
          opacity: 0;
        }

        /* Auto-scrolling */
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

        .item:hover img {
          filter: drop-shadow(0 0 12px var(--shadow-color));
        }
      `}</style>

      <div className="container mx-auto px-4">
        <h2
          className={`${jolly.className} gallery-title text-[#FF0700] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mb-12`}
        >
          Gallery
        </h2>

        <div className="relative">
          <div className="marquee mb-6">
            <div className="marquee-inner-left flex flex-nowrap items-center gap-8">
              {sponsors1.concat(sponsors1).map((sponsor, index) => (
                <div
                  key={`top-${sponsor.id}-${index}`}
                  ref={addToImagesRef}
                  className="gallery-item item h-36 md:h-60 flex-shrink-0 flex items-center justify-center"
                  style={{
                    "--shadow-color": hoverShadowColors[index % hoverShadowColors.length],
                  } as React.CSSProperties}
                >
                  <Image
                    src={sponsor.src}
                    alt={sponsor.alt}
                    width={200}
                    height={160}
                    className="w-auto h-28 md:h-40 object-contain rounded-lg transform transition-transform duration-300 hover:scale-110 hover:-rotate-6"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="marquee">
            <div className="marquee-inner-right flex flex-nowrap items-center gap-8">
              {sponsors2.concat(sponsors2).map((sponsor, index) => (
                <div
                  key={`bottom-${sponsor.id}-${index}`}
                  ref={addToImagesRef}
                  className="gallery-item item h-36 md:h-60 flex-shrink-0 flex items-center justify-center"
                  style={{
                    "--shadow-color": hoverShadowColors[index % hoverShadowColors.length],
                  } as React.CSSProperties}
                >
                  <Image
                    src={sponsor.src}
                    alt={sponsor.alt}
                    width={200}
                    height={160}
                    className="w-auto h-28 md:h-40 object-contain rounded-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-6"
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