interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  spacing?: "sm" | "md" | "lg" | "xl";
  background?: "white" | "gray" | "transparent";
}

const spacingClasses = {
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
  xl: "py-20 md:py-32",
};

const backgroundClasses = {
  white: "bg-white",
  gray: "bg-gray-50",
  transparent: "bg-transparent",
};

export default function Section({
  children,
  className = "",
  id,
  spacing = "lg",
  background = "white",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${spacingClasses[spacing]} ${backgroundClasses[background]} ${className}`}
    >
      {children}
    </section>
  );
}
