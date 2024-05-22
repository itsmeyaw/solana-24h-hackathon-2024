"use client"

import {WalletMultiButton} from "@solana/wallet-adapter-react-ui";
import React from "react";

type WalletConnectButtonElement = React.ElementRef<typeof WalletMultiButton>;
type WalletConnectButtonProps = React.ComponentPropsWithoutRef<typeof WalletMultiButton>;

export const WalletConnectButton = React.forwardRef<WalletConnectButtonElement, WalletConnectButtonProps>((props, ref) => {
    return (<WalletMultiButton {...props}/>)
})
