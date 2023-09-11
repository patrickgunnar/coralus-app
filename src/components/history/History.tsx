"use client";

import useHistory, { HistoryType } from "@/hooks/useHistory";
import { Component, ReactNode } from "react";

interface HistoryContentProps {
    history: HistoryType[];
}
class HistoryContent extends Component<HistoryContentProps> {
    render(): ReactNode {
        const { history } = this.props;
        console.log(history);

        return (
            <div className="box-border hidden md:flex justify-center items-center h-full w-[40%]">
                <label>Calculator History</label>
            </div>
        );
    }
}

const History = () => {
    const { history } = useHistory();

    return <HistoryContent history={history} />;
};

export default History;
