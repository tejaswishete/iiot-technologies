import React from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSelect from "../common/LanguageSelect";
import { footerLinks, socialLinks } from "@/data/footer";

export default function Footer1() {
  return (
    <footer id="uc-footer" className="uc-footer panel overflow-hidden">
      <div className="footer-outer py-4 lg:py-6 xl:py-9 dark:bg-gray-900 dark:text-white">
        <div className="container max-w-xl">
          <div className="footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
            <div className="uc-footer-widgets panel">
              <div className="row child-cols-6 md:child-cols col-match g-4">
                <div className="col-12 lg:col-4">
                  <div className="panel vstack items-start gap-4 ltr:md:pe-8 rtl:md:ps-8">
                    <div className="vstack gap-2">
                      <Link href={`/`}>
                        <Image
                          className="w-60px text-primary"
                          alt="IIOT"
                          src="/assets/images/logo.jpg"
                          width="40"
                          height="50"
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
                      </a>*/}
                      {/*<a href="#">
                        <Image
                          className="text-gray-900 dark:text-white hover:text-opacity-70 transition-all duration-150"
                          alt="Apple Store"
                          data-uc-svg=""
                          src="/assets/images/common/appstore.svg"
                          width="134"
                          height="40"
                        />
                      </a>*/}
{/*<div className="w-full">
  <iframe
    title="Navi Mumbai Location"
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15066.157835888166!2d73.0154!3d19.0330!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1a1d37e0a07%3A0xdeb64adf5465a7ec!2sNavi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1687781018375!5m2!1sen!2sin"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>*/}

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
  <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-center lg:justify-between pt-4 lg:pt-6 border-top dark:text-white">
              <div className="vstack sm:hstack justify-center lg:justify-start items-center lg:items-start gap-1 lg:gap-2">
                <p className="opacity-60">
                  IIoT © {new Date().getFullYear()}, All rights reserved.
                </p>
                <ul className="nav-x gap-2 fw-medium">
                  <li>
                    <a href="/iiot-privacy">Privacy policy</a>
                  </li>
                  </ul>
                  {/*<li>
                    <a href="#">Legal</a>
                  </li>*/}
                 <div className="hstack flex flex-col justify-center lg:justify-end gap-2 lg:gap-3">
  {/* Terms & Conditions Link */}
  <div>
    <a href="#">Terms & Conditions</a>
  </div>
  {/* Social Icons */}
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
