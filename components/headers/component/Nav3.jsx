"use client";
import Link from "next/link";
import Image from "next/image";
import { openNewsletterModal } from "@/utlis/toggleNewsletterModal";
import { features, homeLinks, links } from "@/data/menu";
import { featuresMenu, services } from "@/data/services";
export default function Nav3() {
  return (
    <>
 <li>
        <Link href={`/`}>Home</Link>
      </li>
     <li className="has-dd-menu position-relative">
<Link href={`/iiot-about`}  role="button" aria-haspopup="true">

    Company{" "}
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
      width: "320px",
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
            <Link href="/iiot-about">About Us</Link>
          </li>
          <li>
            <Link href="/iiot-team">Our Team</Link>
          </li>
          <li>
            <Link href="/what-is-iiot">What is IIOT?</Link>
          </li>
          <li>
            <Link href="/how-iiot-transforms-industries">
              How IIOT Transforms Industries?
            </Link>
          </li>
          <li>
            <Link href="/testimonials">Testimonials</Link>
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
      width: "320px",
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
            <Link href="/iiot-features">Key Features of IIOT</Link>
          </li>
          <li>
            <Link href="/business-benefits-of-iiot">Business Benefits of IIOT</Link>
          </li>
          <li>
            <Link href="/industry-challenges-and-iiot-solutions">
              Industry Challenges & IIOT Solutions
            </Link>
          </li>
          <li>
            <Link href="/industries-we-serve">Industries We Serve</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</li>
     <li className="has-dd-menu position-relative">
  <a role="button" aria-haspopup="true">
    Knowledge Hub{" "}
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
      width: "320px",
      position: "absolute",
      top: "100%",
      left: "0", // change to "50%" and use transform below to center
      transform: "translateX(-50%)",
      zIndex: 9999,
    }}
  >
    <div className="uc-drop-grid row child-cols g-4 uc-grid uc-grid-stack">
      <div>
        <ul className="uc-nav uc-navbar-dropdown-nav">
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/roi-calculator">ROI Calculator</Link>
          </li>
          <li>
            <Link href="/oee-calculator">OEE Calculator</Link>
          </li>
          <li>
            <Link href="/case-studies">Case Studies</Link>
          </li>
          <li>
            <Link href="/blog">Blog / Insights</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</li>
      <li>
        <Link href={`/iiot-contact`}>Contact</Link>
      </li>
      <li>
       {/* <a
          href="https://themeforest.net/user/ib-themes/portfolio"
          target="_blank"
        >
          Buy now
        </a>*/}
      </li>
    </>
  );
}
