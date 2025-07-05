import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import Image from "next/image";
import Link from "next/link";
import { featureItems } from "@/data/features"; // Needed for feature loop

export const metadata = {
  title: "IIoT Technologies",
};

export default function AboutPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        {/* Hero Section Start */}
        <div className="hero-header section panel overflow-hidden bg-white mt-2 mb-0 ">
          <div className="section-outer panel py-4 xl:py-6 pt-4 lg:pt-6 bg-white">
            <div className="container max-w-xl">
              <div className="section-inner panel py-4">
                <section className="text-start mt-[-10px] mb-6 px-4">
                  <h1
                    className="text-4xl font-bold dark:text-white"
                    style={{ color: "#0b168a" }}
                  >
                    <span style={{ 
      display: 'inline-block', 
      width: '50px', 
      height: '4px', 
      backgroundColor: '#0b168a', 
      marginRight: '15px',  
      verticalAlign: 'middle' 
    }}></span>
                    IIoT Mobile Application
                  </h1>
                </section>
                <div className="row child-cols justify-center lg:justify-between items-center gy-4 sm:gy-6 gap-10 px-4">
                  {/* Left Image */}
                 <div className="col-12 md:col-6 lg:col-5">
        <div className="panel overflow-hidden rounded-1-5 lg:rounded-2">
          <figure className="featured-image m-0 rounded rounded-2 overflow-hidden">
  <Image
    src="/assets/images/avatars/dashboard.png"
    alt="Mobile View Illustration"
    width={700}
    height={300}
    className="object-contain h-[300px] w-auto" // directly set height
  />
</figure>
        </div>
      </div>
     <div className="col-12 md:col-6 lg:col-6 -mt-6">
  <div className="panel">
    <div className="panel vstack justify-center gap-4 h-100 p-0">
      <div>
        <div className="panel vstack gap-2">
          <h2 className="h3 mb-5"
          style={{color:"#0b168a"}}>
            Now Your Factory is Smarter with IIoT
          </h2>
                                    {/* !!! START: Custom Bullet Points Here !!! */}
<div style={{ display: 'flex' }}>
  <div style={{ borderLeft: '2px solid #ccc', paddingLeft: '20px', position: 'relative' }}>
    {/* The first dot can be positioned relative to the parent div's top */}
    {/* You might remove this one if you only want dots aligned with text,
        or adjust its top based on the first list item's content.
        For now, I'm keeping it to mimic the image exactly. */}
    {/* If you want the line to start directly at the first dot, this div is not needed,
       and the line should start from the top of the first <li>'s content area. */}
    {/* <div style={{ position: 'absolute', left: '-9px', top: '0', width: '18px', height: '18px', backgroundColor: '#afca31', borderRadius: '50%' }}></div> */}

    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      <li style={{ marginBottom: '30px', position: 'relative' }}>
        {/* Adjusted lineHeight slightly if needed, but 2.525rem is quite large */}
        <span style={{ display: 'block', fontSize: '1.125rem', lineHeight: '1.625rem' /* Reverted to previous lineHeight, common for body text */ }}>OEE, production & downtime insights at a glance</span>
        {/* Adjusted top to center the bullet with the text, and color to green */}
        <div style={{ position: 'absolute', left: '-29px', top: '0.2em', width: '18px', height: '18px', backgroundColor: '#afca31', borderRadius: '50%' }}></div>
      </li>
      <li style={{ marginBottom: '30px', position: 'relative' }}>
        <span style={{ display: 'block', fontSize: '1.125rem', lineHeight: '1.625rem' }}>Real-time machine health monitoring</span>
        <div style={{ position: 'absolute', left: '-29px', top: '0.2em', width: '18px', height: '18px', backgroundColor: '#afca31', borderRadius: '50%' }}></div>
      </li>
      <li style={{ marginBottom: '30px', position: 'relative' }}>
        <span style={{ display: 'block', fontSize: '1.125rem', lineHeight: '1.625rem' }}>Predictive alerts to avoid breakdowns</span>
        <div style={{ position: 'absolute', left: '-29px', top: '0.2em', width: '18px', height: '18px', backgroundColor: '#afca31', borderRadius: '50%' }}></div>
      </li>
      <li style={{ marginBottom: '0', position: 'relative' }}>
        <span style={{ display: 'block', fontSize: '1.125rem', lineHeight: '1.625rem' }}>Remote control & diagnostics from mobile</span>
        <div style={{ position: 'absolute', left: '-29px', top: '0.2em', width: '18px', height: '18px', backgroundColor: '#afca31', borderRadius: '50%' }}></div>
      </li>
    </ul>
  </div>
