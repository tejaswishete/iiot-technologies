import { tools } from "@/data/tools";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { reviewLogos } from "@/data/brands";

export default function Tools() {
  return (
    <div
      id="tools_integrations"
      className="tools-integrations section overflow-hidden"
    >
      <div className="section-outer py-6 md:py-8 xl:py-10">
        <div className="container">
          <div className="section-inner max-w-screen-xl mx-auto">
            {/* Section Title */}
            <div
              className="vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill" style={{color : "#0a0c4c"}}>
                Integrations
              </span>
              <h2 className="h3 lg:h2 m-0"style={{color : "#afca31"}}>
                Connect Seamlessly with Your Existing Systems
              </h2>
              <p className="fs-6 xl:fs-5 xl:px-8" style= {{color :"#0a0c4c"}}>
                Integrate IIOT Technologies with your ERP, PLC, QA/QC, and MES
                systems to create a cloud-based,
                <br /> connected, and smarter production environment.
              </p>
            </div>
        {/* Logos */}
             <div className="panel mt-3 sm:mt-4">
                <div className="brands hstack gap-4 justify-between max-w-950px mx-auto">
                   {tools.slice(0, 6).map((tool, index) => (
        <div key={index} className="flex">
          <Image
            className="w-24 h-24 lg:w-32 lg:h-32 object-contain"
            alt={tool.alt}
            src={tool.src}
            width={160}
            height={160}
          />
        </div>
      ))}
    </div>
    <div className="panel mt-3 sm:mt-4">
    <div className="brands hstack gap-4 justify-between max-w-950px mx-auto">
    {tools.slice(6, 12).map((tool, index) => (
        <div key={index} className="flex">
          <Image
            className="w-24 h-24 lg:w-32 lg:h-32 object-contain"
            alt={tool.alt}
            src={tool.src}
            width={160}
            height={160}
          />
        </div>
      ))}
      </div>
      </div>
      </div>
{/* Logos */}
<div
  className="flex flex-col items-center justify-center gap-10"
  data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
>
  {/* Centering Wrapper for All Logo Rows */}
  <div className="flex flex-col gap-10 w-max mx-auto">
    {/* First Row */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-8">
     {/* {tools.slice(0, 6).map((tool, index) => (
        <div key={index} className="flex">
          <Image
            className="w-24 h-24 lg:w-32 lg:h-32 object-contain"
            alt={tool.alt}
            src={tool.src}
            width={160}
            height={160}
          />
        </div>
      ))}*/}
    </div>
    {/* Second Row */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-8">
      {/*{tools.slice(6, 12).map((tool, index) => (
        <div key={index} className="flex">
          <Image
            className="w-24 h-24 lg:w-32 lg:h-32 object-contain"
            alt={tool.alt}
            src={tool.src}
            width={160}
            height={160}
          />
        </div>
      ))}*/}
    </div>
  </div>
</div>
            {/* CTA Button */}
            <div className="text-center mt-8">
              <Link
                href={`/iiot-website-dashboard`}
                className="btn btn-md xl:btn-lg border px-3 lg:px-5 w-auto"
                style={{backgroundColor : "#afca31", borderColor : "#afca31", color: "#0a0c4c"}}
              >
                Explore How We Connect
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
