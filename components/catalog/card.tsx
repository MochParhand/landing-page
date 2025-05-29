"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Stripes from "@/public/images/magasu.webp";
import AOS from "aos";
import "aos/dist/aos.css";

type CardProps = {
  title: string;
  description: string;
  badges: string[];
  liveDemoUrl: string;
  buyUrl: string;
  price: {
    current: string;
    original?: string;
  };
  images: { src: string; alt: string; hiddenOnSmall?: boolean }[];
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  badges,
  liveDemoUrl,
  buyUrl,
  price,
  images,
}) => {
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        AOS.refresh();
      }, 200); // delay supaya animasi lebih mulus
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div
      className="relative overflow-hidden rounded-2xl shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-duration="600"
    >
      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl" />
      </div>

      {/* Stripes Illustration */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={Stripes}
          width={768}
          height={432}
          alt="Stripes"
        />
      </div>

      {/* Card Content */}
      <div className="bg-[#f8f9fb] w-full max-w-6xl mx-auto rounded-2xl overflow-hidden flex flex-col lg:flex-row items-center lg:items-stretch p-6 lg:p-10 gap-6">
        {/* Left Content */}
        <div className="w-full lg:w-1/3 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
          {/* Title + Price */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-between w-full gap-2 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-1">
              {title}
            </h2>
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <span className="text-green-600 font-semibold">{price.current}</span>
              {price.original && (
                <span className="text-gray-400 line-through">{price.original}</span>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-base mt-2">{description}</p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-4">
            {badges.map((stack) => (
              <img
                key={stack}
                src={`https://img.icons8.com/color/48/${stack}.png`}
                alt={`${stack} icon`}
                title={stack}
                className="w-7 h-7 rounded-full shadow-sm"
                loading="lazy"
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start gap-4 mt-6 flex-wrap items-center">
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-gray-800 rounded-md text-sm shadow"
            >
              Preview →
            </a>
            <a
              href={buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm shadow hover:bg-gray-800"
            >
              Beli Sekarang →
            </a>
          </div>
        </div>

        {/* Right Content (Images) */}
        <div className="w-full lg:w-2/3 flex justify-center items-center gap-4 px-4 py-6 lg:py-0 lg:pl-10">
          {images.map(({ src, alt, hiddenOnSmall }) => (
            <div
              key={src}
              className={`relative w-[300px] sm:w-[332px] h-[250px] lg:h-full overflow-hidden rounded-xl shadow-lg ${
                hiddenOnSmall ? "hidden sm:block" : ""
              }`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                style={{ objectFit: "cover" }}
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
