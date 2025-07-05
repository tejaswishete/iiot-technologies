import { jobListings } from "@/data/career";
import React from "react";
import Link from "next/link";

export default function CareerOpenings() {
  return (
    <div
      id="career_openings"
      className="career-openings section panel overflow-hidden pb-6 xl:pb-9"
    >
  <h2
  className="h4 sm:h2 m-0 text-center"
  data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
  style={{ color: "#0b168a" }}
>
  Work with us
</h2>

<p className="fs-6 text-center mt-2 text-dark dark:text-white text-opacity-70">
  We care for our employees and our customers!
</p>

      <div className="section-outer panel py-6 xl:py-9">
        
        <div className="container max-w-lg">

          {/* ✅ Moved heading section here for better visual priority */}
         {/* <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 px-4">
  <h1 className="text-4xl font-bold dark:text-white" style={{ color: "#0b168a" }}>
    Work with us
  </h1>
  <p className="text-sm sm:text-base text-dark dark:text-white text-opacity-80 mt-2 sm:mt-0 sm:ml-4">
    We care for our employees and our customers!
  </p>
</div>
<div className="w-16 h-1 bg-[#0b168a] mt-1 mb-2 mx-4" /> */}



          <div className="section-inner panel">
            <div className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8 max-w-850px mx-auto">
              <div className="panel">
                <div
                  className="row child-cols-12 sm:child-cols-6 col-match g-2 sm:g-3"
                  data-uc-grid=""
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  {jobListings.map((job, index) => (
                    <div key={index}>
                      <div className="panel vstack justify-end items-end gap-1 p-3 rounded lg:rounded-2 bg-secondary dark:bg-gray-800">
                        <div className="vstack gap-narrow">
                          <h5 className="h6 lg:h5 m-0">{job.title}</h5>
                          <span className="fs-6 text-dark dark:text-white text-opacity-70">
                            {job.experience}
                          </span>
                        </div>
                        <Link
                          href={`/page-career-detail/${job.id}`}
                          className="uc-link fs-7 fw-bold d-inline-flex items-center gap-narrow border-bottom pb-narrow"
                          style={{ color: "#afca31" }}
                        >
                          <span>Apply now</span>
                          <i className="icon icon-narrow unicon-arrow-up-right fw-bold rtl:-rotate-90" />
                        </Link>
                      </div>
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
