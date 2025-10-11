"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Jolly_Lodger, Poppins } from "next/font/google";
import Image from "next/image";
import { Toaster, toast } from 'react-hot-toast'; // 

const jollyLodger = Jolly_Lodger({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);

    const submitPromise = fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then(response => {
      if (!response.ok) {
        throw new Error('Something went wrong on the server.');
      }
      return response.json();
    });

    toast.promise(submitPromise, {
      loading: 'Sending your message...',
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.',
    });

    try {
      await submitPromise;
      setFormData({ name: "", email: "", message: "" }); 
    } catch (error) {
      // Error is handled by the toast
      console.error("Submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            const content = contentRef.current;
            if (content) {
              const children = content.querySelectorAll('h2, input, textarea, button');
              children.forEach((el, index) => {
                (el as HTMLElement).style.animationDelay = `${0.2 + index * 0.15}s`;
              });
            }
            elementsRef.current.forEach((el, index) => {
              if (el) (el as HTMLElement).style.animationDelay = `${0.2 + index * 0.15}s`;
            });
          }
        });
      }, { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if(sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const addToElementsRef = (el: HTMLDivElement | null) => {
    // ... this function remains unchanged
    if (el && !elementsRef.current.includes(el)) elementsRef.current.push(el);
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            border: '1px solid #FF0700',
            padding: '16px',
            color: '#FFFFFF',
            background: 'rgba(0,0,0,0.9)'
          },
        }}
      />

      <style jsx global>{`
        /* --- Styles for browser autofill fix --- */
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
            -webkit-text-fill-color: #ffffff !important;
            -webkit-box-shadow: 0 0 0px 1000px #121212 inset !important;
            transition: background-color 5000s ease-in-out 0s;
        }
        
        /* Your existing animation styles are unchanged */
        @keyframes slideInFromBottom { 0% { opacity:0; transform: translateY(50px); } 100% { opacity:1; transform: translateY(0); } }
        @keyframes slideInFromTop { 0% { opacity:0; transform: translateY(-50px); } 100% { opacity:1; transform: translateY(0); } }
        @keyframes floatUpDown { 0% { transform: translateY(0); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0); } }
        .floatingElement { animation: floatUpDown 3s ease-in-out infinite; }
        .animate-in h2 { animation: slideInFromTop 0.8s ease-out forwards; }
        .animate-in input, .animate-in textarea, .animate-in button { animation: slideInFromBottom 0.6s ease-out forwards; }
        .animate-in footer { animation: slideInFromBottom 0.8s ease-out forwards; }
        h2, input, textarea, button, footer { opacity: 0; }
      `}</style>

      <section ref={sectionRef} className="min-h-screen flex flex-col bg-[#000000] text-white relative overflow-hidden">
        <Image src="/spider-web.svg" alt="Spider Web" width={200} height={200} className="absolute top-[17vw] left-0 w-[30vw] max-w-[200px] h-auto opacity-100 z-0 hidden sm:block" />
        <Image src="/spider-web-right.svg" alt="Spider Web" width={200} height={200} className="absolute top-[11vw] right-[0vw] w-[30vw] max-w-[200px] h-auto opacity-100 z-0 hidden sm:block" />
        <Image src="/spider.png" alt="Hanging Spider" width={70} height={70} className="absolute top-[-14vw] left-[12vw] w-[10vw] max-w-[70px] z-10 hidden sm:block floatingElement" />
        <div className="absolute bottom-[35vw] right-[20vw] flex items-end space-x-[-10px] z-20 hidden md:flex floatingElement">
          <Image src="/pumpkin-evil.png" alt="Spooky Pumpkin" width={92} height={96} className="w-[60px] md:w-[92px] h-[60px] md:h-[96px]" />
          <Image src="/pumpkin-evil.png" alt="Another Spooky Pumpkin" width={62} height={57} className="w-[40px] md:w-[62px] h-[40px] md:h-[57px]" />
        </div>

        <div ref={contentRef} className="relative z-10 flex flex-col items-center max-w-[700px] mx-auto justify-start pt-10 md:pt-20 px-4 pb-10">
          <h2 className={`${jollyLodger.className} text-[#FF0000] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mb-8 md:mb-12`}>
            Contact Us
          </h2>
          <form
            onSubmit={handleSubmit}
            className="w-full space-y-4 md:space-y-6"
          >
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-3 md:p-4 bg-[#121212] rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 placeholder-gray-500" />
            <input type="email" name="email" placeholder="Your Email Id" value={formData.email} onChange={handleChange} className="w-full p-3 md:p-4 bg-[#121212] rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 placeholder-gray-500" />
            <textarea name="message" placeholder="Message" rows={4} value={formData.message} onChange={handleChange} className="w-full p-3 md:p-4 bg-[#121212] rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 placeholder-gray-500 resize-none" />
            <button type="submit" disabled={isSubmitting} className={`${jollyLodger.className} w-full md:w-[40%] mx-auto block bg-[#FE772D] text-gray-800 rounded-xl text-xl md:text-2xl py-3 md:py-4 transform transition-all duration-300 hover:scale-105 hover:bg-[#E5691F] hover:shadow-xl disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed`} >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <footer ref={addToElementsRef} className="relative w-full h-[150px] md:h-[500px] z-20 flex flex-col justify-center items-center text-center" style={{ backgroundColor: 'rgba(0,0,0,0.1)', backgroundImage: "url('/grass.png')", backgroundSize: 'cover', backgroundPosition: 'bottom center', backgroundRepeat: 'no-repeat' }}>
          <Image src="/genesis-2k25-logo.png" alt="Genesis 2025 Logo" width={150} height={150} className="mb-4 md:mb-6 mt-8 md:mt-50 w-[100px] md:w-[150px] h-auto filter brightness-75" />
          <nav className={`${poppins.className} flex flex-wrap justify-center space-x-4 md:space-x-8 text-gray-300 text-xs md:text-sm`}>
            <a href="#hero" className="hover:text-red-500 transition-colors duration-220">Home</a>
            <a href="#events" className="hover:text-red-500 transition-colors duration-220">Events</a>
            <a href="#sponsors" className="hover:text-red-500 transition-colors duration-220">Sponsors</a>
            <a href="#leads" className="hover:text-red-500 transition-colors duration-220">Leads</a>
            <a href="#gallery" className="hover:text-red-500 transition-colors duration-220">Gallery</a>
            <a href="#members" className="hover:text-red-500 transition-colors duration-220">Members</a>
          </nav>
          <p className="w-full text-center text-xs text-[#555555] py-2 md:mt-5">
            Made With <span className="text-red-500">❤️</span> By Genesis. All Rights Reserved.
          </p>
        </footer>
      </section>
    </>
  );
}