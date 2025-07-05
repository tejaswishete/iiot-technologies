"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { brands } from "@/data/brands";
import Image from "next/image";

export default function Brands2() {
  const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: "auto", // allow variable width for smooth scrolling
    spaceBetween: 50, // spacing between logos
    loop: true,
    speed: 4000, // slower = smoother (4000ms = 4s for one full transition)
    autoplay: {
      delay: 0, // immediate transition to next
      disableOnInteraction: false,
    },
    freeMode: true, // enable smooth movement
    //freeModeMomentum: false, // disable resistance/momentum
    grabCursor: false,
  };

  return (
    <Swiper {...swiperOptions} className="brand-marquee">
      {brands.map((brand, index) => (
        <SwiperSlide
          className="w-auto text-center" // w-auto for 'auto' slide width
          key={index}
        >
          <Image
            className="brand-item-image h-8 image-filter" // Tailwind h-10 = 40px
            src={brand.src}
            width={165}
            height={40}
            alt={brand.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
