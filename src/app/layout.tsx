import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
            <body className={`${inter.className} box-border flex justify-center items-center h-full w-full bg-customSize bg-customLinearGradient`}>
				{children}
			</body>
        </html>
    );
}
