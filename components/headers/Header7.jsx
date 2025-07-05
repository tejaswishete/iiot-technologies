"use client";
import { openMobileMenu } from "@/utlis/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { openContactModal } from "@/utlis/toggleContactModal";
import ProductPages from "./ProductPages";
import Solutions from "./Solutions";
import { categories } from "@/data/menu";


export default function Header7() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(false);

  useEffect(() => {
    setPrevScrollPos(window.pageYOffset);
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = currentScrollPos < prevScrollPos;
      setScrollingUp(currentScrollPos <= 80 ? false : isScrollingUp);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <header
      className={`uc-header header-eight uc-navbar-sticky-wrap z-999 uc-dark uc-sticky  ${
        scrollingUp ? " uc-sticky-below uc-sticky-fixed headerFixed" : ""
      }`}
      data-uc-sticky="start: 100vh; show-on-up: true; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"
      style={{}}
    >
      <nav
        className={`uc-navbar-container uc-navbar-float ft-tertiary z-1 uc-navbar-transparent`}
        data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;"
        style={{ transform: "translateY(0px)", opacity: 1 }}
      >
        <div className="uc-navbar-main" style={{ "--uc-nav-height": "80px" }}>
          <div className="container">
            <div
  className="uc-navbar min-h-64px lg:min-h-80px text-gray-900 dark:text-white px-1 lg:px-2 rounded-2 mt-2 shadow-xs"
  style={{ backgroundColor: "#0a0c4c", opacity: 0.9 }}
  data-uc-navbar="animation: uc-animation-slide-top-small; duration: 150;"
>
              <div className="uc-navbar-left">
                <div className="uc-logo ltr:ms-1 rtl:me-1">
                  <Link
                    className="panel text-none"
                    href={`/iot_new_homepage`}
                    style={{ width: 140 }}
                  >
                    <Image
                      className="dark:d-none"
                      alt="IIoT"
                      src="/assets/images/iiot-logo.jpg"
                      width={148}
                      height={39}
                    />
                    <Image
                      className="d-none dark:d-block"
                      alt="Lexend"
                      src="/assets/images/iiot-logo.jpg"
                      width={100}
                      height={40}
                    />
                  </Link>
                </div>
              </div>
              
              <div className="uc-navbar-center  ">
                <ul className="uc-navbar-nav fs-5 gap-3 lg:gap-4 d-none lg:d-flex">
                  <li>
                    <Link href={`/`}>Home</Link>
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
  className="uc-navbar-dropdown uc-drop bg-black dark:text-white shadow-xl rounded-2 uc-drop-grid row child-cols g-3 uc-grid uc-grid-stack"
  style={{
    width: "100px",
    position: "absolute",
    top: "100%",
    left: "0",
    zIndex: 9999,
    // backgroundColor: "#0a0c4c",
  }}
>

   <div className="uc-drop-grid row child-cols g-4 uc-grid uc-grid-stack">
    <div>
      <ul className="uc-nav uc-navbar-dropdown-nav text-white dark:text-white">
        <li>
          <Link href="/iiot-about" className="text-white dark:text-white">About</Link>
        </li>
        <li>
          <Link href="/iiot-team" className="text-white dark:text-white">What we do</Link>
        </li>
        <li>
          <Link href="/what-is-iiot" className="text-white dark:text-white">Our Clients</Link>
        </li>
        <li>
          <Link href="/iiot-testimonials" className="text-white dark:text-white">Testimonials</Link>
        </li>
      </ul>
    </div>
  </div>
</div>
</li>
                   <li>
                    <Link href={`/iiot-team`}>Our Team</Link>
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
   className="uc-navbar-dropdown uc-drop bg-black dark:text-white shadow-xl rounded-2 uc-drop-grid row child-cols g-3 uc-grid uc-grid-stack"
    style={{
      width: "360px",
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
            <Link href="/roi-calculator">Difference between iot and iiot</Link>
          </li>
          <li>
            <Link href="/oee-calculator">How IIOT Transforms</Link>
          </li>
          <li>
            <Link href="/iiot-benefits">Key Benefits</Link>
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
     className="uc-navbar-dropdown uc-drop bg-black dark:text-white shadow-xl rounded-2 uc-drop-grid row child-cols g-3 uc-grid uc-grid-stack"
    style={{
      width: "280px",
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
            <Link href="/iiot-faq">How it Works</Link>
          </li>
          <li>
            <Link href="/roi-calculator">Installation</Link>
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
  className="uc-navbar-dropdown uc-drop bg-black text-white shadow-xl rounded-2 uc-drop-grid row child-cols g-3 uc-grid uc-grid-stack"
  style={{
    backgroundColor: "#0a0c4c",
    width: "280px",
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
            <Link href="/roi-calculator">Request for demo</Link>
          </li>
          <li>
            <Link href="/oee-calculator">Careers</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</li>
                </ul>
              </div>
              <div className="uc-navbar-right">
                {/*<Link
                  className="uc-link fs-5 text-dark dark:text-white"
                  href={`/sign-in`}
                >
                  Log in
                </Link>*/}
               <a
  className="btn btn-md text-black mt-1 fw-medium d-none lg:d-inline-flex me-2"
  style={{ backgroundColor: "#afca31", borderColor: "#afca31" }}
  onClick={openContactModal}
  role="button"
>
  <span>Request a Demo</span>
</a>

<a
  className="btn btn-md btn-tertiary w-48px h-48px d-inline-flex lg:d-none"
  onClick={openMobileMenu}
  role="button"
>
  <i className="icon icon-2 unicon-menu" />
</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
