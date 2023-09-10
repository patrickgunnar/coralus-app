"use client";

import { Component, ReactNode } from "react";
import { IoIosBackspace } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { PiCaretUpBold, PiDotLight } from "react-icons/pi";
import { BsExclamationLg } from "react-icons/bs";
import {
    TbSquareRoot, TbMathPi, TbParentheses, TbPercentage,
    TbDivide, TbMinus, TbPlus, TbEqual, TbNumber0,
    TbNumber1, TbNumber2, TbNumber3, TbNumber4, TbNumber5,
    TbNumber6, TbNumber7, TbNumber8, TbNumber9,
} from "react-icons/tb";
import DisplayWrapper from "./Display";
import useExpression from "@/hooks/useExpression";
import { IconType } from "react-icons";
import CloseParenthesisIcon from "../icons/CloseParenthesisIcon";
import OpenParenthesisIcon from "../icons/OpenParenthesisIcon";
import CalculatorOpt from "./CalculatorOpt";


interface CalculatorProps {
    expression: IconType[];
    setExpression: (value: IconType[]) => void;
    expString: string;
    setExpString: (value: string) => void;
}

const calculatorOptions = [
    { label: "Square root", opt: "&", icon: TbSquareRoot, type: "extra" },
    { label: "PI", opt: "$", icon: TbMathPi, type: "extra" },
    { label: "x^y", opt: "^", icon: PiCaretUpBold, type: "extra" },
    { label: "!", opt: "!", icon: BsExclamationLg, type: "extra" },
    { label: "AC", opt: "AC", icon: null, type: "utility__d" },
    { label: "()", opt: "#", icon: TbParentheses, type: "utility" },
    { label: "%", opt: "%", icon: TbPercentage, type: "utility" },
    { label: "/", opt: "/", icon: TbDivide, type: "utility" },
    { label: "7", opt: "7", icon: TbNumber7, type: "number" },
    { label: "8", opt: "8", icon: TbNumber8, type: "number" },
    { label: "9", opt: "9", icon: TbNumber9, type: "number" },
    { label: "*", opt: "*", icon: LiaTimesSolid, type: "utility" },
    { label: "4", opt: "4", icon: TbNumber4, type: "number" },
    { label: "5", opt: "5", icon: TbNumber5, type: "number" },
    { label: "6", opt: "6", icon: TbNumber6, type: "number" },
    { label: "-", opt: "-", icon: TbMinus, type: "utility" },
    { label: "1", opt: "1", icon: TbNumber1, type: "number" },
    { label: "2", opt: "2", icon: TbNumber2, type: "number" },
    { label: "3", opt: "3", icon: TbNumber3, type: "number" },
    { label: "+", opt: "+", icon: TbPlus, type: "utility" },
    { label: "0", opt: "0", icon: TbNumber0, type: "number" },
    { label: ".", opt: ".", icon: PiDotLight, type: "number" },
    { label: "Delete", opt: "del", icon: IoIosBackspace, type: "utility__b" },
    { label: "Equals", opt: "=", icon: TbEqual, type: "utility__c" },
];

const KeyMappings: Record<string, { option: string; value: IconType | null }> =
    {
        "^": { option: "^", value: PiCaretUpBold },
        "!": { option: "!", value: BsExclamationLg },
        "(": { option: "#", value: TbParentheses },
        ")": { option: "#", value: TbParentheses },
        "%": { option: "%", value: TbPercentage },
        "/": { option: "/", value: TbDivide },
        "7": { option: "7", value: TbNumber7 },
        "8": { option: "8", value: TbNumber8 },
        "9": { option: "9", value: TbNumber9 },
        "*": { option: "*", value: LiaTimesSolid },
        "4": { option: "4", value: TbNumber4 },
        "5": { option: "5", value: TbNumber5 },
        "6": { option: "6", value: TbNumber6 },
        "-": { option: "-", value: TbMinus },
        "1": { option: "1", value: TbNumber1 },
        "2": { option: "2", value: TbNumber2 },
        "3": { option: "3", value: TbNumber3 },
        "+": { option: "+", value: TbPlus },
        "0": { option: "0", value: TbNumber0 },
        ".": { option: ".", value: PiDotLight },
        Backspace: { option: "del", value: IoIosBackspace },
        "=": { option: "=", value: TbEqual },
        Delete: { option: "AC", value: null },
    };

