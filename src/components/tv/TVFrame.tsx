"use client"

import { Component, ReactNode } from "react";


interface TVFrameProps {
    children: ReactNode
}

class TVFrame extends Component<TVFrameProps> {
    constructor(props: any) {
        super(props);
    }

    render(): ReactNode {
        return (
            <div className="box-border flex justify-center items-center h-[90%] w-[95%] md:h-[70%] lg:h-[90%] lg:w-[55%] 
            bg-customColor shadow-customA rounded-customA p-12 overflow-hidden">
                <div className="box-border flex justify-between items-center h-full w-full rounded-customA shadow-customB 
                bg-[var(--colour-002)] overflow-hidden">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default TVFrame
