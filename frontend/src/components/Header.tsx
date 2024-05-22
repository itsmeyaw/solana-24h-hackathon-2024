import React from "react";
import classNames from "classnames";
import {Heading} from "@radix-ui/themes";
import Link from "next/link";
import {WalletConnectButton} from "@/components/WalletConnectButton";

type HeaderElement = React.ElementRef<'header'>
export type HeaderProps = React.ComponentProps<'header'>;

export const Header = React.forwardRef<HeaderElement, HeaderProps>(({children, className, ...props}, ref) => {
    return (
        <header {...props} className={classNames(className, "w-full flex justify-center")}>
            <div className={"min-h-[50px] w-full max-w-7xl flex justify-between items-center p-5"}>
                <div className={""}>
                    <Link href={"/"}>
                        <h1 className={"text-2xl font-bold"}>
                            SolBNB
                        </h1>
                    </Link>
                </div>
                <div>
                    <WalletConnectButton/>
                </div>
            </div>
        </header>
    )
})
