"use client";

import Image from "next/image";
import Link from "next/link";
import CTA_Left from "@/assets/images/CTA_Left.png";
import CTA_Right from "@/assets/images/CTA_Right.png";
import CTA_Plus from "@/assets/images/CTA_Plus.png";
import { Section, Container, Flex } from "@/components/ui";

export default function CTA() {
  return (
    <Section spacing="xl">
      <Container className="bg-[#131A2B] rounded-2xl py-7 px-[300px] relative">
        <div className="text-center">
          <Image
            src={CTA_Left}
            alt="CTA Left Decoration"
            className="absolute bottom-0 left-0 transform translate-x-1/4 -translate-y-4 aspect-auto w-auto"
          />
          <Image
            src={CTA_Right}
            alt="CTA Right Decoration"
            className="absolute right-0 top-1/3 transform -translate-x-1/4 -translate-y-2/4 w-auto"
          />
          <Image
            src={CTA_Plus}
            alt="CTA Plus Decoration"
            className="absolute bottom-0 right-4 w-auto transform translate-y-1/2 -translate-x-8"
          />
          <h2 className="text-[80px] font-bold text-white mb-8 tracking-tight leading-tight">
            READY TO GET STARTED?
          </h2>

          <p className="text-lg md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            The right professional for your project is just a few clicks away.
          </p>

          <Flex align="center" justify="center" gap="md" wrap>
            <Link
              href="/"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg mb-6"
            >
              Find a Professional
            </Link>
          </Flex>
        </div>
      </Container>
    </Section>
  );
}
