"use client";
import React from "react";
import { Jolly_Lodger } from "next/font/google";
import Image from "next/image";

const jolly = Jolly_Lodger({ weight: "400", subsets: ["latin"] });

const sponsors1 = [
  { id: 1, src: "/DSC1.JPG", alt: "img 1", color: "rgb(0, 0, 139)" },
  { id: 2, src: "/DSC2.JPG", alt: "img 2", color: "rgb(255, 255, 224)" },
  { id: 3, src: "/DSC3.JPG", alt: "img 3", color: "rgb(255, 0, 0)" },
  { id: 4, src: "/DSC4.JPG", alt: "img 4", color: "rgb(255, 215, 0)" },
  { id: 5, src: "/DSC5.JPG", alt: "img 5", color: "rgb(0, 0, 128)" },
  { id: 6, src: "/DSC6.JPG", alt: "img 6", color: "rgb(128, 0, 255)" },
  { id: 7, src: "/DSC7.JPG", alt: "img 7", color: "rgb(0, 150, 136)" },
  { id: 8, src: "/DSC8.JPG", alt: "img 8", color: "rgb(0, 119, 190)" },
  { id: 9, src: "/DSC9.JPG", alt: "img 9", color: "rgb(135, 206, 235)" },
  { id: 10, src: "/DSC10.JPG", alt: "img 10", color: "rgb(144, 238, 144)" },
];

const sponsors2 = [
  { id: 11, src: "/DSC11.JPG", alt: "img 11", color: "rgb(128, 0, 128)" },
  { id: 12, src: "/DSC12.JPG", alt: "img 12", color: "rgb(255, 165, 0)" },
  { id: 13, src: "/DSC13.JPG", alt: "img 13", color: "rgb(0, 128, 0)" },
  { id: 14, src: "/DSC14.JPG", alt: "img 14", color: "rgb(0, 0, 139)" },
  { id: 15, src: "/DSC15.JPG", alt: "img 15", color: "rgb(255, 255, 224)" },
  { id: 16, src: "/DSC16.JPG", alt: "img 16", color: "rgb(255, 0, 0)" },
  { id: 17, src: "/DSC17.JPG", alt: "img 17", color: "rgb(255, 215, 0)" },
  { id: 18, src: "/DSC18.JPG", alt: "img 18", color: "rgb(0, 0, 128)" },
  { id: 19, src: "/DSC19.JPG", alt: "img 19", color: "rgb(128, 0, 255)" },
  { id: 20, src: "/DSC20.JPG", alt: "img 20", color: "rgb(128, 0, 255)" },
];

export default function Gallery() {
  const hoverShadowColors = [
    'rgba(173, 216, 230, 1)', // 1 light blue
    'rgba(255, 255, 255, 0.9)', // 2 white
    'rgba(255, 0, 0, 1)',     // 3 red
    'rgba(255, 215, 0, 1)',   // 4 yellow
    'rgba(0, 0, 139, 1)',     // 5 dark blue
    'rgba(128, 0, 128, 1)',   // 6 purple
    'rgba(0, 100, 0, 1)',     // 7 dark green
    'rgba(0, 119, 190, 1)',   // 8 ocean blue
    'rgba(135, 206, 235, 1)', // 9 sky blue
    'rgba(144, 238, 144, 1)', // 10 light green
    'rgba(238, 130, 238, 1)', // 11 violet
    'rgba(255, 165, 0, 1)',   // 12 orange
    'rgba(0, 100, 0, 1)',     // 13 dark green
  ];

  return (
    <section className="py-10 bg-black-60 relative">
      <div className="container mx-auto px-4">
        <h2
          className={`${jolly.className} text-[#FF0700] text-[72px] text-center mb-12`}
        >
          Gallery
        </h2>

        <div className="relative overflow-hidden">
          {/* First marquee - moves left */}
          <div className="marquee -mb-6">
            <div className="marquee-inner-left flex flex-nowrap items-center gap-8">
              {sponsors2.map((sponsor, index) => (
                <div
                  key={`${sponsor.id}-${index}`}
                  className={`item h-36 md:h-60 flex-shrink-0 flex items-center justify-center`}
                  style={{ '--shadow-color': hoverShadowColors[index % hoverShadowColors.length] } as React.CSSProperties}
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
              {sponsors2.map((sponsor, index) => (
                <div
                  key={`dup-${sponsor.id}-${index}`}
                  className={`item h-36 md:h-48 flex-shrink-0 flex items-center justify-center`}
                  style={{ '--shadow-color': hoverShadowColors[index % hoverShadowColors.length] } as React.CSSProperties}
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

          {/* Second marquee - moves right */}
          <div className="marquee">
            <div className="marquee-inner-right flex flex-nowrap items-center gap-8">
              {sponsors1.map((sponsor, index) => (
                <div
                  key={`${sponsor.id}-${index}`}
                  className={`item h-36 md:h-60 flex-shrink-0 flex items-center justify-center`}
                  style={{ '--shadow-color': hoverShadowColors[index % hoverShadowColors.length] } as React.CSSProperties}
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
              {sponsors1.map((sponsor, index) => (
                <div
                  key={`dup-${sponsor.id}-${index}`}
                  className={`item h-36 md:h-48 flex-shrink-0 flex items-center justify-center`}
                  style={{ '--shadow-color': hoverShadowColors[index % hoverShadowColors.length] } as React.CSSProperties}
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
        </div>
        
      </div>
      <style jsx>{`
        .marquee { 
          overflow: hidden; 
        }
          
        .marquee-inner-left {
          will-change: transform;
          width: max-content;
          animation: marquee-scroll-left 36s linear infinite;
        }
        .marquee-inner-right {
          will-change: transform;
          width: max-content;
          animation: marquee-scroll-right 36s linear infinite;
        }
        .item:hover img {
          filter: drop-shadow(0 0 12px var(--shadow-color));
        }
        @keyframes marquee-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
}