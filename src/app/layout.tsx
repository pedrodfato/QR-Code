import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import './styles.css';

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: '--font-poppins',
});

export const metadata : Metadata = {
  title: "QR Code Generator",
  description: "QR Code Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
