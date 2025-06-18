import React, { useState, useEffect } from 'react';
import QRCodeGenerator from './QRCodeGenerator';
import QRScanner from './QRScanner';

const CartScan = ({ cartNo, setCartNo, startShopping, setStartShopping }) => {
  const [username, setUsername] = useState('User');

  useEffect(() => {
    const userStr = localStorage.getItem('fetchedUser');
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        setUsername(user.username || '');
      } catch (e) {
        setUsername('');
      }
    }
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4.5rem)] bg-emerald-50 px-4">
      <div className="h-full w-full p-6 border border-emerald-300 flex flex-col items-center justify-between sm:p-6 rounded-lg shadow-lg bg-white space-y-6">
        <div className="flex flex-col space-y-4 w-full">
          <div className="text-center text-2xl font-bold text-emerald-400 pb-2">
            {username && <span className="font-semibold">Hi {username}!</span>}
          </div>
          {/* <div className="flex justify-between items-center sm:space-x-5">
            <div className="text-lg">Customer ID:</div>
            <input
              type="text"
              id="customerId"
              className="border border-emerald-500 px-2 py-1 rounded"
            />
          </div> */}
          <div className="sm:flex justify-between items-center sm:space-x-5 w-full">
            <div className="text-lg w-full">Cart No:</div>
            <input
              type="text"
              id="cartNo"
              className="border border-emerald-500 px-2 py-1 rounded w-full"
              value={cartNo}
              onChange={(e) => setCartNo(e.target.value)}
              placeholder="Scan Cart QR"
            />
          </div>
          {/* <div className="flex justify-between items-center sm:space-x-5">
            <div className="text-lg">Date:</div>
            <input
              type="text"
              id="date"
              className="border border-emerald-500 px-2 py-1 rounded"
              defaultValue={new Date().toISOString().split('T')[0]}
            />
          </div> */}
          <div className="sm:flex justify-between items-center sm:space-x-5 w-full">
            <div className="text-lg w-full">Customer Weight:</div>
            <input
              type="text"
              id="weight"
              className="border border-emerald-500 px-2 py-1 rounded w-full"
            />
          </div>
        </div>
        {cartNo === '' && <QRScanner setCartNo={setCartNo} />}
        {cartNo !== '' && (
          <div className="flex space-x-3 pt-4">
            <button
              onClick={() => {
                setCartNo('');
              }}
              className="bg-emerald-400 text-white px-4 py-2 rounded hover:bg-emerald-500 transition-colors font-semibold"
            >
              Reset QR
            </button>
            <button
              onClick={() => {
                setStartShopping(true);
              }}
              className="bg-emerald-400 text-white px-4 py-2 rounded hover:bg-emerald-500 transition-colors font-semibold"
            >
              Start Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartScan;
