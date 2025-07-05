import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import Image from "next/image";
import Link from "next/link";
import { openContactModal } from "@/utlis/toggleContactModal";


export const metadata = {
  title: "IIoT Technologies",
};

export default function AboutPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        {/* Hero Section Start */}
        <div className="hero-header section panel overflow-hidden bg-white mt-0 mb-2">
          <div className="section-outer panel py-4 xl:py-6 pt-4 lg:pt-6 bg-white">
            <div className="container max-w-xl">
              
              <div className="section-inner panel py-4">
                
                <section className="pt-2 pb-0 text-start">
  <h1
    className="text-4xl font-bold dark:text-white"
    style={{ color: "#0b168a" }}
  >
     {/* <span style={{ 
      display: 'inline-block', 
      width: '50px', 
      height: '4px', 
      backgroundColor: '#0b168a', 
      marginRight: '15px',  
      verticalAlign: 'middle' 
    }}></span> */}
    IIoT Dashboard
   
  </h1>
</section>
        
                <div className="row child-cols justify-center lg:justify-between items-center gy-4 sm:gy-6 gap-10 px-4">
                  {/* Left Image (Now First) */}
                  <div className="col-12 lg:col-6 xl:col-7">
                    <div
                      className="hero-scene panel rtl:me-6 rtl:ms-n6"
                      data-anime="targets: >*; scale: [0.9, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
                    >
                      <div className="panel overflow-hidden">
                        <Image
                          className="d-block dark:d-none"
                          alt="Main hero image"
                          src="/assets/images/avatars/website-dashboard.png"
                          width={1280}
                          height={941}
                        />
                        
                        {/* <Image
                          className="d-none dark:d-block"
                          alt="Main hero image"
                          src="/assets/images/template/industry-challenges.jpg"
                          width={1280}
                          height={942}
                        /> */}
                      </div>
                     {/* <a
  href="/iiot-contact"
  className="btn btn-primary btn-md text-black hover:text-white mt-2 fw-medium py-3 px-6 group inline-flex items-center gap-1 transition-all duration-300 rounded-full"
  style={{ backgroundColor: "#afca31", borderColor: "#afca31" }}
  role="button"
>
  <span className="font-semibold">Request for Demo</span>
  <span className="inline-block transition-transform duration-300 transform group-hover:translate-x-1">
    →
  </span>
</a> */}
                    </div>
                  </div>
                  {/* Right Text */}
                  {/* New Section for IIoT Features - Placed Below the main content block but inside the container */}
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
        <span style={{ display: 'block', fontSize: '1.125rem', lineHeight: '1.625rem' /* Reverted to previous lineHeight, common for body text */ }}>Live OEE Score</span>
        {/* Adjusted top to center the bullet with the text, and color to green */}
        <div style={{ position: 'absolute', left: '-29px', top: '0.2em', width: '18px', height: '18px', backgroundColor: '#afca31', borderRadius: '50%' }}></div>
      </li>
      <li style={{ marginBottom: '30px', position: 'relative' }}>
        <span style={{ display: 'block', fontSize: '1.125rem', lineHeight: '1.625rem' }}>Production Traceability</span>
        <div style={{ position: 'absolute', left: '-29px', top: '0.2em', width: '18px', height: '18px', backgroundColor: '#afca31', borderRadius: '50%' }}></div>
      </li>
       <li style={{ marginBottom: '30px', position: 'relative' }}>
        <span style={{ display: 'block', fontSize: '1.125rem', lineHeight: '1.625rem' }}>Rejection Analysis</span>
        <div style={{ position: 'absolute', left: '-29px', top: '0.2em', width: '18px', height: '18px', backgroundColor: '#afca31', borderRadius: '50%' }}></div>
      </li>
       <li style={{ marginBottom: '30px', position: 'relative' }}>
        <span style={{ display: 'block', fontSize: '1.125rem', lineHeight: '1.625rem' }}>Operator Alerts</span>
        <div style={{ position: 'absolute', left: '-29px', top: '0.2em', width: '18px', height: '18px', backgroundColor: '#afca31', borderRadius: '50%' }}></div>
      </li>
      <li style={{ marginBottom: '30px', position: 'relative' }}>
        <span style={{ display: 'block', fontSize: '1.125rem', lineHeight: '1.625rem' }}>Work Order Cost Tracking</span>
        <div style={{ position: 'absolute', left: '-29px', top: '0.2em', width: '18px', height: '18px', backgroundColor: '#afca31', borderRadius: '50%' }}></div>
      </li>
      <li style={{ marginBottom: '0', position: 'relative' }}>
        <span style={{ display: 'block', fontSize: '1.125rem', lineHeight: '1.625rem' }}>Real-Time Machine Downtime Tracking</span>
        <div style={{ position: 'absolute', left: '-29px', top: '0.2em', width: '18px', height: '18px', backgroundColor: '#afca31', borderRadius: '50%' }}></div>
      </li>
    </ul>
  </div>
                  </div>
                </div>
               {/* <section className="text-center mt-[-10px] mb-5 ml-10">
  <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
    Web Application
  </h1>
</section> */}
<section className="text-start mt-[-20px] mb-6 px-4">
  {/* Horizontal line before heading */}
  <div className="w-16 h-1 bg-[#0b168a] mb-2"></div>

  <h1
    className="text-4xl font-bold dark:text-white"
    style={{ color: "#0b168a" }}
  >
    
  </h1>
  <p>
    
  </p>
