/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: "var(--color-text)"
        },
        background: {
          DEFAULT: "var(--color-background)"
        },
        button: {
          DEFAULT: "var(--color-button)"
        },
        links: {
          DEFAULT: "var(--color-links)"
        },
        accent: {
          DEFAULT: "var(--color-accent)"
        },
        lightgrey: {
          DEFAULT: "var(--color-lightgrey)"
        },
        darkgrey: {
          DEFAULT: "var(--color-darkgrey)"
        },
        alarm: {
          DEFAULT: "var(--color-alarm)"
        },
      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
