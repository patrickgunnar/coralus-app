import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
				customLinearGradient: `linear-gradient(transparent 50%, var(--colour-004) 0),
				conic-gradient(var(--degrees) 90%, var(--colour-002) 240deg, transparent 0),
				conic-gradient(var(--degrees) 75%, var(--colour-001) 240deg, transparent 0),
				conic-gradient(var(--degrees) 25%, transparent 240deg, var(--colour-002) 0),
				conic-gradient(var(--degrees) 40%, var(--colour-002) 240deg, var(--colour-003) 0)`
            },
			backgroundColor: {
				customColor: "var(--colour-007)",
				customColorB: "var(--colour-005)",
				customColorC: "var(--colour-017)",
				customColorD: "var(--colour-001)",
				customColorE: "var(--colour-018)"
			},
            backgroundSize: {
                customSize: "calc(1.5 * var(--size)) var(--size)",
            },
			boxShadow: {
				customA: "inset 17px 17px 34px var(--colour-005), inset -17px -17px 34px var(--colour-006)",
				customB: "2px 2px 4px var(--colour-005), -2px -2px 4px var(--colour-006)",
				customC: "inset 15px 15px 30px var(--colour-009), inset -15px -15px 30px var(--colour-010)",
				customD: "inset -15px 15px 30px var(--colour-011), inset 15px -15px 30px var(--colour-012)",
				customE: "inset -15px 15px 30px var(--colour-013), inset 15px -15px 30px var(--colour-014)",
				customF: "inset -15px 15px 30px var(--colour-015), inset 15px -15px 30px var(--colour-016)",
				customG: "inset -15px 15px 30px var(--colour-019), inset 15px -15px 30px var(--colour-020)",
				customH: "inset -15px 15px 30px var(--colour-021), inset 15px -15px 30px var(--colour-022)"
			},
			borderRadius: {
				customA: "20px"
			},
			fontFamily: {
				header: ['Teko', 'sans-serif'],
			}
        },
    },
    plugins: [],
};
export default config;
