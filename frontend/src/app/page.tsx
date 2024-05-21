"use client"

import {WalletMultiButton} from "@solana/wallet-adapter-react-ui";

export default function Home() {
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">


          <div className="border hover:border-slate-900 rounded">
              <WalletMultiButton style={{}}/>
          </div>
      </div>
    </main>
  );
}
