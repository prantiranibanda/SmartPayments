'use client';
import { useState } from 'react';
import CartScan from '../CartScan';
import ScanProduct from '../ScanProduct';

export default function Home() {
  const [startShopping, setStartShopping] = useState(false);
  const [cartNo, setCartNo] = useState('');
  return (
    <div className="min-h-[calc(100vh-4.5rem)] bg-emerald-50">
      {!startShopping && (
        <CartScan
          cartNo={cartNo}
          setCartNo={setCartNo}
          startShopping={startShopping}
          setStartShopping={setStartShopping}
        />
      )}
      {startShopping && <ScanProduct />}
    </div>
  );
}
