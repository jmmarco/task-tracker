/** @type {import('tailwindcss').Config} */

const lodgify = {
  gray: {
    50: "#DDDDDD",
    100: "#CCCCCC",
    200: "#E5E5E5",
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
  plugins: [],
};
