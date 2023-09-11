"use client";

import useHistory, { HistoryType } from "@/hooks/useHistory";
import { Component, ReactNode } from "react";
import HistoryItem from "./HistoryItem";

interface HistoryContentProps {
    history: HistoryType[];
}
class HistoryContent extends Component<HistoryContentProps> {
    render(): ReactNode {
        const { history } = this.props;

        return (
            <div className="box-border hidden md:flex gap-2 flex-col justify-start items-center p-6 h-full w-[40%]
            overflow-hidden overflow-y-auto">
                <div className="flex gap-2 flex-col justify-start items-center h-fit w-full">
                    {[...history, ...history, ...history, ...history].map(
                        (item, index) => {
                            const { expression, result } = item;

                            return (
                                <HistoryItem
                                    key={index}
                                    expression={expression}
                                    result={result}
                                />
                            );
                        }
                    )}
                </div>
            </div>
        );
    }
}

const History = () => {
    const { history } = useHistory();

    return <HistoryContent history={history} />;
};

export default History;
