import React from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSelect from "../common/LanguageSelect";
import { footerLinks, socialLinks } from "@/data/footer";

export default function Footer2() {
  return (
   <footer
  id="uc-footer"
  className="footer-outer py-6 lg:py-8 xl:py-9 text-white text-opacity-70 m-2 mt-0 rounded-2"
  style={{ backgroundColor: "#0a0c4c" }}
>
  <div className="footer-outer py-4 lg:py-6 xl:py-9 text-white">
        <div className="container max-w-xl">
          <div className="footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
            <div className="uc-footer-widgets panel">
              <div className="row child-cols-6 md:child-cols col-match g-4">
                <div className="col-12 lg:col-4">
                  <div className="panel vstack items-start gap-4 ltr:md:pe-8 rtl:md:ps-8">
                    <div className="vstack gap-2">
                      <Link
                          className="panel text-none"
                          href={`/iot_new_homepage`}
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
                      <p>
                         Transforming Industries with Smarter IoT Solutions
                       At IIOT Technologies, we are redefining operational efficiency through cutting-edge Industrial IIOT software solution.
                      </p>
                    </div>
                    <div className="hstack items-start gap-1">
                      {/*<a href="#">
                        <Image
                          className="text-gray-900 dark:text-white hover:text-opacity-70 transition-all duration-150"
                          alt="Google Play Store"
                          data-uc-svg=""
                          src="/assets/images/common/playstore.svg"
                          width="135"
                          height="40"
                        />
                      </a>
                      <a href="#">
                        <Image
                          className="text-gray-900 dark:text-white hover:text-opacity-70 transition-all duration-150"
                          alt="Apple Store"
                          data-uc-svg=""
                          src="/assets/images/common/appstore.svg"
                          width="134"
                          height="40"
                        />
                      </a>*/}

                    </div>
                  </div>
                </div>
                {footerLinks.map((section, index) => (
  <div key={index}>
    {section.links ? (
      <ul className="nav-y gap-1 fw-medium">
        {section.links.map((link, i) => (
          <li key={i}>
            <Link href={link.href}>{link.label}</Link>
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
    </footer>
  );
}
