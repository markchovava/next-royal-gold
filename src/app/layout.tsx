import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";



export const metadata: Metadata = {
  title: "Royal Niger Gold",
  description: "Royal Niger Gold",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
