import React from "react";

type CardProps = {
  title: string;
  description: string;
  badges: string[];
  liveDemoUrl: string;
  buyUrl: string;
  images: { src: string; alt: string; hiddenOnSmall?: boolean }[];
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  badges,
  liveDemoUrl,
  buyUrl,
  images,
}) => {
  return (
    <div className="bg-[#f8f9fb] w-full max-w-6xl mx-auto rounded-2xl overflow-hidden flex flex-col lg:flex-row items-center lg:items-stretch p-6 lg:p-10 shadow-sm">
      {/* Left Content */}
      <div className="w-full lg:w-1/3 text-center lg:text-left flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-gray-900 flex justify-center lg:justify-start items-center gap-1">
          {title} <span className="text-gray-500">↗</span>
        </h2>
        <p className="text-gray-500 text-base mt-2">{description}</p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-4">
          {badges.map((stack) => (
            <img
              key={stack}
              src={`https://cruip.com/wp-content/themes/cruip-2/dist/images/${stack}.svg`}
              alt={`${stack} badge`}
              title={stack}
              className="w-7 h-7 bg-white rounded-full shadow-sm"
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center lg:justify-start gap-4 mt-6 flex-wrap">
          <a
            href={liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-gray-800 rounded-md text-sm shadow"
          >
            Live Demo →
          </a>
          <a
            href={buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm shadow hover:bg-gray-800"
          >
            Buy Now – $69
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
      <img
        src={src}
        alt={alt}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  ))}
</div>

    </div>
  );
};

export default Card;
