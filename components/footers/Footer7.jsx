import React from "react";
//import LanguageSelect from "../common/LanguageSelect";
import Link from "next/link";
import Image from "next/image";
import { footerLinks6, socialLinks  } from "@/data/footer";

export default function Footer7() {
  return (
    <footer
      id="uc-footer"
      className="uc-footer panel overflow-hidden uc-dark uc-dark"
    >
      <div
  className="footer-outer py-6 lg:py-8 xl:py-9 text-white text-opacity-70 m-2 mt-0 rounded-2"
  style={{ backgroundColor: "#0a0c4c" }}
>
        <div className="uc-footer-content">
          <div className="container xl:max-w-xl">
            <div className="uc-footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
              <div className="uc-footer-widgets panel">
                <div className="row child-cols-6 md:child-cols col-match g-4">
                  <div className="col-12 lg:col-6">
                    <div className="panel vstack items-start gap-3 xl:gap-4 lg:max-w-1/2">
                      <div>
                        <Link
                          className="panel text-none"
                          href={`/home-8`}
                          style={{ width: 140 }}
                        >
                          <Image
                            className="dark:d-none"
                            alt="Lexend"
                            src="/assets/images/iiot-logo.jpg"
                            width={148}
                            height={39}
                          />
                          <Image
                            className="d-none dark:d-block"
                            alt="Lexend"
                            src="/assets/images/iiot-logo.jpg"
                            width={80}
                            height={39}
                          />
                        </Link>
                        <p className="mt-2">
                         Transforming Industries with Smarter IoT Solutions. At IIOT Technologies, we are redefining operational efficiency through cutting-edge Industrial IIOT software solution.
                        </p>
                      </div>
                      {/*<LanguageSelect />*/}
                    </div>
                  </div>
                  {footerLinks6.map((section, index) => (
  <div key={index} className={section.className || ""}>
    {section.links ? (
      <ul className="nav-y gap-2 fw-medium dark:text-white">
        {section.links.map((link, linkIndex) => (
          <li key={linkIndex}>
            {link.isLink ? (
              <Link href={link.href}>{link.text}</Link>
            ) : (
              <a href={link.href}>{link.text}</a>
            )}
          </li>
        ))}
      </ul>
    ) : section.mapEmbed ? (
      <div className="w-full">{section.mapEmbed}</div>
    ) : null}
  </div>
))}
                </div>
              </div>
             <div className="uc-footer-bottom panel hstack flex-wrap justify-between items-start pt-4 lg:pt-6 border-top dark:text-white">
             
             {/* LEFT SIDE: TEXT + PRIVACY POLICY (stacked vertically) */}
             <div className="vstack items-start gap-1">
               <p className="opacity-60">
                 IIoT © {new Date().getFullYear()}, All rights reserved.
               </p>
               <a href="/iiot-privacy" className="fw-medium">Privacy Policy</a>
             </div>
           
             {/* RIGHT SIDE: TERMS + SOCIAL ICONS (stacked vertically) */}
             <div className="vstack items-end gap-1 text-end">
               <a href="/iiot-terms" className="fw-medium">Terms & Conditions</a>
               <ul className="nav-x gap-2">
                             {socialLinks.map((link, index) => (
                               <li key={index}>
                                 <a href={link.href}>
                                   <i className={`icon icon-2 ${link.iconClass}`} />
                                 </a>
                               </li>
                             ))}
                           </ul>
             </div>
             </div>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
