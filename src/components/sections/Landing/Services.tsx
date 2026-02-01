"use client";

import HomeIcon from "@/assets/images/svg/services/home.svg";
import ThunderIcon from "@/assets/images/svg/services/thunder.svg";
import HandymanIcon from "@/assets/images/svg/services/handyman.svg";
import HvacIcon from "@/assets/images/svg/services/hvac.svg";
import SpecialStarIcon from "@/assets/images/svg/services/special_star.svg";
import WaterIcon from "@/assets/images/svg/services/water.svg";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Grid from "@/components/ui/Grid";
import ServiceCard from "@/components/ui/ServiceCard";
import { FC, SVGProps } from "react";

interface ServiceItem {
  title: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  description: string;
  price: string;
  categories: string[];
  color: string;
  url: string;
}

const services: ServiceItem[] = [
  {
    title: "Renovation & Basement",
    Icon: HomeIcon,
    description:
      "Basement development and full home renovations tailored to your needs.",
    price: "20$/H",
    categories: ["Development", "Flooring", "+3 more"],
    color: "#eff6ff",
    url: "/",
  },
  {
    title: "Electrical",
    Icon: ThunderIcon,
    description:
      "Electrical installation, repairs, and upgrades for safe home systems.",
    price: "18$/H",
    categories: ["Wiring", "Panel Upgrade", "+3 more"],
    color: "#fef9c3",
    url: "/",
  },
  {
    title: "Plumbing",
    Icon: WaterIcon,
    description:
      "Leak fixes, installations, and plumbing services you can rely on.",
    price: "45$/H",
    categories: ["Leaks", "Install", "+3 more"],
    color: "#dbeafe",
    url: "/",
  },
  {
    title: "HVAC",
    Icon: HvacIcon,
    description:
      "Heating, cooling, and ventilation systems maintenance and repair.",
    price: "45$/H",
    categories: ["Leaks", "Install", "+3 more"],
    color: "#FAE8FF",
    url: "/",
  },
  {
    title: "Cleaning",
    Icon: SpecialStarIcon,
    description:
      "Home, apartment, and office cleaning services for a spotless space.",
    price: "35$/H",
    categories: ["Leaks", "Install", "+3 more"],
    color: "#ECFCCB",
    url: "/",
  },
  {
    title: "Handyman",
    Icon: HandymanIcon,
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
    <Section id="services">
      <Container>
        <SectionTitle
          title="What service do you need?"
          subtitle="No matter the project, the right professional is here."
        />
        <Grid cols={3}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              Icon={service.Icon}
              price={service.price}
              categories={service.categories}
              url={service.url}
              color={service.color}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
