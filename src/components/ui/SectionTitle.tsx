interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${alignClasses[align]} ${className}`}>
      <h2 className="text-3xl md:text-5xl font-semibold text-colors-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-colors-secondary">{subtitle}</p>
      )}
    </div>
  );
}
