'use client';

import Image from "next/image";
import heroImage from "@/assets/images/2.png";
import usersImage from "@/assets/images/users.png";
import Card from "@/components/ui/Card";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-50 pt-16 pb-20 md:pt-24 md:pb-32">
      <div className="mx-auto max-w-screen-xl md:px-6 sm:px-10 lg:px-0">
        <div className="flex lg:flex-row md:flex-col gap-0 justify-between items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:gap-0 gap-6 md:w-full sm:w-full">
            <Card className='md:text-xs lg:text-sm text-black md:mb-8 lg:mb-12 sm:mb-6 w-1/2 new-card'
                  hover={false}>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-8 w-8 rounded-full bg-orange-300 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <span className='font-bold'>4.8</span> Rating
              </div>


              <p>Trusted by 1,200+ homeowners</p>
            </Card>

            <h1 className="sm:mb-4 md:mb-8 text-3xl md:text-5xl font-bold text-gray-900 leading-snug md:leading-normal">
              Book Trusted Home Service Professionals in Canada
            </h1>

            <p className="sm:mb-4 md:mb-8 text-sm text-gray-600 leading-relaxed">
              Connect with verified local professionals for all your home service needs.
              Quality work, transparent pricing, and exceptional service guaranteed.
            </p>

            <div className="flex items-center gap-4 sm:mb-4 md:mb-8">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r
                 from-blue-600 to-blue-700 px-5 py-3 text-[15px] font-semibold text-white
                 hover:from-blue-700 hover:to-blue-800 transition shadow-sm"
              >
                Find a Professional
                <div className="h-5 w-5 flex items-center justify-center">
                  {/*<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">*/}
                  {/*  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>*/}
                  {/*</svg>*/}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                       className="w-8 h-8 text-white pl-2">
                    <circle cx="11" cy="11" r="7"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>

              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg
                 text-[15px] font-medium text-black hover:text-gray-600 transition
                 bg-gray-200 shadow-sm py-3 px-5"
              >
                Join as a pro
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Image src={usersImage} alt="usersImage" priority
                     className="w-auto h-10 object-cover"/>
              <span className="text-black text-sm font-medium">Used by 62,000+ people</span>
            </div>

          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 md:w-full sm:w-full lg:mt-0 sm:mt-8 flex items-center">
              <Image
                src={heroImage}
                alt="Professional Service"
                width={600}
                height={700}
                priority
                className="w-auto h-[80vh] rounded-2xl object-cover ml-auto"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
