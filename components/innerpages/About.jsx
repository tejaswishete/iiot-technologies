import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div
        className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
      >
        {/*<div
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
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <section className="text-start mt-[-20px] mb-6 px-4">
  {/* Horizontal line before heading */}
  <div className="w-16 h-1 bg-[#0b168a] mb-2"></div>
{/* 
   <section className="pt-2 pb-0 text-start">
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
    About us 
   
  </h1>
</section> */}
<section className="pt-2 pb-0 text-center">
  <h1
    className="text-6xl font-bold dark:text-white"
    style={{ color: "#0b168a" }}
  >
    About us 
  </h1>
</section>

  {/* <p>
    IIoT Technologies empowers manufacturers with smart connectivity and real-time data insights to transform their factories into intelligent, data-driven ecosystems. It brings together machines, sensors, and analytics onto a single platform, offering live production tracking, machine health monitoring, predictive maintenance, and energy efficiency analysis. With features like OEE dashboards, quality reports, workforce efficiency, trial mode simulations, and remote diagnostics — IIoT Technologies enables optimized operations, reduced downtime, and actionable decisions. From shop floor to top floor, it’s your complete solution for Industry 4.0 transformation — anytime, anywhere.
  </p> */}
</section>
           <div className="vstack items-center gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-850px mx-auto text-center">
  {/*<h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
    About IIOT
  </h1>*/}
  
    <p className="fs-6 md:fs-5 text-dark dark:text-white text-opacity-70 text-justify">
    IIOT Technologies by 
    <span className="font-extrabold" style={{ color: "#0b168a", fontWeight: "bold" }}> Geany Softech Pvt. Ltd. </span>
    revolutionizes industrial automation by seamlessly integrating with 
    <span className="font-bold" style={{ color: "#0b168a", fontWeight: "bold" }}> PLC-driven machines</span>. 
    It enables manufacturers to shift from reactive to proactive, data-driven decision-making. The platform provides real-time insights into machine performance, optimizing production
    <span className="font-bold" style={{ color: "#0b168a", fontWeight: "bold" }}>
      by identifying inefficiencies, predicting issues, and streamlining maintenance. This enhances productivity and minimizes downtime, driving smarter manufacturing.
    </span>
  </p>
</div>
{/* <div className="panel flex justify-center items-center py-8">
  <figure className="w-[30%] mx-auto rounded sm:rounded-2 overflow-hidden">
    <Image
      alt="About image"
      src="/assets/images/ABOUT-US.png"
      width={200}
      height={200}
      className="w-full h-auto object-contain"
      priority
    />
  </figure>
</div> */}



           

                {/*<div className="position-absolute bottom-0 end-0 z-1 me-n8 mb-n8 d-none lg:d-block">
                  <Image
                    className="w-200px xl:w-250px d-block dark:d-none"
                    alt="empathing"
                    src="/assets/images/template/empathing.svg"
                    width="278"
                    height="229"
                  />
                  <Image
                    className="w-200px xl:w-250px d-none dark:d-block"
                    alt="empathing-dark"
                    src="/assets/images/template/empathing-dark.svg"
                    width="278"
                    height="229"
                  />
                </div>*/}
              
          </div>
        </div>
      </div>
    </div>
  );
}
