import formsPlugin from "@tailwindcss/forms";
/** @type {import('tailwindcss').Config} */

const lodgify = {
  black: "#333333",
  gray: {
    50: "#EEEEEE",
    100: "#CCCCCC",
    200: "#E5E5E5",
    300: "#999999",
  },
  green: {
    50: "#E6FDF9",
    400: "#02BC9C",
  },
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lodgify,
      },
    },
  },
  plugins: [formsPlugin],
};
