"use client"

import { Component, ReactNode } from "react";


class History extends Component {
    render(): ReactNode {
        return (
            <div className="box-border hidden md:flex justify-center items-center h-full w-[40%]">
                <label>Calculator History</label>
            </div>
        )
    }
}

export default History;
