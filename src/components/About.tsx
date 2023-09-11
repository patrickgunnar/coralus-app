"use client";

import { Component, ReactNode } from "react";
import Modal from "./Modal";

class About extends Component {
    render(): ReactNode {
        return (
            <Modal>
                <div className="flex flex-col gap-4 justify-center items-start text-base text-gray-200 font-medium font-sans h-[50%] w-full 
                overflow-hidden overflow-y-auto">
                    <h2 className="flex justify-center items-center text-xl font-bold mb-6 h-fit w-full">
                        Introducing Coralus: Your Intelligent Calculator
                    </h2>
                    <p className="flex justify-center items-center h-fit w-full">
                        Welcome to Coralus, a dazzling digital calculator born
                        from the fusion of cutting-edge technologies and a
                        sprinkle of mystique. Crafted with precision and
                        elegance, Coralus is more than just a calculator;
                        it&apos;s a glimpse into the future of computation.
                    </p>
                    <ul className="flex flex-col list-inside gap-2 p-4 h-fit">
                        <li className="list-disc">
                            <strong>Powered by Next.js:</strong> Coralus
                            harnesses the magic of Next.js, the framework that
                            blurs the line between web and wizardry. Its
                            server-side rendering ensures lightning-fast
                            performance, delivering results before you can say
                            &quot;abracadabra&quot;.
                        </li>
                        <li className="list-disc">
                            <strong>React.js with Class Components:</strong>{" "}
                            Coralus dances with React.js, embracing class
                            components to bring an air of sophistication to your
                            calculations. Every button press is an act of grace,
                            thanks to React&apos;s unparalleled rendering
                            prowess.
                        </li>
                        <li className="list-disc">
                            <strong>TypeScript Brilliance:</strong> Underneath
                            its elegant exterior lies the brain of a true
                            scholar - TypeScript. Coralus employs static typing
                            to ensure that your mathematical expressions are as
                            precise as a theorem.
                        </li>
                        <li className="list-disc">
                            <strong>Tailwind CSS Styling:</strong> Immerse
                            yourself in Coralus&apos;s visual symphony,
                            choreographed by Tailwind CSS. Every pixel is in its
                            place, every color harmonizes with the next - a true
                            masterpiece of design.
                        </li>
                        <li className="list-disc">
                            <strong>Mathematical Sorcery:</strong> Coralus
                            isn&apos;t just about addition and subtraction;
                            it&apos;s a mathematician&apos;s dream. From basic
                            arithmetic to complex algebra, it handles equations
                            with the finesse of a virtuoso.
                        </li>
                        <li className="list-disc">
                            <strong>Intuitive UI/UX:</strong> Experience the
                            enigmatic allure of Coralus&apos;s user interface.
                            Its interface is not just functional; it&apos;s
                            elegantly spellbinding, designed to captivate and
                            mesmerize. Coralus isn&apos;t just a calculator;
                            it&apos;s a glimpse into the future of computation.
                            It&apos;s the embodiment of precision, creativity,
                            and intelligence, all wrapped up in an elegant
                            digital experience.
                        </li>
                    </ul>
                    <p className="flex justify-center items-center h-fit w-full">
                        Step into the world of Coralus and experience the future
                        of calculation. It&apos;s not just a calculator;
                        it&apos;s a work of art, a masterpiece of technology,
                        and a testament to your web development prowess. Dive in
                        and let the magic of Coralus enchant your mathematical
                        world.
                    </p>
                </div>
            </Modal>
        );
    }
}

export default About;