</section>
<section className="text-start mt-[-20px] mb-6 px-4">
  {/* Horizontal line before heading */}
  <div className="w-16 h-1 bg-[#0b168a] mb-2"></div>

  <h1
    className="text-4xl font-bold dark:text-white"
    style={{ color: "#0b168a" }}
  >
    Web Application
  </h1>
  <p>
    IIoT Technologies empowers manufacturers with smart connectivity and real-time data insights to transform their factories into intelligent, data-driven ecosystems. It brings together machines, sensors, and analytics onto a single platform, offering live production tracking, machine health monitoring, predictive maintenance, and energy efficiency analysis. With features like OEE dashboards, quality reports, workforce efficiency, trial mode simulations, and remote diagnostics — IIoT Technologies enables optimized operations, reduced downtime, and actionable decisions. From shop floor to top floor, it’s your complete solution for Industry 4.0 transformation — anytime, anywhere.
  </p>
</section>


<section className="max-w-4xl mx-auto px-4 mb-10">
  {/* 1. Quality Dashboards */}
 <h3 className="text-xl font-semibold mb-2" style={{ color: "#afca31" }}>
    1. Quality Dashboards
  </h3>
  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
    Quality dashboards provide a clear and organized view of product performance across different categories and customer segments.
    With detailed insights at your fingertips, you can quickly identify quality trends, frequent defect areas, and customer-specific quality issues.
    This enables teams to make informed decisions and take corrective actions faster.
    The data is visually structured for easy understanding and continuous monitoring.
    
  </p>

  {/* 2. Availability & OEE Monitoring */}
  <h3 className="text-xl font-semibold mb-2" style={{ color: "#afca31" }}>
   2.  Availability & OEE Monitoring
  </h3>
  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
    This feature enables real-time tracking of machine availability, performance, and quality — the core components of Overall Equipment Effectiveness (OEE).
    It helps you identify bottlenecks, unplanned downtimes, and underperformance as they occur. With live visibility, plant managers can take immediate actions
    to keep operations efficient and productive. OEE data also supports long-term maintenance and efficiency planning.
  </p>

  {/* 3. Production Counter */}
 <h3 className="text-xl font-semibold mb-2" style={{ color: "#afca31" }}>
    3. Production Counter
  </h3>
  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
    The production counter tracks both approved and rejected units in real time, allowing you to monitor your output with precision.
    Every rejected unit is logged with an associated reason, giving clear insights into quality issues or machine-related problems.
    This helps improve production accuracy and reduces waste over time.
  </p>

  {/* 4. Traceability */}
  <h3 className="text-xl font-semibold mb-2" style={{ color: "#afca31" }}>
    4. Traceability
  </h3>
  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
    Traceability ensures full visibility of your production process from raw materials to final delivery.
    Every component, batch, and process step is tracked and recorded, enabling compliance with quality standards and regulations.
    This not only helps identify issues quickly but also improves accountability and product reliability.
  </p>

  {/* 5. Trial Mode */}
  <h3 className="text-xl font-semibold mb-2" style={{ color: "#afca31" }}>
    5. Trial Mode
  </h3>
  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
   Trial Mode allows you to simulate production conditions before full implementation. This feature is useful for testing new processes, product configurations, or machine setups without disrupting the actual workflow. It helps in identifying risks, validating assumptions, and optimizing production strategies beforehand. Trial Mode minimizes operational errors and improves deployment success.
  </p>

  {/* 6. Work Order Cost Tracking */}
  <h3 className="text-xl font-semibold mb-2" style={{ color: "#afca31" }}>
    6. Work Order Cost Tracking
  </h3>
  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
   This feature tracks all cost elements tied to a specific work order, including labor, materials, and machine usage. It helps manufacturers understand the real-time expenses involved in producing a specific item or batch. With this data, cost overruns can be identified early, and budgeting becomes more accurate. The result is improved profitability and operational transparency.
  </p>

  {/* 7. Workforce Efficiency Monitoring */}
  <h3 className="text-xl font-semibold mb-2" style={{ color: "#afca31" }}>
   7.  Workforce Efficiency Monitoring
  </h3>
  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
   Track operator performance, task completion times, and idle periods to gain deep insights into workforce productivity. This feature helps identify skill gaps, high-performing operators, and inefficiencies in task assignments. By analyzing these metrics, supervisors can optimize workforce scheduling, training programs, and workload distribution for better output.
  </p>

  {/* 8. Production History Reports */}
  <h3 className="text-xl font-semibold mb-2" style={{ color: "#afca31" }}>
    8. Production History Reports
  </h3>
  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
    These reports provide detailed logs of every production run, organized by batch, job, and order. You can view summaries on an hourly, daily, or monthly basis to understand trends and spot issues. The data supports audits, quality reviews, and production planning. It offers a historical view that’s essential for strategic decisions and compliance documentation.
  </p>

  {/* 9. QA-QC Integration */}
  <h3 className="text-xl font-semibold mb-2" style={{ color: "#afca31" }}>
    9. QA-QC Integration
  </h3>
  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
   Integrate your IIoT platform with existing quality assurance and control systems to streamline testing and inspections. This ensures that every quality checkpoint is documented and meets defined standards. Whether it’s manual inspection or automated measurements, data flows seamlessly into the system for unified reporting and corrective action tracking.
  </p>

  {/* 10. Sensor Integration */}
  <h3 className="text-xl font-semibold mb-2" style={{ color: "#afca31" }}>
    10. Sensor Integration
  </h3>
  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
    This feature supports real-time monitoring through sensors that measure temperature, pressure, flow rate, weight, distance, and more. It enables proactive maintenance, real-time alerts, and automatic logging of process data. The integration helps you achieve greater accuracy, reduce human error, and respond to abnormalities before they impact operations.
  </p>

  {/* 11. Access Controls */}
  <h3 className="text-xl font-semibold mb-2" style={{ color: "#afca31" }}>
    11. Access Controls
  </h3>
  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
    Access Controls ensure secure, role-based access to the system, providing different levels of visibility and control to users such as Plant Heads, Admins, Operators, and Supervisors. This maintains data confidentiality and prevents unauthorized changes. Permissions can be customized to match organizational hierarchy, making the system both flexible and secure.
  </p>
</section>
{/* End of New Section */}
              </div>
            </div>
          </div>
          
        </div>
        


        {/* Hero Section End */}

        <Footer2 />
</div>
      </>
  );
}