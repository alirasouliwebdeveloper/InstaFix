"use client";

import React from "react";
import Image from "next/image";
import firstSVG from "@/assets/images/svg/How/1.svg";
import secondSVG from "@/assets/images/svg/How/2.svg";
import thirdSVG from "@/assets/images/svg/How/3.svg";
import { HowItWorks as HowItWorksTypes } from "@/types";

const steps: HowItWorksTypes[] = [
  {
    step: 1,
    title: "Tell us what you need!",
    description:
      "Choose the service you want and tell us about your project requirements.",
    icon: firstSVG,
  },
  {
    step: 2,
    title: "Connect with local pro",
    description:
      "See verified professionals near you now and compare their profiles.",
    icon: secondSVG,
  },
  {
    step: 3,
    title: "Chat, book and pay safe",
    description:
      "Message professionals, set a time, and pay securely through our platform.",
    icon: thirdSVG,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-5xl font-semibold text-colors-primary mb-8">
          How InstaFix Works
        </h2>

        <p className="text-lg text-colors-muted mb-14">
          Find and book the right professional in three simple steps.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-6 mb-12 rounded-xl bg-[#F1F5F9] p-8"
            >
              <div className="w-20 h-20 mb-6 flex items-center justify-center bg-category rounded-3xl bg-white shadow-md">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={30}
                  height={30}
                />
              </div>

              <h3 className="text-xl text-colors-primary font-semibold mb-4">
                <span>{step.step}.</span>
                {step.title}
              </h3>
              <p className="text-base font-normal text-colors-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
