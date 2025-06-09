"use client";
import { QRCodeCanvas } from 'qrcode.react';
import { FaUpload } from "react-icons/fa";
import { useState, useRef } from "react";

export default function Home() {
  const [LinkValue, setLinkValue] = useState<string>('');
  const [fgColor, setfgColor] = useState<string>('#000');
  const [bgColor, setbgColor] = useState<string>('#fff');
  const [logoUrl, setlogoUrl] = useState<string>('/logo.png');
  const [logoSize, setlogoSize] = useState<number>(38);
  const qrCodeRef = useRef<HTMLDivElement>(null);

  const handdleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader(); reader.onload = () => {
        if (reader.result) {
          setlogoUrl(reader.result as string);
        }
      }
      reader.readAsDataURL(file);
    }
  }

  const handleDownload = () => {
    if (!qrCodeRef.current) return;

    const canvas = qrCodeRef.current.querySelector("canvas");

    if (!canvas) return;

    const url = canvas.toDataURL();
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = url;
    link.click();
  }

  return (
    <main className="container">
      <section className="title-container">
        <h1 className="page-title">
          Gere e customize QR Codes <span>Dinâmicos</span>
        </h1>
        <img src="/arrow.svg" alt="detail" className="arrow-detail" />
      </section>

      <section className="qrcode-container">
        <div className="qr-code">
          <div className="link-input">
            <label htmlFor="link">
              Digite seu link
            </label>
            <input type="text" id="link" placeholder="Seu link aqui" value={LinkValue} onChange={(e) => setLinkValue(e.target.value)} />
          </div>
          <div className="qr-code-preview">
            <p>QR Code Preview</p>
            <div ref={qrCodeRef}><QRCodeCanvas
              value={LinkValue}
              title={LinkValue}
              size={200}
              bgColor={bgColor}
              fgColor={fgColor}
              imageSettings={{
                src: logoUrl,
                x: undefined,
                y: undefined,
                height: logoSize,
                width: logoSize,
                opacity: 1,
                excavate: true,
                crossOrigin: 'anonymous'
              }}
            /> </div>
          </div>
        </div>
        <div className="qr-code-customization">
          <div className="customization-container">
            <h3 className="titulo-cores">Cores</h3>
            <div className="input-container colors">
              <label htmlFor="fgColor">
                Cor Principal
              </label>
              <input type="color" id="fgcolor" className="input-color" value={fgColor} onChange={(e) => setfgColor(e.target.value)} />
            </div>
            <div className="input-box">
              <label htmlFor="bgColor">
                Cor do fundo
              </label>
              <input type="color" id="bgcolor" className="input-color" value={bgColor} onChange={(e) => setbgColor(e.target.value)} />
            </div>
          </div>
          <div className="customization-container-2">
            <h3>Logo</h3>
            <div className="input-container">
              <label htmlFor="logo">
                Insira seu logo
              </label>
              <input type="file" id="logo" className="input-file" accept="image/*" onChange={handdleLogoChange} />
              <button className="input-file-button">
                <FaUpload />&nbsp; Escolher arquivo
              </button>

            </div>
            <div className="input-box">
              <label htmlFor="logo-size">
                Tamanho da logo
              </label>
              <select name="logo-size" id="logo-size" onChange={(e) => setlogoSize(Number(e.target.value))}><option value="24">24px x 24px</option>
                <option value="38">38px x 38px</option>
                <option value="50">50px x 50px</option></select>
            </div>
          </div>
          <button className="button-qrcode" onClick={handleDownload}>Baixar QR CODE</button>
        </div>
      </section>
    </main>
  );
}
