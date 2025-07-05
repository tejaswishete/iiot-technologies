import Footer2 from "@/components/footers/Footer2";
import Header7 from "@/components/headers/Header7";
import Blogs from "@/components/homes/home-8/Blogs";
import Brands from "@/components/homes/home-8/Brands";
import Cta from "@/components/homes/home-8/Cta";
import Faqs from "@/components/homes/home-8/Faqs";
import Features from "@/components/homes/home-8/Features";
import Features2 from "@/components/homes/home-8/Features2";
import Hero from "@/components/homes/home-8/Hero";
import Pricing from "@/components/homes/home-8/Pricing";
//import Testimonials from "@/components/homes/home-8/Testimonials";
import Tools from "@/components/homes/home-8/Tools";
//import Team from "@/components/homes/home-1/Team";
//import Team from "@/components/innerpages/Team";
import React from "react";
export const metadata = {
  title:
    "IIoT Technologies",
  description:
    "IIoT Technologies",
};
export default function page() {
  return (
    <>
      <div className="theme-4">
        <div className="page-wrapper">
          <div className="bp-xs bp-sm bp-md bp-lg dom-ready bp-xxl-max bp-xl uni-body panel uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 dark:text-tertiary-200 overflow-x-hidden disable-cursor">
            <Header7 />
            <div id="wrapper" className="wrap">
              <Hero />
              <Brands />
              <Features />
              <Tools />
              <Features2 />
              <Pricing />
<div className="mt-16">
 {/* Adjust spacing with mt-8, mt-10, mt-12 etc. */}
  <Faqs />
</div>
              <Blogs />
              <Cta />
            </div>
            <Footer2 />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
