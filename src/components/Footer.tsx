import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import {
  XIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
  TikTokIcon,
} from "@/components/icons";
import SocialIcons from "@/components/ui/SocialIcons";
import { FC } from "react";
import { IconProps } from "@/components/icons";

const footerLinks = {
  Services: [
    { label: "Plumbing", href: "#" },
    { label: "Electrical", href: "#" },
    { label: "Cleaning", href: "#" },
    { label: "HVAC", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
    { label: "Blog", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "FAQ", href: "#faq" },
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
  Resources: [
    { label: "Help Center", href: "#" },
    { label: "FAQ", href: "#faq" },
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

interface SocialLink {
  Icon: FC<IconProps>;
  url: string;
}

const socialLinks: SocialLink[] = [
  { Icon: TikTokIcon, url: "#" },
  { Icon: LinkedInIcon, url: "#" },
  { Icon: XIcon, url: "#" },
  { Icon: InstagramIcon, url: "#" },
  { Icon: YouTubeIcon, url: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#FCFCFC]">
      <div className="mx-auto max-w-7xl py-8 md:py-14 px-4 md:px-0">
        <div className="border border-[#F2F2F2] rounded-2xl bg-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 md:py-10 px-6 md:px-8">
            <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
              <p className="text-xl md:text-2xl text-colors-primary">
                Join our newsletter
              </p>
              <span className="text-sm md:text-base text-colors-muted">
                Get Updates from Instafix
              </span>
            </div>
            <div className="w-full md:w-auto">
              <form action="/" method="post" className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="text-base text-colors-muted border border-[#F2F2F2] rounded-lg px-4 md:px-6 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full sm:w-64 md:w-80 bg-[#FCFCFC]"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-btn-primary-from to-btn-primary-to px-6 py-3 text-[15px] font-light text-white hover:from-btn-primary-from hover:to-btn-primary-to transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-b border-[#EEEEEE] mx-4 md:mx-8"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10 py-8 md:py-10 px-6 md:px-8">
            {/* Brand */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-2">
              <Link href="/" className="flex items-center gap-2.5 mb-4">
                <Image src={logo} alt="logo" />
              </Link>

              <p className="text-colors-muted text-sm md:text-base leading-relaxed max-w-md mb-6">
                Instafix simplifies repairs, connects trusted professionals, and
                improves customer experience.
              </p>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-semibold text-colors-primary text-sm md:text-base mb-3 md:mb-4">
                  {title}
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm md:text-base text-colors-muted hover:text-gray-900 transition"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-b border-[#EEEEEE] mx-4 md:mx-8"></div>
          {/* Bottom */}
          <div className="py-6 md:py-10 px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
              © {new Date().getFullYear()} INSTAFIX TECHNOLOGIES INC. All rights
              reserved
            </p>
            <div className="flex gap-6">
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <SocialIcons href={social.url} key={index}>
                    <social.Icon size="lg" className="text-gray-500" />
                  </SocialIcons>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
