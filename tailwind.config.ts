import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                cyber: {
                    black: '#020b05', // Deep dark green-black
                    green: '#00ff41', // Matrix Green
                    cyan: '#008F11',  // Darker Matrix Green (replacing cyan)
                    dark: '#001a05'   // Dark green
                },
                impact: {
                    red: '#ff0000',   // Pure Red
                    black: '#1a0000', // Dark Red-Black
                    white: '#ffe6e6'  // Red-tinted white
                },
                flow: {
                    deep: '#00102b',  // Deep Blue
                    purple: '#0051ff', // Electric Blue (replacing purple)
                    blue: '#00a2ff'   // Light Blue
                }
            },
            fontFamily: {
                mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
                sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 12s linear infinite',
                'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'glitch': 'glitch 1s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glitch: {
                    '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
                    '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
                    '62%': { transform: 'translate(0,0) skew(5deg)' },
                }
            }
        },
    },
    plugins: [],
};
export default config;
