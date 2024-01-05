import type { Metadata } from "next";
import { Lusitana, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caro Barragàn  ♥",
  description: "Porfolio de Carolina - Desarrolladora y Programadora Web ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}antialiased`}>{children}</body>
    </html>
  );
}
