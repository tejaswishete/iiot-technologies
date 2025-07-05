import { reviewLogos } from "@/data/brands";
import React from "react";
import Image from "next/image";

export default function Brands() {
  return (
    <div id="trusted_brands" className="trusted-brands section panel">
      <div className="section-outer panel pb-4 lg:pb-6">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="review-brands panel vstack justify-center gap-2 px-3 py-4 sm:px-4 sm:py-6 lg:p-6 text-center rounded-3 bg-secondary dark:bg-gray-800 overflow-hidden"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
            >
             <h3
  className="title h4 sm:h3 lg:h2 m-0"
  style={{ color: "#afca31" }}
>
  Trusted for overall simplicity
</h3>

              <div className="vstack sm:hstack justify-center gap-1 fs-6 text-gray-900 dark:text-white flex-sm-column">
                <div className="rating panel"
                style = {{color : "#0a0c4c"}}>
                  <div className="hstack justify-center gap-0">
                    <i className="icon unicon-star-filled" />
                    <i className="icon unicon-star-filled" />
                    <i className="icon unicon-star-filled" />
                    <i className="icon unicon-star-filled" />
                    <i className="icon unicon-star-filled" />
                  </div>
                </div>
                <span className="desc rtl:order-first"
                style = {{color : "#0a0c4c"}}>
                  Helping top manufacturing teams gain visibility, reduce downtime, and scale operations.
                </span>
              </div>
              <div className="panel mt-3 sm:mt-4">
                <div className="brands hstack gap-4 justify-between max-w-950px mx-auto">
                  {reviewLogos.map((logo, index) => (
  <React.Fragment key={index}>
    <Image
      src={logo.lightSrc}
      width={100}
      height={60}
      style={{ height: "60px", width: "auto" }}
      alt="Trustpilot"
      className="dark:d-none"
    />
    <Image
      src={logo.darkSrc}
      width={100}
      height={60}
      style={{ height: "60px", width: "auto" }}
      alt="Trustpilot"
      className="d-none dark:d-block"
    />
  </React.Fragment>
))}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}










// import { brands5 } from "@/data/brands";
// import Image from "next/image";
// import React from "react";

// export default function Brands() {
//   return (
//     <div
//       id="companies_sponsores"
//       className="companies-sponsores section panel overflow-hidden"
//     >
//       <div className="section-outer panel">
//         <div className="container sm:max-w-md">
//           <div className="section-inner panel">
//             <div
//               className="brands panel vstack gap-3 sm:gap-4 xl:gap-5 text-center"
//               data-anime="onview: -200; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
//             >
//               <h5 className="h5 lg:h4 m-0">
//                 Trusted by over most popular companies worldwide
//               </h5>
//               <div className="panel">
//                 <div className="row child-cols items-center text-center">
//                   {brands5.map((brand, index) => (
//                     <div key={index}>
//                       <div className="panel">
//                         <Image
//                           className="max-w-40px lg:max-w-56px"
//                           alt="brand"
//                           src={brand.src}
//                           width={brand.width}
//                           height={brand.height}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
