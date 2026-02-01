"use client";

import Image from "next/image";
import white_man_hat from "@/assets/images/white-man-hat.png";
import WhyIcon from "@/assets/images/svg/why/why.svg";
import LocationIcon from "@/assets/images/svg/why/location.svg";
import SecureIcon from "@/assets/images/svg/why/secure.svg";
import { Section, Container, Grid, Flex, IconBox, Button } from "@/components/ui";
import { FC, SVGProps } from "react";

interface WhyItem {
  title: string;
  description: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
}

const whyInstaFixItems: WhyItem[] = [
  {
    title: "Verified Professionals",
    description:
      "All Professionals are background-checked and certified for your .",
    Icon: WhyIcon,
  },
  {
    title: "Local Services",
    description:
      "Connect with professionals in your neighborhood for faster service .",
    Icon: LocationIcon,
  },
  {
    title: "Secured Payments",
    description:
      "Your payment is held securely until the job is completed to .",
    Icon: SecureIcon,
  },
];

export default function WhyInstaFix() {
  return (
    <Section>
      <Container>
        <Grid cols={2} className="items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Flex
                align="center"
                justify="center"
                className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-50"
              >
                <Image
                  src={white_man_hat}
                  alt="a man with white hat"
                  width={700}
                  height={700}
                />
              </Flex>
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

            {whyInstaFixItems.map((why, index) => (
              <Flex key={index} align="start" gap="lg" className="mb-4">
                <IconBox size="md" variant="rounded" bgColor="#EFF6FF">
                  <why.Icon className="w-5 h-5" />
                </IconBox>
                <Flex direction="col">
                  <h3 className="text-lg font-bold text-colors-primary mb-2">
                    {why.title}
                  </h3>
                  <p className="text-base text-colors-muted">
                    {why.description}
                  </p>
                </Flex>
              </Flex>
            ))}

            <Button href="/" variant="primary" size="lg" className="mt-8">
              Get Started
            </Button>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
