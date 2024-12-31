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
        white: "hsl(var(--white))",
        black: {
          100: "hsl(var(--black-100))",
          200: "hsl(var(--black-200))",
          300: "hsl(var(--black-300))",
          400: "hsl(var(--black-400))",
          500: "hsl(var(--black-500))",
          600: "hsl(var(--black-600))",
          700: "hsl(var(--black-700))",
        },
        blue: {
          purple: {
            100: "hsl(var(--blue-purple-100))",
            200: "hsl(var(--blue-purple-200))",
            300: "hsl(var(--blue-purple-300))",
            400: "hsl(var(--blue-purple-400))",
            500: "hsl(var(--blue-purple-500))",
            600: "hsl(var(--blue-purple-600))",
            700: "hsl(var(--blue-purple-700))",
          },
          light: {
            100: "hsl(var(--blue-light-100))",
            200: "hsl(var(--blue-light-200))",
            300: "hsl(var(--blue-light-300))",
            400: "hsl(var(--blue-light-400))",
            500: "hsl(var(--blue-light-500))",
            600: "hsl(var(--blue-light-600))",
            700: "hsl(var(--blue-light-700))",
          },
        },
        pink: {
          100: "hsl(var(--pink-100))",
          200: "hsl(var(--pink-200))",
          300: "hsl(var(--pink-300))",
          400: "hsl(var(--pink-400))",
          500: "hsl(var(--pink-500))",
          600: "hsl(var(--pink-600))",
          700: "hsl(var(--pink-700))",
        },
        orange: {
          100: "hsl(var(--orange-100))",
          200: "hsl(var(--orange-200))",
          300: "hsl(var(--orange-300))",
          400: "hsl(var(--orange-400))",
          500: "hsl(var(--orange-500))",
          600: "hsl(var(--orange-600))",
          700: "hsl(var(--orange-700))",
        },
        yellow: {
          100: "hsl(var(--yellow-100))",
          200: "hsl(var(--yellow-200))",
          300: "hsl(var(--yellow-300))",
          400: "hsl(var(--yellow-400))",
          500: "hsl(var(--yellow-500))",
          600: "hsl(var(--yellow-600))",
          700: "hsl(var(--yellow-700))",
        },
        red: {
          100: "hsl(var(--red-100))",
          200: "hsl(var(--red-200))",
          300: "hsl(var(--red-300))",
          400: "hsl(var(--red-400))",
          500: "hsl(var(--red-500))",
          600: "hsl(var(--red-600))",
          700: "hsl(var(--red-700))",
        },
        green: {
          100: "hsl(var(--green-100))",
          200: "hsl(var(--green-200))",
          300: "hsl(var(--green-300))",
          400: "hsl(var(--green-400))",
          500: "hsl(var(--green-500))",
          600: "hsl(var(--green-600))",
          700: "hsl(var(--green-700))",
        },
        link: {
          light: "hsl(var(--link-light))",
          dark: "hsl(var(--link-dark))",
        },
        success: {
          light: "hsl(var(--success-light))",
          dark: "hsl(var(--success-dark))",
        },
        alert: {
          light: "hsl(var(--alert-light))",
          dark: "hsl(var(--alert-dark))",
        },
        font: {
          basic: "hsl(var(--font-basic))",
          caption: "hsl(var(--font-caption))",
        },
        border: "hsl(var(--border))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
