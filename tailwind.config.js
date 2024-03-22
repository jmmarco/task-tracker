import formsPlugin from "@tailwindcss/forms";
/** @type {import('tailwindcss').Config} */

const lodgify = {
  gray: {
    50: "#EEEEEE",
    100: "#CCCCCC",
    200: "#E5E5E5",
    300: "#999999",
  },
  green: {
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
