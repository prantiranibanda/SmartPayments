import { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import toast from 'react-hot-toast';

const ProductQRScanner = ({ setProducts, scanned, setScanned }) => {
  const scannerRef = useRef(null);

  useEffect(() => {
    if (!scanned) {
      scannerRef.current = new Html5QrcodeScanner('reader', {
        fps: 10,
        qrbox: { width: 200, height: 200 },
        aspectRatio: 1.777,
        rememberLastUsedCamera: true,
        // showTorchButtonIfSupported: true
      });
      scannerRef.current.render(
        (decodedText, decodedResult) => {
          try {
            let product = JSON.parse(decodedText);
            //{"id":10,"name":"Lays","weight":0.05,"price":10,"quantity":1}
            if (
              product === undefined ||
              product.id === undefined ||
              product.name === undefined ||
              product.weight === undefined ||
              product.price === undefined ||
              product.quantity === undefined
            ) {
              throw new Error('Invalid product data');
            }
            setProducts((prevProducts) => {
              // Check if product with same id exists
              const existingIndex = prevProducts.findIndex(
                (p) => p.id === product.id
              );
              if (existingIndex !== -1) {
                // If exists, increase quantity
                const updatedProducts = [...prevProducts];
                updatedProducts[existingIndex] = {
                  ...updatedProducts[existingIndex],
                  quantity: (updatedProducts[existingIndex].quantity || 1) + 1,
                };
                return updatedProducts;
              }
              // If not exists, add with quantity 1
              return [...prevProducts, { ...product, quantity: 1 }];
            });
          } catch (e) {
            console.error('Failed to parse QR code JSON:', e);
            toast.error('Invalid product data in QR code');
          } finally {
            setScanned(true);
            scannerRef.current.clear().catch(() => {});
          }
        },
        (error) => {
          console.warn(`Error scanning: ${error}`);
        }
      );
    }
    // Cleanup on unmount
    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(() => {});
      }
    };
  }, [scanned, setProducts]);

  return (
    <div className="w-full">
      <div id="reader" className="w-full text-center sm:w-100"></div>
    </div>
  );
};

export default ProductQRScanner;
