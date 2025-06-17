import React from 'react';
import Footer from '../Footer';

export default function TermsAndConditions() {
  return (
    <div className="min-h-[calc(100vh-4.5rem)] bg-gradient-to-br from-emerald-100 to-emerald-300 flex flex-col justify-between">
      <div className="mt-20 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-6 text-center drop-shadow">
          Terms and Conditions
        </h1>
        <p className="text-lg text-emerald-900 mb-6 text-center">
          Welcome to our website. By accessing or using our services, you agree
          to be bound by these terms and conditions. Please read them carefully
          before using our site.
        </p>
        <ul className="list-disc list-inside space-y-3 bg-white/80 rounded-md p-6 shadow">
          <li className="text-emerald-800">
            Use of this website is subject to the laws of India.
          </li>
          <li className="text-emerald-800">
            All content is for general information and use only. It is subject
            to change without notice.
          </li>
          <li className="text-emerald-800">
            Unauthorized use of this website may give rise to a claim for
            damages and/or be a criminal offense.
          </li>
          <li className="text-emerald-800">
            We reserve the right to modify these terms at any time.
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
