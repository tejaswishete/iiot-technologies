import React from "react";
import LanguageSelect from "../common/LanguageSelect";
import Link from "next/link";
import Image from "next/image";
import { footerLinks5 } from "@/data/footer";

export default function Footer6() {
  return (
    <footer
      id="uc-footer"
      className="uc-footer panel overflow-hidden ft-tertiary"
    >
      <div className="footer-outer py-4 lg:py-6 xl:py-10 bg-gradient-to-t from-tertiary-200 dark:from-primary-700 to-primary-25 dark:to-gray-900 dark:text-white">
        <div className="uc-footer-content">
          <div className="container">
            <div className="uc-footer-inner vstack gap-4 lg:gap-6 xl:gap-8 mt-md-40">
              <div className="uc-footer-widgets panel">
                <div className="row child-cols-6 md:child-cols col-match g-4">
                  <div className="col-12 md:col-6">
                    <div className="panel vstack items-start gap-3 xl:gap-4 md:max-w-1/2">
                      <div>
                        <Link href={`/`} style={{ width: 140 }}>
                           <Image
                          className="w-60px text-primary"
                          alt="IIOT"
                          src="/assets/images/logo.jpg"
                          width="40"
                          height="50"
                        />
                        </Link>
                        <p className="lg:fs-5 mt-2 fw-medium">
                          Transforming Industries with Smarter IoT Solutions
                       At IIOT Technologies, we are redefining operational efficiency through cutting-edge Industrial IIOT software solution.
                        </p>
                      </div>
                      {/*<LanguageSelect />*/}
                    </div>
                  </div>

                  {footerLinks5.map((section, index) => (
                    <div key={index} className={section.className || ""}>
                      <ul className="nav-y gap-2 fw-bold">
                        <li className="h6 fs-8 text-uppercase mb-2 opacity-60">
                          {section.title}
                        </li>
                        {Array.isArray(section.links) && section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            {link.href.startsWith("/") ? (
                              <Link href={link.href}>{link.text}</Link>
                            ) : (
                              <a href={link.href}>{link.text}</a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="uc-footer-bottom panel vstack md:hstack gap-2 justify-between items-center text-center pt-4 lg:pt-6 border-top dark:text-white">
                <p>IIoT © {new Date().getFullYear()}, All rights reserved.</p>
                <ul className="nav-x gap-1">
                  <li>
                    <Link href={`/iiot-privacy`}>Privacy policy</Link>
                  </li>
                  <li className="mx-2 lg:mx-3">
                    <Link href={`/page-terms`}>Terms & Conditions</Link>
                  </li>
<li>
                    <a
                      href="#"
                      className="btn btn-sm btn-primary text-tertiary dark:bg-tertiary dark:text-primary p-0 w-32px h-32px rounded-circle"
                    >
                      <i className="icon icon-1 unicon-logo-linkedin" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="btn btn-sm btn-primary text-tertiary dark:bg-tertiary dark:text-primary p-0 w-32px h-32px rounded-circle"
                    >
                      <i className="icon icon-1 unicon-logo-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="btn btn-sm btn-primary text-tertiary dark:bg-tertiary dark:text-primary p-0 w-32px h-32px rounded-circle"
                    >
                      <i className="icon icon-1 unicon-logo-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
