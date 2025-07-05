import React from "react";
import Image from "next/image";
import Accordion2 from "@/components/common/Accordion2";

export default function Howworks() {
  return (
    <div
      id="how_it_works"
      className="how-it-works section panel overflow-hidden rounded-1-5 lg:rounded-2 bg-secondary dark:bg-gray-800 dark:text-white"
    >
      <div className="section-outer panel">
        <div className="container container-full">
          <div className="section-inner panel">
            <div className="row child-cols-12 col-match g-0">
              <div>
                <div className="panel">
                  <div className="row child-cols-12 lg:child-cols-6 col-match items-center g-0">
                    <div data-anime="onview: -100; translateX: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 100;">
                      <figure className="featured-image m-0 rounded ratio ratio-1x1 overflow-hidden rounded-1-5 lg:rounded-2 lg:rounded-bottom-end-0">
                        <Image
                          className="media-cover image"
                          alt="image title"
                          src="/assets/images/template/iot-image.png"
                          width="1200"
                          height="1200"
                        />
                      </figure>
                    </div>
                    <div data-anime="onview: -100; translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;">
                      <div
                        className="panel vstack items-start gap-2 lg:gap-3 p-3 md:p-4 lg:p-6 xl:p-8 xl:px-9 my-2 lg:my-0"
                        data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                      >
                        <h3 className="h3 lg:h2 m-0">
                          IoT: Linking Devices, Driving Automation                        
                       </h3>
                        <p className="fs-6 lg:fs-5">
                         Internet of Things (IoT) is a network of connected devices that collect and exchange data over the internet to enable automation, monitoring, and smart decision-making.                        </p>
                        <div className="panel w-100 mt-2 lg:mt-4">
                          <ul
                            className="uc-accordion-divider uc-accordion-chevron gap-5 uc-accordion"
                            data-uc-accordion="collapsible: false"
                            style={{ "--divider-gap": "40px" }}
                          >
                            <Accordion2 />
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="panel">
                  <div className="row child-cols-12 lg:child-cols-6 col-match items-center g-0">
                    <div
                      className="lg:order-2"
                      data-anime="onview: -100; translateX: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 300;"
                    >
                      <figure className="featured-image m-0 rounded ratio ratio-1x1 overflow-hidden rounded-1-5 lg:rounded-2 lg:rounded-top-start-0">
                        <Image
                          className="media-cover image"
                          alt="image title"
                          src="/assets/images/template/iioT.png"
                          width="1200"
                          height="1200"
                        />
                      </figure>
                    </div>
                    <div
                      className="order-1"
                      data-anime="onview: -100; translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 400;"
                    >
                      <div
                        className="panel vstack items-start gap-2 lg:gap-3 p-3 md:p-4 lg:p-6 xl:p-8 xl:px-9 my-2 lg:my-0"
                        data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                      >
                        <h3 className="h3 lg:h2 m-0">
                          IIoT: Connecting Machines for Smarter Production
                        </h3>
                        <p className="fs-6 lg:fs-5">
                         Industrial Internet of Things (IIoT) is the network of connected industrial devices and machines that collect and analyze data to optimize manufacturing, automate processes, and enable predictive maintenance.
                        </p>
                        <div className="panel mt-2 lg:mt-4">
                          <div className="row child-cols-12 lg:child-cols-6 g-4">
                            <div>
                              <div className="panel vstack items-start gap-2">
                                <div className="cstack min-w-48px min-h-48px bg-primary rounded-circle">
                                  <Image
                                    className="icon icon-1 text-white image-filter-white"
                                    alt="feature-icon"
                                    data-uc-svg=""
                                    src="/assets/images/common/icons/database.svg"
                                    width="24"
                                    height="24"
                                  />
                                </div>
                                <div className="vstack gap-1 lg:gap-2">
                                  <h5 className="h5 lg:h4 m-0">
                                    Predictive Maintenance
                                  </h5>
                                  <p className="fs-6">
                                    Detects potential machine failures early to prevent costly downtime.     
                                 </p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="panel vstack items-start gap-2">
                                <div className="cstack min-w-48px min-h-48px bg-primary rounded-circle">
                                  <Image
                                    className="icon icon-1 text-white image-filter-white"
                                    alt="feature-icon"
                                    data-uc-svg=""
                                    src="/assets/images/common/icons/line-chart.svg"
                                    width="24"
                                    height="24"
                                  />
                                </div>
                                <div className="vstack gap-1 lg:gap-2">
                                  <h5 className="h5 lg:h4 m-0">
                                    Operational Efficiency
                                  </h5>
                                  <p className="fs-6">
                                    Optimizes energy use and production processes to boost overall productivity.
                                  </p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
