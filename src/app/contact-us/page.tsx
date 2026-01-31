import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import emailSVG from "@/assets/images/svg/contactus/email.svg";
import questionSVG from "@/assets/images/svg/contactus/question.svg";
import talkSVG from "@/assets/images/svg/contactus/talk.svg";
import Button from "@/components/ui/Button";

interface CartProps {
  icon: string;
  title: string;
  description: string;
  textLink: string;
  url: string;
}

const cartsData: CartProps[] = [
  {
    icon: emailSVG,
    title: "Email Support",
    description: "Our friendly team is here to help.",
    textLink: "support@InstaFix.ca",
    url: "/",
  },
  {
    icon: talkSVG,
    title: "Live Chat",
    description: "Available Mon-Fri, 9am - 5pm EST.",
    textLink: "Start a chat",
    url: "/",
  },
  {
    icon: questionSVG,
    title: "Help Center",
    description: "Browse articles and tutorials.",
    textLink: "Visit Help Center",
    url: "/",
  },
];

const CustomCart = ({ icon, title, description, url, textLink }: CartProps) => {
  return (
    <div className="flex flex-row items-start border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition p-6 gap-4">
      <div className="flex flex-col items-start justify-start">
        <div className="h-10 w-10 rounded-lg bg-[#FFB020] flex items-center justify-center">
          <Image src={icon} alt={`${title}-icon`} width={20} height={20} />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-1">
        <h3 className="text-base text-colors-primary font-semibold">{title}</h3>
        <p className="text-sm font-light text-colors-muted">{description}</p>
        <a className="text-sm font-normal text-[#0066CC]" href={url}>
          {textLink}
        </a>
      </div>
    </div>
  );
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 pb-20 relative">
        <div className="absolute inset-0 -z-10">
          <div className="bg-[#F7FAFC] h-full w-full"></div>
        </div>
        <div className="mx-auto max-w-screen-xl mt-20 md:px-6 sm:px-10 lg:px-0">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-14">
            <div className="w-1/2 md:w-full mb-8 flex flex-col gap-6">
              <span className="text-sm text-[#0066CC]">Support</span>
              <h1 className="text-4xl font-bold text-title">
                Get in touch with our team
              </h1>
              <p className="text-base text-colors-muted mb-8">
                {`Have questions about our services or need assistance with your
                account? We're here to help you get the most out of InstaFix.`}
              </p>
              {cartsData &&
                cartsData.map((cart, index) => (
                  <CustomCart
                    key={index}
                    icon={cart.icon}
                    title={cart.title}
                    description={cart.description}
                    textLink={cart.textLink}
                    url={cart.url}
                  />
                ))}
            </div>
            <div className="w-1/2 md:w-full p-12 bg-[#E6F0FF] rounded-xl">
              <p className="text-xl font-semibold text-colors-primary mb-6">
                Send us a message
              </p>
              <form action="" method="post">
                <div className="flex flex-col gap-4">
                  <label className="flex flex-col gap-1">
                    <span className="text-colors-primary text-sm mb-2">
                      Full Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      className="border border-gray-300 rounded-md px-4 py-3 text-base"
                      required
                      placeholder="Type your name"
                    />
                  </label>
                  <label className="flex flex-col gap-1">
                    <span className="text-colors-primary text-sm mb-2">
                      Email Address
                    </span>
                    <input
                      type="email"
                      name="email"
                      className="border border-gray-300 rounded-md px-4 py-3 text-base"
                      required
                      placeholder="you@example.com"
                    />
                  </label>
                  <label className="flex flex-col gap-1">
                    <span className="text-colors-primary text-sm mb-2">
                      Email Address
                    </span>
                    <select
                      name="subject"
                      id="subject"
                      className="border border-gray-300 rounded-md px-4 py-3 text-base"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="support">Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-1">
                    <span className="text-colors-primary text-sm mb-2">
                      Message
                    </span>
                    <textarea
                      name="message"
                      rows={4}
                      className="border border-gray-300 rounded-md px-4 py-3 text-base"
                      required
                    ></textarea>
                  </label>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    weight="light"
                    // className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
