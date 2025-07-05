import { features8 } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel pt-6 md:pt-8 xl:pt-10">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 max-w-650px mx-auto text-black text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill"
              style = {{color : "#0a0c4c"}}>
                Features
              </span>
              <h2 className="h3 lg:h2 m-0">
                {" "}
                <span style={{ color: "#afca31" }}>
  Custom solutions tailored to your business needs
</span>

              </h2>
              <p className="fs-6 xl:fs-5 xl:px-8"
              style = {{color : "#0a0c4c"}}>
                Tailored IIoT solutions designed to meet your unique business challenges and goals.
              </p>
            </div>
            <div
              className="row child-cols-12 md:child-cols-6 lg:child-cols-4 col-match g-2 lg:g-4"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              {features8.map((feature, index) => (
                <div key={index}>
                  <div className="panel overflow-hidden bg-secondary text-gray-900 dark:bg-tertiary-700 dark:text-white rounded-2 lg:rounded-3">
                    <div className="panel p-2 pb-0">
                      <Image
                        className="rounded-1-5"
                        alt=""
                        src={feature.imgSrc}
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="panel vstack items-start gap-2 p-3 lg:p-4">
                      <h4 className="h4 m-0"style= {{color: "#afca31"}}>
                        {feature.title}</h4>
                      <p className=" m-0 text-inherit"style= {{color: "#0a0c4c"}}>{feature.description}
                      </p>
                      {/*<a
                        href="#"
                        className="btn btn-sm btn-primary border px-2 mt-2"
                      >
                        <span>Try it now</span>
                        <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                      </a>*/}
                    </div>
                  </div>
                </div>
              ))}
              <div className="md:col-6">
                <div className="panel overflow-hidden text-gray-900 rounded-2 lg:rounded-3"
                style = {{backgroundColor : "#afca31"}}>
                  <div className="panel vstack items-center text-center gap-2 p-3 lg:p-4 xl:p-6">
                    <h4 className="h4 m-0 text-inherit"style= {{color: "#0a0c4c"}}>
                      Smarter Manufacturing for Modern Industry
                    </h4>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0" style= {{color: "#0a0c4c"}}>
                      Improve your production by connecting our IIOT solution with your existing systems, reducing downtime and maximizing profits through seamless, real-time insights.
                    </p>
                  </div>
                  <div className="panel px-3 lg:px-4 xl:px-6 mb-2 lg:mb-5">
                    <Image
                      alt="builder-tools"
                      src="/assets/images/brands/iiot_widget.png"
                      width={1280}
                      height={800}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 lg:col-6">
                <div className="panel overflow-hidden min-h-450px text-white rounded-2 lg:rounded-3 uc-dark"
                style = {{backgroundColor : "#0a0c4c"}}>
                  <div className="panel vstack items-center text-center gap-2 p-3 md:p-4 xl:p-6">
                    <h4 className="h4 m-0 text-inherit">
                      Smarter Insights for Smoother Production
                    </h4>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0 xl:px-4 text-center">
                     <span style={{color : "#afca31"}}>Monitor Live OEE, Operator performance, and Production status to keep your shop floor efficient.</span> Make quicker decisions and minimize unplanned downtime.
                    </p>
                    <a
                      href="/iiot-features"
                      className="btn btn-sm border px-2 mt-2"
                      style = {{backgroundColor : "#afca31"}}
                    >
                      <span style= {{color: "#0a0c4c"}}>Explore IIOT Features</span>
                      <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                    </a>
                  </div>
                  <div className="panel min-h-200px md:min-h-250px xl:min-h-300px position-absolute bottom-0 start-0 end-0">
                    <video
                      className="position-cover blend-plus-lighter"
                      data-uc-video=""
                      src="/assets/images/media/animated-globe.mp4"
                      loop=""
                    />
                    <div
                      className="position-cover"
                      data-anime="targets: >*; scale: [0.5, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                    >
                      <div
                        className="position-absolute"
                        style={{ bottom: "25%", left: "8%" }}
                      >
                        <Image
                          className="w-48px md:w-56px xl:w-64px p-narrow bg-white bg-opacity-50 backdrop-1 rounded-circle"
                          alt="user"
                          src="/assets/images/avatars/machine-status.png"
                          width={150}
                          height={150}
                        />
                      </div>
                      <div
                        className="position-absolute"
                        style={{ bottom: "60%", left: "28%" }}
                      >
                        <Image
                          className="w-48px md:w-56px xl:w-64px p-narrow bg-white bg-opacity-50 backdrop-1 rounded-circle"
                          alt="user"
                          src="/assets/images/avatars/management.png"
                          width={150}
                          height={150}
                        />
                      </div>
                      <div
                        className="position-absolute"
                        style={{ bottom: "25%", right: "8%" }}
                      >
                        <Image
                          className="w-48px md:w-56px xl:w-64px p-narrow bg-white bg-opacity-50 backdrop-1 rounded-circle"
                          alt="user"
                          src="/assets/images/avatars/18537720.png"
                          width={150}
                          height={150}
                        />
                      </div>
                      <div
                        className="position-absolute"
                        style={{ bottom: "60%", right: "28%" }}
                      >
                        <Image
                          className="w-48px md:w-56px xl:w-64px p-narrow bg-white bg-opacity-50 backdrop-1 rounded-circle"
                          alt="user"
                          src="/assets/images/avatars/production-line-worker-flat-icon-vector.jpg"
                          width={150}
                          height={150}
                        />
                      </div>
                    </div>
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
