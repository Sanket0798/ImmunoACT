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
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="Hero Video"
        />
      </div>
    </section>
  );
};

export default FacilitySection;
