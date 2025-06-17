import React from 'react';
import Footer from '../Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-[calc(100vh-4.5rem)] bg-gradient-to-br from-emerald-100 to-emerald-300 flex flex-col justify-between">
      <div className="mt-28 max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-emerald-100">
        <h1 className="text-4xl font-bold text-emerald-700 mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-lg text-emerald-900 mb-6 text-center">
          We are committed to protecting your privacy. Any information collected
          on this site will be kept strictly confidential and will not be sold,
          reused, rented, disclosed, or loaned.
        </p>
        <ul className="list-disc list-inside space-y-3 text-emerald-800 text-base">
          <li>
            We only collect information necessary to provide our services.
          </li>
          <li>
            Your data is stored securely and is not shared with third parties
            except as required by law.
          </li>
          <li>We may use cookies to enhance your experience.</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
