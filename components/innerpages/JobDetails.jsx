import React from "react";

export default function JobDetails({ jobItem }) {
  if (!jobItem) return <p>No job details available.</p>;

  return (
    <div id="job_details" className="job-details section panel pb-6 xl:pb-9">
      <div className="section-outer panel">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div className="panel fs-6 md:fs-5 text-dark dark:text-white text-opacity-70">
              <div className="row g-3 gy-6 lg:g-6 lg:gy-8" data-uc-grid="">
                <div className="col-12 md:col-8 md:order-2">
                  <div className="panel fs-5 vstack gap-2">
                    <p>{jobItem.description}</p>

                    <h3 className="h5 mt-2 mb-0">Tasks:</h3>
                    <ul className="m-0">
                      {jobItem.tasks.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <h3 className="h5 mt-2 mb-0">Requirements:</h3>
                    <ul className="m-0">
                      {jobItem.requirements.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <h3 className="h5 mt-2 mb-0">Benefits:</h3>
                    <div className="row child-cols-6 col-match g-1">
                      {jobItem.benefits.map((benefit, index) => (
                        <div key={index}>
                          <div className="panel hstack gap-1">
                            <i className="icon icon-1 unicon-checkmark-outline text-primary" />
                            <span className="fs-6 md:fs-5 text-dark dark:text-white text-opacity-70">
                              {benefit}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-12 md:col-4 order-1">
                  <div data-uc-sticky="end: #job_details; offset: 80; media: @m;">
                    <div className="panel vstack gap-3 lg:gap-4 p-2 lg:p-3 rounded bg-secondary dark:bg-gray-800">
                      <h4 className="h5 m-0 pb-2 border-bottom">Job details</h4>

                      <div className="vstack gap-2">
                        <div className="hstack gap-1">
                          <i className="icon-1 unicon-portfolio" />
                          <h5 className="h6 m-0">Job type</h5>
                        </div>
                        <div className="hstack gap-narrow fs-7 fw-bold">
                          {jobItem.jobType.map((type, index) => (
                            <span
                              key={index}
                              className="px-1 py-narrow bg-white dark:bg-gray-800 rounded"
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="vstack gap-1">
                        <div className="hstack gap-1">
                          <i className="icon-1 unicon-location" />
                          <h5 className="h6 m-0">Location</h5>
                        </div>
                        <div className="hstack gap-narrow fs-7 fw-bold">
                          <span>{jobItem.location}</span>
                        </div>
                      </div>

                      {/* <div className="vstack gap-1">
                        <div className="hstack gap-1">
                          <i className="icon-1 unicon-money" />
                          <h5 className="h6 m-0">Salary</h5>
                        </div>
                        <div className="hstack gap-narrow fs-7 fw-bold">
                          <span>{jobItem.salary}</span>
                        </div>
                      </div> */}

                     <div>
  <a
    href="mailto:prashant.yadav@iiottechnologies.in"
    className="btn btn-md w-100"
    style={{ backgroundColor: "#afca31", borderColor: "#afca31", color: "#0b168a" }}
  >
    Apply job
  </a>
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
