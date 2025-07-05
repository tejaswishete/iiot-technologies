import { steps } from "@/data/process";
import Image from "next/image";
import React from "react";

export default function Process() {
  return (
    <div
      id="how_it_works"
      className="how-it-works section panel overflow-hidden"
    >
      <div className="section-outer panel">
        <div className="container">
          {/* ✨ New Heading Added Here */}
          <div className="text-center py-6">
  <h1 className="fs-1 font-semibold m-0">
    Custom solutions tailored to your business needs
  </h1>
</div>

          <div
            className="section-inner panel vstack border rounded-3 overflow-hidden bg-secondary dark:bg-gray-300 dark:bg-opacity-15 mb-6"
            data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;"
          >
            <div
              className="row child-cols-12 md:child-cols justify-center col-match g-4 sep uc-grid"
              data-uc-grid=""
            >
              {steps.map((step, index) => (
                <div key={index} className={step.minWidth}>
                  <div className="panel vstack items-center gap-2 text-center p-5 xl:py-8">
                   {/* <span className="icon-box w-40px md:w-48px h-40px md:h-48px rounded-circle cstack bg-primary dark:bg-tertiary text-tertiary dark:text-primary">
                      {step.number}
                    </span>*/}
                    <Image
                      className="w-150 max-h-200px"
                      alt="Image"
                      src={step.imgSrc}
                      width={1200}
                      height={800}
                    />
                    <h3 className="h5 lg:h4 m-0">{step.title}</h3>
                    <p className="fs-6">{step.description}</p>
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
