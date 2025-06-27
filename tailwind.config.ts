import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        fluid: "clamp(1rem, 2.5vw, 1.5rem)",
        "fluid-lg": "clamp(2.5rem, 5vw, 4.5rem)",
        "fluid-xl": "clamp(3rem, 7vw, 6.5rem)",
        "fluid-xs": "clamp(0.7rem, 1.5vw, 0.875rem)",
      },
      screens: {
        'xxs': '390px',
        'xs': '430px',
        '1xl': '1440px',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".stroke-dash-1": { "stroke-dasharray": "1" },
        ".stroke-dash-2": { "stroke-dasharray": "2" },
        ".stroke-dash-4": { "stroke-dasharray": "4" },
        ".stroke-dash-8": { "stroke-dasharray": "8" },
        ".stroke-dash-12": { "stroke-dasharray": "12" },
        ".stroke-dash-16": { "stroke-dasharray": "16" },
      };
      addUtilities(newUtilities, ["responsive"]);
    },
    plugin(function ({ addVariant }) {
      addVariant(
        'custom1xl',
        '@media (min-width: 1440px) and (min-height: 900px)'
      );
      addVariant(
        'custom2xlipad',
        '@media (min-width: 1024px) and (min-height: 1200px)'
      );
    }),
  ],
};
export default config;
