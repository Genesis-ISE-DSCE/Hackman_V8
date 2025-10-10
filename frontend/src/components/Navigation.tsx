"use client";
import { Poppins, Jolly_Lodger } from "next/font/google";
import { useState } from "react";

const jolly = Jolly_Lodger({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

export function OrangeStrip() {
  return (
    <div
      className={`${jolly.className} w-full bg-[#FF6600] text-white text-center py-3 md:py-2 md:h-[6.5vh] flex items-center justify-center text-[clamp(16px,2.5vw,24px)] md:text-[1.45rem] tracking-[0.05em] z-50 animate-slide-down`}
      style={{
        animation: "slideDown 0.8s ease-out forwards",
      }}
    >
      <p
        className="leading-[140%] animate-fade-in px-2"
        style={{
          animation: "fadeIn 1s ease-out 0.3s forwards",
          opacity: 0,
        }}
      >
        Registrations Are Now Open For Hackman… If You Dare To Enter.
      </p>
    </div>
  );
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "#hero", label: "Home", delay: 0.5 },
    { href: "#about", label: "About Genesis", delay: 0.6 },
    { href: "#about-hackman", label: "About Hackman", delay: 0.7 },
    { href: "#gallery", label: "Gallery", delay: 0.8 },
    { href: "#sponsors", label: "Sponsors", delay: 0.9 },
  ];

  return (
    <>
      <div
        className={`${jolly.className} fixed w-full bg-[#FF6600] text-white text-center py-3 md:py-2 md:h-[6.5vh] flex items-center justify-center text-[clamp(16px,2.5vw,24px)] md:text-[1.45rem] tracking-[0.05em] z-50 animate-slide-down`}
        style={{
          animation: "slideDown 0.8s ease-out forwards",
        }}
      >
        <p
          className="leading-[140%] animate-fade-in px-2"
          style={{
            animation: "fadeIn 1s ease-out 0.3s forwards",
            opacity: 0,
          }}
        >
          Registrations Are Now Open For Hackman… If You Dare To Enter.
        </p>
      </div>

      <button
        className={`fixed top-16 left-6 z-60 flex flex-col items-center justify-center w-10 h-10 bg-black/30 rounded-lg backdrop-blur-sm md:hidden ${poppins.className}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        style={{
          animation: "fadeIn 0.8s ease-out 0.2s forwards",
          opacity: 0,
        }}
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${
            isMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
          }`}
        />
      </button>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
          onClick={toggleMenu}
        />
      )}

      <div
        className={`fixed left-0 top-0 h-full w-64 bg-black/50 backdrop-blur-md z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6">
          <button
            className="absolute top-6 right-6 text-white text-2xl"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            ×
          </button>
          
          <ul className="flex flex-col gap-4">
            {navItems.map((item, idx) => (
              <li
                key={idx}
                className="flex"
              >
                <a
                  href={item.href}
                  className="relative group flex items-center px-4 py-3 hover:text-gray-400 transition-all duration-300 transform hover:translate-x-2 text-lg font-medium w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-500 group-hover:w-full group-hover:shadow-lg group-hover:shadow-orange-400/50"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto pb-8">
            <div className="border-t border-gray-600 pt-4">
              <img
                src="/genesis-2k25-logo.png"
                alt="Genesis 2025 Logo"
                className="h-12 mx-auto transform transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`fixed left-4 right-4 top-12 bg-black/20 text-white ${poppins.className} px-6 py-3 md:px-16 md:py-2 flex flex-col md:flex-row items-center justify-between z-40 animate-fade-in-up gap-4 md:gap-0 rounded-2xl shadow-lg`}
        style={{
          animation: "fadeInUp 0.8s ease-out 0.2s forwards",
          opacity: 0,
        }}
      >
        <ul className="hidden md:flex flex-wrap justify-center gap-2 md:gap-6 lg:gap-8 text-[clamp(14px,3vw,18px)] md:text-[1.1rem] lg:text-[1.2rem] order-2 md:order-1">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="flex"
              style={{
                animation: `fadeIn 0.6s ease-out ${item.delay}s forwards`,
                opacity: 0,
              }}
            >
              <a
                href={item.href}
                className="relative group flex items-center px-3 py-2 hover:text-gray-400 transition-all duration-500 transform hover:scale-105"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-500 group-hover:w-full group-hover:shadow-lg group-hover:shadow-orange-400/50"></span>
              </a>
            </li>
          ))}
        </ul>
        <div
          className="order-1 md:order-2 flex-shrink-0 mt-0 sm:mt-0"
          style={{
            animation: "fadeIn 0.8s ease-out 1s forwards",
            opacity: 0,
          }}
        >
          <img
            src="/genesis-2k25-logo.png"
            alt="Genesis 2025 Logo"
            className="h-12 md:h-16 lg:h-20 transform transition-all duration-300 hover:scale-110 hover:rotate-3"
          />
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        nav ul li a {
          position: relative;
          z-index: 10;
        }

        nav ul li a::after {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          z-index: -1;
        }

        @media (max-width: 768px) {
          nav {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          nav ul {
            gap: 0.5rem;
          }
          
          nav ul li a {
            padding: 0.75rem 1rem;
            font-size: clamp(12px, 3.5vw, 16px);
          }
        }

        @media (max-width: 480px) {
          nav {
            left: 2px;
            right: 2px;
            top: 10px;
          }
        }
      `}</style>
    </>
  );
}