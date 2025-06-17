import React from 'react';
import { useRouter } from 'next/navigation';

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export default function RazorpayCheckout({
  amount,
  currency = 'INR',
  receipt = 'receipt#1',
  products = [], // Accept products as prop
  totalWeight = 0,
  totalItems = 0,
}) {
  const router = useRouter();

  const handlePayment = async () => {
    const res = await loadRazorpayScript();
    if (!res) {
      alert('Razorpay SDK failed to load.');
      return;
    }

    // Create order on server
    const orderRes = await fetch('/api/payment/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: parseInt(amount)*100, currency, receipt }),
    });
    const data = await orderRes.json();
    if (!data.success) {
      alert('Failed to create order');
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_API_ID || '', // Set in .env.local
      amount: data.order.amount, // Razorpay expects amount in paise
      currency: data.order.currency,
      order_id: data.order.id,
      name: 'Smart Payment',
      description: 'Auto Transaction',
      handler: async function (response) {
        // Save products and billing info to localStorage
        const billingInfo = {
          products,
          totalWeight,
          totalItems,
          totalPrice: amount,
          receipt,
        };
        localStorage.setItem('paymentSuccessData', JSON.stringify(billingInfo));
        // You can verify payment on the server here
        const paymentVerification = async () => {
          try {
            const verifyRes = await fetch('/api/payment/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(response),
            });
            const verifyData = await verifyRes.json();
            if (verifyData.success) {
              // Redirect to /success with receipt
              router.push(`/success?receipt=${encodeURIComponent(receipt)}`);
            } else {
              console.error('Payment verification failed:', verifyData.message);
            }
          } catch (error) {
            console.error('Error verifying payment:', error);
          }
        };
        await paymentVerification();
      },
      prefill: {
        name: '',
        email: '',
        contact: '',
      },
      theme: {
        color: '#3399cc',
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button
      onClick={handlePayment}
      className="w-1/2 bg-emerald-400 text-white px-4 py-2 rounded hover:bg-emerald-500 transition-colors font-semibold"
    >
      Make Payment
    </button>
  );
}
