"use client";

import FirstIcon from "@/assets/images/svg/How/1.svg";
import SecondIcon from "@/assets/images/svg/How/2.svg";
import ThirdIcon from "@/assets/images/svg/How/3.svg";
import { Section, Container, SectionTitle, Grid, Flex, IconBox } from "@/components/ui";
import { FC, SVGProps } from "react";

interface Step {
  step: number;
  title: string;
  description: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
}

const steps: Step[] = [
  {
    step: 1,
    title: "Tell us what you need!",
    description:
      "Choose the service you want and tell us about your project requirements.",
    Icon: FirstIcon,
  },
  {
    step: 2,
    title: "Connect with local pro",
    description:
      "See verified professionals near you now and compare their profiles.",
    Icon: SecondIcon,
  },
  {
    step: 3,
    title: "Chat, book and pay safe",
    description:
      "Message professionals, set a time, and pay securely through our platform.",
    Icon: ThirdIcon,
  },
];

export default function HowItWorks() {
  return (
    <Section id="how">
      <Container className="text-center">
        <SectionTitle
          title="How InstaFix Works"
          subtitle="Find and book the right professional in three simple steps."
        />
        <Grid cols={3}>
          {steps.map((step, index) => (
            <Flex
              key={index}
              direction="col"
              align="center"
              className="text-center px-6 mb-12 rounded-xl bg-[#F1F5F9] p-8"
            >
              <IconBox
                size="xl"
                variant="rounded"
                className="mb-6 bg-white shadow-md rounded-3xl"
              >
                <step.Icon className="w-8 h-8" />
              </IconBox>

              <h3 className="text-xl text-colors-primary font-semibold mb-4">
                <span>{step.step}.</span>
                {step.title}
              </h3>
              <p className="text-base font-normal text-colors-muted">
                {step.description}
              </p>
            </Flex>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
