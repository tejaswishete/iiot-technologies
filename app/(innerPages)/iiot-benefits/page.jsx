"use client";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import { features5 } from "@/data/features";
import Process from "@/components/homes/home-10/Process";
import Solutions from "@/components/homes/home-9/Solutions"; // ✅ Import your Features component

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ClientPage() {
  return (
    <div className="bg-white text-black">
      <Header2 />

      {/* Spacing below header */}
      <div className="mt-10">
        {/* IIOT Benefits Cards Section */}
        <div
          id="key_features"
          className="key-features section panel overflow-hidden scrollSpysection"
        >
          <div className="section-outer panel py-6 lg:py-8 xl:py-10">
            <div className="container xl:max-w-lg">
              <div className="section-inner panel vstack gap-4 lg:gap-6 xl:gap-8">
               <div
  className="panel vstack items-center gap-2 xl:gap-3 text-center"
  data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
>
  {/* <div className="cstack gap-1 py-1 px-3 border rounded-pill">
    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
   <span
  style={{ fontSize: "1.4rem", fontWeight: "bold", textTransform: "uppercase" }}
>
  Business Benefits of IIOT
</span>
  </div> */}
   <section className="pt-2 pb-2 text-center">
  <h1
    className="text-6xl font-bold dark:text-white"
    style={{ color: "#0b168a" }}
  >
   Business Benefits of IIOT
  </h1>
</section>


                  <p className="fs-4 max-w-lg mx-auto m-0">
                    Unlock Smart Manufacturing with Real-Time Insights and
                    Efficiency
                  </p>
                </div>

                <div
                  className="panel"
                  data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
                >
                  <div
                    className="features-items row child-cols-6 lg:child-cols-3 g-2 md:g-4 col-match"
                    data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
                  >
                    {features5.map((feature, index) => (
                      <div key={index}>
                        <div className="features-item vstack justify-between gap-4 p-2 md:p-4 bg-secondary hover:bg-secondary-300 dark:bg-gray-800 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-150 rounded-1-5 md:min-h-250px group">
                          <div className="icon-box w-40px md:w-48px h-40px md:h-48px rounded-circle cstack bg-primary dark:bg-secondary">
                            <Image
                              className="w-20px xl:w-24px text-white dark:text-primary image-filter-white dark-image-filter-none"
                              src={feature.iconSrc}
                              width={24}
                              height={24}
                              alt={feature.alt}
                              data-uc-svg=""
                            />
                          </div>
                          <h3 className="title h6 md:h5 m-0 cursor-pointer">
                            {feature.title}
                          </h3>

                          <a href="" className="position-cover"></a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section Below Cards */}
        <div className="mt-1">
          <Process />
          <Solutions />
        </div>
      </div>

      <Footer2 />
    </div>
  );
}
