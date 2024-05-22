import type { Metadata } from "next";
import {Inter, Roboto} from "next/font/google";
import "@/app/globals.css";
import '@radix-ui/themes/styles.css';
import AppWalletProvider from "@/app/AppWalletProvider";
import {Header} from "@/components/Header";

const roboto = Roboto({weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SolBNB",
  description:
    "Decentralized renting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AppWalletProvider>
            <Header/>
            {children}
        </AppWalletProvider>
      </body>
    </html>
  );
}
