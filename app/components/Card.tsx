'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function Card({
  children,
  className = '',
  title,
  subtitle,
}: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow p-6 ${className}`}>
      {title && <h2 className="text-lg font-bold mb-2">{title}</h2>}
      {subtitle && <p className="text-gray-600 text-sm mb-4">{subtitle}</p>}
      {children}
    </div>
  );
}
