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
        track: {
          toggle: "var(--track-toggle)",
          ascend: "var(--track-ascend)",
          leverages: "var(--track-leverages)",
        },
        white: "var(--white)",
        black: {
          100: "var(--black-100)",
          200: "var(--black-200)",
          300: "var(--black-300)",
          400: "var(--black-400)",
          500: "var(--black-500)",
          600: "var(--black-600)",
          700: "var(--black-700)",
        },
        blue: {
          purple: {
            100: "var(--blue-purple-100)",
            200: "var(--blue-purple-200)",
            300: "var(--blue-purple-300)",
            400: "var(--blue-purple-400)",
            500: "var(--blue-purple-500)",
            600: "var(--blue-purple-600)",
            700: "var(--blue-purple-700)",
          },
          light: {
            100: "var(--blue-light-100)",
            200: "var(--blue-light-200)",
            300: "var(--blue-light-300)",
            400: "var(--blue-light-400)",
            500: "var(--blue-light-500)",
            600: "var(--blue-light-600)",
            700: "var(--blue-light-700)",
          },
        },
        pink: {
          100: "var(--pink-100)",
          200: "var(--pink-200)",
          300: "var(--pink-300)",
          400: "var(--pink-400)",
          500: "var(--pink-500)",
          600: "var(--pink-600)",
          700: "var(--pink-700)",
        },
        orange: {
          100: "var(--orange-100)",
          200: "var(--orange-200)",
          300: "var(--orange-300)",
          400: "var(--orange-400)",
          500: "var(--orange-500)",
          600: "var(--orange-600)",
          700: "var(--orange-700)",
        },
        yellow: {
          100: "var(--yellow-100)",
          200: "var(--yellow-200)",
          300: "var(--yellow-300)",
          400: "var(--yellow-400)",
          500: "var(--yellow-500)",
          600: "var(--yellow-600)",
          700: "var(--yellow-700)",
        },
        red: {
          100: "var(--red-100)",
          200: "var(--red-200)",
          300: "var(--red-300)",
          400: "var(--red-400)",
          500: "var(--red-500)",
          600: "var(--red-600)",
          700: "var(--red-700)",
        },
        green: {
          100: "var(--green-100)",
          200: "var(--green-200)",
          300: "var(--green-300)",
          400: "var(--green-400)",
          500: "var(--green-500)",
          600: "var(--green-600)",
          700: "var(--green-700)",
        },
        link: {
          light: "var(--link-light)",
          dark: "var(--link-dark)",
        },
        success: {
          light: "var(--success-light)",
          dark: "var(--success-dark)",
        },
        alert: {
          light: "var(--alert-light)",
          dark: "var(--alert-dark)",
        },
        font: {
          basic: "var(--font-basic)",
          caption: "var(--font-caption)",
        },
        border: "hsl(var(--border))",

        // ティザーサイト用
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        outfit: ["var(--font-outfit)"],
        noto: ["var(--font-noto)"],
      },
      fontSize: {
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        28: "28px",
        32: "32px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
