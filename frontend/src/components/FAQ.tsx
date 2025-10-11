"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Jolly_Lodger, Poppins } from "next/font/google";
import styles from '../styles/FAQ.module.css';
const jollyLodger = Jolly_Lodger({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement | null>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (itemRef.current) {
      itemRef.current.style.animationDelay = `${0.2 + index * 0.15}s`;
    }
  }, [index]);

  return (
    <div ref={itemRef} className={`${styles.faqItem} animate-fade-up`}>
      <div className={styles.faqQuestion} onClick={toggleOpen}>
        <h3>{question}</h3>
        <span className={styles.toggleIcon}>{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && (
        <div className={styles.faqAnswer}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const faqData = [
  { id: 1, question: "What is Hackman v8?", answer: "Hackman is a 24-hour Inter-College Hackathon, hosted by the Department of Information Science, DSCE" },
  { id: 2, question: "Who can participate in Hackman v8?", answer: "Any student pursuing engineering from any year with an interest in technology can participate in Hackman. This includes programmers, designers, data scientists, and other tech enthusiasts." },
  { id: 3, question: "Is there a registration fee for Hackman v8?", answer: "Yes, there is a minimal registration fee of ₹600 per team." },
  { id: 4, question: "What is the theme of Hackman v8?", answer: "Hackman v8 has an open theme for the choice of topics, meaning participants are free to work on any project belonging to a domain of their liking." },
  { id: 5, question: "Will food, shelter and refreshments be provided at Hackman v8?", answer: "Yes. Food, shelter and timely refreshments will be provided to all the participants throughout the duration of the Hackathon." },
  { id: 6, question: "How will projects be judged at Hackman v8?", answer: "Projects at Hackman v8 will be judged based on a set of criteria established by the event organizers, which may include factors such as creativity, technical complexity, feasibility, and potential impact." },
  { id: 7, question: "How many members can be on a team at Hackman v8?", answer: "Teams at Hackman v8 can range in size from 2 to 4 members. This allows participants to collaborate with others and share the workload while still keeping the teams small enough to ensure efficient communication and decision-making." },
  { id: 8, question: "What should I bring to this hackathon?", answer: "You should bring your laptop, any necessary chargers or accessories, and any other tools or resources you may need to work on your project. Optionally, you may also want to bring a change of clothes, toiletries, and any snacks or drinks you prefer." },
  { id: 9, question: "Do I need to have programming experience to participate?", answer: "While programming experience is certainly helpful, it is not always required to participate in HACKMAN. We also welcome designers, data scientists, and other tech enthusiasts who can contribute to the development of a project in other ways." },
  { id: 10, question: "What are the benefits of participating in Hackman v8?", answer: "It offers a variety of benefits, including the opportunity to learn new skills, network with like-minded individuals, gain exposure to new technologies and ideas, and potentially win prizes or recognition for your work." },
];

const FAQ: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          } else {
            entry.target.classList.remove('animate-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes fadeUp { 
          0% { opacity: 0; transform: translateY(50px); } 
          100% { opacity: 1; transform: translateY(0); } 
        }
        .animate-fade-up { opacity: 0; transform: translateY(50px); }
        .animate-in .animate-fade-up { animation: fadeUp 0.6s ease-out forwards; }
        .animate-in h2 { opacity: 0; transform: translateY(-50px); animation: fadeUp 0.8s ease-out forwards; }

        @keyframes floatUpDown {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }
        .animate-in .faq-title {
          animation: slideInFromTop 0.8s ease-out forwards,
            glowPulse 2s ease-in-out infinite 1s;
        }
        .floatingSkull {
          animation: floatUpDown 2s ease-in-out infinite;
        }
      `}</style>

      <section ref={sectionRef} className={`${styles.faqSection} relative`}>
        <Image
          src="/skull.png"
          alt="Decorative Skull"
          width={265}
          height={490}
          className={`${styles.faqSkullLeft} floatingSkull`}
        />

        <div className={styles.faqContent}>
          {/* <h2 className={`${jollyLodger.className} text-[#FF0000] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mb-8 md:mb-12`}> */}
          {/* <h2 className={`${styles.faqTitle} text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl faq-title text-center mb-6`}> */}
          <h2 className={styles.faqTitle}>
            Frequently Asked Questions
          </h2>
          <div className={styles.faqContainer}>
            {faqData.map((item, index) => (
              <FAQItem key={item.id} index={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
