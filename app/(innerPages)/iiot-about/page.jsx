import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import About from "@/components/innerpages/About";
//import Brands from "@/components/common/Brands2";
//import Brands from "@/components/homes/home-8/Brands";
import About2 from "@/components/innerpages/About2";
import AboutValues from "@/components/innerpages/AboutValues";
import Feedback from "@/components/homes/home-2/Feedback";
import Timeline from "@/components/homes/home-1/Timeline";
import Faq from "@/components/innerpages/Faq";
import Cta from "@/components/innerpages/Cta";
import { reviewLogos } from "@/data/brands";
import React from "react";
import Image from "next/image";
export const metadata = {
  title:
    "IIoT Technologies",
  
};
export default function AboutPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <About />
          {/* <div
            id="clients_brands"
            className="clients-brands section panel overflow-hidden"
          >
            <div className="section-outer panel pb-6 xl:pb-9">
              <div className="container max-w-xl">
                <div className="section-inner panel">
                  <div
                    className="block-panel panel"
                    data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
                  >
                    <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div id="trusted_brands" className="trusted-brands section panel">
                <div className="section-outer panel pb-4 lg:pb-6">
                  <div className="container max-w-xl">
                    <div className="section-inner panel">
                      <div
                        className="review-brands panel vstack justify-center gap-2 px-3 py-4 sm:px-4 sm:py-6 lg:p-6 text-center rounded-3 bg-secondary dark:bg-gray-800 overflow-hidden"
                        data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
                      >
                       <h3
            className="title h4 sm:h3 lg:h2 m-0"
            style={{ color: "#afca31" }}
          >
            Our Clients
          </h3>
          
                        <div className="vstack sm:hstack justify-center gap-1 fs-6 text-gray-900 dark:text-white flex-sm-column">
                          <div className="rating panel"
                          style = {{color : "#0a0c4c"}}>
                            {/* <div className="hstack justify-center gap-0">
                              <i className="icon unicon-star-filled" />
                              <i className="icon unicon-star-filled" />
                              <i className="icon unicon-star-filled" />
                              <i className="icon unicon-star-filled" />
                              <i className="icon unicon-star-filled" />
                            </div> */}
                          </div>
                          {/* <span className="desc rtl:order-first"
                          style = {{color : "#0a0c4c"}}>
                            Helping top manufacturing teams gain visibility, reduce downtime, and scale operations.
                          </span> */}
                        </div>
                        <div className="panel mt-3 sm:mt-4">
                          <div className="brands hstack gap-4 justify-between max-w-950px mx-auto">
                            {reviewLogos.map((logo, index) => (
            <React.Fragment key={index}>
              <Image
                src={logo.lightSrc}
                width={100}
                height={60}
                style={{ height: "60px", width: "auto" }}
                alt="Trustpilot"
                className="dark:d-none"
              />
              <Image
                src={logo.darkSrc}
                width={100}
                height={60}
                style={{ height: "60px", width: "auto" }}
                alt="Trustpilot"
                className="d-none dark:d-block"
              />
            </React.Fragment>
          ))}
          
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          <About2 />
          <AboutValues />
          <Feedback />
          <Timeline />
          {/* FAQ Section with Heading */}
<section className="faq-section py-8 lg:py-12">
  <div className="container max-w-5xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
      Frequently Asked Questions
    </h2>
    <Faq />
  </div>
</section>
          <Cta />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
