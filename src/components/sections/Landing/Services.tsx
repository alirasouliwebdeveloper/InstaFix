"use client";

import React from "react";
import Image from "next/image";
import homeSVG from "@/assets/images/svg/services/home.svg";
import thunderSVG from "@/assets/images/svg/services/thunder.svg";
import handymanSVG from "@/assets/images/svg/services/handyman.svg";
import hvacSVG from "@/assets/images/svg/services/hvac.svg";
import special_starSVG from "@/assets/images/svg/services/special_star.svg";
import waterSVG from "@/assets/images/svg/services/water.svg";
import checkSVG from "@/assets/images/svg/services/check.svg";
import rightArrowSVG from "@/assets/images/svg/services/right-arrow.svg";
import Link from "next/link";
import { Service } from "@/types";

const services: Service[] = [
  {
    title: "Renovation & Basement",
    icon: homeSVG,
    description:
      "Basement development and full home renovations tailored to your needs.",
    price: "20$/H",
    categories: ["Development", "Flooring", "+3 more"],
    color: "#eff6ff",
    url: "/",
  },
  {
    title: "Electrical",
    icon: thunderSVG,
    description:
      "Electrical installation, repairs, and upgrades for safe home systems.",
    price: "18$/H",
    categories: ["Wiring", "Panel Upgrade", "+3 more"],
    color: "#fef9c3",
    url: "/",
  },
  {
    title: "Plumbing",
    icon: waterSVG,
    description:
      "Leak fixes, installations, and plumbing services you can rely on.",
    price: "45$/H",
    categories: ["Leaks", "Install", "+3 more"],
    color: "#dbeafe",
    url: "/",
  },
  {
    title: "HVAC",
    icon: hvacSVG,
    description:
      "Heating, cooling, and ventilation systems maintenance and repair.",
    price: "45$/H",
    categories: ["Leaks", "Install", "+3 more"],
    color: "#FAE8FF",
    url: "/",
  },
  {
    title: "Cleaning",
    icon: special_starSVG,
    description:
      "Home, apartment, and office cleaning services for a spotless space.",
    price: "35$/H",
    categories: ["Leaks", "Install", "+3 more"],
    color: "#ECFCCB",
    url: "/",
  },
  {
    title: "Handyman",
    icon: handymanSVG,
    description:
      "Small repairs, installations, and everyday fixes around the house.",
    price: "45$/H",
    categories: ["Leaks", "Install", "+3 more"],
    color: "#FFEDD5",
    url: "/",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold text-colors-primary mb-5">
            What service do you need?
          </h2>
          <p className="text-lg text-colors-secondary text-center">
            No matter the project, the right professional is here.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services &&
            services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center transition"
                    style={{ backgroundColor: service.color ?? "#eff6ff" }}
                  >
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={28}
                      height={28}
                    />
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-semibold text-colors-primary">
                      {service.price}
                    </span>
                  </div>
                </div>

                <h3 className="font-semibold text-xl text mb-3 text-colors-primary">
                  {service.title}
                </h3>

                <p className="text-sm text-colors-muted mb-6">
                  {service.description}
                </p>

                <div className="flex items-center justify-start mb-3">
                  <div className="h-3 w-3 flex items-center justify-start mr-2">
                    <Image
                      src={checkSVG}
                      alt={service.title}
                      width={15}
                      height={15}
                    />
                  </div>

                  <p className="text-xs font-semibold text-colors-primary">
                    Common Services:
                  </p>
                </div>

                <div className="flex gap-2 items-center justify-start mb-6">
                  {service.categories.map((category, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-colors-primary bg-colors-category px-3 py-1 rounded-md"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-start">
                  <Link
                    href="/"
                    className="text-blue-600 font-semibold text-sm hover:text-blue-700 flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Learn more
                    <div className="h-5 w-5 flex items-center justify-start ml-1">
                      <Image
                        src={rightArrowSVG}
                        alt={service.title}
                        width={15}
                        height={15}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition group"
            >
              <div className="flex items-center justify-between mb-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center transition"
                  style={{ backgroundColor: service.color ?? "#eff6ff" }}
                >
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={28}
                    height={28}
                  />
                </div>
                <div className="text-right">
                  <span className="text-xl font-semibold text-colors-primary">
                    {service.price}
                  </span>
                </div>
              </div>

              <h3 className="font-semibold text-xl text mb-3 text-colors-primary">
                {service.title}
              </h3>

              <p className="text-sm text-colors-muted mb-6">
                {service.description}
              </p>

              <div className="flex items-center justify-start mb-3">
                <div className="h-3 w-3 flex items-center justify-start mr-2">
                  <Image
                    src={checkSVG}
                    alt={service.title}
                    width={15}
                    height={15}
                  />
                </div>

                <p className="text-xs font-semibold text-colors-primary">
                  Common Services:
                </p>
              </div>

              <div className="flex gap-2 items-center justify-start mb-6">
                {service.categories.map((category, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-colors-primary bg-colors-category px-3 py-1 rounded-md"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-start">
                <Link
                  href="/"
                  className="text-blue-600 font-semibold text-sm hover:text-blue-700 flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Learn more
                  <div className="h-5 w-5 flex items-center justify-start ml-1">
                    <Image
                      src={rightArrowSVG}
                      alt={service.title}
                      width={15}
                      height={15}
                    />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition group"
            >
              <div className="flex items-center justify-between mb-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center transition"
                  style={{ backgroundColor: service.color ?? "#eff6ff" }}
                >
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={28}
                    height={28}
                  />
                </div>
                <div className="text-right">
                  <span className="text-xl font-semibold text-colors-primary">
                    {service.price}
                  </span>
                </div>
              </div>

              <h3 className="font-semibold text-xl text mb-3 text-colors-primary">
                {service.title}
              </h3>

              <p className="text-sm text-colors-muted mb-6">
                {service.description}
              </p>

              <div className="flex items-center justify-start mb-3">
                <div className="h-3 w-3 flex items-center justify-start mr-2">
                  <Image
                    src={checkSVG}
                    alt={service.title}
                    width={15}
                    height={15}
                  />
                </div>

                <p className="text-xs font-semibold text-colors-primary">
                  Common Services:
                </p>
              </div>

              <div className="flex gap-2 items-center justify-start mb-6">
                {service.categories.map((category, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-colors-primary bg-colors-category px-3 py-1 rounded-md"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-start">
                <Link
                  href="/"
                  className="text-blue-600 font-semibold text-sm hover:text-blue-700 flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Learn more
                  <div className="h-5 w-5 flex items-center justify-start ml-1">
                    <Image
                      src={rightArrowSVG}
                      alt={service.title}
                      width={15}
                      height={15}
                    />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
