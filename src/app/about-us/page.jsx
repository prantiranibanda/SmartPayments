import React from 'react';
import Footer from '../Footer';

export default function AboutUs() {
  return (
    <div className="min-h-[calc(100vh-4.5rem)] bg-gradient-to-br from-emerald-100 to-emerald-300 flex flex-col justify-between">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 mb-6 drop-shadow-lg">
          About Us
        </h1>
        <p className="max-w-3xl text-emerald-900 bg-white/70 rounded-lg px-10 py-6 shadow-lg text-justify">
          Welcome to our Automated Smart Billing System! Our platform is
          designed to revolutionize the retail experience by integrating
          advanced QR code technology with a secure and user-friendly payment
          gateway. Shoppers can effortlessly scan products, add them to their
          virtual cart, and complete transactions within seconds, all from their
          mobile devices.
          <br />
          We are committed to eliminating long queues and reducing congestion at
          traditional billing counters, making shopping faster and more
          enjoyable for everyone. Our system provides instant access to order
          history, automated billing, and real-time updates, ensuring
          transparency and convenience at every step.
          <br />
          Whether you are a customer seeking a hassle-free checkout or a
          retailer aiming to enhance operational efficiency, our solution is
          tailored to meet your needs. Experience the future of
          shopping—seamless, efficient, and modern—where technology and
          convenience come together for a superior retail journey.
        </p>
      </main>
      <Footer />
    </div>
  );
}
