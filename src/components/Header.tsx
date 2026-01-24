'use client';

import { useState } from 'react';
import Link from 'next/link';

const nav = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky pt-5 z-50 bg-gray-50">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 bg-gray-100 border border-gray-200 rounded-2xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <span className="text-[17px] font-bold text-gray-900">
            InstaFix
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-4 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-gray-700 hover:text-gray-900 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/signin"
            className="hidden md:inline-flex text-[15px] font-medium text-gray-700 hover:text-gray-900 transition"
          >
            Log In
          </Link>

          <Link
            href="#book"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2.5 text-[15px] font-semibold text-white hover:from-blue-700 hover:to-blue-800 transition shadow-sm"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="px-6 py-4 space-y-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-[15px] font-medium text-gray-700 hover:text-gray-900"
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/signin"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[15px] font-medium text-gray-700 hover:text-gray-900"
            >
              Sign In
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
