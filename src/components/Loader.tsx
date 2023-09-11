"use client";

import { Component, ReactNode } from "react";


class Loader extends Component {
    render(): ReactNode {
        return (
            <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-32 border-t-2 border-b-2 border-[var()--colour-020]"></div>
            </div>
        );
    }
}

export default Loader;
