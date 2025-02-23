"use client";
import React, { useMemo } from "react";
import { cn } from "../../../lib/utils";
import { Marquee } from "../../../../components/magicui/marquee";
import { partners } from "../../../data/sharedData";

const PartnerLogo = React.memo(({ img, name }) => {
  return (
    <div
      className={cn(
        "relative w-[240px] h-[120px] mx-4 flex items-center justify-center",
        "transition-all duration-300 ease-in-out"
      )}
    >
      <img
        src={img}
        alt={`${name} logo`}
        className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
        loading="lazy"
      />
    </div>
  );
});

PartnerLogo.displayName = "PartnerLogo";

const PartnerSection = () => {
  const partnersList = useMemo(() => partners, []);

  return (
    <section className="relative w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-10">
          <h2 className="text-3xl font-bold text-[#19231A] sm:text-4xl">  
            Our Partners
          </h2>
          <p className="mt-4 text-base text-gray-600">
            To advance the research and development of our innovative
            gene-modified cell therapies, we are fostering relationships across
            academia, healthcare institutions, and strategic partnerships with
            the intent to equitize access.
          </p>
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4">
        <Marquee className="[--duration:30s] sm:[--duration:25s] md:[--duration:20s]">
          {partnersList.map((partner) => (
            <PartnerLogo key={partner.name} {...partner} />
          ))}
        </Marquee>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[10%] sm:w-[15%] md:w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[10%] sm:w-[15%] md:w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
};

export default React.memo(PartnerSection);
