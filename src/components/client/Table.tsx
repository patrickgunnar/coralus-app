"use client"

import { Component, ReactNode } from "react";


class Table extends Component {
    constructor(props: any) {
        super(props);
    }

    render(): ReactNode {
        return (
            <div className="box-border flex justify-center items-center h-[90%] w-[95%] md:h-[70%] lg:h-[90%] lg:w-[55%] 
            bg-customColor shadow-customA rounded-customA overflow-hidden">
                Caralus
            </div>
        )
    }
}

export default Table;
