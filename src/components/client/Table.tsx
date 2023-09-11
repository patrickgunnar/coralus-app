"use client";

import { Component, ReactNode } from "react";
import History from "../history/History";
import FrameWrapper from "../frame/FrameWrapper";
import CalculatorWrapper from "../calculator/Calculator";
import useHistory, { HistoryType } from "@/hooks/useHistory";


interface TableContentProps {
    setHistory: (history: HistoryType[]) => void
}

class TableContent extends Component<TableContentProps> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount(): void {
        const { setHistory } = this.props;
        const history = localStorage.getItem("coralusHistory");

        if(history) {
            setHistory(JSON.parse(history));
        }
    }

    render(): ReactNode {
        return (
            <FrameWrapper>
                <History />
                <CalculatorWrapper />
            </FrameWrapper>
        );
    }
}

const Table = () => {
    const { setHistory } = useHistory();

    return <TableContent setHistory={setHistory} />;
}

export default Table;
