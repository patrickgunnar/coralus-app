"use client";

import { Component, ReactNode } from "react";
import { KeyMappings } from "../calculator/Calculator";
import { IconType } from "react-icons";

interface HistoryItemProps {
    expression: string;
    result: string;
}

class HistoryItem extends Component<HistoryItemProps> {
    constructor(props: HistoryItemProps) {
        super(props);
    }

    returnArrayIcons(
        currentArray: { option: string; value: IconType | null }[]
    ) {
        return currentArray.map((item, index) => {
            const { option, value: Icon } = item;

            if (!Icon) return null;

            return <Icon key={index} />;
        });
    }

    render(): ReactNode {
        const { expression, result } = this.props;
        const expressionIcons = expression.split("").map((item) => {
            return KeyMappings[item];
        });
        const resultIcons = result.split("").map((item) => {
            return KeyMappings[item];
        });
        console.log(expression)

        return (
            <div className="box-border flex flex-wrap justify-center items-center p-2 h-fit w-full
            text-white text-[1rem]">
                <div className="flex">{this.returnArrayIcons(expressionIcons)}</div>
                <div className="flex">{this.returnArrayIcons(resultIcons)}</div>
            </div>
        );
    }
}

export default HistoryItem;
