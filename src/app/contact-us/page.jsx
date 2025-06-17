import React from 'react';
import Footer from '../Footer';

export default function ContactUs() {
  return (
    <div className="min-h-[calc(100vh-4.5rem)] bg-gradient-to-br from-emerald-100 to-emerald-300 flex flex-col justify-between">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="bg-white/80 rounded-2xl shadow-lg p-8 max-w-lg w-full">
          <h1 className="text-4xl font-bold text-emerald-700 mb-4 text-center drop-shadow">
            Contact Us
          </h1>
          <p className="text-lg text-emerald-900 mb-6 text-center">
            For any queries or support, please contact us:
          </p>
          <ul className="space-y-4 text-center">
            <li className="text-emerald-800">
              <span className="font-semibold">Phone:</span>{' '}
              <a
                className="text-emerald-600 hover:underline"
                href="tel:7439455739"
              >
                7439455739
              </a>
            </li>
            <li className="text-emerald-800">
              <span className="font-semibold">Email:</span>{' '}
              <a
                className="text-emerald-600 hover:underline"
                href="mailto:prantibanda@gmail.com"
              >
                prantibanda@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
