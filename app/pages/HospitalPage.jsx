"use client";
import MapPage from "@/app/component/sections/HomePage/MapComponent";

export default function HospitalPage() {
  return (
    // <div className="hospital-container">
    //   <h1>Hospital Information</h1>
    //   <div className="hospital-content">
    //     <p>Welcome to our Hospital Page</p>
    //   </div>
    // </div>

    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* <p>Hello world</p> */}

        <MapPage />
      </div>
    </section>
  );
}
