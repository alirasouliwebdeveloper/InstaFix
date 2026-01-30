import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import X from "@/assets/images/svg/Socials/X.svg";
import Instagram from "@/assets/images/svg/Socials/Instagram.svg";
import LinkedIn from "@/assets/images/svg/Socials/LinkedIn.svg";
import YouTube from "@/assets/images/svg/Socials/youtube-color 1.svg";
import Tiktok from "@/assets/images/svg/Socials/tiktok.svg";
import SocialIcons from "@/components/ui/SocialIcons";

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

const socialLinks = [
  { icon: Tiktok, url: "#" },
  { icon: LinkedIn, url: "#" },
  { icon: X, url: "#" },
  { icon: Instagram, url: "#" },
  { icon: YouTube, url: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#FCFCFC]">
      <div className="mx-auto max-w-7xl py-14">
        <div className="border border-[#F2F2F2] rounded-2xl bg-white">
          <div className="flex flex-row items-center justify-between py-10 px-8">
            <div className="flex flex-col items-start justify-center">
              <p className="text-2xl text-colors-primary">
                Join our newsletter
              </p>
              <span className="text-base text-colors-muted">
                Get Updates from Instafix
              </span>
            </div>
            <div className="flex flex-row items-center ">
              <form action="/" method="post">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="text-base text-colors-muted border border-[#F2F2F2] rounded-lg px-6 py-3 mr-5 focus:outline-none focus:ring-1 focus:ring-blue-500 w-[400px]"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-btn-primary-from to-btn-primary-to px-6 py-3 text-[15px] font-light text-white  hover:from-btn-primary-from hover:to-btn-primary-to transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-b border-[#EEEEEE] mx-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 py-10 px-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2.5 mb-4">
                <Image src={logo} alt="logo" />
              </Link>

              <p className="text-colors-muted text-[16px] leading-relaxed max-w-md mb-6">
                Instafix simplifies repairs, connects trusted professionals, and
                improves customer experience.
              </p>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-semibold text-colors-primary text-[16px] mb-4">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[16px] text-colors-muted hover:text-gray-900 transition transform hover:translate-x-4"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-b border-[#EEEEEE] mx-8"></div>
          {/* Bottom */}
          <div className="py-10 px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} INSTAFIX TECHNOLOGIES INC. All rights
              reserved
            </p>
            <div className="flex gap-6">
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks &&
                  socialLinks.map((social, index) => (
                    <SocialIcons href={social.url} key={index}>
                      <Image
                        src={social.icon}
                        alt="social-icon"
                        className="w-6 h-6"
                      />
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
