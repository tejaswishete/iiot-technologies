import { features10, features3 } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Features() {
  return (
    <div id="main_features" className="main-features section panel overflow-hidden">
      {/* INDUSTRIES SECTION */}
      <div className="section-outer panel py-6 md:py-8 xl:py-10 mx-2">
        <div className="position-absolute top-0 start-50 translate-middle w-1000px h-500px rounded-circle blur-10 blend-overlay d-none dark:d-block" />
        <div className="position-absolute top-100 start-50 translate-middle w-1000px h-500px rounded-circle blur-10 blend-overlay d-none dark:d-block" />
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              {/* <div className="cstack gap-1 py-1 px-3 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                <span
                  style={{ fontSize: "1.4rem", fontWeight: "bold", textTransform: "uppercase" }}
                >
                  Industries we serve
                </span>
              </div> */}
               <section className="pt-2 pb-2 text-center">
  <h1
    className="text-6xl font-bold dark:text-white"
    style={{ color: "#0b168a" }}
  >
    Industries we serve
  </h1>
   <p className=" m-0">
                Industries Empowered by IIoT:
                Driving Smart Transformation Across Every Sector
              </p>
</section>

             
            </div>

            <div
              className="row child-cols-12 md:child-cols-6 col-match g-2 lg:g-4"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              {features10.map((feature, index) => (
                <div key={index}>
                  <div className="panel vstack lg:hstack gap-2 p-2 overflow-hidden bg-secondary-300 text-gray-900 dark:bg-tertiary-700 dark:bg-gradient-45 from-tertiary to-transparent dark:text-white rounded-2 lg:rounded-3 border border-dark dark:border-white dark:border-opacity-15">
                    <div className="panel vstack items-start gap-2 p-2">
                      <h4 className="h4 m-0 text-inherit">{feature.title}</h4>
                      <p className="text-sm text-gray-800 dark:text-white opacity-80 m-0">
                        {feature.description}
                      </p>

                      {feature.operations && (
                        <>
                          <p className="text-4xl m-0" style={{ fontWeight: 'bold', color: '#000' }}>IIOT operations</p>
                          <ul className="list-disc pl-5 text-gray-700 dark:text-white text-sm">
                            {feature.operations.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES TESTIMONIAL SECTION */}
      <div className="section-outer panel py-4 xl:py-4">

        <div className="container sm:max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
  <div className="panel vstack items-center gap-2 xl:gap-3 mt-0 mb-2 sm:mb-3 lg:mb-4 max-w-650px mx-auto text-center">


    {/* <div className="cstack gap-1 py-1 px-3 border rounded-pill">
      <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
      <span
        style={{ fontSize: "1.4rem", fontWeight: "bold", textTransform: "uppercase" }}
      >
        Solution Accelerators
      </span>
    </div> */}
     <section className="pt-2 pb-2 text-center">
  <h1
    className="text-6xl font-bold dark:text-white"
    style={{ color: "#0b168a" }}
  >
      Solution Accelerators
  </h1>
  
</section>

    {/*<h2 className="h3 lg:h1 m-0">
      Trusted by Industry Leaders <br />
      See how IIoT is transforming operations
    </h2>*/}
  </div>

  <div className="panel vstack gap-4 sm:gap-6 lg:gap-8">
              {features3.map((feature, i) => (
                <React.Fragment key={i}>
                  <div
                    className="feature-item panel"
                    data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                  >
                    <div className="row child-cols col-match justify-between g-4 lg:g-8 xl:g-10">
                      <div className="col-12 sm:col-6 order-0 lg:order-1">
                        <div className="panel w-100">
                          <Image
                            src={feature.imgSrc}
                            width={780}
                            height={728}
                            alt={feature.altText}
                            className="rounded-2"
                          />
                        </div>
                      </div>
                      <div className="col-12 sm:col-6 order-1 lg:order-0">
                        <div className="panel vstack justify-between gap-4 sm:gap-6 h-100">
                          <div>
                            <div className="panel vstack gap-2">
                              <span className="fs-6 fw-bold m-0 text-primary">{feature.step}</span>
                              <h3 className="h4 lg:h3 xl:h2 m-0">{feature.title}</h3>
                             {feature.description && (
  <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">{feature.description}</p>
)}

{feature.keywords && feature.keywords.length > 0 && (
  <div className="flex flex-wrap gap-1 mt-3">
    {feature.keywords.map((keyword, idx) => (
      <span
        key={idx}
        className="inline-block px-0 py-2 text-sm font-semibold rounded-full bg-[#e0f7fa] text-black"
      >
        🔹 {keyword}
      </span>
    ))}
  </div>
)}


                             {/*{feature.link && (
                                <a
                                  href={feature.link.href}
                                  className="uc-link fw-bold hstack gap-narrow"
                                >
                                  <span>{feature.link.text}</span>
                                  <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                </a>
                              )}
                            </div>
                          </div>
                          <div>
                            <div className="p-3 panel vstack gap-3 rounded border">
                              <p className="fs-6 dark:text-white">{feature.testimonial.quote}</p>
                              <div className="panel hstack gap-1">
                                <Image
                                  className="w-40px rounded-circle"
                                  src={feature.testimonial.imgSrc}
                                  width={150}
                                  height={150}
                                  alt={feature.testimonial.name}
                                />
                                <div className="panel vstack items-start gap-0">
                                  <h6 className="h6 m-0">{feature.testimonial.name}</h6>
                                  <span className="fs-7 opacity-70">{feature.testimonial.role}</span>
                                </div>
                              </div>*/}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {i !== features3.length - 1 && (
                    <hr
                      className="border-gray-100 dark:border-opacity-15 m-0 opacity-100"
                      data-anime="onview: -200; width: [0, '100%']; easing: easeInOutExpo; duration: 750; delay: 100;"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
