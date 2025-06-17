import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react'; // ✅ updated import

function QRCodeGenerator() {
  const [text, setText] = useState('Hello from ChatGPT!');

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>QR Code Generator</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter data to encode"
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '300px',
          marginBottom: '20px',
        }}
      />

      <div style={{ marginTop: '20px' }}>
        <QRCodeSVG value={text} size={256} />
        <p>
          QR Code for: <strong>{text}</strong>
        </p>
      </div>
    </div>
  );
}

export default QRCodeGenerator;