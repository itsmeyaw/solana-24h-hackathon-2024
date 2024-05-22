import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import "@radix-ui/themes/styles.css";
import AppWalletProvider from "./AppWalletProvider";
import Navigation from "./components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "thirdweb SDK + Next starter",
  description:
    "Starter template for using thirdweb SDK with Next.js App router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <AppWalletProvider>{children}</AppWalletProvider>
      </body>
    </html>
  );
}
