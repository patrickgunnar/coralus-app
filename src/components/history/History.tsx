"use client";

import useHistory, { HistoryType } from "@/hooks/useHistory";
import { Component, ReactNode } from "react";
import HistoryItem from "./HistoryItem";
import Footer from "../Footer";

interface HistoryContentProps {
    history: HistoryType[];
}
class HistoryContent extends Component<HistoryContentProps> {
    render(): ReactNode {
        const { history } = this.props;

        return (
            <div className="box-border flex flex-col justify-between items-center text-center text-gray-200 h-full w-[40%]">
                <div className="box-border flex justify-center items-center p-1 h-[5%] w-full shadow-customC bg-customColorB">
                    <label className="relative truncate text-sm font-bold font-sans h-fit w-full">
                        Calculation History
                    </label>
                </div>
                <div className="box-border hidden md:flex gap-2 flex-col justify-start items-center p-6 h-[85%] w-full
                overflow-hidden overflow-y-auto">
                    <div className="flex gap-2 flex-col justify-start items-center h-fit w-full">
                        {history.map((item, index) => {
                            const { expression, result } = item;

                            return (
                                <HistoryItem
                                    key={index}
                                    expression={expression}
                                    result={result}
                                />
                            );
                        })}
                        {history.length > 0 && (
                            <label className="font-sans font-bold">
                                No history found.
                            </label>
                        )}
                    </div>
                </div>
                <div className="box-border flex justify-center items-center p-1 h-[5%] w-full shadow-customC bg-customColorB">
                    <Footer />
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
