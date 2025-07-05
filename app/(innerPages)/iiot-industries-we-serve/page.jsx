"use client";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import Features from "@/components/homes/home-9/Features"; // ✅ Import your Features component


import React from "react";
import Image from "next/image";
import Link from "next/link";
// import Faq from "@/components/homes/home-2/Faq";
// import Hero from "@/components/homes/home-2/Hero";

export default function ClientPage() {
  return (
    <div className="bg-white text-black">
      <Header2 />
      
      {/* Optional: <Hero /> */}
      
      <Features /> {/* ✅ Add your Features component here */}
       {/* Solutions Section */}
      

      {/* Optional: <Faq /> */}
      
      <Footer2 />
    </div>
  );
}
