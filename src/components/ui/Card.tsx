import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({children, className = '', hover = false}: CardProps) {
  const hoverClass = hover ? 'hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.2)] hover:-translate-y-1' : '';

  return (
    <div className={`soft-card rounded-2xl p-6 ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}
