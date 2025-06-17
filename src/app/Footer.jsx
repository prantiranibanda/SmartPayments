import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border border-gray-400 py-6 px-2 text-lg text-center mt-8 shadow-md">
      <nav className="flex flex-wrap justify-center gap-6 mb-3">
        <Link
          href="/about-us"
          className="text-gray-500 hover:text-emerald-900 font-medium transition-colors"
        >
          About Us
        </Link>
        <Link
          href="/terms-and-conditions"
          className="text-gray-500 hover:text-emerald-900 font-medium transition-colors"
        >
          Terms & Conditions
        </Link>
        <Link
          href="/privacy-policy"
          className="text-gray-500 hover:text-emerald-900 font-medium transition-colors"
        >
          Privacy Policy
        </Link>
        <Link
          href="/shipping-policy"
          className="text-gray-500 hover:text-emerald-900 font-medium transition-colors"
        >
          Shipping Policy
        </Link>
        <Link
          href="/contact-us"
          className="text-gray-500 hover:text-emerald-900 font-medium transition-colors"
        >
          Contact Us
        </Link>
        <Link
          href="/cancellation-refund-policy"
          className="text-gray-500 hover:text-emerald-900 font-medium transition-colors"
        >
          Cancellation & Refund Policy
        </Link>
      </nav>
      <div className="mt-2 text-sm text-emerald-600">
        &copy; {new Date().getFullYear()} Smart Billing System. All rights
        reserved.
      </div>
    </footer>
  );
}
