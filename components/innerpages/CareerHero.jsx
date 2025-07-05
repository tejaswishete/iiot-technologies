import React from "react";
import Image from "next/image";

export default function CareerHero() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="position-absolute top-0 start-0 end-0 h-400px sm:h-500px lg:h-screen xl:h-screen bg-secondary dark:bg-gray-800 z-0" />
      <div
        className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
      >
       {/* <div
          className="position-absolute  rotate-45"
          style={{ top: "20%", left: "18%" }}
        >
          <Image
            className="w-24px text-gray-900 dark:text-white"
            width={193}
            height={216}
            alt="star-1"
            data-uc-svg=""
            src="/assets/images/template/star-1.svg"
          />
        </div>
        <div
          className="position-absolute  rotate-45"
          style={{ top: "15%", right: "18%" }}
        >
          <Image
            className="w-32px text-gray-900 dark:text-white"
            width={69}
            height={95}
            alt="star-2"
            data-uc-svg=""
            src="/assets/images/template/star-2.svg"
          />
        </div>*/}
      </div>
      <div className="section-outer panel pt-9 lg:pt-10 pb-4 sm:pb-6 xl:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
             {/* <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0"
              style={{ color: "#0b168a" }}>
                Careers
              </h1> */}
            <div className="vstack items-start gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 text-left pl-4 sm:pl-6 lg:pl-10">

             
              <h1
    className="text-4xl font-bold dark:text-white"
    style={{ color: "#0b168a" }}
  >
     <span style={{ 
      display: 'inline-block', 
      width: '50px', 
      height: '4px', 
      backgroundColor: '#0b168a', 
      marginRight: '15px',  
      verticalAlign: 'middle' 
    }}></span>
    Work with us 
   
  </h1>
              {/* <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
               At IIoT Technologies, we’re building the future of smart manufacturing. We’re looking for passionate innovators who thrive in fast-paced, tech-driven environments. If you're excited about industrial automation, edge computing, real-time data, and solving complex challenges with cutting-edge IIoT solutions, then you’re exactly who we’re looking for. Join us and help shape the next generation of connected industry.
              </p> */}
            </div>
            <div className="panel">
              <figure className="featured-image m-0 rounded ratio ratio-2x1 rounded lg:rounded-2 uc-transition-toggle overflow-hidden">
                <Image
                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                  alt="Career"
                  src="/assets/images/template/future-of-iot-in-india.webp"
                  width="1500"
                  height="1000"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
