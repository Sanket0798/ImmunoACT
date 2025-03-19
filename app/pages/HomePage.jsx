import React from "react";
import HeroSection from "../component/sections/HomePage/HeroSection";
import CellTherapySection from "../component/sections/HomePage/CellTherapySection";
import HospitalSection from "../component/sections/HomePage/HospitalSection";
import PartnerSection from "../component/sections/HomePage/PartnerSection";
// import PatientStorySection from "../component/sections/HomePage/PatientStorySection";
import FacilitySection from "../component/sections/HomePage/FacilitySection";
import FAQSection from "../component/sections/HomePage/FAQSection";
// import Hospital from "@/app/pages/HospitalPage";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CellTherapySection />
      <HospitalSection />
      <PartnerSection />
      {/* <PatientStorySection /> */}
      <FacilitySection />
      <FAQSection />
      {/* <Hospital /> */}
    </>
  );
};

export default HomePage;
