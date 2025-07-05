import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Topbar from "@/components/headers/Topbar";
//import Blogs from "@/components/homes/home-7/Blogs";
// import Brands from "@/components/homes/home-7/Brands";
import Cta from "@/components/homes/home-7/Cta";
// import Faqs from "@/components/homes/home-7/Faqs";
import Features from "@/components/homes/home-7/Features";
import Hero from "@/components/homes/home-7/Hero";
// import Pricing from "@/components/homes/home-7/Pricing";
import Solutions from "@/components/homes/home-7/Solutions";
import Testimonials from "@/components/homes/home-7/Testimonials";
import React from "react";

export const metadata = {
  title: "IIoT Technologies",
  description: "IIoT Technologies",
};

export default function page() {
  return (
    <>
      <div className="theme-3 bg-white">
        <div className="bp-xs page-wrapper home-7 bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel bg-white text-gray-900 overflow-x-hidden disable-cursor">
          <Topbar />
          <Header2 />
          <div id="wrapper" className="wrap bg-white">
            <Hero />
            {/* <Brands /> */}
            <Features />
            <Solutions />
            {/* <Pricing /> */}
            <Testimonials />
            {/* <Faqs /> */}
            {/* <Blogs /> */}
            <Cta />
          </div>
          <Footer2 />
        </div>
      </div>
    </>
  );
}
