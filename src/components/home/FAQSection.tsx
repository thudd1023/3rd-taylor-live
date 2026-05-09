"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";

const faqs = [
  {
    q: "Do you just strategize or also execute?",
    a: "We design the system and operate it — so you don't manage multiple vendors.",
  },
  {
    q: "Is this just paid media?",
    a: "No. Paid is one component of a coordinated campaign system that includes messaging, nurture sequences, and marketing-to-sales alignment. Everything works together.",
  },
  {
    q: "Do we need expensive ABM software?",
    a: "If you already have tools, we'll use them. If not, we include what's needed to run targeted campaigns without unnecessary cost.",
  },
  {
    q: "Is this for companies with no pipeline?",
    a: "We work with B2B companies that have product-market fit and want to kickstart or make pipeline more predictable.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-white border-t border-[#D4CEFF]">
      <div className="container-site max-w-3xl mx-auto">
        <FadeIn className="mb-12 text-center">
          <h2 className="font-headline text-display-sm text-[#18153A]">
            Frequently asked questions
          </h2>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={i} delay={0.06 * i}>
                <div
                  className={`rounded-xl border cursor-pointer transition-all duration-300 ${
                    isOpen
                      ? "border-brand-primary bg-[#F0ECFF]"
                      : "border-[#D4CEFF] hover:border-brand-primary/50"
                  }`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <div className="flex items-center justify-between px-6 py-5 gap-4">
                    <h3
                      className={`font-body font-semibold text-base transition-colors duration-300 ${
                        isOpen ? "text-[#18153A]" : "text-[#18153A]"
                      }`}
                    >
                      {faq.q}
                    </h3>
                    <span
                      className={`flex-shrink-0 text-lg transition-all duration-300 ${
                        isOpen ? "rotate-180 text-brand-primary" : "text-[#4A3F8C]"
                      }`}
                    >
                      ↓
                    </span>
                  </div>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-[#4A3F8C] font-body text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
