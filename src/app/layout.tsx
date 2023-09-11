import About from "@/components/About";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Coralus Calculator",
    description: "Where Numbers Dance with Mystique.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="box-border flex justify-center items-center h-full w-full">
            <body className={`${inter.className} box-border relative flex justify-center items-center h-full w-full bg-customSize bg-customLinearGradient`}>
				{children}
                <About />
                <div className="box-border absolute flex md:hidden justify-center items-center h-[1.95rem] w-full bottom-0 
                text-white bg-[var(--colour-009)]">
                    <Footer />
                </div>
			</body>
        </html>
    );
}
