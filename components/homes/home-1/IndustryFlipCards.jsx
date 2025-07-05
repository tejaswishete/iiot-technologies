import { features } from "@/data/features";
import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <div
      id="main_features"
      className="key-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-9 max-w-700px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h2 xl:h1 m-0">
                Empower Your Operations with Smart Industrial Tools
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
               At IIOT Technologies, we build intelligent systems that streamline your workflows, ensure compliance, and bring full control to your industrial applications.
              </p>
            </div>
            <div className="row child-cols-12 sm:child-cols-6 xl:child-cols-4 col-match justify-center g-2 lg:g-4">
              {features.map((feature, index) => (
               <div key={index}>
  <div
    className="feature-item panel px-3 lg:px-4 py-4 rounded-2 bg-secondary dark:bg-gray-800 relative overflow-hidden group"
    style={{ cursor: "pointer" }}
  >
    {/* White overlay - slides up on hover */}
    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-20" />

    {/* Card content - fades out on hover */}
    <div className="vstack gap-4 h-100 relative z-10 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
      <div className="panel w-100 rounded lg:rounded-2 overflow-hidden">
        <Image
          src={feature.imgSrc}
          width={580}
          height={528}
          alt={feature.imgAlt}
        />
      </div>
      <div className="panel">
        <div className="panel vstack justify-center items-center gap-4 h-100">
          <div>
            <div className="panel vstack items-center gap-2">
              <h3 className="h4 m-0 text-center">{feature.title}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
