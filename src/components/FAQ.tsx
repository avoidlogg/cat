"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Why choose Heroic Bypass?",
    answer: "Heroic Bypass is designed to provide a smooth, simple, and reliable user experience. We focus on consistent updates, easy setup, and responsive customer support.",
  },
  {
    question: "Is Heroic Bypass safe to use?",
    answer: "We take security and privacy seriously, but no third-party FiveM software can be guaranteed completely risk-free. Customers are responsible for following FiveM and individual server rules before using the product.",
  },
  {
    question: "How often is Heroic Bypass updated?",
    answer: "Heroic Bypass is updated whenever necessary to maintain performance, compatibility, and stability. Important update information is posted through our official community channels.",
  },
  {
    question: "What are the system requirements?",
    answer: "You will need a supported version of Windows, a stable internet connection, and access to the required installation files. Additional requirements will be provided after purchase.",
  },
  {
    question: "Is Heroic Bypass easy to install?",
    answer: "Yes. The setup process is designed to be straightforward, and clear instructions are provided. Our support team is available if you experience any issues.",
  },
  {
    question: "What should I do if the product is not working?",
    answer: "First, review the setup instructions and confirm that your system meets the requirements. If the issue continues, open a support ticket and provide screenshots or error messages so our team can assist you.",
  },
  {
    question: "Can I share my Heroic Bypass account?",
    answer: "No. Each license is intended for one customer and should not be shared, resold, or distributed. Account sharing may result in the license being permanently revoked.",
  },
  {
    question: "Does Heroic Bypass offer refunds?",
    answer: "Due to the digital nature of the product, all purchases are generally final. Refunds are not provided for user error, incompatible systems, or failure to follow the installation instructions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full">
      <div className="w-full h-full flex flex-col">
        <div className="relative w-full">
          <div className="text-center relative overflow-hidden py-8 md:py-12 px-4 md:px-8 lg:px-12">
            <h2 className="motion-reveal text-sm text-muted-foreground text-balance font-semibold tracking-tight uppercase">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>
          <div className="pointer-events-none absolute inset-0 w-full h-full bg-linear-to-t from-transparent -z-10 from-50%"></div>
          <div className="w-full h-full -z-20 absolute inset-0 size-full">
            <canvas
              className="pointer-events-none"
              width="1517"
              height="116"
            ></canvas>
          </div>
        </div>
        
        <div>
          <div className="mx-auto max-w-5xl px-6 py-12 relative">
            <div className="w-full space-y-2">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                
                return (
                  <div
                    key={index}
                    className="motion-reveal motion-faq-row border-b border-border/50 px-6"
                    style={{ transitionDelay: `${Math.min(index, 6) * 55}ms` }}
                  >
                    <h3 className="flex">
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className={`flex flex-1 items-center justify-between py-4 font-medium transition-all text-left hover:no-underline ${
                          isOpen ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {faq.question}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-400 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </h3>
                    <div
                      className={`overflow-hidden text-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen ? "max-h-40 opacity-100 mb-4" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
