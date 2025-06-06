"use client";
import { QRCodeCanvas } from 'qrcode.react';
import { FaUpload } from "react-icons/fa";


export default function Home() {
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
            <input type="text" id="link" placeholder="Seu link aqui" />
          </div>
          <div className="qr-code-preview">
            <p>QR Code Preview</p><QRCodeCanvas
              value={"https://trajetoriadosucesso.com.br/"}
              title={"https://trajetoriadosucesso.com.br/"}
              size={200}
              bgColor={"#ffffff"}
              fgColor={"#000000"}
              imageSettings={{
                src: "https://static.zpao.com/favicon.png",
                x: undefined,
                y: undefined,
                height: 24,
                width: 24,
                opacity: 1,
                excavate: true,
              }}
            />
          </div>
        </div>
        <div className="qr-code-customization">
          <div className="customization-container">
            <h3 className="titulo-cores">Cores</h3>
            <div className="input-container colors">
              <label htmlFor="fgColor">
                Cor Principal
              </label>
              <input type="color" id="fgcolor" className="input-color" />
            </div>
            <div className="input-box">
              <label htmlFor="bgColor">
                Cor do fundo
              </label>
              <input type="color" id="bgcolor" className="input-color" />
            </div>
            </div>
            <div className="customization-container-2">
              <h3>Logo</h3>
              <div className="input-container">
              <label htmlFor="logo">
                Insira seu logo
              </label>
              <input type="file" id="logo" className="input-file" accept="image/*"/>
              <button className="input-file-button">
                  <FaUpload /> Escolher arquivo 
              </button>

            </div>
            <div className="input-box">
              <label htmlFor="logo-size">
                Tamanho da logo
              </label>
              <select name="logo-size" id="logo-size" ><option value="24">24px x 24px</option>
              <option value="38">38px x 38px</option>
              <option value="50">50px x 50px</option></select>
            </div>
            </div>
        </div>
      </section>
    </main>
  );
}
