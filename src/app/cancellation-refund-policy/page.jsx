import React from 'react';
import Footer from '../Footer';

export default function CancellationRefundPolicy() {
  return (
    <div className="min-h-[calc(100vh-4.5rem)] bg-gradient-to-br from-emerald-100 to-emerald-300 flex flex-col justify-between">
      <div className="mt-30 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-6 text-center drop-shadow">
          Cancellation and Refund Policy
        </h1>
        <p className="text-lg text-emerald-900 mb-6 text-center">
          You may request a cancellation or refund within 2-3 business days of
          your order. Please contact our support team for assistance.
        </p>
        <ul className="list-disc list-inside space-y-3 bg-white/80 rounded-md p-6 shadow">
          <li className="text-emerald-800">
            Cancellations are accepted within 24 hours of order placement.
          </li>
          <li className="text-emerald-800">
            Refunds will be processed within 2-3 business days after approval.
          </li>
          <li className="text-emerald-800">
            For any issues, please reach out to our support team.
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
