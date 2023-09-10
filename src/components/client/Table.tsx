"use client"

import { Component, ReactNode } from "react";
import History from "../history/History";
import FrameWrapper from "../frame/FrameWrapper";
import CalculatorWrapper from "../calculator/Calculator";


class Table extends Component {
    constructor(props: any) {
        super(props);
    }

    render(): ReactNode {
        return (
            <FrameWrapper>
                <History />
                <CalculatorWrapper />
            </FrameWrapper>
        )
    }
}

export default Table;
