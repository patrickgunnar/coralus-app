"use client";

import useExpression from "@/hooks/useExpression";
import { Component, ReactNode } from "react";
import { IconType } from "react-icons";
import { PiDotLight, PiCaretUpBold } from "react-icons/pi";
import { TbSquareRoot } from "react-icons/tb";

interface DisplayProps {
    expression: IconType[];
    expString: string;
}

class Display extends Component<DisplayProps> {
    constructor(props: DisplayProps) {
        super(props);
    }

    render(): ReactNode {
        const { expression, expString } = this.props;

        return (
            <div className={`box-border flex flex-wrap gap-0 justify-end items-center h-[20%] w-full rounded-customA 
            bg-customColor shadow-customH p-7 text-[1rem] md:text-[1.1rem] xl:text-[1.5rem] overflow-hidden 
            ${expString === "INVALID" ? "text-red-600" : "text-white"}`}>
                {expression.map((Icon, index) => {
                    if (Icon === PiDotLight) {
                        return <PiDotLight key={index} className="mt-4" />;
                    }

                    if (Icon === PiCaretUpBold) {
                        return <PiCaretUpBold key={index} className="mb-4" />;
                    }

                    if (Icon === TbSquareRoot) {
                        return <TbSquareRoot key={index} className="mb-1" />;
                    }

                    return <Icon key={index} />;
                })}
                {
                    expression.length === 0 && "0"
                }
            </div>
        );
    }
}

const DisplayWrapper = () => {
    const { expression, expString } = useExpression();

    return <Display expression={expression} expString={expString} />;
};

export default DisplayWrapper;
