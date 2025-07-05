import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/innerpages/features/Hero";
import KeyFeatures from "@/components/innerpages/features/KeyFeatures";
//import Faq from "@/components/homes/home-2/Faq";
//import Testimonials from "@/components/homes/home-3/Testimonials";
import Cta from "@/components/innerpages/features/Cta";
//import Brands2 from "@/components/common/Brands2";
export const metadata = {
  title:
    "IIOT Technologies",
  description:
    "IIOT Technologies",
};
export default function FeaturesPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Hero />
          <KeyFeatures />
          <div className="pt-6 xl:pt-9"></div>
          {/*<Faq />*/}
          {/*<Testimonials />*/}
          <Cta />
        </div>
        <Footer2 />
      </div>
    </>
  );
}

