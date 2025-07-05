"use client";
import Image from "next/image";
//import React from "react";
import React, { useState } from "react";

export default function Features() {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 lg:py-8 xl:py-10">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel row child-cols-12 g-2 lg:g-4"
              data-uc-scrollspy="target: >*; delay: 500; cls: uc-animation-slide-bottom-medium"
            >
              <div>
           <h2 className="h3 sm:h2 xl:h1 mb-8  text-dark dark:text-white text-center">
  Solving Real Manufacturing Problems with <br className="hidden sm:inline" />
  <span>Smart Technology</span>
</h2>
                <div className="feature-item panel pt-2 pb-0 lg:pt-2 lg:pb-0">

                  <div className="row child-cols items-center justify-between g-2 md:g-4">
                    <div className="col-12 md:col-6 lg:col-5 flex items-start">
  <div className="panel overflow-hidden rounded-1-5 lg:rounded-2">

                        <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                          <Image
                            className="media-cover image"
                            alt="Industrial Connectivity"
                            src="/assets/images/template/unplanned-downtime.png"
                            width={1000}
                            height={778}
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                          <div>
                            <div className="panel vstack gap-2">
 {/* <span className="cstack w-48px h-48px rounded-1-5 mb-2 d-none lg:d-inline-flex bg-primary text-tertiary dark:bg-tertiary dark:text-primary">
    <i className="icon-1 unicon-chat" />
  </span>*/}

  <h3 className="h4 sm:h3 xl:h2 m-0">
    Unplanned Downtime
  </h3>

  {/* Problem */}
  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
    <strong>Problem:</strong> Frequent, unpredictable machine stoppages lead to production losses, missed deadlines, and high maintenance costs.
  </p>

  {/* Solution */}
  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
    <strong>Our Solution:</strong><br />
    • Real-time Downtime Monitoring with root cause categorization.<br />
    • Downtime Pareto Analysis with integrated maintenance codes.<br />
    • MTBF & MTTR tracking for reliability insights.
  </p>

  {/* Result */}
  <p className="fs-6 lg:fs-5 opacity-80 text-success dark:text-success">
    ✅ <strong>Result:</strong> Reduced unplanned downtime and optimized maintenance schedules.
  </p>

  {/*<p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
    Industrial connectivity enables machines and plants to share vital data, helping optimize Overall Equipment Effectiveness (OEE), prevent breakdowns, and improve productivity through real-time transparency. By using specialized modules, Industrial Connectivity Services create seamless links that drive digital transformation and smarter operations.
  </p>*/}
                              <a
                                href="#"
                                className="uc-link fw-bold hstack gap-narrow sm:mt-1 lg:mt-2 text-primary dark:text-tertiary"
                              >
                                {/*<span>Let's find out</span>
                                <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />*/}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="feature-item panel p-2 lg:p-4">
                  <div className="row child-cols items-center justify-between g-2 md:g-4">
                    <div className="col-12 md:col-6 lg:col-5 md:order-2">
                      <div className="panel overflow-hidden rounded-1-5 lg:rounded-2">
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                          <Image
                            className="media-cover image"
                            alt="HD Video Calling"
                            src="/assets/images/template/Low-Machine-Efficiency.png"
                            width={1000}
                            height={800}
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-6 md:order-1">
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                          <div>
                            <div className="panel vstack gap-2">
  {/*<span className="cstack w-48px h-48px rounded-1-5 mb-2 d-none lg:d-inline-flex bg-primary text-tertiary dark:bg-tertiary dark:text-primary">
    <i className="icon-1 unicon-video-add" />
  </span>*/}
  <h3 className="h4 sm:h3 xl:h2 m-0">
    Low Machine Efficiency & Poor OEE
  </h3>

  {/* Problem */}
  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
    <strong>Problem:</strong> Plants struggle with low utilization rates and can't pinpoint whether performance issues stem from availability, performance, or quality.
  </p>

  {/* Solution */}
  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
    <strong>Our Solution:</strong><br />
    • Real-time OEE Monitoring with drill-downs.<br />
    • Cycle Time Variance Analysis to detect bottlenecks.<br />
    • Workforce Efficiency Tracking to improve human performance.
  </p>

  {/* Result */}
  <p className="fs-6 lg:fs-5 opacity-80 text-success dark:text-success">
    ✅ <strong>Result:</strong> Better resource utilization and higher throughput.
  </p>
                              {/*<a
                                href="#"
                                className="uc-link fw-bold hstack gap-narrow sm:mt-1 lg:mt-2 text-primary dark:text-tertiary"
                              >
                                <span>Learn more</span>
                                <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                              </a>*/}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="feature-item panel p-2 lg:p-4">
                  <div className="row child-cols items-center justify-between g-2 md:g-4">
                    <div className="col-12 md:col-6 lg:col-5">
                      <div className="panel overflow-hidden rounded-1-5 lg:rounded-2">
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                          <Image
                            className="media-cover image"
                            alt="End-to-End Encryption"
                            src="/assets/images/template/Poor-Quality.png"
                            width={1000}
                            height={667}
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                          <div>
                           <div className="panel vstack gap-2">
  {/*<span className="cstack w-48px h-48px rounded-1-5 mb-2 d-none lg:d-inline-flex bg-primary text-tertiary dark:bg-tertiary dark:text-primary">
    <i className="icon-1 unicon-manage-protection" />
  </span>*/}
  <h3 className="h4 sm:h3 xl:h2 m-0">
    Poor Quality & High Rejection Rates
  </h3>

  {/* Problem */}
  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
    <strong>Problem:</strong> Quality issues lead to customer dissatisfaction, rework, and scrap generation.
  </p>

  {/* Solution */}
  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
    <strong>Our Solution:</strong><br />
    • Rejection & Rework Analysis by product, machine, and shift.<br />
    • PPM (Parts Per Million) Reporting and cost of quality.<br />
    • QA-QC Integration for in-line and final inspection tracking.
  </p>

  {/* Result */}
  <p className="fs-6 lg:fs-5 opacity-80 text-success dark:text-success">
    ✅ <strong>Result:</strong> Reduced quality failures and increased customer trust.
  </p>
                              {/*<a
                                href="#"
                                className="uc-link fw-bold hstack gap-narrow sm:mt-1 lg:mt-2 text-primary dark:text-tertiary"
                              >
                                <span>How privacy works</span>
                                <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                              </a>*/}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="feature-item panel p-2 lg:p-4">
                  <div className="row child-cols items-center justify-between g-2 md:g-4">
                    <div className="col-12 md:col-6 lg:col-5 md:order-2">
                      <div className="panel overflow-hidden rounded-1-5 lg:rounded-2">
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                          <Image
                            className="media-cover image"
                            alt="Cross-Platform Sync"
                            src="/assets/images/template/Manual-Tracking.png"
                            width={1000}
                            height={667}
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-6 md:order-1">
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                          <div>
                            <div className="panel vstack gap-2">
  {/*<span className="cstack w-48px h-48px rounded-1-5 mb-2 d-none lg:d-inline-flex bg-primary text-tertiary dark:bg-tertiary dark:text-primary">
    <i className="icon-1 unicon-renew" />
  </span>*/}
  <h3 className="h4 sm:h3 xl:h2 m-0">
    Manual Tracking of Production & Downtime
  </h3>

  {/* Problem */}
  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
    <strong>Problem:</strong> Relying on logbooks and Excel leads to inaccuracies and delayed decisions.
  </p>

  {/* Solution */}
  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
    <strong>Our Solution:</strong><br />
    • Automated Production Counters with good/bad part tracking.<br />
    • Interactive Dashboards for real-time visualization.<br />
    • Production History Reports for audit, analysis, and compliance.
  </p>

  {/* Result */}
  <p className="fs-6 lg:fs-5 opacity-80 text-success dark:text-success">
    ✅ <strong>Result:</strong> Digitized shop floor with real-time control.
  </p>
                              {/*<a
                                href="#"
                                className="uc-link fw-bold hstack gap-narrow sm:mt-1 lg:mt-2 text-primary dark:text-tertiary"
                              >
                                <span>Download app now</span>
                                <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                              </a>*/}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
              <div>
                <div className="feature-item panel p-2 lg:p-4">
                  <div className="row child-cols items-center justify-between g-2 md:g-4">
                    <div className="col-12 md:col-6 lg:col-5">
                      <div className="panel overflow-hidden rounded-1-5 lg:rounded-2">
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                          <Image
                            className="media-cover image"
                            alt="End-to-End Encryption"
                            src="/assets/images/template/Lack-of-Process-Traceability.png"
                            width={1000}
                            height={667}
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                          <div>
                           <div className="panel vstack gap-2">
  {/*<span className="cstack w-48px h-48px rounded-1-5 mb-2 d-none lg:d-inline-flex bg-primary text-tertiary dark:bg-tertiary dark:text-primary">
    <i className="icon-1 unicon-manage-protection" />
  </span>*/}
  <h3 className="h4 sm:h3 xl:h2 m-0">
    Lack of Process Traceability
  </h3>

  {/* Problem */}
  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
    <strong>Problem:</strong> No visibility into how raw materials, machines, and human inputs impact the final output.
  </p>

  {/* Solution */}
  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
    <strong>Our Solution:</strong><br />
    • End-to-End Traceability from raw materials to delivery.<br />
    • Sensor Integration (temperature, pressure, tonnage, etc.) for granular control.<br />
    • Audit Trails for all quality and production events.
  </p>

  {/* Result */}
  <p className="fs-6 lg:fs-5 opacity-80 text-success dark:text-success">
    ✅ <strong>Result:</strong> Full process transparency for audits and root cause analysis.
  </p>
                              {/*<a
                                href="#"
                                className="uc-link fw-bold hstack gap-narrow sm:mt-1 lg:mt-2 text-primary dark:text-tertiary"
                              >
                                <span>How privacy works</span>
                                <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                              </a>*/}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div>
                <div className="feature-item panel p-2 lg:p-4">
                  <div className="row child-cols items-center justify-between g-2 md:g-4">
                    <div className="col-12 md:col-6 lg:col-5 md:order-2">
                      <div className="panel overflow-hidden rounded-1-5 lg:rounded-2">
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                          <Image
                            className="media-cover image"
                            alt="HD Video Calling"
                            src="/assets/images/template/High-Energy-Costs.png"
                            width={1000}
                            height={800}
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-6 md:order-1">
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                          <div>
                          <div className="panel vstack gap-2">
  {/*<span className="cstack w-48px h-48px rounded-1-5 mb-2 d-none lg:d-inline-flex bg-primary text-tertiary dark:bg-tertiary dark:text-primary">
    <i className="icon-1 unicon-video-add" />
  </span>*/}
  <h3 className="h4 sm:h3 xl:h2 m-0">
    High Energy Costs
  </h3>

  {/* Problem */}
  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
    <strong>Problem:</strong> Machines consuming excess energy go unnoticed, leading to high operational costs.
  </p>

  {/* Solution */}
  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
    <strong>Our Solution:</strong><br />
    • Energy Monitoring Dashboards per machine/shift/product.<br />
    • Carbon Footprint Tracking for environmental compliance.<br />
    • Anomaly Alerts for spikes in usage.
  </p>

  {/* Result */}
  <p className="fs-6 lg:fs-5 opacity-80 text-success dark:text-success">
    ✅ <strong>Result:</strong> Reduced energy bills and improved sustainability.
  </p>
                              {/*<a
                                href="#"
                                className="uc-link fw-bold hstack gap-narrow sm:mt-1 lg:mt-2 text-primary dark:text-tertiary"
                              >
                                <span>Learn more</span>
                                <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                              </a>*/}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               <div>
                <div className="feature-item panel p-2 lg:p-4">
                  <div className="row child-cols items-center justify-between g-2 md:g-4">
                    <div className="col-12 md:col-6 lg:col-5">
                      <div className="panel overflow-hidden rounded-1-5 lg:rounded-2">
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                          <Image
                            className="media-cover image"
                            alt="End-to-End Encryption"
                            src="/assets/images/template/Imbalanced-Workloads.png"
                            width={1000}
                            height={667}
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                          <div>
                            <div className="panel vstack gap-2">
  {/*<span className="cstack w-48px h-48px rounded-1-5 mb-2 d-none lg:d-inline-flex bg-primary text-tertiary dark:bg-tertiary dark:text-primary">
    <i className="icon-1 unicon-manage-protection" />
  </span>*/}
  <h3 className="h4 sm:h3 xl:h2 m-0">
    Imbalanced Workloads & Idle Time
  </h3>

  {/* Problem */}
  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
    <strong>Problem:</strong> Some operators and machines are overloaded while others stay idle.
  </p>

  {/* Solution */}
  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
    <strong>Our Solution:</strong><br />
    • Dynamic Workload Balancing based on real-time data.<br />
    • Line Balancing Metrics to improve flow.<br />
    • Operator Efficiency Reports to manage teams better.
  </p>

  {/* Result */}
  <p className="fs-6 lg:fs-5 opacity-80 text-success dark:text-success">
    ✅ <strong>Result:</strong> Streamlined operations and reduced inefficiencies.
  </p>
                              {/*<a
                                href="#"
                                className="uc-link fw-bold hstack gap-narrow sm:mt-1 lg:mt-2 text-primary dark:text-tertiary"
                              >
                                <span>How privacy works</span>
                                <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                              </a>*/}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                        <div>
                <div className="feature-item panel p-2 lg:p-4">
                  <div className="row child-cols items-center justify-between g-2 md:g-4">
                    <div className="col-12 md:col-6 lg:col-5 md:order-2">
                      <div className="panel overflow-hidden rounded-1-5 lg:rounded-2">
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                          <Image
                            className="media-cover image"
                            alt="HD Video Calling"
                            src="/assets/images/template/Integration.png"
                            width={1000}
                            height={800}
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-6 md:order-1">
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                          <div>
                <div className="panel vstack gap-2">
 {/* <span className="cstack w-48px h-48px rounded-1-5 mb-2 d-none lg:d-inline-flex bg-primary text-tertiary dark:bg-tertiary dark:text-primary">
    <i className="icon-1 unicon-video-add" />
  </span>*/}
  <h3 className="h4 sm:h3 xl:h2 m-0">
    Integration with Existing Systems
  </h3>
  
  {/* Problem */}
  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
    <strong>Problem:</strong> Difficulty in connecting machines, ERP, and legacy systems.
  </p>
  
  {/* Solution */}
  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
    <strong>Our Solution:</strong><br />
    • ERP & SAP Compatibility (push & pull APIs).<br />
    • Universal PLC Support for easy integration.<br />
    • Modular Architecture for scalable, custom deployments.
  </p>
  
  {/* Result */}
  <p className="fs-6 lg:fs-5 opacity-80 text-success dark:text-success">
    ✅ <strong>Result:</strong> Seamless digital transformation without infrastructure overhaul.
  </p>

      
                              {/*<a
                                href="#"
                                className="uc-link fw-bold hstack gap-narrow sm:mt-1 lg:mt-2 text-primary dark:text-tertiary"
                              >
                                <span>Learn more</span>
                                <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                              </a>*/}
                            </div>
                            
                          </div>
                          
                        </div>
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              {/* Your new section below */}
 
    <div className="container max-w-xl">
        <div
            className="section-inner panel mt-2 sm:mt-10 lg:mt-60"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
        >
            {/*<div className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center">
                <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                    Let's get in touch.
                </h1>
                <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                    Feel free to reach out to us using the options below, and our
                    dedicated team will respond to your inquiries promptly.
                </p>
            </div>*/}
            <div className="panel rounded-3 overflow-hidden bg-secondary dark:bg-gray-800">
                <div className="panel row child-cols-12 lg:child-cols-6 g-0">
                    <div className="order-1 lg:order-0">
                        <div className="panel overflow-hidden rounded-3 h-100 min-h-350px">
                          <div className="panel overflow-hidden rounded-3 h-100 min-h-350px flex justify-center items-center p-4 lg:p-6 xl:p-9 bg-secondary dark:bg-gray-800">
  <div className="max-w-md text-center text-primary">
    <h1 className="fs-3 fw-bold mb-2">
      Ready to Solve Your Industry Challenges?
    </h1>
    <p className="fs-6 mb-7 text-black dark:text-gray-300">
  IIOT Technologies is built to eliminate guesswork, reduce waste, and unlock operational excellence. Whether you're a small unit or a multi-plant enterprise, we tailor solutions to your needs.
</p>

    <p className="fs-4 text-black">
       <strong>Book a free consultation</strong>👉 
    </p>
  </div>
</div>
                            <div className="position-cover text-white vstack justify-end p-4 lg:p-6 xl:p-9">
                                {/* REMOVED THE BLACK GRADIENT BACKGROUND HERE */}
                                {/* <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-50" /> */}
                                {/*<div className="panel z-1">
                                    <div className="vstack gap-3">
                                        <p className="fs-5 xl:fs-4 fw-medium">
                                            “This software simplifies the website building
                                            process, making it a breeze to manage our online
                                            presence.”
                                        </p>
                                        <div className="vstack gap-0">
                                            <p className="fs-6 lg:fs-5 fw-medium">
                                                David Larry
                                            </p>
                                            <span className="fs-7 opacity-80">
                                                Founder &amp; CEO
                                            </span>
                                        </div>
                                    </div>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                    <div className="order-0 lg:order-1">
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="vstack gap-2 p-3 sm:p-6 xl:p-8"
                        >
                          {/*<p className="fs-6 text-dark dark:text-white text-opacity-70 mb-2">
                            Have a question or feedback? Fill out the form below, and
                            we'll get back to you as soon as possible.
                          </p>*/}
                          <div className="row child-cols-12 sm:child-cols-6 g-2">
                            <div>
                              <input
                                className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                                type="text"
                                placeholder="Full name"
                                required
                              />
                            </div>
                            <div>
                              <input
                                className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                                type="email"
                                placeholder="Your email"
                                required
                              />
                            </div>
                          </div>
                         <input
        className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
        type="tel"
        placeholder="Phone Number"
        pattern="\d{10}"
        maxLength={10}
        inputMode="numeric"
        required
      />
                          <textarea
                            className="form-control min-h-150px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                            placeholder="Your message.."
                            required
                            defaultValue={""}
                          />
                          <button
                            className="btn btn-primary btn-md text-white mt-2"
                            type="submit"
                          >
                            Submit
                          </button>
                          {/*<p className="text-center">
        Or drop us a message via{' '}
        <span className="uc-link"> prashant.yadav@iiottechnologies.in</span>
      </p>*/}
      
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
              {/*<div className="vstack mt-4 lg:mt-8">
                <div
                  className="vstack md:hstack justify-center gap-1 my-1 lg:my-3 sm-flex-column"
                  data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 750;"
                >
                  <a
                    href="#"
                    className="btn btn-md btn-primary dark:bg-tertiary dark:text-primary border-0 px-3 w-auto"
                  >
                    <i className="icon-narrow unicon-chat-launch fw-bold" />
                    <span>Start chatting</span>
                  </a>
                  <a
                    href="#"
                    className="btn btn-md btn-link fw-bold text-none text-primary dark:text-white"
                  >
                    Free Watch Demo
                  </a>
                </div>
                <div
                  className="vstack sm:hstack items-center justify-center gap-1 fs-6 text-gray-900 dark:text-white sm-flex-column"
                  data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 850;"
                >
                  <div className="hstack justify-center gap-2">
                    Exellent
                    <div className="rating panel">
                      <div className="hstack justify-center">
                        <i className="icon-1 unicon-star-filled text-yellow" />
                        <i className="icon-1 unicon-star-filled text-yellow" />
                        <i className="icon-1 unicon-star-filled text-yellow" />
                        <i className="icon-1 unicon-star-filled text-yellow" />
                        <i className="icon-1 unicon-star-filled text-yellow" />
                      </div>
                    </div>
                  </div>
                  <span className="desc">Based on 10,250+ reviews.</span>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
