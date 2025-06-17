import React, { useState } from 'react';
import QRScanner from './QRScanner';
import ProductQRScanner from './ProductQRScanner';
import axios from 'axios';
import RazorpayCheckout from './RazorpayCheckout';

const ScanProduct = () => {
  const [products, setProducts] = useState([]);
  const [scanned, setScanned] = useState(false);

  const handleQuantityChange = (id, delta) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: Math.max(1, product.quantity + delta),
            }
          : product
      )
    );
  };

  const handleRemove = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const totalWeight = products
    .reduce((sum, p) => sum + p.weight * p.quantity, 0)
    .toFixed(2);
  const totalPrice = products
    .reduce((sum, p) => sum + p.price * p.quantity, 0)
    .toFixed(2);
  const totalItems = products.reduce((sum, p) => sum + p.quantity, 0);

  return (
    <div className="p-3 w-full space-y-4 flex flex-col justify-between items-center min-h-[calc(100vh-4.5rem)] bg-emerald-50">
      <div className="pt-6 flex flex-col items-center w-full space-y-6">
        <ProductQRScanner
          setProducts={setProducts}
          scanned={scanned}
          setScanned={setScanned}
        />
        <div className="w-full">
          <div className="w-full text-xl font-semibold mb-1 bg-gray-500 sm:w-3/5 py-2 text-center text-white rounded">
            Scanned Product List
          </div>
          <div className="overflow-x-auto w-full text-center">
            <table className="border border-gray-600 bg-white min-w-full text-center">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-1 sm:px-4 sm:py-2 border-b border-l border-gray-600">
                    Item
                  </th>
                  <th className="p-1 sm:px-4 sm:py-2 border-b border-l border-gray-600">
                    Weight
                  </th>
                  <th className="p-1 sm:px-4 sm:py-2 border-b border-l border-gray-600">
                    Qty.
                  </th>
                  <th className="p-2 sm:px-4 sm:py-2 border-b border-l border-gray-600">
                    Price
                  </th>
                  {/* <th className="w-4 p-2 sm:px-4 sm:py-2 border-b border-l border-gray-600">
                    
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {products.length === 0 && (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center py-4 text-gray-400 italic text-lg border-b border-gray-600	"
                    >
                      No products scanned yet....
                    </td>
                  </tr>
                )}
                {products.map((p) => (
                  <tr key={p.id} className="border-t">
                    <td className="p-1 sm:px-4 sm:py-2 border-b border-l border-gray-600">
                      {p.name}
                    </td>
                    <td className="p-1 sm:px-4 sm:py-2 border-b border-l border-gray-600">
                      {p.weight} kg
                    </td>
                    <td className="p-1 sm:px-4 sm:py-2 border-b border-l border-gray-600 space-x-2 text-center">
                      <button
                        onClick={() => handleQuantityChange(p.id, -1)}
                        className="pb-1 px-1.5 sm:px-2 sm:pb-1 bg-emerald-200 rounded hover:bg-emerald-300 text-center"
                      >
                        −
                      </button>
                      <span>{p.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(p.id, 1)}
                        className="pb-1 px-1.5 sm:px-2 sm:pb-1 bg-emerald-200 rounded hover:bg-emerald-300 text-center"
                      >
                        +
                      </button>
                    </td>
                    <td className="p-1 sm:px-4 sm:py-2 border-b border-l border-gray-600">
                      <div className="flex items-center space-x-2 justify-center">
                        <div>₹{(p.price * p.quantity).toFixed(2)}</div>
                        <button
                          onClick={() => handleRemove(p.id)}
                          className="pt-1 px-0.5 text-gray-600 border border-gray-00 rounded"
                        >
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                    {/* <td className="p-1 sm:px-4 sm:py-2 border-b border-l border-gray-600 text-center">
                      <button
                        onClick={() => handleRemove(p.id)}
                        className="bg-red-400 text-white pt-1 px-0.5 rounded hover:bg-red-500"
                      >
                        <span className="material-symbols-outlined text-xs">
                          delete
                        </span>
                      </button>
                    </td> */}
                  </tr>
                ))}
                <tr className="border-t font-semibold bg-emerald-200">
                  <td className="p-2 sm:px-4 sm:py-2 border-b border-l border-gray-600">
                    Total
                  </td>
                  <td className="p-2 sm:px-4 sm:py-2 border-b border-l border-gray-600">
                    {totalWeight} kg
                  </td>
                  <td className="p-2 sm:px-4 sm:py-2 border-b border-l border-gray-600">
                    {totalItems}
                  </td>
                  <td className="p-2 sm:px-4 sm:py-2 border-b border-l border-gray-600">
                    ₹{totalPrice}
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex space-x-2 w-full">
        {true && (
          <button
            onClick={() => {
              setScanned(false);
            }}
            className="w-1/2 bg-emerald-400 text-white px-4 py-4 rounded hover:bg-emerald-500 transition-colors font-semibold"
          >
            Scan New Item
          </button>
        )}
        <RazorpayCheckout
          amount={totalPrice}
          currency="INR"
          receipt={`receipt#${Date.now()}`}
          products={products}
          totalWeight={totalWeight}
          totalItems={totalItems}
        />
      </div>
    </div>
  );
};

export default ScanProduct;
