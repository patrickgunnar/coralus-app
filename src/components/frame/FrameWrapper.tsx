"use client"

import { Component, ReactNode } from "react";
import Header from "../Header";


interface TVFrameProps {
    children: ReactNode
}

class FrameWrapper extends Component<TVFrameProps> {
    constructor(props: any) {
        super(props);
    }

    render(): ReactNode {
        return (
            <div className="box-border flex flex-col justify-center items-center h-[90%] w-[95%] md:h-[70%] lg:h-[90%] 
            lg:w-[60%] bg-customColor shadow-customA rounded-customA p-4 pb-4 md:pb-2 overflow-hidden">
                <div className="box-border flex justify-between items-center h-full w-full rounded-customA shadow-customB 
                bg-[var(--colour-002)] overflow-hidden">
                    {this.props.children}
                </div>
                <Header />
            </div>
        )
    }
}

export default FrameWrapper
