"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/FAQ.module.css';

// --- Step 1: Define the types ---

// Type for a single FAQ item's data
interface FaqItemData {
  id: number;
  question: string;
  answer: string;
}

// Type for the props of the FAQItem component
interface FAQItemProps {
  question: string;
  answer: string;
}

// --- Step 2: Type the components and data ---

// Type the FAQItem component with its props
const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.faqItem}>
      <div className={styles.faqQuestion} onClick={toggleOpen}>
        <h3>{question}</h3>
        <span className={styles.toggleIcon}>{isOpen ? '−' : '+' }</span>
      </div>
      {isOpen && (
        <div className={styles.faqAnswer}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

// Type the faqData array
const faqData: FaqItemData[] = [
  {
    id: 1,
    question: "What is Hackman v8?",
    answer: "Hackman is a 24-hour Inter-College Hackathon, hosted by the Department of Information Science, DSCE",
  },
  {
    id: 2,
    question: "Who can participate in Hackman v8?",
    answer: "Any student pursuing engineering from any year with an interest in technology can participate in Hackman. This includes programmers, designers, data scientists, and other tech enthusiasts.",
  },
  {
    id: 3,
    question: "Is there a registration fee for Hackman v8?",
    answer: "Yes, there is a minimal registration fee of ₹600 per team.",
  },
  {
    id: 4,
    question: "What is the theme of Hackman v8?",
    answer: "Hackman v8 has an open theme for the choice of topics, meaning participants are free to work on any project belonging to a domain of their liking.",
  },
  {
    id: 5,
    question: "Will food, shelter and refreshments be provided at Hackman v8?",
    answer: "Yes. Food, shelter and timely refreshments will be provided to all the participants throughout the duration of the Hackathon.",
  },
  {
    id: 6,
    question: "How will projects be judged at Hackman v8?",
    answer: "Projects at Hackman v8 will be judged based on a set of criteria established by the event organizers, which may include factors such as creativity, technical complexity, feasibility, and potential impact.",
  },
  {
    id: 7,
    question: "How many members can be on a team at Hackman v8?",
    answer: "Teams at Hackman v8 can range in size from 2 to 4 members. This allows participants to collaborate with others and share the workload while still keeping the teams small enough to ensure efficient communication and decision-making.",
  },
  {
    id: 8,
    question: "What should I bring to this hackathon?",
    answer: "You should bring your laptop, any necessary chargers or accessories, and any other tools or resources you may need to work on your project. Optionally, you may also want to bring a change of clothes, toiletries, and any snacks or drinks you prefer.",
  },
  {
    id: 9,
    question: "Do I need to have programming experience to participate?",
    answer: "While programming experience is certainly helpful, it is not always required to participate in HACKMAN. We also welcome designers, data scientists, and other tech enthusiasts who can contribute to the development of a project in other ways.",
  },
  {
    id: 10,
    question: "What are the benefits of participating in Hackman v8?",
    answer: "It offers a variety of benefits, including the opportunity to learn new skills, network with like-minded individuals, gain exposure to new technologies and ideas, and potentially win prizes or recognition for your work.",
  },
];

// Type the main FAQ component
const FAQ: React.FC = () => {
  return (
    <section className={styles.faqSection}>
      {/* Flex Item 1: The Skull */}
      <Image
        src="/skull.png"
        alt="Decorative Skull"
        width={265}
        height={490}
        className={styles.faqSkullLeft}
      />

      {/* Flex Item 2: A new wrapper for all text content */}
      <div className={styles.faqContent}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqContainer}>
          {faqData.map((item) => (
            <FAQItem key={item.id} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;