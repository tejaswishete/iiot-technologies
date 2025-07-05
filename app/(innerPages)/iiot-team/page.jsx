import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Breadcumb from "@/components/innerpages/Breadcumb";
import Cta2 from "@/components/innerpages/Cta2";
//import Faq from "@/components/innerpages/Faq";
import Team from "@/components/innerpages/Team";
export const metadata = {
  title:
    "IIoT Technolgies",
  description:
    "IIoT Technolgies",
};
export default function TeamPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md dom-ready bp-xxl-max bp-lg bp-xl">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Breadcumb />
          <Team />
          {/*<Faq />*/}
          <Cta2 />
        </div>

        <Footer2 />
      </div>
    </>
  );
}
