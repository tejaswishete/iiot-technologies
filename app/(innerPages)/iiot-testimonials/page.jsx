"use client";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import { testimonials2 } from "@/data/testimonials";
import React from "react";
import Image from "next/image";
//import { brands4 } from "@/data/brands";
//import { testimonials4 } from "@/data/testimonials";
//import Image from "next/image";
//import { Autoplay } from "swiper/modules";
//import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <>
      <Header2 />

      {/* This is where you would add your card content */}
      <main className="flex justify-center items-center min-h-[calc(100vh-HeaderHeight-FooterHeight)]">
        {/* You'll need to adjust HeaderHeight and FooterHeight based on your actual header/footer sizes */}
        <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
        {/* <div
  className="d-inline-flex align-items-center justify-content-center py-1 px-2 border rounded-pill "
  style={{ maxWidth: "fit-content", marginTop: "70px" }}
>
  
  <span
    className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary me-10"
    style={{ alignSelf: "flex-start", marginTop: "auto", marginBottom: "auto", transform: "translateY(4px)" }} // More complex for simple down
  />
  
  <span
    style={{ fontSize: "1.4rem", fontWeight: "bold", textTransform: "uppercase", whiteSpace: "nowrap" }}
  >
    testimonials
  </span>
</div> */}
 <section className="pt-9 pb-2 text-center">
  <h1
    className="text-6xl font-bold dark:text-white"
    style={{ color: "#0b168a" }}
  >
    Testimonials 
  </h1>
</section>

     <div
                className="row child-cols-12 sm:child-cols-6 col-match g-2 lg:g-3 uc-grid"
                data-uc-grid=""
              >
                {testimonials2.map((item, index) => (
                  <div key={index} className="uc-grid-margin uc-first-column">
                    <div className="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border">
                      <div className="panel vstack items-start gap-2">
                        <div className="panel">
                          <div className="hstack h-48px">
                            <Image
                              className="w-128px text-gray-900 dark:text-white image-filter"
                              src={item.brandImg}
                              alt="Brand"
                              width={170}
                              height={48}
                              data-uc-svg=""
                            />
                          </div>
                        </div>
                        <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                          {item.testimonial}
                        </p>
                      </div>
                      <div className="panel hstack gap-2 mt-2 lg:mt-4">
                        <Image
                          className="w-40px rounded-circle"
                          src={item.authorImg}
                          alt={item.authorName}
                          width={150}
                          height={150}
                        />
                        <div className="panel vstack items-start gap-0">
                          <h6 className="h6 m-0">{item.authorName}</h6>
                          <span className="fs-7 opacity-70">
                            {item.authorRole}
                          </span>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                ))}
              </div>
          {/*<p className="text-gray-700">
            "This is a sample testimonial text. It would describe a positive experience."
          </p>
          <p className="mt-4 text-sm text-gray-500">- Customer Name</p>*/}
        </div>
      </main>

      <Footer2 />
    </>
  );
}