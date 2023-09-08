"use client"

import { Component, ReactNode } from "react"


class CalculatorFrame extends Component {
    render(): ReactNode {
        return (
            <div className="box-border flex justify-center items-center h-full w-full md:w-[60%]">
                <div className="flex justify-center items-center h-full w-full">
                    Calculator
                </div>
            </div>
        )
    }
}

export default CalculatorFrame
