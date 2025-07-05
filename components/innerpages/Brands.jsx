import { brands3 } from "@/data/brands";
import React from "react";
import Image from "next/image";

export default function Brands() {
  return (
    <div id="trusted_brands" className="trusted-brands section panel">
      <div className="section-outer panel pb-6 xl:pb-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="review-brands panel vstack justify-center gap-4 overflow-hidden text-center"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
            >
              <div className="panel">
                <div className="brands hstack flex grid-cols-5 gap-4 justify-between max-w-950px mx-auto">
                  {brands3.map((image, index) => (
                    <div key={index}>
                  {image?.src && (
  <Image
    src={image.src || null}
    alt="Trustpilot"
    width={160}
    height={0}
    style={{
      height: "auto",
      maxHeight: "64px",
      width: "auto",
      maxWidth: "160px",
      objectFit: "contain",
    }}
    className="dark:d-none"
  />
)}

{image?.darkSrc && (
  <Image
    src={image.darkSrc}
    alt="Trustpilot"
    width={160}
    height={0}
    style={{
      height: "auto",
      maxHeight: "64px",
      width: "auto",
      maxWidth: "160px",
      objectFit: "contain",
    }}
    className="d-none dark:d-block"
  />
)}         
 </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
