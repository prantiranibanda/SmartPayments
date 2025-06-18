'use client';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function SuccessContent() {
  const searchParams = useSearchParams();
  const receipt = searchParams.get('receipt');
  const [billing, setBilling] = useState(null);
  const [customerWeight, setCustomerWeight] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem('paymentSuccessData');
      if (data) {
        setBilling(JSON.parse(data));
      }
      const storedWeight = localStorage.getItem('customerWeight');
      if (storedWeight) {
        setCustomerWeight(storedWeight);
      }
    }
  }, []);

  return (
    <div className="bg-white p-4 sm:p-10 rounded shadow-lg border border-emerald-300 text-center w-full max-w-2xl">
      <h1 className="text-3xl font-bold text-emerald-500 mb-4">
        Payment Successful!
      </h1>
      <p className="text-lg mb-2">Thank you for your payment.</p>
      {receipt && (
        <div className="mb-4">
          <span className="font-semibold">Receipt:</span>{' '}
          <span className="text-emerald-600">{receipt}</span>
        </div>
      )}
      {billing && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Order Details</h2>
          <table className="w-full border border-gray-400 mb-4">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-1 py-0.5 sm:px-2 sm:py-1 border">Item</th>
                <th className="px-1 py-0.5 sm:px-2 sm:py-1 border">Weight</th>
                <th className="px-1 py-0.5 sm:px-2 sm:py-1 border">Price</th>
                <th className="px-1 py-0.5 sm:px-2 sm:py-1 border">Qty.</th>
                <th className="px-1 py-0.5 sm:px-2 sm:py-1 border">Total</th>
              </tr>
            </thead>
            <tbody>
              {billing.products.map((p, i) => (
                <tr key={i}>
                  <td className="border px-1 py-0.5 sm:px-2 sm:py-1">
                    {p.name}
                  </td>
                  <td className="border px-1 py-0.5 sm:px-2 sm:py-1">
                    {p.weight}0 kg
                  </td>
                  <td className="border px-1 py-0.5 sm:px-2 sm:py-1">
                    ₹{p.price}
                  </td>
                  <td className="border px-1 py-0.5 sm:px-2 sm:py-1">
                    {p.quantity}
                  </td>
                  <td className="border px-1 py-0.5 sm:px-2 sm:py-1">
                    ₹{(p.price * p.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-left mb-2">
            <div>
              <span className="font-semibold">Total Items:</span>{' '}
              {billing.totalItems}
            </div>
            <div>
              <span className="font-semibold">Total Product Weight:</span>{' '}
              {billing.totalWeight} kg
            </div>
            <div>
              <span className="font-semibold">Customer Weight:</span>{' '}
              {customerWeight} kg
            </div>
            <div>
              <span className="font-semibold">Total Weight:</span>{' '}
              {billing && customerWeight
                ? (
                    parseFloat(billing.totalWeight) + parseFloat(customerWeight)
                  ).toFixed(3)
                : ''}{' '}
              kg
            </div>
            <div>
              <span className="font-semibold">Total Price:</span> ₹
              {billing.totalPrice}
            </div>
          </div>
        </div>
      )}
      <Link href="/home" className="text-blue-500 underline">
        Back to Home
      </Link>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <div className="p-3 flex flex-col items-center justify-center min-h-[calc(100vh-4.5rem)] bg-emerald-50">
      <Suspense fallback={<div>Loading...</div>}>
        <SuccessContent />
      </Suspense>
    </div>
  );
}
