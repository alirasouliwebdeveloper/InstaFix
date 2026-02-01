import Link from "next/link";
import CheckIcon from "@/assets/images/svg/services/check.svg";
import RightArrowIcon from "@/assets/images/svg/services/right-arrow.svg";
import IconBox from "./IconBox";
import Badge from "./Badge";
import Flex from "./Flex";
import { FC, SVGProps } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  price: string;
  categories: string[];
  url: string;
  color?: string;
}

export default function ServiceCard({
  title,
  description,
  Icon,
  price,
  categories,
  url,
  color = "#eff6ff",
}: ServiceCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition group">
      <Flex align="center" justify="between" className="mb-6">
        <IconBox size="lg" variant="rounded" bgColor={color}>
          <Icon className="w-7 h-7" />
        </IconBox>
        <span className="text-xl font-semibold text-colors-primary">
          {price}
        </span>
      </Flex>

      <h3 className="font-semibold text-xl mb-3 text-colors-primary">{title}</h3>

      <p className="text-sm text-colors-muted mb-6">{description}</p>

      <Flex align="center" gap="sm" className="mb-3">
        <CheckIcon className="w-4 h-4" />
        <p className="text-xs font-semibold text-colors-primary">
          Common Services:
        </p>
      </Flex>

      <Flex gap="sm" align="center" wrap className="mb-6">
        {categories.map((category, idx) => (
          <Badge key={idx}>{category}</Badge>
        ))}
      </Flex>

      <Link
        href={url}
        className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-all"
      >
        <Flex align="center" gap="sm" className="group-hover:gap-3 transition-all">
          Learn more
          <RightArrowIcon className="w-4 h-4" />
        </Flex>
      </Link>
    </div>
  );
}
