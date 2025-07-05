"use client";
import Brands from "@/components/common/Brands";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import ModalVideo from "@/components/common/ModalVideo";

export default function Hero() {
  const [isOpen, setOpen] = useState(false);

   const handlePlayClick = () => {
    setOpen(true);
  };

  return (
    <>
     <div id="hero_intro" className="hero-header section panel overflow-hidden">
  <div className="position-cover bg-white dark:bg-gray-800" />
  <div className="section-outer panel pt-8 pb-16">
    <div className="container max-w-xl">
      <div className="section-inner panel">
        <div className="row child-cols justify-center lg:justify-between items-center g-0">
          <div className="col-12 sm:col-10 md:col-8 lg:col-5">
            <div
  className="panel vstack gap-2 sm:text-center lg:text-start rtl:lg:text-end py-4"
  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
>
  <h1 className="text-8xl xl:text-7xl font-bold leading-tight mb-1 xl:mb-2">
    Struggling to monitor your machines in real-time?
  </h1>

  <h2 className="block text-8xl xl:text-8xl text-gray-800 mt-2 font-bold leading-tight">
    Still relying on spreadsheets and <br /> guesswork?
  </h2>

              <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                Losing production hours to unplanned downtime?                                                              
              </p>
              <h2 className="block text-8xl xl:text-8xl text-gray-800 mt-2 font-bold leading-tight">
    Your production needs our IIoT platform.
  </h2>
             <div className="flex items-center gap-6 mt-10">
  <span className="text-2xl text-gray-800">
    🚀 How does IIoT platform work?
  </span>
  <button
                        onClick={handlePlayClick}
                        className="btn btn-primary btn-md text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out shadow-lg transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
                      >
                        Check ▶ play.
                      </button>
</div>
             {/* <p className="fs-7 text-dark dark:text-white text-opacity-70">
                We care about your data in our{" "}
                <Link
                  href={`/page-privacy`}
                  className="uc-link text-underline dark:text-secondary"
                >
                  privacy policy
                </Link>
                .
              </p>*/}
            </div>
          </div>
          <div className="col-12 lg:col-6">
            <div
              className="expand-container mt-0 lg:mt-4 ltr:ms-n2 rtl:me-n2"
              data-anime="translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <video
  className="w-full h-auto ltr:d-block rtl:d-none"
  src="/assets/images/lexend_vid.webm"
  autoPlay
  muted
  loop
  playsInline
></video>

<video
  className="w-full h-auto ltr:d-none rtl:d-block"
  src="/assets/videos/hero-video-rtl.mp4"
  autoPlay
  muted
  loop
  playsInline
></video>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      <ModalVideo
        isOpen={isOpen}
        src="/assets/images/media/lexend_vid.webm"
        setIsOpen={() => setOpen(false)}
      />
    </>
  );
}
