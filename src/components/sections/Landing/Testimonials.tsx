"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Testimonial } from "@/types";
import avatar1 from "@/assets/images/avatarImages/Avatar_Image_1.png";
import avatar2 from "@/assets/images/avatarImages/Avatar_Image_2.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "@/assets/css/swiper.css";
// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

const testimonials: Testimonial[] = [
  {
    rating: 1,
    content:
      "InstaFix made finding a reliable plumber so easy. The booking process was seamless and the professional arrived on time. Highly recommend!",
    image: avatar1,
    name: "Sarah Mitchell",
    catrogores: ["plumbing", "Leak Repair"],
  },
  {
    rating: 2,
    content:
      "InstaFix made finding a reliable plumber so easy. The booking process was seamless and the professional arrived on time. Highly recommend!",
    image: avatar2,
    name: "Sarah Mitchell",
    catrogores: ["plumbing", "Leak Repair"],
  },
  {
    rating: 3,
    content:
      "InstaFix made finding a reliable plumber so easy. The booking process was seamless and the professional arrived on time. Highly recommend!",
    image: avatar1,
    name: "Sarah Mitchell",
    catrogores: ["plumbing", "Leak Repair"],
  },
  {
    rating: 4,
    content:
      "InstaFix made finding a reliable plumber so easy. The booking process was seamless and the professional arrived on time. Highly recommend!",
    image: avatar2,
    name: "Sarah Mitchell",
    catrogores: ["plumbing", "Leak Repair"],
  },
  {
    rating: 5,
    content:
      "InstaFix made finding a reliable plumber so easy. The booking process was seamless and the professional arrived on time. Highly recommend!",
    image: avatar1,
    name: "Sarah Mitchell",
    catrogores: ["plumbing", "Leak Repair"],
  },
  {
    rating: 4,
    content:
      "InstaFix made finding a reliable plumber so easy. The booking process was seamless and the professional arrived on time. Highly recommend!",
    image: avatar2,
    name: "Sarah Mitchell",
    catrogores: ["plumbing", "Leak Repair"],
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-16 md:py-24">
      <div className="mx-auto w-full px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Do not just take our word for it. Here is what our customers have to
            say
          </p>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mb-12 mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="bg-white rounded-xl px-8 py-10 shadow-sm border border-gray-200 w-80"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-[18px] text-colors-primary">
                {`"${testimonial.content}"`}
              </p>

              <div className="flex items-center gap-4 py-6">
                <div className="w-15 h-15 rounded-full flex items-center justify-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-xl">
                    {testimonial.name}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {testimonial.catrogores &&
                  testimonial.catrogores.map((cat, idx) => (
                    <span
                      key={idx}
                      className="text-sm text-[#2563EB] p-2 bg-[#EFF6FF] border border-[#2563EB] rounded-md"
                    >
                      {cat}
                    </span>
                  ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
