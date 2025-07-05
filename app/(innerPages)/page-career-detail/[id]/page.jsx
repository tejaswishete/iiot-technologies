import Header2 from "@/components/headers/Header2";
import { jobListings } from "@/data/career";
import Footer2 from "@/components/footers/Footer2";
import JobDetails from "@/components/innerpages/JobDetails";
//import CareerOpenings from "@/components/innerpages/CareerOpenings";
// import Feedback from "@/components/homes/home-2/Feedback";
// import Brands from "@/components/innerpages/Brands";
//import { jobListings } from "@/data/career";
import Link from "next/link";
export const metadata = {
  title:
    "IIoT Technologies",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default async function CareerDetailsPage(props) {
  const params = await props.params;
  const id = params.id;
  const jobItem =
    jobListings.filter((elm) => elm.id == id)[0] || jobListings[0];
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <div
            id="hero_header"
            className="hero-header section panel overflow-hidden"
          >
            <div className="section-outer panel pt-9 lg:pt-10 pb-4 sm:pb-6 xl:pb-9">
              <div className="container max-w-lg">
                <div className="section-inner panel">
                  <div className="vstack items-center text-center gap-2 lg:gap-4">
                    <span className="fs-6 fw-bold text-uppercase"
                     style={{ color: "#afca31" }}>
                      We are looking for a
                    </span>
                    <h1 className="h2 sm:h1 lg:display-6 xl:display-5 max-w-600px my-0 mx-auto"
                     style={{ color: "#0b168a" }}>
                      {jobItem.title}
                    </h1>
                    <p>
                        {jobItem.p}
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <JobDetails jobItem={jobItem} />
          {/* <CareerOpenings /> */}
          <div
                id="career_openings"
                className="career-openings section panel overflow-hidden pb-6 xl:pb-9"
              >
                <div className="section-outer panel py-6 xl:py-9">
                  <div className="container max-w-lg">
                    <div className="section-inner panel">
                      <div className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8 max-w-850px mx-auto">
                        <h2
                          className="h4 sm:h2 m-0 text-center"
                          data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                          style={{ color: "#0b168a" }}
                        >
                        Other Openings
                        </h2>
                        <div className="panel">
                          <div
                            className="row child-cols-12 sm:child-cols-6 col-match g-2 sm:g-3"
                            data-uc-grid=""
                            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                          >
                           {jobListings
  .filter((job) => job.id !== id) // 👈 Exclude current job
  .map((job, index) => (

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
          
          {/* <Feedback />
          <Brands /> */}
        </div>
        <Footer2 />
      </div>
    </>
  );
}
