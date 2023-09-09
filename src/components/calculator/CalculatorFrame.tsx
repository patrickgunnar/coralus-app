"use client";

import { Component, ReactNode } from "react";
import CalculatorOpt from "./CalculatorOpt";
import { IoIosBackspace } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { PiCaretUpBold } from "react-icons/pi";
import { BsExclamationLg } from "react-icons/bs";
import { 
    TbSquareRoot2, TbMathPi, TbParentheses, TbPercentage,
    TbDivide, TbMinus, TbPlus, TbEqual, TbNumber0, TbNumber1, 
    TbNumber2, TbNumber3, TbNumber4, TbNumber5, TbNumber6, 
    TbNumber7, TbNumber8, TbNumber9
} from "react-icons/tb";


interface CalculatorFrameState {
    displayValue: string;
}

const calculatorOptions = [
    { label: "Square root", opt: "sqrt", icon: TbSquareRoot2, type: "extra" },
    { label: "PI", opt: "pi", icon: TbMathPi, type: "extra" },
    { label: "x^y", opt: "power", icon: PiCaretUpBold, type: "extra" },
    { label: "!", opt: "factorial", icon: BsExclamationLg, type: "extra" },
    { label: "AC", opt: "AC", icon: null, type: "utility__d" },
    { label: "()", opt: "parentheses", icon: TbParentheses, type: "utility" },
    { label: "%", opt: "percentage", icon: TbPercentage, type: "utility" },
    { label: "/", opt: "divisor", icon: TbDivide, type: "utility" },
    { label: "7", opt: "7", icon: TbNumber7, type: "number" },
    { label: "8", opt: "8", icon: TbNumber8, type: "number" },
    { label: "9", opt: "9", icon: TbNumber9, type: "number" },
    { label: "*", opt: "times", icon: LiaTimesSolid, type: "utility" },
    { label: "4", opt: "4", icon: TbNumber4, type: "number" },
    { label: "5", opt: "5", icon: TbNumber5, type: "number" },
    { label: "6", opt: "6", icon: TbNumber6, type: "number" },
    { label: "-", opt: "minus", icon: TbMinus, type: "utility" },
    { label: "1", opt: "1", icon: TbNumber1, type: "number" },
    { label: "2", opt: "2", icon: TbNumber2, type: "number" },
    { label: "3", opt: "3", icon: TbNumber3, type: "number" },
    { label: "+", opt: "plus", icon: TbPlus, type: "utility" },
    { label: "0", opt: "0", icon: TbNumber0, type: "number" },
    { label: ".", opt: "point", icon: null, type: "number" },
    { label: "Clear", opt: "clear", icon: IoIosBackspace, type: "utility__b" },
    { label: "Equals", opt: "equals", icon: TbEqual, type: "utility__c" },
];

class CalculatorFrame extends Component<{}, CalculatorFrameState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            displayValue: "0",
        };
    }

    render(): ReactNode {
        return (
            <div className="box-border flex justify-center items-center h-full w-full md:w-[60%] overflow-hidden">
                <div className="box-border flex gap-2 flex-col justify-between items-center h-[95%] w-[95%]
                rounded-customA text-white">
                    <div className="box-border flex justify-end items-center h-[20%] w-full rounded-customA 
                    bg-customColor shadow-customH p-7 text-3xl font-sans font-bold">
                        {this.state.displayValue}
                    </div>
                    <div className="box-border grid gap-2 grid-cols-4 p-2 h-[75%] w-full ">
                        {
                            calculatorOptions.map(({ opt, label, icon, type}) => {
                                let currentBg = `shadow-customH bg-customColor`

                                if(type === "utility") {
                                    currentBg = `shadow-customF bg-customColorD`
                                } else if(type === "utility__c") {
                                    currentBg = `shadow-customE bg-customColorC`
                                } else if(type === "utility__d") {
                                    currentBg = `shadow-customG bg-customColorE`
                                } else if(type === "extra") {
                                    currentBg = `shadow-customD bg-customColorB`
                                }

                                return <CalculatorOpt key={opt} label={label} icon={icon} classNames={`${currentBg} font-bold font-sans text-xl`} />
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default CalculatorFrame;
