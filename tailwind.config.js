/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        small: { min: "0px", max: "359px" },
        support: { min: "360px" },
        xsm: { min: "360px", max: "639px" },
      },
    },
  },
  plugins: [],
};
