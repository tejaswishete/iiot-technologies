import { testimonials3 } from "@/data/testimonials";
import React from "react";
import Image from "next/image";

export default function Feedback() {
  return (
    <div
      id="clients_feedbacks"
      className="clients-feedbacks section panel overflow-hidden"
    >
      <div className="section-outer panel pb-2">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h4 sm:h3 lg:h2 m-0 text-center" style={{color:"#afca31"}}>
                Our clients feedbacks
              </h2>
              <div
                className="row child-cols-12 sm:child-cols-6 xl:child-cols-4 justify-center col-match g-2 lg:g-3"
                data-uc-grid=""
              >
                {testimonials3.map((testimonial, index) => (
                  <div key={index}>
                    <div className="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border">
                      <div className="panel vstack items-start gap-2">
                        <div className="panel">
                          <div className="hstack h-48px">
                            <Image
                              className="w-128px text-gray-900 dark:text-white image-filter"
                              src={testimonial.brandImgSrc}
                              width={170}
                              height={48}
                              alt={testimonial.brandImgAlt}
                              data-uc-svg=""
                            />
                          </div>
                        </div>
                        <p className="fs-5 lg:fs-4 text-opacity-70" style={{color:"#0b168a"}}>
                          {testimonial.text}
                        </p>
                      </div>
                     <div className="panel hstack gap-3 mt-2 lg:mt-4 items-center">
  <div className="panel vstack items-start gap-0">
    <h6 className="h5 m-0">{testimonial.name}</h6>
    <span className="fs-7 opacity-70" style={{color:"#0b168a"}}>{testimonial.position}</span>
  </div>
  <Image
    className="w-40px rounded-circle"
    src={testimonial.avatarImgSrc}
    width={150}
    height={150}
    alt={testimonial.avatarImgAlt}
  />
</div>
                    </div>
                  </div>
                ))}
              </div>
              {/*<a
                href="#"
                className="uc-link fw-bold d-inline-flex items-center gap-narrow"
              >
                <span>See all feedbacks</span>
                <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
              </a>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
