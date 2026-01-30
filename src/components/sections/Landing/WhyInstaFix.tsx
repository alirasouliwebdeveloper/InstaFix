"use client";

import React from "react";
import Link from "next/link";
import { WhyInstaFixItem } from "@/types";
import Image from "next/image";
import white_man_hat from "@/assets/images/white-man-hat.png";
import whySVG from "@/assets/images/svg/why/why.svg";
import locationSVG from "@/assets/images/svg/why/location.svg";
import secureSVG from "@/assets/images/svg/why/secure.svg";

const whyInstaFixItems: WhyInstaFixItem[] = [
  {
    title: "Verified Professionals",
    description:
      "All Professionals are background-checked and certified for your .",
    icon: whySVG,
    color: "#EFF6FF",
  },
  {
    title: "Local Services",
    description:
      "Connect with professionals in your neighborhood for faster service .",
    icon: locationSVG,
    color: "#EFF6FF",
  },
  {
    title: "Secured Payments",
    description:
      "Your payment is held securely until the job is completed to .",
    icon: secureSVG,
    color: "#EFF6FF",
  },
];

export default function WhyInstaFix() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                <Image
                  src={white_man_hat}
                  alt="a man with white hat"
                  width={700}
                  height={700}
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-5xl font-semibold text-colors-primary mb-4">
              Why InstaFix?
            </h2>

            <p className="text-lg text-colors-muted mb-8">
              We make finding and booking trusted home service professionals
              simple, fast, and reliable.
            </p>

            {whyInstaFixItems &&
              whyInstaFixItems.map((why, index) => (
                <div
                  className="flex mb-4 items-start justify-start"
                  key={index}
                >
                  <div className="w-12 h-12 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                    <Image
                      src={why.icon}
                      alt={why.title}
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex flex-col ml-5 mr-0">
                    <h3 className="text-lg font-bold text-colors-primary mb-2">
                      {why.title}
                    </h3>
                    <p className="text-base text-colors-muted">
                      {why.description}
                    </p>
                  </div>
                </div>
              ))}

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r
                 from-btn-primary-from to-btn-primary-to px-6 py-3 text-xl text-white
                 hover:from-btn-primary-from hover:to-btn-primary-to mt-8 font-normal"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
