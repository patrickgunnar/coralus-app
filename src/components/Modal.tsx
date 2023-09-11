"use client";

import useAboutModal from "@/hooks/useAboutModal";
import { Component, ReactNode } from "react";
import { AiFillCloseCircle } from "react-icons/ai";


interface ModalProps {
    children: ReactNode;
}

interface ModalContentProps extends ModalProps {
    isOpened: boolean;
    setIsOpened: () => void;
}

class ModalContent extends Component<ModalContentProps> {
    constructor(props: ModalContentProps) {
        super(props);
    }

    render(): ReactNode {
        const { children, isOpened, setIsOpened } = this.props;

        if (!isOpened) return null;

        return (
            <div className="box-border absolute flex justify-center items-center h-full w-full">
                <div className="h-full w-full bg-[var(--colour-004)]" onClick={setIsOpened} />
                <div className="box-border absolute flex flex-col justify-center items-center p-12 h-fit max-h-[85%] w-[50%] shadow-customH 
                bg-customColor rounded-customA">
                    <div className="flex justify-end items-center mb-6 h-fit w-full">
                        <button className="flex justify-center items-center] text-white h-fit w-fit" onClick={setIsOpened}>
                            <AiFillCloseCircle size={30} />
                        </button>
                    </div>
                    <div className="box-border flex justify-center items-start h-fit max-h-[85%] w-full overflow-hidden overflow-y-auto">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

const Modal: React.FC<ModalProps> = ({ children }) => {
    const { isOpened, setIsOpened } = useAboutModal();

    return (
        <ModalContent isOpened={isOpened} setIsOpened={setIsOpened}>
            {children}
        </ModalContent>
    );
};

export default Modal;
