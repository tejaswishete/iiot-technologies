"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from 'react';
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const timeoutRef = useRef(null);
  const [showSolutions, setShowSolutions] = useState(false);
const solutionsTimeoutRef = useRef(null);
const [showKnowledge, setShowKnowledge] = useState(false);
const knowledgeTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowCompany(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowCompany(false);
    }, 300); // 200ms delay before closing
  };

  const handleSolutionsMouseEnter = () => {
    clearTimeout(solutionsTimeoutRef.current);
    setShowSolutions(true);
  };
  
  const handleSolutionsMouseLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setShowSolutions(false);
    }, 300); // 100ms delay
  };

  const handleKnowledgeMouseEnter = () => {
    clearTimeout(knowledgeTimeoutRef.current);
    setShowKnowledge(true);
  };
  
  const handleKnowledgeMouseLeave = () => {
    knowledgeTimeoutRef.current = setTimeout(() => {
      setShowKnowledge(false);
    }, 300); // Adjust delay (in ms) as needed
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const handleClose = () => {
    setShowForm(false);
  };

const handleSubmit = (e) => {
  e.preventDefault(); // Prevent page reload
  setIsSubmitted(true); // Show thank-you message
};
  return (
    <header className="bg-white shadow-md py-4 px-14 fixed top-0 left-0 w-full z-50">
  <div className="flex items-center justify-between w-full">
    {/* Left Side - Logo */}
    <div className="flex items-center">
      <Link href="/">
        <Image
          src="/Geanysoftech logo.jpeg"
          alt="Geanysoftech Logo"
          width={150}
          height={50}
          className="cursor-pointer"
        />
      </Link>
    </div>

    {/* Right Side - Navbar Links */}
    <nav>
      <ul className="flex items-center space-x-10 font-semibold text-gray-800 text-lg">

              {/* HOME */}
    <li className="hover:text-blue-600 transition duration-200">
      <Link href="/" style={{ fontSize: '17px' }}>Home</Link>
    </li>

{/* COMPANY Dropdown */}
<li
  className="relative"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
<Link href="/company/about_us">
  <span
    className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition duration-200"
    style={{ fontSize: '17px' }}
  >
    Company <FaChevronDown className="text-sm mt-1" />
  </span>
</Link>

  <div
    className={`absolute mt-10 z-50 w-64 font-poppins font-normal text-[#020981] bg-white shadow-lg rounded-md text-xs p-4 transition-all duration-300 ease-in-out ${
      showCompany
        ? 'opacity-100 translate-y-0 visible'
        : 'opacity-0 -translate-y-2 invisible pointer-events-none'
    }`}
    onMouseEnter={handleMouseEnter} // Make sure to keep the dropdown open when hovering over it
    onMouseLeave={handleMouseLeave}  // Close the dropdown when leaving the dropdown area
  >
    <ul className="space-y-2">
      <li>
        <Link
          href="/company/about_us"
          className="block hover:text-[#b3cf39]"
          style={{ fontSize: '15px' }} // Inline CSS for "About Us" font size
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          href="/company/our_team"
          className="block hover:text-[#b3cf39]"
          style={{ fontSize: '15px' }} // Inline CSS for "Our Team" font size
        >
          Our Team
        </Link>
      </li>
      <li>
        <Link
          href="/company/what_is_IIOT"
          className="block hover:text-[#b3cf39] whitespace-nowrap"
          style={{ fontSize: '15px' }} // Inline CSS for "What is IIOT" font size
        >
          What is IIOT?
        </Link>
      </li>
      <li>
        <Link
          href="/iiot_features_2"
          className="block hover:text-[#b3cf39] whitespace-nowrap"
          style={{ fontSize: '15px' }} // Inline CSS for "How IIoT Transforms Industries?" font size
        >
          How IIoT Transforms Industries?
        </Link>
      </li>
      <li>
        <Link
          href="/testimonials"
          className="block hover:text-[#b3cf39]"
          style={{ fontSize: '15px' }} // Inline CSS for "Testimonials" font size
        >
          Testimonials
        </Link>
      </li>
    </ul>
  </div>
</li>

        {/* OUR SOLUTIONS Dropdown */}
<li
  className="relative"
  onMouseEnter={handleSolutionsMouseEnter}
  onMouseLeave={handleSolutionsMouseLeave}
>
  <span
    className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition duration-200"
    style={{ fontSize: '17px' }} // Inline CSS for font size
  >
    Our Solutions <FaChevronDown className="text-sm mt-1" />
  </span>

      <ul
  className={`absolute mt-10 z-50 w-70 font-poppins font-normal text-[#020981] bg-white shadow-lg rounded-md text-sm p-4 space-y-2 transition-all duration-300 ease-in-out ${
    showSolutions
      ? 'opacity-100 translate-y-0 visible'
      : 'opacity-0 -translate-y-2 invisible pointer-events-none'
  }`}
>
  <li>
    <Link
      href="/iiot_features"
      className="block hover:text-[#b3cf39] whitespace-nowrap"
      style={{ fontSize: '15px' }} // Inline CSS for font size
    >
      Key Features of IIOT
    </Link>
  </li>
  <li>
    <Link
      href="/oursolutions/solutions"
      className="block hover:text-[#b3cf39] whitespace-nowrap"
      style={{ fontSize: '15px' }} // Inline CSS for font size
    >
      Business Benefits of IIOT
    </Link>
  </li>
  <li>
    <Link
      href="/oursolutions/Industry_challenges"
      className="block hover:text-[#b3cf39] whitespace-nowrap"
      style={{ fontSize: '15px' }} // Inline CSS for font size
    >
      Industry Challenges & IIoT Solutions
    </Link>
  </li>
  <li>
    <Link
      href="/oursolutions/our_clients"
      className="block hover:text-[#b3cf39] whitespace-nowrap"
      style={{ fontSize: '15px' }} // Inline CSS for font size
    >
      Industries We Serve
    </Link>
  </li>
</ul>
</li>

{/* KNOWLEDGE HUB Dropdown */}
<li
  className="relative"
  onMouseEnter={handleKnowledgeMouseEnter}
  onMouseLeave={handleKnowledgeMouseLeave}
>
  <span
    className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition duration-200"
    style={{ fontSize: '17px' }} // Inline CSS for font size
  >
    Knowledge Hub <FaChevronDown className="text-sm mt-1" />
  </span>

 <ul
  className={`absolute mt-10 z-50 w-64 font-poppins font-normal text-[#020981] bg-white shadow-lg rounded-md text-sm p-4 space-y-2 transition-all duration-300 ease-in-out ${
    showKnowledge
      ? 'opacity-100 translate-y-0 visible'
      : 'opacity-0 -translate-y-2 invisible pointer-events-none'
  }`}
>
  <li>
    <Link
      href="/knowledgehub/FAQ"
      className="block hover:text-[#b3cf39]"
      style={{ fontSize: '15px' }} // Inline CSS for font size
    >
      FAQ
    </Link>
  </li>
  <li>
    <Link
      href="/roi_calculator"
      className="block hover:text-[#b3cf39] whitespace-nowrap"
      style={{ fontSize: '15px' }} // Inline CSS for font size
    >
      ROI Calculator
    </Link>
  </li>
  <li>
    <Link
      href="/oee_calculator"
      className="block hover:text-[#b3cf39] whitespace-nowrap"
      style={{ fontSize: '15px' }} // Inline CSS for font size
    >
      OEE Calculator
    </Link>
  </li>
  <li>
    <Link
      href="/case_studies"
      className="block hover:text-[#b3cf39]"
      style={{ fontSize: '15px' }} // Inline CSS for font size
    >
      Case Studies
    </Link>
  </li>
  <li>
    <Link
      href="/knowledgehub/blog"
      className="block hover:text-[#b3cf39]"
      style={{ fontSize: '15px' }} // Inline CSS for font size
    >
      Blog / Insights
    </Link>
  </li>
</ul>
</li>

          {/* Contact + Button */}
<li className="flex items-center gap-x-10">
  <Link
    href="/contact"
    className="hover:text-blue-600 transition duration-200"
    style={{ fontSize: '17px' }} // Inline CSS for font size
  >
    Contact
  </Link>
  <button
  onClick={handleToggleForm}   // ? ADD THIS LINE
  style={{ backgroundColor: '#B3CD2D', fontSize: '17px' }} // Inline CSS for font size
  className="text-white font-semibold px-4 py-2 rounded-3xl hover:opacity-90 transition duration-200 cursor-pointer"
>
  Request for Demo
</button>

             {/* Modal Form */}
{showForm && (
  <div
    className="fixed inset-0 bg-transparent z-50 flex items-center justify-center mt-30"
    onClick={handleClose}   
  >
    <div
      className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md relative"
      onClick={(e) => e.stopPropagation()}  
    >
      <button
        onClick={handleClose}
        className="absolute top-2 right-4 text-2xl text-gray-600 hover:text-black cursor-pointer"
      >
        &times;
      </button>
      {!isSubmitted ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">Request a Demo</h2>
          <form className="space-y-5 text-sm" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 p-3 border border-gray-300 rounded-lg outline-none"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-3 border border-gray-300 rounded-lg outline-none"
                required
              />
            </div>

            <input
              type="tel"
              placeholder="Mobile Number"
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit mobile number"
              className="w-full p-3 border border-gray-300 rounded-lg outline-none"
              required
            />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full p-3 border border-gray-300 rounded-lg outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-[#b3cf39] text-white w-full py-3 rounded-lg hover:opacity-90"
            >
              Submit
            </button>
          </form>
        </>
      ) : (
        <div className="text-center">
          <div className="w-20 h-20 mx-auto -mt-10 bg-white rounded-full flex items-center justify-center border-4 border-white shadow-md">
            <svg
              className=" bg-blue-950 w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mt-6 text-gray-800">Thank You</h2>
          <p className="mt-2 text-gray-600">Your response has been submitted!</p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setShowForm(false);
            }}
            className="mt-6 bg-[#45e391] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#3fd18b]"
          >
            OK
          </button>
        </div>

      )}
    </div>
  </div>
)}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;


