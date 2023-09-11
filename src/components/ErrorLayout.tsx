"use client";

import { Component, ReactNode } from "react";


class ErrorLayout extends Component {
    render(): ReactNode {
        return (
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center rounded-full h-12 w-32 border-t-2 border-b-2 border-red-600 bg-white">
                    <label className="font-extrabold text-[1.3rem] text-red-600">
                        Error
                    </label>
                </div>
            </div>
        );
    }
}

export default ErrorLayout;
