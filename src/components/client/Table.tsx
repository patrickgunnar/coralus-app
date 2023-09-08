"use client"

import { Component, ReactNode } from "react";
import History from "../history/History";
import CalculatorFrame from "../calculator/CalculatorFrame";
import TVFrame from "../tv/TVFrame";


class Table extends Component {
    constructor(props: any) {
        super(props);
    }

    render(): ReactNode {
        return (
            <TVFrame>
                <History />
                <CalculatorFrame />
            </TVFrame>
        )
    }
}

export default Table;
