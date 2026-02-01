import { Button, Card, Container, Flex, Grid, IconBox } from "@/components/ui";
import Image from "next/image";
import aboutUsImage from "@/assets/images/about-us.png";
import founderMeeting from "@/assets/images/Founder_meeting.png";
import VerifyIcon from "@/assets/images/svg/01.svg";
import CommunityIcon from "@/assets/images/svg/community.svg";
import SimplicityIcon from "@/assets/images/svg/02.svg";
import { FC, SVGProps } from "react";
import teamMember1 from "@/assets/images/Team Members/Team Member 01.png";
import teamMember2 from "@/assets/images/Team Members/Team Member 02.png";
import teamMember3 from "@/assets/images/Team Members/Team Member 03.png";
import teamMember4 from "@/assets/images/Team Members/Team Member 04.png";

interface ValueItem {
  Icon: FC<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const items = [
  {
    title: "50K+",
    subTitle: "Projects Completed",
  },
  {
    title: "12k+",
    subTitle: "Verified Pros",
  },
  {
    title: "98%",
    subTitle: "Satisfaction Rate",
  },
  {
    title: "CA",
    subTitle: "Coast to Coast",
  },
];

const values: ValueItem[] = [
  {
    Icon: VerifyIcon,
    title: "Trust First",
    description:
      "We rigorously vet every professional on our platform. Safety and reliability are non- negotiable for our community.",
  },
  {
    Icon: CommunityIcon,
    title: "Community Driven",
    description:
      "We support local businesses and help neighborhoods thrive by connecting local talent with local needs.",
  },
  {
    Icon: SimplicityIcon,
    title: "Simplicity",
    description:
      "Home improvement is complex; our platform shouldn't be. We obsess over making the process seamless.",
  },
];

const teamMembers = [
  {
    image: teamMember1,
    name: "Alex Chen",
    role: "CEO & Co-Founder",
  },
  {
    image: teamMember2,
    name: "Sarah Miller",
    role: "Chief Technology Officer",
  },
  {
    image: teamMember3,
    name: "David Okafor",
    role: "Head of Operations",
  },
  {
    image: teamMember4,
    name: "Emily Rossi",
    role: "Head of Product",
  },
];

export default function AboutPage() {
  return (
    <Container size="xl" className="pt-16 pb-20 mt-32">
      <div className="text-center max-w-[850px] mx-auto">
        <h1 className="text-5xl font-semibold text-colors-primary mb-6">
          Building Trust in Canadian Home Services
        </h1>
        <p className="text-colors-muted text-xl leading-relaxed">
          {`We're on a mission to connect homeowners with the most skilled,
          reliable, and verified professionals across the country.`}
        </p>
      </div>
      <Grid cols={1} gap="none" className="my-20">
        <Image
          src={aboutUsImage}
          alt="About Us Insta-Fix"
          className="w-full h-auto"
        />
      </Grid>
      <Grid
        cols={4}
        gap="sm"
        className="mt-10 bg-[#F1F5F9] rounded-lg py-11 px-10"
      >
        {items.map((item, index) => (
          <div key={index} className="text-center">
            <h2 className="text-4xl font-semibold text-[#0069D6] mb-2">
              {item.title}
            </h2>
            <p className="text-colors-muted">{item.subTitle}</p>
          </div>
        ))}
      </Grid>
      <Flex
        direction="col"
        mdDirection="row"
        align="start"
        justify="between"
        gap="lg"
        className="my-20"
      >
        <Flex
          direction="col"
          align="start"
          gap="lg"
          justify="start"
          className="w-full"
        >
          <span className="uppercase text-[#0069D6] text-xs">our story</span>
          <h2 className="text-3xl font-semibold text-colors-primary">
            It started with a leaky faucet and a frustrating search.
          </h2>
          <p className="text-[16px] font-normal text-colors-muted">
            {`In 2018, our founder struggled to find a reliable plumber in
            Edmonton. The directories were outdated, reviews were unverified,
            and pricing was a mystery. He realized that Canadians deserved a
            better way to care for their most valuable asset—their home.`}
          </p>
          <p className="text-[16px] font-normal text-colors-muted">
            {`InstaFix was built to bridge the gap between quality contractors and
            homeowners who care. We started with a simple promise: only verified
            pros, transparent pricing, and real reviews. Today, we're proud to
            be Canada's fastest-growing home services marketplace.`}
          </p>
        </Flex>
        <Flex
          direction="col"
          align="start"
          gap="sm"
          justify="start"
          className="relative w-full"
        >
          <Image
            src={founderMeeting}
            alt="Founders Meeting"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute left-0 bottom-0 w-[220px] p-6 rounded-lg bg-white shadow-lg text-sm font-light text-colors-primary transform translate-y-[30px] -translate-x-[20px]">
            {`"We believe every renovation should be a celebration, not a headache."`}
          </div>
        </Flex>
      </Flex>
      <Flex
        direction="col"
        align="center"
        gap="md"
        justify="center"
        className="my-28"
      >
        <h3 className="text-colors-primary text-3xl font-semibold">
          Our Core Values
        </h3>
        <p className="text-colors-muted text-base">
          The principles that guide every decision we make.
        </p>
        <Grid cols={3} gap="lg" className="mt-10 w-full">
          {values.map((value, index) => (
            <Card key={index} className="h-full">
              <IconBox size="md" className="mb-4" bgColor="#FFB020">
                <value.Icon
                  className=""
                  color="#0069D6"
                  width={24}
                  height={24}
                />
              </IconBox>
              <h4 className="text-xl font-semibold text-colors-primary mb-2">
                {value.title}
              </h4>
              <p className="text-colors-muted text-sm">{value.description}</p>
            </Card>
          ))}
        </Grid>
      </Flex>
      <Flex
        direction="col"
        align="center"
        gap="md"
        justify="center"
        className="my-28"
      >
        <h3 className="text-colors-primary text-3xl font-semibold">
          Meet our team
        </h3>
        <p className="text-colors-muted text-base font-normal">
          The team working behind the scenes to build InstaFix.
        </p>
        <Grid cols={4} gap="lg" className="mt-10 w-full">
          {teamMembers &&
            teamMembers.map((member, index) => (
              <Card key={index} className="h-full text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-colors-primary mb-1">
                  {member.name}
                </h4>
                <p className="text-[#0069D6] text-sm">{member.role}</p>
              </Card>
            ))}
        </Grid>
      </Flex>
      <Flex
        direction="col"
        align="center"
        justify="center"
        gap="2xl"
        className="py-[80px] px-[80px] bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-xl text-center"
      >
        <h4 className="text-4xl text-white font-semibold">Join the Mission</h4>
        <p className="text-lg text-white w-[600px]">
          {`We're always looking for talented individuals who are passionate about
          transforming the home services industry.`}
        </p>
        <Button
          type="button"
          size="lg"
          weight="light"
          variant="none"
          className="bg-opacity-20 bg-white text-white"
        >
          Contact Us
        </Button>
      </Flex>
    </Container>
  );
}
