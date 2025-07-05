import Header2 from "@/components/headers/Header2"
import Footer2 from "@/components/footers/Footer2";
//import CareerHero from "@/components/innerpages/CareerHero";
import CareerBenefits from "@/components/innerpages/CareerBenefits";
import CareerOpenings from "@/components/innerpages/CareerOpenings";
//import Feedback from "@/components/homes/home-2/Feedback";
//import Brands from "@/components/innerpages/Brands";
//import Blogs from "@/components/homes/home-2/Blogs";
export const metadata = {
  title:
    "IIoT Technologies",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function CareerPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel  text-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready"
      >
        <Header2 />
        <div id="wrapper" className="wrap">
          {/* <CareerHero /> */}
          <CareerBenefits />
          <CareerOpenings />
          {/* <Feedback />
          <Brands /> */}
          {/* <Blogs /> */}
        </div>
        <Footer2 />
      </div>
    </>
  );
}










// import Header2 from "@/components/headers/Header2";
// import Footer2 from "@/components/footers/Footer2";
// import React from "react";

// export const metadata = {
//   title: "IIoT Technologies - Careers",
//   description: "Careers at IIoT Technologies",
// };

// const jobListings = [
//   {
//     title: "PHP Developer",
//     icon: "/assets/images/php-150x150.png",
//     type: "Full-time",
//     experience: "1 to 3 years Experience",
//     qualification: "Degree/Graduate",
//     description:
//       "We are looking for a PHP Developer responsible for managing back-end services and the interchange of data between the server and the users.",
//   },
//   {
//     title: "Android Developer",
//     icon: "/assets/images/android-150x150.png",
//     type: "Full-time",
//     experience: "1 to 4 years Experience",
//     qualification: "Graduate / Engineer",
//     description:
//       "Looking for an android developer who has hands on experience in the android native development. also have a good knowledge Java/Kotlin/Flutter.",
//   },
//   {
//     title: "Flutter Developer",
//     icon: "/assets/images/flutter-150x150.png",
//     type: "Full-time",
//     experience: "1 to 3 years Experience",
//     qualification: "Graduate / Engineer",
//     description:
//       "Experience in Dart coding with Good experience UI / UX and Animations of Flutter. Cross platform experience with iOS and Android platforms",
//   },
// ];

// export default function CareerPage() {
//   return (
//     <>
//       <Header2 />
//       <div className="bg-white text-gray-900 px-4 py-10">
//         <h2 className="text-4xl font-bold text-center mb-12">JOIN OUR TEAM</h2>
//         <div className="max-w-9xl mx-auto  gap-8">
//           {jobListings.map((job, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
//             >
//               <div className="flex items-center mb-4 gap-3">
//                 <img src={job.icon} alt={job.title} className="w-12 h-12" />
//                 <h3 className="text-xl font-bold text-[#1a444a]">{job.title}</h3>
//               </div>
//               <p className="text-sm text-gray-500 mb-1">💼 {job.type}</p>
//               <p className="text-sm text-gray-500 mb-1">👤 {job.experience}</p>
//               <p className="text-sm text-gray-500 mb-4">🎓 {job.qualification}</p>
//               <p className="text-gray-600 mb-6">{job.description}</p>
//               <a
//   href="mailto:prashant.yadav@geanysoftech.com"
//   className="inline-block bg-black text-white px-8 py-2 rounded hover:bg-gray-800 transition"
// >
//   ➤ Apply now
// </a>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer2 />
//     </>
//   );
// }
