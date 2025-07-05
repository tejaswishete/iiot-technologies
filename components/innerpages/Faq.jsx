import React from "react";
import Link from "next/link";
import Accordion from "../common/Accordion";
import Image from "next/image";

export default function Faq() {
  return (
    <div id="faq" className="section panel overflow-hidden">
      <div className="section-outer panel py-4 xl:py-5">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div className="row child-cols-12 lg:child-cols-6 g-6 xl:g-8">
              <div>
                {/*<div className="panel vstack gap-2">
                  <span className="fw-bold text-primary dark:text-secondary">
                    Support
                  </span>
                  <h2 className="title h3 xl:h2 m-0">FAQs</h2>
                  <p className="desc fs-6 xl:fs-5">
                    Everything you need to know about our IIOT solutions. Can’t find the answer you’re looking for?{" "}
                    <br className="d-none lg:d-block xl:d-none" />
                    Please{" "}
                    <Link
                      className="uc-link border-bottom border-gray-300 dark:text-white text-none"
                      href={`/page-contact`}
                      style={{ paddingBottom: 2 }}
                    >
                      Chat to our friendly team.
                    </Link>
                  </p>
                </div>*/}
                <div>
  <img
    src="/assets/images/FAQ.webp" // replace with your actual image path
    alt="FAQs Support"
    className="rounded-lg w-full h-auto" // Tailwind styling or custom classes
  />
</div>
              </div>
              <div>
                <div className="panel">
                  <ul className="gap-0" data-uc-accordion="targets: > li;">
                    <Accordion parentClass="panel py-2" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
