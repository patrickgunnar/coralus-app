"use client";

import { Component, ReactNode } from "react";
import { KeyMappings } from "../calculator/Calculator";
import { IconType } from "react-icons";
import { TbEqual, TbSquareRoot } from "react-icons/tb";
import { PiDotLight, PiCaretUpBold } from "react-icons/pi";

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

            if (Icon === PiDotLight) {
                return <PiDotLight key={index} className="mt-2" />;
            }

            if (Icon === PiCaretUpBold) {
                return <PiCaretUpBold key={index} className="mb-4" />;
            }

            if (Icon === TbSquareRoot) {
                return <TbSquareRoot key={index} className="mb-1" />;
            }

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
        console.log(expression);

        return (
            <div className="box-border flex flex-wrap gap-0 justify-end items-center h-fit w-full rounded-customA 
            bg-customColor shadow-customH p-7 text-[1rem] md:text-[1.1rem] xl:text-[1.5rem] overflow-hidden text-white">
                {this.returnArrayIcons(expressionIcons)}
                <TbEqual />
                {this.returnArrayIcons(resultIcons)}
            </div>
        );
    }
}

export default HistoryItem;
