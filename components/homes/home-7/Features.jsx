"use client";
import { integrations } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const categories = [
  "Predictive Maintenance",
  "Real-Time Monitoring",
  "Process Automation",
  "Data-Driven Insights",
];
export default function Features() {
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-10">
        <div className="container sm:max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span
                className="fs-7 fw-medium py-narrow px-2 border rounded-pill text-primary dark:text-tertiary"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                Industrial Integrations
              </span>
              <h2
                className="h3 lg:h2 m-0"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
               {/* <span className="px-1 bg-tertiary text-primary">
                  AI Automation
                </span>*/}{" "}
                Transforming Industry with Real-Time Industrial Insights
              </h2>
              <p
                className="fs-6 xl:fs-3 xl:px-8"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                Powered by Industry 4.0, IIoT next-gen efficiency fueling innovation, reducing costs, and transforming operations.
              </p>
            </div>
            <div
              className="panel vstack items-center gap-4 md:gap-6 lg:gap-8"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <ul
                className="uc-subnav uc-subnav-outline-pill gap-1 lg:gap-2 fs-5 fw-medium justify-start lg:justify-center mx-auto overflow-scroll hide-scrollbar flex-nowrap max-w-100"
                role="tablist"
              >
               {categories.map((category) => (
                  <li
                    key={category}
                    className="text-green-600 cursor-pointer"
                  >
                    <a>{category}</a>
                  </li>
                ))}
              </ul>
             
              <div
                className="products-lisiting flex-none w-100"
                role="presentation"
                style={{ touchAction: "pan-y pinch-zoom" }}
              >                <div
                  className="uc-active"
                  id="uc-switcher-24"
                  role="tabpanel"
                  aria-labelledby="uc-switcher-23"
                >
                  <div className="panel">
                    <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 gx-2 lg:gx-3 gy-4 lg:gy-6 col-match">
                      {integrations.map((item, index) => (
                        <div key={index}>
                          <div className="panel overflow-hidden border bg-white dark:bg-gray-900 dark:text-white hover:border-dark hover:contrast-shadow duration-150 hover:-translate-y-1 rounded-1-5">
                           <figure className="featured-image m-0 rounded ratio ratio-3x2 rounded-0 border-bottom border-dark border-opacity-20 uc-transition-toggle overflow-hidden flex items-center justify-center text-6xl">
  {item.icon ? (
    <span role="img" aria-label={item.title}>
      {item.icon}
    </span>
  ) : (
    <Image
      className="media-cover image uc-transition-scale-up uc-transition-opaque"
      alt={item.title}
      src={item.imgSrc}
      width={200}
      height={200}
    />
  )}
</figure>
                            <div className="content vstack items-start gap-4 p-2 lg:p-4">
                              <div className="vstack gap-1">
                                <h4 className="h5 m-0">{item.title}</h4>
                                <p className="fs-6 opacity-60">
                                  {item.description}
                                </p>
                              </div>
                             {/* <a
                                href="#"
                                className="uc-link border-bottom fw-bold dark:text-tertiary"
                              >
                                <span>Get started</span>
                                <i className="icon-narrow unicon-arrow-right fw-bold" />
                              </a>*/}
                            </div>
                            <Link
                              href={`/iiot-features`}
                              className="position-cover"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
             {/* <Link
                href={`/iiot-integrations`}
                className="btn btn-md xl:btn-lg btn-primary text-tertiary dark:bg-tertiary dark:text-primary dark:hover:bg-tertiary-300 px-3 lg:px-5 fw-bold"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                Browse all integrations
              </Link>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
