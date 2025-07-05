"use client";
import Image from "next/image";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
// import Faq from "@/components/homes/home-2/Faq";
import Hero from "@/components/homes/home-2/Hero";
import Features from "@/components/homes/home-10/Features";

export default function ClientPage() {
  return (
    <div className="bg-white text-black">
      <Header2 />
      <Hero />
      {/* <Faq /> */}
      <Features />
      <div
              className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
              data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
            >
              {/*<div
                className="position-absolute rotate-45"
                style={{ top: "30%", left: "18%" }}
              >
                <Image
                  className="w-32px text-gray-900 dark:text-white"
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
                  className="w-24px text-gray-900 dark:text-white"
                  width={69}
                  height={95}
                  alt="star-2"
                  data-uc-svg=""
                  src="/assets/images/template/star-2.svg"
                />
              </div>*/}
            </div>
          
      <Footer2 />
    </div>
  );
}
