import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js 15 Dynamic IO Demo",
  description: "Demonstrating new caching features in Next.js 15",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">Next.js 15 Dynamic IO Demo</h1>
        </header>
        <main className="container mx-auto p-4">
          <Suspense fallback={<div>Loading page content...</div>}>
            {children}
          </Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
}
