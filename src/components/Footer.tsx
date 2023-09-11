"use client";

import useAboutModal from "@/hooks/useAboutModal";
import { Component, ReactNode } from "react";
import { BsInfoCircleFill } from "react-icons/bs";

interface FooterProps {
    setIsOpened: () => void;
}

class FooterContent extends Component<FooterProps> {
    constructor(props: FooterProps) {
        super(props);
    }

    render(): ReactNode {
        const { setIsOpened } = this.props;

        return (
            <footer className="box-border flex gap-6 justify-between items-center p-1 h-full w-full text-[0.7rem] font-semibold uppercase">
                <a
                    className="relative truncate cursor-pointer font-sans w-[80%]"
                    href="https://patrickgunnar.vercel.app/"
                    target="_blank"
                >
                    © Patrick Gunnar - All Rights Reserved
                </a>
                <button
                    className="box-border flex justify-center items-center h-fit w-fit"
                    onClick={setIsOpened}
                >
                    <BsInfoCircleFill size={22} />
                </button>
            </footer>
        );
    }
}

const Footer = () => {
    const { setIsOpened } = useAboutModal()

    return <FooterContent setIsOpened={setIsOpened} />;
};

export default Footer;
