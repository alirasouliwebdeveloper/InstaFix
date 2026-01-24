import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`${alignClass} ${className}`}>
      <h2 className="text-[32px] md:text-[40px] font-semibold leading-tight tracking-tight text-black">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[15px] leading-7 text-black/60 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
