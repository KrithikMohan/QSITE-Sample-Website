import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: "#030712",
          900: "#020617",
          850: "#0b1226",
          800: "#0f172a",
        },
        quantum: {
          cyan: "#22d3ee",
          purple: "#a855f7",
          blue: "#38bdf8",
          pink: "#f472b6",
        },
      },
      backgroundImage: {
        "quantum-radial": "radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.15), transparent 70%)",
        "quantum-purple-radial": "radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15), transparent 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
