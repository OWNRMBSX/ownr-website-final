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
        navy: {
          DEFAULT: "#1B3142",
          dark: "#0f2130",
          light: "#243d51",
          lighter: "#2d4a60",
        },
        teal: {
          DEFAULT: "#347D87",
          dark: "#2a6670",
          light: "#3e919c",
          lighter: "#4ba5b1",
          pale: "#e8f4f6",
        },
        red: {
          DEFAULT: "#D0202F",
          dark: "#b01a27",
          light: "#e0343f",
        },
        slate: {
          50: "#f8fafb",
          100: "#f2f2f2",
          200: "#e8e8e8",
          300: "#d8d8d8",
          400: "#bfbfbf",
          500: "#7f7f7f",
          600: "#3c3c3c",
          700: "#262626",
          800: "#1a1a1a",
          900: "#0f0f0f",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(135deg, #1B3142 0%, #347D87 100%)",
        "gradient-navy-r": "linear-gradient(135deg, #347D87 0%, #1B3142 100%)",
        "gradient-hero":
          "linear-gradient(180deg, #1B3142 0%, #0f2130 60%, #1B3142 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
