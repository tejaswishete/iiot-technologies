import Footer2 from "@/components/footers/Footer2";
import Header7 from "@/components/headers/Header7";
import Blogs from "@/components/homes/home-8/Blogs";
import Brands from "@/components/homes/home-8/Brands";
import Cta from "@/components/homes/home-8/Cta";
import Faqs from "@/components/homes/home-8/Faqs";
import Features from "@/components/homes/home-8/Features";
import Features2 from "@/components/homes/home-8/Features2";
import Feedback from "@/components/homes/home-2/Feedback";
import Hero from "@/components/homes/home-8/Hero";
import Pricing from "@/components/homes/home-8/Pricing";
//import Testimonials from "@/components/homes/home-8/Testimonials";
// import Testimonials from "@/components/homes/home-3/Testimonials";
import Tools from "@/components/homes/home-8/Tools";
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
          <div className="bp-xs bp-sm bp-md bp-lg dom-ready bp-xxl-max bp-xl uni-body panel uni-body panel bg-white text-white dark:bg-tertiary-800 dark:text-white overflow-x-hidden disable-cursor">
            <Header7 />
            <div id="wrapper" className="wrap">
              <Hero />
              <Brands />
              <Features />
              <Tools />
              <Features2 />
              <Pricing />
              <section className="text-start mt-[-20px] mb-6 px-4">
  {/* Horizontal line before heading */}
  <div className="w-16 h-1 bg-[#0b168a] mb-2"></div>

  <h1
    className="text-4xl font-bold dark:text-white"
    style={{ color: "#0b168a" }}
  >

  </h1>
  
</section>
              <Faqs />
              <Blogs />
              <section className="text-start mt-[-20px] mb-6 px-4">
  {/* Horizontal line before heading */}
  <div className="w-16 h-1 bg-[#0b168a] mb-2"></div>

  <h1
    className="text-4xl font-bold dark:text-white"
    style={{ color: "#0b168a" }}
  >

  </h1>
  
</section>
              <div className="mt-1">
  <Feedback />
</div>

              <Cta />
            </div>
            <Footer2 />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
