"use client";

import { Component, ReactNode } from "react";
import { MdCalculate } from "react-icons/md";


class Header extends Component {
    constructor(props: any) {
        super(props);
    }

    render(): ReactNode {
        return (
            <header className="box-border flex justify-center items-center h-fit w-fit">
                <button className="box-border flex gap-1 justify-center items-center p-2 mt-4 
                h-fit w-fit uppercase font-bold text-[1.25rem] text-[var(--colour-008)] 
                text-center font-header" onClick={() => window.location.reload()}>
                    <MdCalculate size={22} className="mb-1" />
                    Coralus
                </button>
            </header>
        );
    }
}

export default Header;
