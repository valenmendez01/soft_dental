/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

const labelsClasses = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
];

export default {
  purge: {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    safelist: [
      ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
      ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
      ...labelsClasses.map((lbl) => `text-${lbl}-400`)
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans"]
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr"
      },
      colors: {
        'custom-blue': '#001529',
      }
    },
  },
  variants: {
    extend: {},
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/forms"), nextui()]
}