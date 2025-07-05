"use client";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import Faq from "@/components/homes/home-2/Faq";
import React from "react";

export default function FAQPage() {
  return (
    <>
      <Header2 />

      {/* Main content */}
      <main className="flex justify-center items-center min-h-[calc(100vh-HeaderHeight-FooterHeight)]">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
          {/* Header tag styled like Testimonials heading */}
          {/* <div
            className="d-inline-flex align-items-center justify-content-center py-1 px-2 border rounded-pill"
            style={{ maxWidth: "fit-content", marginTop: "70px" }}
          >
            <span
              className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary me-10 justify-center"
              style={{
                alignSelf: "flex-start",
                marginTop: "auto",
                marginBottom: "auto",
                transform: "translateY(4px)",
              }}
            />
            <span
              style={{
                fontSize: "1.4rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              Frequently Asked Questions
            </span>
          </div> */}
           <section className="pt-4 pb-1 text-center">
  <h1
    className="text-6xl font-bold dark:text-white"
    style={{ color: "#0b168a" }}
  >
     Frequently Asked Questions
  </h1>
</section>

          {/* FAQ Section */}
          <div className="mt-1">
            <Faq />
          </div>
        </div>
      </main>

      <Footer2 />
    </>
  );
}
