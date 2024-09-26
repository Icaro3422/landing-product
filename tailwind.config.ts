import type { Config } from "tailwindcss";
import { addDynamicIconSelectors } from "@iconify/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainGreen: "#99b9a7",
        accent: "#faedcd",
        accentShadow: "#FDFFF1",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
export default config;
