"use client"

import { Component, ReactNode } from "react";
import History from "../history/History";
import CalculatorFrame from "../calculator/CalculatorFrame";
import FrameWrapper from "../frame/FrameWrapper";


class Table extends Component {
    constructor(props: any) {
        super(props);
    }

    render(): ReactNode {
        return (
            <FrameWrapper>
                <History />
                <CalculatorFrame />
            </FrameWrapper>
        )
    }
}

export default Table;
