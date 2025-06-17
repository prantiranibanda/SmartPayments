import { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

function QRScanner({
  setCartNo,
  setTogglescanner,
  toggleScanner,
  setShowResetQrContinueShopping,
}) {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      fps: 10,
      qrbox: { width: 200, height: 200 },
      aspectRatio: 1.777,
      rememberLastUsedCamera: true,
      // showTorchButtonIfSupported: true,
    });

    scanner.render(
      (decodedText, decodedResult) => {
        console.log(`Code: ${decodedText}`);
        setCartNo(decodedText);
        setShowResetQrContinueShopping(false);
      },
      (error) => {
        console.warn(`Error scanning: ${error}`);
      }
    );
    // Cleanup on unmount
    return () => {
      scanner.clear().catch(() => {});
    };
  }, []);

  return (
    <div className="w-full sm:w-60">
      <div id="reader" className="text-center w-full"></div>
    </div>
  );
}

export default QRScanner;
