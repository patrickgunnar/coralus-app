"user client";

import { Component, ReactNode } from "react";
import { IconType } from "react-icons";


interface CalculationWrapperProps {
    icon: IconType;
    label: string;
    opt: string;
    classNames: string;
    onClickHandler: (opt: string, icon: IconType) => void;
}

class CalculatorOpt extends Component<CalculationWrapperProps> {
    constructor(props: CalculationWrapperProps) {
        super(props);
    }

    render(): ReactNode {
        const { label, opt, icon: Icon, onClickHandler } = this.props;

        return (
            <div className="box-border flex justify-center items-center h-full w-full">
                <button
                    className={`box-border flex justify-center items-center h-full w-full 
                rounded-full hover:opacity-75 ${this.props.classNames}`}
                    onClick={() => onClickHandler(opt, Icon)}
                >
                    {!Icon ? label : <Icon size={25} />}
                </button>
            </div>
        );
    }
}

export default CalculatorOpt;
