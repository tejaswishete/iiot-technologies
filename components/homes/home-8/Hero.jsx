"use client"; // <--- Add this directive at the top
import TyperComponent from "@/components/common/TyperComponent";
import Image from "next/image";
import React from "react";
import { openContactModal } from "@/utlis/toggleContactModal";
// openMobileMenu is imported but not used in the provided snippet.
// If it's intended to be used, ensure it's also within a Client Component or handled appropriately.
// import { openMobileMenu } from "@/utlis/toggleMobileMenu";

export default function Hero() {
  return (
    <div
      id="hero_header"
      className="hero-header section panel overflow-hidden uc-dark"
    >
     <div
  className="position-absolute top-0 start-0 end-0 h-screen lg:rounded-2 lg:rounded-top-0 lg:m-2 lg:mt-0"
  style={{ backgroundColor: "#04063c" }}
/>
      <div className="position-absolute top-50 start-50 translate-middle w-1000px h-500px bg-secondary-300 dark:bg-white rounded-circle blur-10 dark:blend-overlay" />
      <div className="section-outer panel py-8 lg:py-9 xl:py-10">
        <div className="position-absolute top-0 start-0 end-0 h-screen blend-difference opacity-20">
          <video
            data-uc-cover=""
            src="/assets/images/media/lexend-home-8.webm"
          />
        </div>
        <div className="container">
          <div className="section-inner panel">
            <div className="row child-cols-12 justify-center items-center g-8">
              <div className="lg:col-10">
                <div className="panel vstack gap-4 lg:gap-8">
                  <div
                    className="panel vstack items-center gap-2 max-w-md mx-auto text-center px-4 lg:px-0 mt-6"
                    data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                  >
                    {/*<span className="fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill">
                      Get started today!
                    </span>*/}
                    <h2
                      className="h2 xl:display-5 m-0 text-center"
                      style={{ transform: "translateY(0px)", opacity: 1 }}
                    >
                      Boost Production with{" "}
                    <span
  style={{ color: "#afca31" }}
  data-uc-typed="typeSpeed: 80; backSpeed: 50; backDelay: 1500; loop: true;"
>
  <TyperComponent
    strings={[
      "Smart Manufacturing Insights",
      "Complete Process control",
    ]}
  />
</span>

                      <span className="typed-cursor" aria-hidden="true">
                        |
                      </span>
                    </h2>
                    <p className="fs-5 lg:fs-4">
                      IIOT Technologies is a powerful and easy-to-use software
                      that helps manufacturers to  <span style={{ color: "#afca31" }}>make smarter production
                      decisions, reduce downtime, and boost efficiency in real
                      time.</span>
                    </p>
                    <div
                      className="vstack md:hstack justify-center gap-1 my-1 lg:my-3"
                      data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 750;"
                    >
                     <a
  className="btn btn-md xl:btn-lg border px-3 lg:px-5 w-auto text-black"
  style={{ backgroundColor: "#afca31", borderColor: "#afca31" }}
  onClick={openContactModal}
  role="button"
>
  <span>Get free trial</span>
</a>

                    </div>
                    <div
                      className="vstack sm:hstack justify-center gap-1 fs-6 text-gray-900 dark:text-white sm-flex-column"
                      data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 850;"
                    >
                      {/*<div className="hstack justify-center gap-2">
                        <b>Exellent</b>
                        <div className="rating panel">
                          <div className="hstack justify-center gap-narrow">
                            <i
                              className="icon unicon-star-filled text-white p-narrow"
                              style={{ backgroundColor: "#00b67a" }}
                            />
                            <i
                              className="icon unicon-star-filled text-white p-narrow"
                              style={{ backgroundColor: "#00b67a" }}
                            />
                            <i
                              className="icon unicon-star-filled text-white p-narrow"
                              style={{ backgroundColor: "#00b67a" }}
                            />
                            <i
                              className="icon unicon-star-filled text-white p-narrow"
                              style={{ backgroundColor: "#00b67a" }}
                            />
                            <i
                              className="icon unicon-star-filled text-white p-narrow"
                              style={{ backgroundColor: "#00b67a" }}
                            />
                          </div>
                        </div>
                      </div>*/}
                      {/*<div className="hstack justify-center gap-narrow">
                        <span className="desc rtl:order-first">
                          4,000+ reviews on
                        </span>
                        <div>
                          <Image
                            alt="Trustpilot"
                            className="w-96px dark:d-none"
                            src="/assets/images/review-logo/05.svg"
                            width={138}
                            height={42}
                          />
                          <Image
                            alt="Trustpilot"
                            className="w-96px d-none dark:d-inline-flex"
                            src="/assets/images/review-logo/dark-05.svg"
                            width={138}
                            height={42}
                          />
                        </div>
                      </div>*/}
                    </div>
                  </div>
                  <div
                    className="panel border shadow-lg rounded-2 p-1"
                    data-anime="translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 450; delay: 950;"
                  >
                    <Image
                      alt="Dashboard Lexend"
                      src="/assets/images/template/iiot-dashboard.jpg"
                      width={1353}
                      height={978}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}