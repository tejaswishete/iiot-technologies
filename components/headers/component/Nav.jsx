"use client";
import Link from "next/link";
import Image from "next/image";
import { pagesData } from "@/data/menu";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <>
      <li>
        <Link href={`/iot_new_homepage`}>Home</Link>
      </li>
     <li className="has-dd-menu position-relative">
<Link href={`/iiot-about`}  role="button" aria-haspopup="true">

    About Us{" "}
    <span className="uc-icon uc-navbar-parent-icon">
      <svg width={12} height={12} viewBox="0 0 12 12">
        <polyline
          fill="none"
          stroke="#000"
          strokeWidth="1.1"
          points="1 3.5 6 8.5 11 3.5"
        />
      </svg>
    </span>
  </Link>
  <div
    className="uc-navbar-dropdown uc-drop"
    style={{
      width: "100px",
      position: "absolute",
      top: "100%",
      left: "0",
      zIndex: 9999,
    }}
  >
    <div className="uc-drop-grid row child-cols g-4 uc-grid uc-grid-stack">
      <div>
        <ul className="uc-nav uc-navbar-dropdown-nav">
          <li>
            <Link href="/iiot-about">About</Link>
          </li>
          <li>
            <Link href="/iiot-team">What we do</Link>
          </li>
          <li>
            <Link href="/what-is-iiot">Our Clients</Link>
          </li>
          <li>
            <Link href="/iiot-testimonials">Testimonials</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</li>
<li>
  <Link href="/iiot-team">Our Team</Link>
</li>

    <li className="has-dd-menu position-relative">
  <a role="button" aria-haspopup="true">
    What is IIOT{" "}
    <span className="uc-icon uc-navbar-parent-icon">
      <svg width={12} height={12} viewBox="0 0 12 12">
        <polyline
          fill="none"
          stroke="#000"
          strokeWidth="1.1"
          points="1 3.5 6 8.5 11 3.5"
        />
      </svg>
    </span>
  </a>
  <div
    className="uc-navbar-dropdown uc-drop"
    style={{
      width: "300px",
      position: "absolute",
      top: "100%",
      left: "0",
      zIndex: 9999,
    }}
  >
    <div className="uc-drop-grid row child-cols g-4 uc-grid uc-grid-stack">
      <div>
        <ul className="uc-nav uc-navbar-dropdown-nav">
          <li>
            <Link href="/what-is-iiot">Industry 4.0</Link>
          </li>
          <li>
            <Link href="/iot_new_homepage">Difference between iot and iiot</Link>
          </li>
          <li>
            <Link href="/iot_new_homepage">How IIOT Transforms</Link>
          </li>
          <li>
            <Link href="/iot-benefits">Key Benefits</Link>
          </li>
          <li>
            <Link href="/how-iiot-transforms-industries">How IIOT Transform Industries</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</li>
       <li className="has-dd-menu position-relative">
  <a role="button" aria-haspopup="true">
    Our Solutions{" "}
    <span className="uc-icon uc-navbar-parent-icon">
      <svg width={12} height={12} viewBox="0 0 12 12">
        <polyline
          fill="none"
          stroke="#000"
          strokeWidth="1.1"
          points="1 3.5 6 8.5 11 3.5"
        />
      </svg>
    </span>
  </a>
  <div
    className="uc-navbar-dropdown uc-drop"
    style={{
      width: "150px",
      position: "absolute",
      top: "100%",
      left: "0",
      zIndex: 9999,
    }}
  >
    <div className="uc-drop-grid row child-cols g-4 uc-grid uc-grid-stack">
      <div>
        <ul className="uc-nav uc-navbar-dropdown-nav">
          <li>
            <Link href="/iiot-website-dashboard">IIoT Dashboard</Link>
          </li>
          <li>
            <Link href="/iot_new_homepage">How it Works</Link>
          </li>
          <li>
            <Link href="/iot_new_homepage">Installation</Link>
          </li>
          <li>
            <Link href="/iiot-features">Key Features</Link>
          </li>
          <li>
            <Link href="/iiot-industries-we-serve">Industry we Serve</Link>
          </li>
          <li>
            <Link href="/iiot-faq">FAQ</Link>
          </li>
           <li>
            <Link href="/iiot-blog">Blogs</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</li>
 <li className="has-dd-menu position-relative">
  <a role="button" aria-haspopup="true">
    Contact us{" "}
    <span className="uc-icon uc-navbar-parent-icon">
      <svg width={12} height={12} viewBox="0 0 12 12">
        <polyline
          fill="none"
          stroke="#000"
          strokeWidth="1.1"
          points="1 3.5 6 8.5 11 3.5"
        />
      </svg>
    </span>
  </a>
  <div
    className="uc-navbar-dropdown uc-drop"
    style={{
      width: "100px",
      position: "absolute",
      top: "100%",
      left: "0",
      zIndex: 9999,
    }}
  >
    <div className="uc-drop-grid row child-cols g-4 uc-grid uc-grid-stack">
      <div>
        <ul className="uc-nav uc-navbar-dropdown-nav">
          <li>
            <Link href="/iiot-contact">Contact</Link>
          </li>
          <li>
            <Link href="/iot_new_homepage">Request for demo</Link>
          </li>
          <li>
            <Link href="/iiot-career">Careers</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</li>
      <li className="has-dd-menu">
       {/* <a role="button" aria-haspopup="true">
          More{" "}
          <span
            data-uc-navbar-parent-icon=""
            className="uc-icon uc-navbar-parent-icon"
          >
            <svg width={12} height={12} viewBox="0 0 12 12">
              <polyline
                fill="none"
                stroke="#000"
                strokeWidth="1.1"
                points="1 3.5 6 8.5 11 3.5"
              />
            </svg>
          </span>
        </a>*/}
        {/* uc-navbar-dropdown uc-drop uc-open */}

        <div className={`uc-navbar-dropdown uc-drop w-100`}>
          <div
            className="uc-drop-grid row child-cols g-4 uc-grid uc-grid-stack"
            data-uc-grid=""
          >
            <div>
              <div className="uc-drop-grid row child-cols g-4 uc-grid uc-grid-stack">
                {pagesData.map((section, index) => (
                  <div key={index}>
                    <ul className="uc-nav uc-navbar-dropdown-nav">
                      <li className="uc-nav-header">{section.header}</li>
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          {item.href.startsWith("/") ? (
                            <Link
                              href={item.href}
                              className={
                                pathname.split("/")[1] ==
                                item.href.split("/")[1]
                                  ? "menuActive"
                                  : "inActiveMenu"
                              }
                            >
                              {item.label}
                              {item.badge && (
                                <span
                                  className={`fw-bold fs-8 ms-1 px-1 border rounded-pill ${item.badge.className}`}
                                >
                                  {item.badge.text}
                                </span>
                              )}
                            </Link>
                          ) : (
                            <a href={item.href}>
                              {item.label}
                              {item.badge && (
                                <span
                                  className={`fw-bold fs-8 ms-1 px-1 border rounded-pill ${item.badge.className}`}
                                >
                                  {item.badge.text}
                                </span>
                              )}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-3">
              <div className="panel w-100 overflow-hidden">
                <div className="ratio ratio-3x4 overflow-hidden rounded">
                  <Image
                    alt="Let's build anything with Lexend!"
                    src="/assets/images/template/menu-banner.jpg"
                    width="544"
                    height="660"
                  />
                  <a
                    className="position-cover"
                    href="https://themeforest.net/user/ib-themes/portfolio"
                    target="_blank"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
