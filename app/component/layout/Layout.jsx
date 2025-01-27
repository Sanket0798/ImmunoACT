import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="md:sticky md:top-0 md:z-50">
        <Navbar />
      </div>
      <main className="flex-grow overflow-auto">{children}</main>

      <div className="md:sticky md:top-0 md:z-40">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
