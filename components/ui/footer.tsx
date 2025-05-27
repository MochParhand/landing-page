"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "1. Apa itu undangan digital?",
      answer:
        "Undangan digital adalah bentuk undangan yang dikirim secara online melalui link atau media sosial, tanpa menggunakan undangan fisik.",
    },
    {
      question: "2. Bagaimana cara membagikan undangan?",
      answer:
        "Kamu cukup menyalin link undangan dan membagikannya melalui WhatsApp, Instagram, email, atau media sosial lainnya.",
    },
    {
      question: "3. Apakah undangan ini bisa diakses di semua perangkat?",
      answer:
        "Ya, undangan digital kami responsif dan bisa dibuka di HP, tablet, maupun komputer.",
    },
    {
      question: "4. Apakah bisa menambahkan peta lokasi?",
      answer:
        "Tentu, kami menyediakan fitur integrasi dengan Google Maps agar tamu mudah menemukan lokasi acara.",
    },
    {
      question: "5. Apakah bisa menambahkan lagu atau musik?",
      answer:
        "Ya, kamu bisa menambahkan lagu favoritmu sebagai latar belakang undangan.",
    },
  ];

  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: FAQ Section */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${
            border
              ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]"
              : ""
          }`}
        >
          <div className="sm:col-span-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Pertanyaan Umum (FAQ)
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-medium hover:bg-gray-50 transition"
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div className="px-4 pb-4 text-sm text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Text and Glow */}
      <div
        className="relative -mt-16 h-60 w-full"
        aria-hidden="true"
      >
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-linear-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['FAQ'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['FAQ'] after:[text-shadow:0_1px_0_white]"></div>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
        </div>
      </div>
      <div className="py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} <span className="font-medium text-gray-700">magasu.id</span>. All rights reserved.
      </div>
    </footer>
  );
}