class Calculator extends Component<CalculatorProps> {
    constructor(props: CalculatorProps) {
        super(props);
        this.handleExpression = this.handleExpression.bind(this);
    }

    updateExpressionAndString = (
        newExpression: IconType[],
        newExpString: string
    ) => {
        const { setExpression, setExpString } = this.props;

        setExpression(newExpression);
        setExpString(newExpString);
    };

    handleExpression(option: string, value: IconType | null) {
        const { expression, expString } = this.props;

        if (option === "AC") {
            this.updateExpressionAndString([], "");
        } else if (option === "del") {
            if (expression.length > 0 && expString.length > 0) {
                this.updateExpressionAndString(
                    expression.slice(0, -1),
                    expString.slice(0, -1)
                );
            }
        } else if (option === "=") {
            // result
        } else if (option === "#") {
            if (expString.length > 20) return;

            // get the number of "(" or ")" parenthesis is in the expression
            const openLength = expString
                .split("")
                .filter((item) => item.trim() === "(").length;
            const closeLength = expString
                .split("")
                .filter((item) => item.trim() === ")").length;

            // get the remaining value
            const remainParenthesis = openLength - closeLength;
            // check if the last value is a number or if it's closing parenthesis
            const lastChar = expString.charAt(expString.length - 1);
            const isNumberOrClose =
                !isNaN(parseInt(lastChar, 10)) || lastChar === ")";

            // if remaining is different than 0 && the last value is a number or it's closing parenthesis
            // set the isCloseOrOpen to true, else set to false
            const isCloseOrOpen = remainParenthesis !== 0 && isNumberOrClose;
            const currentParenthesis = isCloseOrOpen
                ? CloseParenthesisIcon
                : OpenParenthesisIcon;
            const strParenthesis = isCloseOrOpen ? ")" : "(";

            this.updateExpressionAndString(
                [...expression, currentParenthesis],
                expString + strParenthesis
            );
        } else {
            if (expString.length > 20 || !value) return;

            this.updateExpressionAndString(
                [...expression, value],
                expString + option
            );
        }
    }

    onKeyPressHandler = (event: KeyboardEvent) => {
        const key = event.key;
        const mapping = KeyMappings[key];

        if (mapping) {
            this.handleExpression(mapping.option, mapping.value);
        } else {
            return;
        }
    };

    componentDidMount(): void {
        document.addEventListener("keydown", this.onKeyPressHandler);
    }

    componentWillUnmount(): void {
        document.removeEventListener("keydown", this.onKeyPressHandler);
    }

    render(): ReactNode {
        return (
            <div className="box-border flex justify-center items-center h-full w-full md:w-[60%] overflow-hidden">
                <div
                    className="box-border flex gap-2 flex-col justify-between items-center h-[95%] w-[95%]
                rounded-customA text-white"
                >
                    <DisplayWrapper />
                    <div className="box-border grid gap-2 grid-cols-4 p-2 h-[75%] w-full ">
                        {calculatorOptions.map(({ opt, label, icon, type }) => {
                            let currentBg = `shadow-customH bg-customColor`;

                            if (type === "utility") {
                                currentBg = `shadow-customF bg-customColorD`;
                            } else if (type === "utility__c") {
                                currentBg = `shadow-customE bg-customColorC`;
                            } else if (type === "utility__d") {
                                currentBg = `shadow-customG bg-customColorE`;
                            } else if (type === "extra") {
                                currentBg = `shadow-customD bg-customColorB`;
                            }

                            return (
                                <CalculatorOpt
                                    key={opt}
                                    label={label}
                                    opt={opt}
                                    icon={icon}
                                    onClickHandler={this.handleExpression}
                                    classNames={`${currentBg} font-bold font-sans text-xl`}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

const CalculatorWrapper = () => {
    const { expression, setExpression, expString, setExpString } = useExpression();

    return (
        <Calculator
            expression={expression}
            expString={expString}
            setExpression={setExpression}
            setExpString={setExpString}
        />
    );
};

export default CalculatorWrapper;
