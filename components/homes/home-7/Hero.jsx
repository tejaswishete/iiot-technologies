"use client";
import TyperComponent from "@/components/common/TyperComponent";
import Image from "next/image";
import { useEffect } from "react";
import { useParallax } from "react-scroll-parallax";

export default function Hero() {
  const parallax = useParallax({
    scale: [0.85, 1.1],
  });
  return (
   <div
  id="hero_header"
  className="hero-header hero-seven-scene section panel overflow-hidden bg-white"
>
  <div className="position-absolute top-0 start-0 end-0 h-screen bg-white" />

      <div className="section-outer panel pb-6 sm:pb-8 pt-9 xl:pt-10 xl:pb-9">
        {/*<div
          className="d-none lg:d-block"
          data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: anime.stagger(150, {start: 500});"
        >
          <Image
            alt="Icon"
            className="d-inline-block position-absolute w-72px dark:d-none"
            style={{ top: "15%", left: "10%" }}
            width={85}
            height={73}
            src="assets/images/vectors/marketing.svg"
          />
          <Image
            alt="Icon"
            className="d-inline-block position-absolute w-72px dark:d-none"
            style={{ top: "15%", right: "10%" }}
            width={73}
            height={66}
            src="assets/images/vectors/charts-pc.svg"
          />
          <Image
            alt="Icon"
            className="d-inline-block position-absolute w-64px dark:d-none"
            style={{ top: "35%", right: "-1%", transform: "rotate(45deg)" }}
            width={69}
            height={70}
            src="assets/images/vectors/group.svg"
          />
          <Image
            alt="Icon"
            className="d-inline-block position-absolute w-48px dark:d-none"
            style={{ top: "40%", left: "15%" }}
            width={49}
            height={60}
            src="assets/images/vectors/idea.svg"
          />
          <Image
            alt="Icon"
            className="d-inline-block position-absolute w-64px dark:d-none"
            style={{ top: "30%", left: "-1%" }}
            width={69}
            height={70}
            src="assets/images/vectors/group.svg"
          />
          <Image
            alt="Icon"
            className="d-inline-block position-absolute w-72px d-none dark:d-block"
            style={{ top: "15%", left: "10%" }}
            width={85}
            height={73}
            src="assets/images/vectors/marketing-dark.svg"
          />
          <Image
            alt="Icon"
            className="d-inline-block position-absolute w-72px d-none dark:d-block"
            style={{ top: "15%", right: "10%" }}
            width={73}
            height={66}
            src="assets/images/vectors/charts-pc-dark.svg"
          />
          <Image
            alt="Icon"
            className="d-inline-block position-absolute w-64px d-none dark:d-block"
            style={{ top: "35%", right: "-1%", transform: "rotate(45deg)" }}
            width={69}
            height={70}
            src="assets/images/vectors/group-dark.svg"
          />
          <Image
            alt="Icon"
            className="d-inline-block position-absolute w-48px d-none dark:d-block"
            style={{ top: "40%", left: "15%" }}
            width={49}
            height={60}
            src="assets/images/vectors/idea-dark.svg"
          />
          <Image
            alt="Icon"
            className="d-inline-block position-absolute w-64px d-none dark:d-block"
            style={{ top: "30%", left: "-1%" }}
            width={69}
            height={70}
            src="assets/images/vectors/group-dark.svg"
          />
        </div>*/}
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="row child-cols-12 justify-center items-center g-8">
              <div className="lg:col-8">
                <div
                  className="panel vstack items-center gap-2 px-2 text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                 {/* <span className="fs-7 fw-bold py-narrow px-2 border rounded-pill text-primary dark:text-tertiary">
                    Smarter Workflows
                  </span>*/}
                  {/* <div className="cstack gap-1 py-1 px-3 border rounded-pill">
    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
   <span
  style={{ fontSize: "1.4rem", fontWeight: "bold", textTransform: "uppercase" }}
>
 Transforming Industry 4.0
</span>
  </div> */}
  {/* <section className="pt-2 pb-2 text-center">
  <h1
    className="text-6xl dark:text-white" // Removed font-bold
    style={{ color: "#0b168a", fontWeight: "normal" }} // Optional: explicitly set normal
  >
    Transforming Industry 4.0
  </h1>
</section> */}

                  {/* <h1 className="h3 sm:h2 md:h1 lg:display-6 lh-lg mb-1 xl:mb-2 mt-2">
                    Get more done in less time with
                    <span
                      className="px-1 bg-primary text-tertiary dark:bg-tertiary dark:text-primary"
                      data-uc-typed="typeSpeed: 80; backSpeed: 50; backDelay: 1500; loop: true;"
                    >
                      <span>AI automation</span>
                      <span>Chatbots</span>
                      <span>AI management</span>
                    </span>
                  </h1> */}
                  <h1
                    className="h3 sm:h2 md:h1 lg:display-6 lh-lg mb-1 xl:mb-2 mt-2"
                    style={{ transform: "translateY(0px)", opacity: 1 }}
                  >
                    Empowering Industries with{" "}
                    <span
                      className="px-1 bg-primary text-tertiary dark:bg-tertiary dark:text-primary"
                      data-uc-typed="typeSpeed: 80; backSpeed: 50; backDelay: 1500; loop: true;"
                    >
                     <TyperComponent
  strings={[
    "Smart Manufacturing",
    "Predictive Maintenance",
    "Real-time Data Insights"
  ]}                      />
                    </span>
                    <span className="typed-cursor" aria-hidden="true">
                      |
                    </span>
                  </h1>

                  <p className="fs-6 xl:fs-3 xl:px-6">
                    Unlock efficiency and{" "}
                    innovation with <b className="dark:text-white">IIoT </b>- where machines talk, dataflows, and decisions get{" "}
                    <b className="dark:text-white">smarter.</b>
                  </p>
                 {/* <div
                    className="vstack md:hstack justify-center gap-2 mt-3"
                    style={{ transform: "translateY(0px)", opacity: 1 }}
                  >
                    <a
                      href="#"
                      className="btn btn-md xl:btn-lg btn-alt-dark border-dark px-3 lg:px-5 fw-bold contrast-shadow-sm hover:contrast-shadow"
                    >
                      <Image
                        alt="Google Icon"
                        src="/assets/images/template/google-icon.svg"
                        width="20"
                        height="21"
                      />
                      <span>Start free trial</span>
                    </a>
                  </div>*/}

                  <div className="panel mt-3 lg:mt-4 min-w-700px text-center">
                    <div className="row child-cols-12 lg:child-cols-4 justify-center gx-0">
                     {/* <div>
                        <div className="hstack justify-center gap-1">
                          <span className="icon mb-narrow">
                            <Image
                              className="w-24px dark:d-none"
                              alt="icon"
                              width={24}
                              height={24}
                              src="assets/images/custom-icons/icon-08.svg"
                            />
                            <Image
                              className="w-24px d-none dark:d-block"
                              alt="icon"
                              width={24}
                              height={24}
                              src="assets/images/custom-icons/dark-icon-08.svg"
                            />
                          </span>
                          <span className="fs-7 fw-medium mb-narrow text-inherit">
                            AI-Powered Automation
                          </span>
                        </div>
                      </div>*/}
                      {/*<div>
                        <div className="hstack justify-center gap-1">
                          <span className="icon mb-narrow">
                            <Image
                              className="w-24px dark:d-none"
                              alt="icon"
                              width={24}
                              height={24}
                              src="assets/images/custom-icons/icon-07.svg"
                            />
                            <Image
                              className="w-24px d-none dark:d-block"
                              alt="icon"
                              width={24}
                              height={24}
                              src="assets/images/custom-icons/dark-icon-07.svg"
                            />
                          </span>
                          <span className="fs-7 fw-medium mb-narrow text-inherit">
                            Chatbots, Free forever
                          </span>
                        </div>
                      </div>*/}
                      {/*<div>
                        <div className="hstack justify-center gap-1">
                          <span className="icon mb-narrow">
                            <Image
                              className="w-24px dark:d-none"
                              alt="icon"
                              width={24}
                              height={24}
                              src="assets/images/custom-icons/icon-04.svg"
                            />
                            <Image
                              className="w-24px d-none dark:d-block"
                              alt="icon"
                              width={24}
                              height={24}
                              src="assets/images/custom-icons/dark-icon-04.svg"
                            />
                          </span>
                          <span className="fs-7 fw-medium mb-narrow text-inherit">
                            Cutting-edge AI features
                          </span>
                        </div>
                      </div>*/}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="uc-video-scene"
                ref={parallax.ref}
                data-anime="scale: [1.2, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 500;"
              >
                <div
                  className="panel max-w-1000px mx-auto mt-2 rounded lg:rounded-1-5 xl:rounded-2 border border-dark contrast-shadow-lg overflow-hidden"
                  data-anime="onscroll: .hero-header; onscroll-trigger: 0.5; translateY: [-80, 0]; scale: [0.8, 1]; easing: linear;"
                >
                  <video
                    preload="auto"
                    data-uc-video="autoplay: true;"
                    playsInline
                    muted
                    loop
                    autoPlay
                    poster="assets/images/media/lexend-home-7.png"
                    src="/assets/images/media/lexend-home-7.webm"
                    title="Video title"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
