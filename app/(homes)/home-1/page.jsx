import Header2 from "@/components/headers/Header2";
//import Features from "@/components/homes/home-1/Features";
import Hero from "@/components/homes/home-1/Hero";
import IndustryFlipCards from "@/components/homes/home-1/IndustryFlipCards";
import Integretion from "@/components/homes/home-1/Integretion";
import Facts from "@/components/homes/home-1/Facts";
//import Pricing from "@/components/homes/home-1/Pricing";
import Feedback from "@/components/homes/home-1/Feedback";
import Timeline from "@/components/homes/home-1/Timeline";
import Team from "@/components/homes/home-1/Team";
import Testimonials from "@/components/homes/home-3/Testimonials";
import Cta from "@/components/homes/home-1/Cta";
import Footer2 from "@/components/footers/Footer2";
export const metadata = {
  title:
    "IIOT Technologies.",
  description:
    "IIOT Technologies",
};
export default function HomePage1() {
  return (
    <>
      <div className="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl-max dom-ready">
        <Header2 />
       <div id="wrapper" className="wrap mt-20">
  <Hero />

  {/* Space after Hero */}
  {/* <div className="mt-30 sm:mt-40 lg:mt-48 xl:mt-56">
    <Features />
  </div> */}

<IndustryFlipCards /> 
          <Integretion />
          <Facts />
          {/*<Pricing />*/}
          <Feedback />
          <Timeline />
          <Team />
          <Testimonials />
          
                      <div className="section-outer panel pt-6 pb-8 sm:pt-8 sm:pb-9 xl:py-9">
                        <h5
                          className="h6 sm:h5 text-center mb-4 sm:mb-6 xl:mb-8"
                          data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
                        >
                          
                        </h5>
                        <div
                          className="block-panel panel"
                          data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
                        >
                          <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
                            
                          </div>
                        </div>
                      </div>
                    
          <Cta />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
