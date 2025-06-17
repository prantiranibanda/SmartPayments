import React from 'react';
import Footer from '../Footer';

export default function ShippingPolicy() {
  return (
    <div className="min-h-[calc(100vh-4.5rem)] bg-gradient-to-br from-emerald-100 to-emerald-300 flex flex-col justify-between">
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white/90 rounded-2xl shadow-xl p-8 max-w-2xl w-full border border-emerald-200">
          <h1 className="text-3xl font-bold text-emerald-700 mb-4 text-center">
            Shipping Policy
          </h1>
          <p className="text-emerald-900 mb-6 text-lg text-center">
            We strive to deliver your products within{' '}
            <span className="font-semibold text-emerald-600">
              3-5 business days
            </span>{' '}
            from the date of order confirmation. Delivery times may vary based
            on your location and external factors.
          </p>
          <ul className="list-disc list-inside space-y-2 text-emerald-800 pl-2">
            <li>
              Orders are processed within{' '}
              <span className="font-semibold text-emerald-600">24 hours</span>{' '}
              of confirmation.
            </li>
            <li>
              Shipping is available{' '}
              <span className="font-semibold text-emerald-600">
                across India
              </span>
              .
            </li>
            <li>
              Tracking details will be provided once your order is shipped.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