</div>
                            {/* !!! END: Custom Bullet Points Here !!! */}
          <h5 className="h3 mt-3 mb-3">Download IIoT app</h5>
           {/* Google Play Image */}
         {/* <div className="mt-2 flex items-center gap-4">
  <Image
    src="/assets/images/avatars/Google-play.png"
    alt="Download on Google Play"
    width={160}
    height={48}
    className="cursor-pointer hover:opacity-90 transition-opacity"
  /> */}

  {/* Second Image (e.g., App Store or custom) */}
  {/* <Image
    src="/assets/images/avatars/App-store.png"
    alt="Download on App Store"
    width={160}
    height={48}
    className="cursor-pointer hover:opacity-90 transition-opacity"
  />
</div> */}
 <div className="hstack items-start gap-1">
                      <a href="#">
                        <Image
                          className="text-gray-900 dark:text-white hover:text-opacity-70 transition-all duration-150"
                          alt="Google Play Store"
                          data-uc-svg=""
                          src="/assets/images/avatars/Google-play.png"
                          width="135"
                          height="40"
                        />
                      </a>
                      <a href="#">
                        <Image
                          className="text-gray-900 dark:text-white hover:text-opacity-70 transition-all duration-150"
                          alt="Apple Store"
                          data-uc-svg=""
                          src="/assets/images/avatars/App-store.png"
                          width="134"
                          height="40"
                        />
                      </a>
                    </div>
          
               {/* <a
                  href="#"
                  className="uc-link dark:text-secondary fw-bold hstack gap-narrow sm:mt-1 lg:mt-2"
                >
                  <span>Let's find out</span>
                  <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                </a>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       <section>
  <h2 className="text-center text-2xl font-semibold mb-4">
    Affordable IIoT Technology to Optimize Your Operations
  </h2>
  <div className="text-center">
   {/* <button className="text-white font-bold py-2 px-4 rounded transition duration-300"
    style={{ backgroundColor: "#afca31"}}>
  Checkout Pricing <span>→</span>
</button> */}
<a
  href="/iiot-contact"
  className="btn btn-primary btn-md text-black mt-2 fw-medium py-3 px-3 group inline-flex items-center gap-1 transition-all duration-300"
  style={{ backgroundColor: "#afca31", borderColor: "#afca31" }}
  role="button"
>
  <span className="font-semibold">Checkout</span>
  <span className="inline-block transition-transform duration-300 transform group-hover:translate-x-1">
    →
  </span>
</a>

  </div>
</section>

        {/* Features Section (Copied Directly) */}
       <div id="main_features" className="main-features section panel overflow-hidden -mt-4">
          <div className="section-outer panel pt-2 md:pt-4 xl:pt-6 pb-4">

            <div className="container sm:max-w-lg xl:max-w-xl">
              <div className="section-inner panel">
                {/* <div
                  className="panel vstack items-center gap-2 xl:gap-3 mb-4 lg:mb-8 max-w-650px mx-auto text-center"
                  data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <span className="fw-bold text-primary dark:text-secondary">
                    Main features
                  </span>
                  <h2 className="h3 lg:h2 xl:h1 m-0">
                    A CRM tools help you keep track of leads
                  </h2>
                  <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                    Join the thousands of satisfied users and take your business
                    to the next level. Trusted by over 2,500 startups.
                  </p>
                </div> */}
                <div
                  className="row child-cols-12 g-6 md:g-8 xl:g-6"
                  data-uc-scrollspy="target: >*; delay: 500; cls: uc-animation-slide-bottom-medium"
                >
                <div className="row child-cols-12 g-6 md:g-8 xl:g-6">
  <div className="feature-item panel">
    <div className="row child-cols items-center justify-between g-2 md:g-4">
      {/* Image Section */}
      {/* <div className="col-12 md:col-6 lg:col-5">
        <div className="panel overflow-hidden rounded-1-5 lg:rounded-2">
          <figure className="featured-image m-0 rounded rounded-2 overflow-hidden">
  <Image
    src="/assets/images/avatars/Mobile-view.png"
    alt="Mobile View Illustration"
    width={700}
    height={300}
    className="object-contain h-[300px] w-auto" // directly set height
  />
</figure>
        </div>
      </div> */}
      {/* <div className="col-12 md:col-6 lg:col-6">
        <div className="panel">
          <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
            <div>
              <div className="panel vstack gap-2">
                <span className="cstack w-48px h-48px bg-primary text-secondary rounded-1-5 mb-2 d-none lg:d-inline-flex">
                  <i className="icon-1 unicon-cloud-download" />
                </span> 
                <h3 className="h4 sm:h3 xl:h2 m-0">
                  Ensuring timely delivery and maximum efficiency
                </h3>
                <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                  We offers advanced project management features such as Gantt charts, task dependencies, and resource allocation
                </p>
               <a
                  href="#"
                  className="uc-link dark:text-secondary fw-bold hstack gap-narrow sm:mt-1 lg:mt-2"
                >
                  <span>Let's find out</span>
                  <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer2 />
      </div>
    </>
  );
}
