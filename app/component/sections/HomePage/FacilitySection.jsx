import React from "react";
import HeroVideoDialog from "../../../../components/magicui/hero-video-dialog";

const FacilitySection = () => {
  return (
    <section className="container py-10">
      <div className="relative flex justify-center">
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/AwroDnmW-Ds?si=orhVhi6bUqdqfb0P"
          thumbnailSrc="/assets/sections/FacilitySection/FacilityThumbnail.jpg"
          thumbnailAlt="Hero Video"
        />
      </div>
    </section>
  );
};

export default FacilitySection;
