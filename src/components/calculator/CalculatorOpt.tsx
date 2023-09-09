"user client"

import { Component, ReactNode } from "react";
import { IconType } from "react-icons";


interface CalculatorOptProps {
    icon: IconType
    label: string
    classNames: string
}

class CalculatorOpt extends Component<CalculatorOptProps> {
    constructor(props: CalculatorOptProps) {
        super(props);
    }

    render(): ReactNode {
        const { label, icon: Icon } = this.props
        return (
            <div className="box-border flex justify-center items-center h-full w-full">
                <button className={`box-border flex justify-center items-center h-full w-full 
                rounded-full hover:opacity-75 ${this.props.classNames}`}>
                    {
                        !Icon ? label : <Icon size={25} />
                    }
                </button>
            </div>
        )
    }
}

export default CalculatorOpt
