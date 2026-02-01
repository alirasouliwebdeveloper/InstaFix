interface FlexProps {
  children: React.ReactNode;
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  mdDirection?: "row" | "col" | "row-reverse" | "col-reverse";
  lgDirection?: "row" | "col" | "row-reverse" | "col-reverse";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  gap?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  wrap?: boolean;
  className?: string;
}

const directionClasses = {
  row: "flex-row",
  col: "flex-col",
  "row-reverse": "flex-row-reverse",
  "col-reverse": "flex-col-reverse",
};

const mdDirectionClasses = {
  row: "md:flex-row",
  col: "md:flex-col",
  "row-reverse": "md:flex-row-reverse",
  "col-reverse": "md:flex-col-reverse",
};

const lgDirectionClasses = {
  row: "lg:flex-row",
  col: "lg:flex-col",
  "row-reverse": "lg:flex-row-reverse",
  "col-reverse": "lg:flex-col-reverse",
};

const justifyClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

const gapClasses = {
  none: "gap-0",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
  "2xl": "gap-14",
};

export default function Flex({
  children,
  direction = "row",
  mdDirection,
  lgDirection,
  justify = "start",
  align = "start",
  gap = "md",
  wrap = false,
  className = "",
}: FlexProps) {
  const mdClass = mdDirection ? mdDirectionClasses[mdDirection] : "";
  const lgClass = lgDirection ? lgDirectionClasses[lgDirection] : "";

  return (
    <div
      className={`flex ${directionClasses[direction]} ${mdClass} ${lgClass} ${justifyClasses[justify]} ${alignClasses[align]} ${gapClasses[gap]} ${wrap ? "flex-wrap" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
