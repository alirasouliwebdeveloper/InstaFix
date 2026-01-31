"use client";

import Image from "next/image";
import heroImage from "@/assets/images/hero section.png";
import SearchSVGIcon from "@/assets/images/svg/search-normal.svg";
import starSVG from "@/assets/images/svg/star-hero.svg";
import usersImage from "@/assets/images/users.png";
import tickSVG from "@/assets/images/svg/tick.svg";
import assistant from "@/assets/images/svg/assistant.svg";
import Card from "@/components/ui/Card";
import Link from "next/link";
import DotImage from "@/assets/images/svg/Hero Section Dots.svg";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Dots - contained to this section only */}
      <div className="absolute inset-0 -z-10">
        <Image src={DotImage} alt="" fill className="object-cover" priority />
        {/* Vertical Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
      </div>
      <div className="mx-auto max-w-screen-xl md:px-6 sm:px-10 lg:px-0">
        <div className="flex lg:flex-row md:flex-col gap-0 justify-between items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:gap-0 gap-6 md:w-full sm:w-full">
            <Card
              className="md:text-xs lg:text-sm text-black md:p-4 mb-12 w-1/2 new-card"
              hover={false}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-8 w-8 rounded-full bg-orange-300 flex items-center justify-center">
                  <Image src={starSVG} alt="star-icon" width={12} height={12} />
                </div>
                <span className="font-bold text-md">4.8</span>
                <span className="text-xs"> Rating</span>
              </div>
              <p className="text-md">Trusted by 1,200+ homeowners</p>
            </Card>

            <h1 className="sm:mb-4 md:mb-6 text-3xl md:text-[56px] leading-snug font-bold text-colors-primary md:leading-normal">
              Book Trusted Home Service Professionals in Canada
            </h1>

            <p className="sm:mb-4 md:mb-8 text-md text-colors-secondary leading-relaxed">
              Connect with verified local professionals for all your home
              service needs. Quality work, transparent pricing, and exceptional
              service guaranteed.
            </p>

            <div className="flex items-center gap-4 sm:mb-4 md:mb-8">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r
                 from-btn-primary-from to-btn-primary-to px-6 py-3 text-xl text-white
                 hover:from-btn-primary-from hover:to-btn-primary-to"
              >
                Find a Professional
                <div className="h-5 w-5 flex items-center justify-center">
                  <Image
                    src={SearchSVGIcon}
                    alt="search"
                    className="ml-3"
                    width={24}
                    height={24}
                  />
                </div>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg
                 text-xl font-medium
                 bg-background-muted px-6 py-3"
              >
                Join as a pro
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Image
                src={usersImage}
                alt="usersImage"
                priority
                className="w-auto h-10 object-cover"
              />
              <span className="text-black text-sm font-medium">
                Used by 62,000+ people
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 md:w-full lg:mt-0 sm:mt-8 flex items-center relative">
            <Image
              src={heroImage}
              alt="Professional Service"
              width={700}
              height={700}
              priority
              className="w-full h-auto rounded-2xl object-cover"
            />
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
              <Card
                className="md:text-xs lg:text-sm text-black p-4 mb-12 new-card w-[300px]"
                hover={false}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-8 w-8 rounded-full bg-background-tick flex items-center justify-center">
                    <Image
                      src={tickSVG}
                      alt="star-icon"
                      width={20}
                      height={20}
                    />
                  </div>
                  <span className="font-bold text-md"> Job Completed</span>
                </div>
                <p className="text-[14px]">Trusted Experts Finish Every Task</p>
              </Card>
            </div>
            <div className="absolute bg-white rounded-full w-14 h-14 p-2 right-[10px] bottom-[10px]">
              <a href="#assistant">
                <Image src={assistant} alt="assistant" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
